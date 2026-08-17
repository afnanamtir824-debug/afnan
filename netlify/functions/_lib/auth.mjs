// ==========================================
// وحدة مشتركة للمصادقة والصلاحيات من طرف السيرفر
// اسم المجلد يبدأ بـ "_" فلا يعامله Netlify كـ endpoint مستقل، فقط module يُستورد.
// ==========================================
import crypto from "node:crypto";

// AUTH_SECRET: متغيّر بيئة سرّي يُضبط في Netlify (Site settings > Environment variables).
// لو لم يُضبط، نستخدم قيمة افتراضية للتطوير المحلي فقط ونطبع تحذير - يجب ضبط قيمة
// حقيقية طويلة وعشوائية في بيئة الإنتاج وإلا يمكن تزوير التوكنات.
const AUTH_SECRET = process.env.AUTH_SECRET || "DEV-ONLY-INSECURE-SECRET-CHANGE-ME";
if (!process.env.AUTH_SECRET) {
  console.warn("⚠️ AUTH_SECRET غير مضبوط في متغيرات البيئة - يجب ضبطه في بيئة الإنتاج!");
}

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 ساعة

// -------- تشفير كلمات المرور (scrypt) --------
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(String(password), salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  if (!stored || !stored.includes(":")) return false;
  const [salt, hash] = stored.split(":");
  const attempted = crypto.scryptSync(String(password), salt, 64).toString("hex");
  const a = Buffer.from(hash, "hex");
  const b = Buffer.from(attempted, "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// -------- توكنات موقّعة (HMAC-SHA256) بدون الحاجة لمكتبة jwt خارجية --------
function base64url(input) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64urlDecode(input) {
  input = input.replace(/-/g, "+").replace(/_/g, "/");
  while (input.length % 4) input += "=";
  return Buffer.from(input, "base64").toString("utf8");
}

export function signToken(payload) {
  const body = { ...payload, exp: Date.now() + TOKEN_TTL_MS };
  const encoded = base64url(JSON.stringify(body));
  const signature = crypto.createHmac("sha256", AUTH_SECRET).update(encoded).digest("hex");
  return `${encoded}.${signature}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [encoded, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", AUTH_SECRET).update(encoded).digest("hex");
  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try {
    payload = JSON.parse(base64urlDecode(encoded));
  } catch (e) {
    return null;
  }
  if (!payload.exp || Date.now() > payload.exp) return null;
  return payload;
}

// -------- استخراج المستخدم المُصادَق عليه من الطلب --------
export function getAuthUser(req) {
  const header = req.headers.get("authorization") || req.headers.get("Authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) return null;
  const payload = verifyToken(match[1]);
  if (!payload || !payload.sub) return null;
  return {
    id: payload.sub,
    username: payload.username,
    name: payload.name,
    role: payload.role,
    teamId: payload.teamId || null,
  };
}

export function unauthorizedResponse(message = "غير مصرّح - يرجى تسجيل الدخول") {
  return new Response(JSON.stringify({ error: message }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

export function forbiddenResponse(message = "لا تملك صلاحية تنفيذ هذا الإجراء") {
  return new Response(JSON.stringify({ error: message }), {
    status: 403,
    headers: { "Content-Type": "application/json" },
  });
}

// ==========================================
// مصفوفة الصلاحيات المركزية من طرف السيرفر (مصدر الحقيقة الوحيد للأمان).
// نسخة العميل (app.js: hasPermission) تعكس نفس المنطق لأغراض العرض فقط،
// لكن أي فحص هنا هو الذي يُطبَّق فعليًا ولا يمكن تجاوزه من المتصفح.
// ==========================================
export const ROLES = ["admin", "supervisor", "technician"];

export function canManageUsers(user) {
  return !!user && user.role === "admin";
}

// هل يقدر المستخدم يشوف/يدير مستخدم آخر (لعرض قائمة الفريق مثلاً)؟
export function canViewUser(actor, targetUser) {
  if (!actor) return false;
  if (actor.role === "admin") return true;
  if (actor.role === "supervisor") return targetUser.team_id === actor.teamId;
  return actor.id === targetUser.id;
}

// فلترة أوامر الشغل حسب الدور - تُستخدم في sync-pull
export function workOrderVisibilitySQLCondition(user) {
  // يُرجع { clause, params } لتستخدم في db.sql (نستخدمها كنص شرط فقط، الفلترة الفعلية
  // تتم في sync-pull.mjs عبر استعلامات منفصلة لكل دور تفاديًا لخطر SQL injection).
  return user.role; // مجرد مؤشر، المنطق الفعلي في sync-pull.mjs
}

// هل يقدر المستخدم ينفّذ action معيّن على أمر شغل معيّن (order)؟
// order: { assignedTo, teamId } - القيم القادمة من قاعدة البيانات
// targetTeamId: team_id بتاع الفني المستهدف عند CREATE/TRANSFER (لتحديد فريق الوجهة)
export function canActOnOrder(user, action, order, extra = {}) {
  if (!user) return false;

  if (user.role === "admin") return true;

  if (user.role === "supervisor") {
    switch (action) {
      case "CREATE":
        // المشرف يوزّع مهام فقط على فنيي فريقه
        return extra.targetTeamId === user.teamId;
      case "TRANSFER":
        // المصدر والوجهة لازم يكونوا ضمن فريقه
        return order.teamId === user.teamId && extra.targetTeamId === user.teamId;
      case "UPDATE_TICKET":
        return order.teamId === user.teamId;
      case "DELETE":
        // الحذف صلاحية حساسة (تأثير على تقارير/بيانات) - للمدير فقط
        return false;
      default:
        return false;
    }
  }

  if (user.role === "technician") {
    switch (action) {
      case "UPDATE_TICKET":
        // الفني يحدّث فقط تذاكره الخاصة. == ملاحظة == المطابقة بالاسم الظاهر (name)
        // وليس username، لأن هذا هو الحقل الذي يستخدمه assigned_to (راجع sync-pull.mjs).
        return order.assignedTo === user.name;
      case "CREATE":
      case "TRANSFER":
      case "DELETE":
        return false;
      default:
        return false;
    }
  }

  return false;
}
