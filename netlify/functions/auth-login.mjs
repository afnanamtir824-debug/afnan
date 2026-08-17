// تسجيل الدخول من طرف السيرفر: يتحقق من اسم المستخدم/كلمة المرور مقابل قاعدة
// البيانات (وليس محلياً في المتصفح كما كان سابقاً)، ويصدر توكن موقّع عند النجاح.
import { getDatabase } from "@netlify/database";
import { verifyPassword, signToken } from "./_lib/auth.mjs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: "طلب غير صالح" }), { status: 400 });
  }

  const username = (body.username || "").trim();
  const password = body.password || "";
  if (!username || !password) {
    return new Response(JSON.stringify({ error: "يرجى إدخال اسم المستخدم وكلمة المرور" }), { status: 400 });
  }

  const db = getDatabase();

  try {
    const rows = await db.sql`
      SELECT id, username, password_hash, name, role, team_id, active
      FROM users
      WHERE username = ${username}
      LIMIT 1
    `;

    const user = rows[0];
    // رسالة خطأ موحّدة سواء كان اسم المستخدم غير موجود أو كلمة المرور خاطئة،
    // حتى لا نكشف للمهاجم أي أسماء مستخدمين صالحة (user enumeration).
    const genericError = new Response(
      JSON.stringify({ error: "اسم المستخدم أو كلمة المرور غير صحيحة" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );

    if (!user || !user.active) return genericError;
    if (!verifyPassword(password, user.password_hash)) return genericError;

    const token = signToken({
      sub: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
      teamId: user.team_id || null,
    });

    return new Response(
      JSON.stringify({
        token,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          role: user.role,
          teamId: user.team_id || null,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("auth-login error:", err);
    return new Response(JSON.stringify({ error: "خطأ في الخادم، حاول لاحقاً" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
