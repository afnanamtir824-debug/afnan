// ترحيل لمرة واحدة فقط: ينقل المستخدمين المخزّنين محلياً (localStorage) في كل جهاز
// إلى قاعدة البيانات المركزية أول مرة يفتح فيها أي جهاز التطبيق بعد هذا التحديث.
//
// الحماية: هذه الدالة لا تعمل إطلاقاً إلا إذا كان جدول users فارغاً تماماً (COUNT = 0).
// بعد أول عملية ترحيل ناجحة، الجدول لم يعد فارغاً، فتُرفض أي محاولة لاحقة تلقائياً
// (حتى لو حاول شخص استدعاء هذا الـ endpoint مباشرة) - فهي بوابة تعمل مرة واحدة فقط
// في عمر المشروع، وليست ثغرة دائمة لإنشاء مستخدمين بلا مصادقة.
//
// role: 'manager' -> 'admin', 'employee' -> 'technician' (توافق مع الأدوار الجديدة).
import { getDatabase } from "@netlify/database";
import { hashPassword } from "./_lib/auth.mjs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const db = getDatabase();

  try {
    const countRows = await db.sql`SELECT COUNT(*)::int AS c FROM users`;
    if (countRows[0].c > 0) {
      return new Response(
        JSON.stringify({ migrated: false, reason: "الترحيل تم مسبقاً - جدول المستخدمين ليس فارغاً" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch (e) {
      body = {};
    }
    const localUsers = Array.isArray(body.users) ? body.users : [];

    if (localUsers.length === 0) {
      // ما في مستخدمين محليين لترحيلهم - أنشئ حساب admin افتراضي فقط حتى لا يبقى
      // النظام بلا أي مستخدم يقدر يسجّل دخول.
      const defaultId = "u-admin";
      await db.sql`
        INSERT INTO users (id, username, password_hash, name, role, team_id, location, status, active, created_at)
        VALUES (${defaultId}, 'admin', ${hashPassword("admin123")}, 'مدير النظام', 'admin', NULL, '—', 'active', TRUE, ${Date.now()})
        ON CONFLICT (id) DO NOTHING
      `;
      return new Response(JSON.stringify({ migrated: true, count: 1, note: "تم إنشاء حساب admin افتراضي" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    let migrated = 0;
    for (const u of localUsers) {
      if (!u || !u.username || !u.password || !u.id) continue;
      const newRole = u.role === "manager" ? "admin" : u.role === "employee" ? "technician" : (u.role || "technician");
      await db.sql`
        INSERT INTO users (id, username, password_hash, name, role, team_id, location, status, active, created_at)
        VALUES (
          ${u.id}, ${u.username}, ${hashPassword(u.password)}, ${u.name || u.username},
          ${newRole}, ${u.teamId || null}, ${u.location || null}, ${u.status || "off"}, TRUE,
          ${u.updatedAt || Date.now()}
        )
        ON CONFLICT (id) DO NOTHING
      `;
      migrated++;
    }

    return new Response(JSON.stringify({ migrated: true, count: migrated }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("migrate-local-users error:", err);
    return new Response(JSON.stringify({ error: "فشل الترحيل" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
