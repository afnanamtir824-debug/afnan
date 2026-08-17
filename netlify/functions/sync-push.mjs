// دالة استقبال العمليات المعلقة من أي جهاز وتطبيقها على قاعدة البيانات المركزية.
// == التحديث الأمني ==: قبل التحديث كانت هذه الدالة تُنفّذ أي عملية (CREATE/TRANSFER/
// DELETE/UPDATE_TICKET) على أي تذكرة بلا أي تحقق من الهوية أو الصلاحية. الآن: كل عنصر
// يمر عبر فحص صلاحية فعلي على السيرفر (canActOnOrder) قبل تنفيذه - وليس مجرد إخفاء زر
// في الواجهة. أي عنصر لا يجتاز الفحص يُرفض ويُذكر في نتيجة الاستجابة بدل تجاهله بصمت.
import { getDatabase } from "@netlify/database";
import { getAuthUser, unauthorizedResponse, canActOnOrder } from "./_lib/auth.mjs";

async function getUserTeamByName(db, name) {
  // == ملاحظة ==: assigned_to/transferred_to يخزّنان اسم الفني الظاهر (name)، وليس
  // username، اتساقاً مع بقية التطبيق (راجع ملاحظة مماثلة في sync-pull.mjs).
  if (!name) return null;
  const rows = await db.sql`SELECT team_id, role FROM users WHERE name = ${name} AND active = TRUE LIMIT 1`;
  return rows[0] || null;
}

async function getOrderTeam(db, id) {
  const rows = await db.sql`SELECT assigned_to, team_id FROM work_orders WHERE id = ${id} LIMIT 1`;
  if (!rows[0]) return null;
  return { assignedTo: rows[0].assigned_to, teamId: rows[0].team_id };
}

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const user = getAuthUser(req);
  if (!user) return unauthorizedResponse();

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: "طلب غير صالح (JSON)" }), { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  const db = getDatabase();

  const applied = [];
  const rejected = [];

  try {
    for (const item of items) {
      const { action, payload } = item;
      if (!payload || typeof payload.id === "undefined") {
        rejected.push({ id: payload && payload.id, action, reason: "بيانات ناقصة" });
        continue;
      }

      if (action === "CREATE") {
        const targetUser = await getUserTeamByName(db, payload.assignedTo);
        const targetTeamId = targetUser ? targetUser.teamId ?? targetUser.team_id : null;
        if (!canActOnOrder(user, "CREATE", null, { targetTeamId })) {
          rejected.push({ id: payload.id, action, reason: "لا تملك صلاحية إنشاء مهمة لهذا الفني" });
          continue;
        }
        await db.sql`
          INSERT INTO work_orders (
            id, customer_name, phone, address, assigned_to, transferred_to,
            deadline, service_type, status, priority, signal_value,
            customer_rating, created_at, completed_at, deleted, team_id, updated_at
          ) VALUES (
            ${payload.id}, ${payload.customerName || null}, ${payload.phone || null},
            ${payload.address || null}, ${payload.assignedTo || null}, ${payload.transferredTo || null},
            ${payload.deadline || null}, ${payload.serviceType || null}, ${payload.status || null},
            ${payload.priority || null}, ${payload.signalValue || null}, ${payload.customerRating || null},
            ${payload.createdAt || null}, ${payload.completedAt || null}, FALSE, ${targetTeamId || null}, now()
          )
          ON CONFLICT (id) DO UPDATE SET
            customer_name = EXCLUDED.customer_name,
            phone = EXCLUDED.phone,
            address = EXCLUDED.address,
            assigned_to = EXCLUDED.assigned_to,
            deadline = EXCLUDED.deadline,
            service_type = EXCLUDED.service_type,
            status = EXCLUDED.status,
            priority = EXCLUDED.priority,
            created_at = EXCLUDED.created_at,
            team_id = EXCLUDED.team_id,
            updated_at = now()
        `;
        applied.push({ id: payload.id, action });
      } else if (action === "TRANSFER") {
        const order = await getOrderTeam(db, payload.id);
        if (!order) {
          rejected.push({ id: payload.id, action, reason: "التذكرة غير موجودة" });
          continue;
        }
        const targetUser = await getUserTeamByName(db, payload.transferredTo);
        const targetTeamId = targetUser ? targetUser.teamId ?? targetUser.team_id : null;
        if (!canActOnOrder(user, "TRANSFER", { assignedTo: order.assignedTo, teamId: order.teamId }, { targetTeamId })) {
          rejected.push({ id: payload.id, action, reason: "لا تملك صلاحية نقل هذه التذكرة" });
          continue;
        }
        await db.sql`
          UPDATE work_orders
          SET transferred_to = ${payload.transferredTo || null},
              status = 'transferred',
              updated_at = now()
          WHERE id = ${payload.id}
        `;
        applied.push({ id: payload.id, action });
      } else if (action === "UPDATE_TICKET") {
        const order = await getOrderTeam(db, payload.id);
        if (!order) {
          rejected.push({ id: payload.id, action, reason: "التذكرة غير موجودة" });
          continue;
        }
        if (!canActOnOrder(user, "UPDATE_TICKET", { assignedTo: order.assignedTo, teamId: order.teamId })) {
          rejected.push({ id: payload.id, action, reason: "لا تملك صلاحية تعديل هذه التذكرة" });
          continue;
        }
        await db.sql`
          UPDATE work_orders
          SET status = COALESCE(${payload.status || null}, status),
              signal_value = ${payload.signalValue || null},
              customer_rating = COALESCE(${payload.customerRating || null}, customer_rating),
              completed_at = COALESCE(${payload.completedAt || null}, completed_at),
              updated_at = now()
          WHERE id = ${payload.id}
        `;
        applied.push({ id: payload.id, action });
      } else if (action === "DELETE") {
        const order = await getOrderTeam(db, payload.id);
        if (!order) {
          rejected.push({ id: payload.id, action, reason: "التذكرة غير موجودة" });
          continue;
        }
        if (!canActOnOrder(user, "DELETE", { assignedTo: order.assignedTo, teamId: order.teamId })) {
          rejected.push({ id: payload.id, action, reason: "الحذف متاح للمدير فقط" });
          continue;
        }
        await db.sql`
          UPDATE work_orders
          SET deleted = TRUE, updated_at = now()
          WHERE id = ${payload.id}
        `;
        applied.push({ id: payload.id, action });
      } else {
        rejected.push({ id: payload.id, action, reason: "إجراء غير معروف" });
      }
    }

    return new Response(JSON.stringify({ ok: true, synced: applied.length, applied, rejected }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("sync-push error:", err);
    return new Response(JSON.stringify({ error: "فشل تطبيق المزامنة على قاعدة البيانات" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
