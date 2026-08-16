// دالة إرجاع كل أوراق العمل (التذاكر) من قاعدة البيانات المركزية بصيغة تطابق
// حقول جدول workOrders المحلي (Dexie) تماماً، ليتم دمجها مباشرة في كل جهاز.
import { getDatabase } from "@netlify/database";

export default async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const db = getDatabase();

  try {
    const rows = await db.sql`
      SELECT id, customer_name, phone, address, assigned_to, transferred_to,
             deadline, service_type, status, priority, signal_value,
             customer_rating, created_at, completed_at, deleted
      FROM work_orders
      ORDER BY id ASC
    `;

    const mapped = rows.map((r) => ({
      id: Number(r.id),
      customerName: r.customer_name,
      phone: r.phone,
      address: r.address,
      assignedTo: r.assigned_to,
      transferredTo: r.transferred_to,
      deadline: r.deadline,
      serviceType: r.service_type,
      status: r.status,
      priority: r.priority,
      signalValue: r.signal_value,
      customerRating: r.customer_rating,
      createdAt: r.created_at ? Number(r.created_at) : null,
      completedAt: r.completed_at ? Number(r.completed_at) : null,
      deleted: r.deleted
    }));

    return new Response(JSON.stringify(mapped), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("sync-pull error:", err);
    return new Response(JSON.stringify({ error: "فشل جلب البيانات من قاعدة البيانات" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
