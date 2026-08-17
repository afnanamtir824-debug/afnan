// دالة إرجاع أوامر الشغل من قاعدة البيانات المركزية.
// == التحديث الأمني ==: قبل التحديث كانت هذه الدالة تُرجع كل التذاكر لأي طلب GET بلا أي
// تحقق من الهوية. الآن: يجب إرسال Authorization: Bearer <token> صالح، والنتائج تُفلتر
// إلزامياً حسب دور المستخدم من طرف السيرفر (وليس مجرد إخفاء في الواجهة).
import { getDatabase } from "@netlify/database";
import { getAuthUser, unauthorizedResponse } from "./_lib/auth.mjs";

function mapRow(r) {
  return {
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
    deleted: r.deleted,
  };
}

export default async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const user = getAuthUser(req);
  if (!user) return unauthorizedResponse();

  const db = getDatabase();

  try {
    let rows;

    if (user.role === "admin") {
      rows = await db.sql`
        SELECT id, customer_name, phone, address, assigned_to, transferred_to,
               deadline, service_type, status, priority, signal_value,
               customer_rating, created_at, completed_at, deleted
        FROM work_orders
        ORDER BY id ASC
      `;
    } else if (user.role === "supervisor") {
      // المشرف يرى فقط أوامر شغل فريقه (team_id يُملأ تلقائياً عند CREATE/TRANSFER في sync-push)
      rows = await db.sql`
        SELECT id, customer_name, phone, address, assigned_to, transferred_to,
               deadline, service_type, status, priority, signal_value,
               customer_rating, created_at, completed_at, deleted
        FROM work_orders
        WHERE team_id = ${user.teamId}
        ORDER BY id ASC
      `;
    } else if (user.role === "technician") {
      // == ملاحظة تصميم مهمة ==: التطبيق الأصلي يربط أمر الشغل بالفني عبر حقل
      // assigned_to الذي يخزّن الاسم الظاهر (مثل "أحمد الكردي") في عشرات المواضع
      // بالواجهة، وليس username. للحفاظ على توافق كامل مع الواجهة الحالية دون إعادة
      // كتابتها بالكامل، الفلترة هنا تطابق على الاسم (name) وليس اسم المستخدم.
      // القيد: يجب أن تكون أسماء الفنيين فريدة (غير مكرّرة) وإلا قد يرى فنيان
      // بنفس الاسم تذاكر بعضهما - نفس القيد كان قائماً ضمنياً في النسخة السابقة.
      rows = await db.sql`
        SELECT id, customer_name, phone, address, assigned_to, transferred_to,
               deadline, service_type, status, priority, signal_value,
               customer_rating, created_at, completed_at, deleted
        FROM work_orders
        WHERE assigned_to = ${user.name}
        ORDER BY id ASC
      `;
    } else {
      rows = [];
    }

    return new Response(JSON.stringify(rows.map(mapRow)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("sync-pull error:", err);
    return new Response(JSON.stringify({ error: "فشل جلب البيانات من قاعدة البيانات" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
