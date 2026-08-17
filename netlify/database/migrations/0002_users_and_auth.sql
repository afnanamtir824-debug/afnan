-- جدول المستخدمين المركزي على السيرفر (يحل محل الاعتماد الكامل على localStorage)
-- role: admin | supervisor | technician
-- team_id: يُستخدم فقط لدوري supervisor و technician لربطهم بفريق/منطقة.
--          يبقى NULL لدور admin (لا ينتمي لفريق معيّن، يرى كل شيء).
-- password_hash: بصيغة "scryptSalt:scryptHash" (hex) - لا نخزّن كلمات مرور بنص صريح إطلاقًا.
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'supervisor', 'technician')),
  team_id TEXT,
  location TEXT,
  status TEXT NOT NULL DEFAULT 'off',
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  tasks_count INT NOT NULL DEFAULT 0,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at BIGINT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_users_role ON users (role);
CREATE INDEX IF NOT EXISTS idx_users_team_id ON users (team_id);

-- إضافة عمود لربط أمر الشغل صراحة بفريق (اختياري لكن يسهّل فلترة تقارير المشرف
-- بدون الحاجة لعمل JOIN مع users في كل استعلام). يُملأ تلقائياً عند الإنشاء/النقل
-- بأخذ team_id من المستخدم المُسند إليه assigned_to وقت الكتابة.
ALTER TABLE work_orders ADD COLUMN IF NOT EXISTS team_id TEXT;
CREATE INDEX IF NOT EXISTS idx_work_orders_team_id ON work_orders (team_id);
