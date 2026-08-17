// إدارة المستخدمين من طرف السيرفر.
// GET: admin يشوف كل المستخدمين، supervisor يشوف فقط فنيي فريقه (قراءة فقط)، technician ممنوع.
// POST/PUT/DELETE: admin فقط (إدارة المستخدمين وتحديد الأدوار حساسة ولا تُمنح لغيره).
import { getDatabase } from "@netlify/database";
import crypto from "node:crypto";
import { getAuthUser, unauthorizedResponse, forbiddenResponse, hashPassword } from "./_lib/auth.mjs";

function toPublicUser(r) {
  return {
    id: r.id,
    username: r.username,
    name: r.name,
    role: r.role,
    teamId: r.team_id,
    location: r.location,
    status: r.status,
    lat: r.lat,
    lng: r.lng,
    tasksCount: r.tasks_count,
    active: r.active,
    updatedAt: r.updated_at,
  };
}

export default async (req) => {
  const user = getAuthUser(req);
  if (!user) return unauthorizedResponse();

  const db = getDatabase();

  if (req.method === "GET") {
    if (user.role === "admin") {
      const rows = await db.sql`SELECT * FROM users ORDER BY created_at ASC`;
      return new Response(JSON.stringify(rows.map(toPublicUser)), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (user.role === "supervisor") {
      const rows = await db.sql`
        SELECT * FROM users WHERE team_id = ${user.teamId} AND role = 'technician' ORDER BY created_at ASC
      `;
      return new Response(JSON.stringify(rows.map(toPublicUser)), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return forbiddenResponse();
  }

  // -------- تحديث ذاتي مسموح لأي دور: كل مستخدم يقدر يحدّث حالته/موقعه/عدد مهامه
  // الخاصة به فقط (لواجهة الفني: تحديد الحالة + مشاركة الموقع اللحظي). لا يقدر أي
  // مستخدم غير admin تغيير role/team/username/password أو تعديل مستخدم آخر غيره.
  if (req.method === "PUT" && user.role !== "admin") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
    }
    if (body.id !== user.id) return forbiddenResponse("يمكنك تعديل بياناتك الخاصة فقط");
    const disallowedKeys = ["role", "teamId", "username", "password", "active"];
    if (disallowedKeys.some((k) => body[k] !== undefined)) {
      return forbiddenResponse("لا يمكنك تعديل هذه الحقول");
    }
    const { status, lat, lng, tasksCount, location } = body;
    await db.sql`
      UPDATE users SET
        status = COALESCE(${status || null}, status),
        lat = COALESCE(${typeof lat === "number" ? lat : null}, lat),
        lng = COALESCE(${typeof lng === "number" ? lng : null}, lng),
        tasks_count = COALESCE(${typeof tasksCount === "number" ? tasksCount : null}, tasks_count),
        location = COALESCE(${location || null}, location),
        updated_at = now()
      WHERE id = ${user.id}
    `;
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // إنشاء/تعديل (كامل)/حذف مستخدمين: admin فقط
  if (user.role !== "admin") return forbiddenResponse("إدارة المستخدمين متاحة للمدير فقط");

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
    }
    const { username, password, name, role, teamId, location } = body;
    if (!username || !password || !name || !role) {
      return new Response(JSON.stringify({ error: "بيانات ناقصة" }), { status: 400 });
    }
    if (!["admin", "supervisor", "technician"].includes(role)) {
      return new Response(JSON.stringify({ error: "دور غير صالح" }), { status: 400 });
    }
    if ((role === "supervisor" || role === "technician") && !teamId) {
      return new Response(JSON.stringify({ error: "يجب تحديد team_id لهذا الدور" }), { status: 400 });
    }
    const id = "u-" + crypto.randomUUID().slice(0, 8);
    try {
      await db.sql`
        INSERT INTO users (id, username, password_hash, name, role, team_id, location, status, active, created_at)
        VALUES (${id}, ${username}, ${hashPassword(password)}, ${name}, ${role}, ${teamId || null}, ${location || null}, 'off', TRUE, ${Date.now()})
      `;
      return new Response(JSON.stringify({ ok: true, id }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      if (String(err.message || "").includes("duplicate") || String(err.message || "").includes("unique")) {
        return new Response(JSON.stringify({ error: "اسم المستخدم مستخدم مسبقاً" }), { status: 409 });
      }
      console.error("users-admin create error:", err);
      return new Response(JSON.stringify({ error: "فشل إنشاء المستخدم" }), { status: 500 });
    }
  }

  if (req.method === "PUT") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
    }
    const { id, name, role, teamId, location, status, active, password } = body;
    if (!id) return new Response(JSON.stringify({ error: "id مطلوب" }), { status: 400 });

    try {
      if (password) {
        await db.sql`UPDATE users SET password_hash = ${hashPassword(password)}, updated_at = now() WHERE id = ${id}`;
      }
      // ملاحظة: لتفريغ team_id تمامًا (مثلاً عند ترقية مشرف إلى admin) مرّر teamId: "CLEAR"
      // من الواجهة - أي قيمة أخرى (بما فيها عدم الإرسال) تُبقي القيمة الحالية كما هي.
      const teamIdValue = teamId === "CLEAR" ? null : teamId || null;
      const teamIdProvided = teamId !== undefined;
      await db.sql`
        UPDATE users SET
          name = COALESCE(${name || null}, name),
          role = COALESCE(${role || null}, role),
          team_id = CASE WHEN ${teamIdProvided} THEN ${teamIdValue} ELSE team_id END,
          location = COALESCE(${location || null}, location),
          status = COALESCE(${status || null}, status),
          active = COALESCE(${active !== undefined ? active : null}, active),
          updated_at = now()
        WHERE id = ${id}
      `;
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("users-admin update error:", err);
      return new Response(JSON.stringify({ error: "فشل تحديث المستخدم" }), { status: 500 });
    }
  }

  if (req.method === "DELETE") {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return new Response(JSON.stringify({ error: "id مطلوب" }), { status: 400 });
    // تعطيل بدل الحذف الفعلي (soft) حتى لا نفقد الإسناد التاريخي لأوامر الشغل
    await db.sql`UPDATE users SET active = FALSE, updated_at = now() WHERE id = ${id}`;
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
};
