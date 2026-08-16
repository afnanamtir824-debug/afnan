// دالة استقبال العمليات المعلقة من أي جهاز (لابتوب/تلفون) وتطبيقها على قاعدة
// البيانات المركزية على Netlify DB (Postgres). تقابل تماماً العمليات الأربع
// الموجودة أصلاً في app.js داخل db.syncQueue: CREATE, TRANSFER, DELETE, UPDATE_TICKET.
import { getDatabase } from "@netlify/database";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: "طلب غير صالح (JSON)" }), { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  const db = getDatabase();

  try {
    for (const item of items) {
      const { action, payload } = item;
      if (!payload || typeof payload.id === "undefined") continue;

      if (action === "CREATE") {
        await db.sql`
          INSERT INTO work_orders (
            id, customer_name, phone, address, assigned_to, transferred_to,
            deadline, service_type, status, priority, signal_value,
            customer_rating, created_at, completed_at, deleted, updated_at
          ) VALUES (
            ${payload.id}, ${payload.customerName || null}, ${payload.phone || null},
            ${payload.address || null}, ${payload.assignedTo || null}, ${payload.transferredTo || null},
            ${payload.deadline || null}, ${payload.serviceType || null}, ${payload.status || null},
            ${payload.priority || null}, ${payload.signalValue || null}, ${payload.customerRating || null},
            ${payload.createdAt || null}, ${payload.completedAt || null}, FALSE, now()
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
            updated_at = now()
        `;
      } else if (action === "TRANSFER") {
        await db.sql`
          UPDATE work_orders
          SET transferred_to = ${payload.transferredTo || null},
              status = 'transferred',
              updated_at = now()
          WHERE id = ${payload.id}
        `;
      } else if (action === "UPDATE_TICKET") {
        await db.sql`
          UPDATE work_orders
          SET status = COALESCE(${payload.status || null}, status),
              signal_value = ${payload.signalValue || null},
              customer_rating = COALESCE(${payload.customerRating || null}, customer_rating),
              completed_at = COALESCE(${payload.completedAt || null}, completed_at),
              updated_at = now()
          WHERE id = ${payload.id}
        `;
      } else if (action === "DELETE") {
        await db.sql`
          UPDATE work_orders
          SET deleted = TRUE, updated_at = now()
          WHERE id = ${payload.id}
        `;
      }
    }

    return new Response(JSON.stringify({ ok: true, synced: items.length }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("sync-push error:", err);
    return new Response(JSON.stringify({ error: "فشل تطبيق المزامنة على قاعدة البيانات" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
