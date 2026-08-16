-- جدول أوراق العمل (التذاكر) المركزي على السيرفر
-- id مطابق تماماً للرقم الذي يولّده التطبيق محلياً (رقم عشوائي من 6 خانات) حتى لا نحتاج
-- لأي ترجمة بين المعرّف المحلي والمعرّف على السيرفر.
-- deleted = soft delete (بدل الحذف الفعلي) حتى تقدر الأجهزة الأخرى تعرف أن التذكرة
-- حُذفت وتحذفها من نسختها المحلية أيضاً عند المزامنة.
CREATE TABLE IF NOT EXISTS work_orders (
  id BIGINT PRIMARY KEY,
  customer_name TEXT,
  phone TEXT,
  address TEXT,
  assigned_to TEXT,
  transferred_to TEXT,
  deadline TEXT,
  service_type TEXT,
  status TEXT,
  priority TEXT,
  signal_value TEXT,
  customer_rating INT,
  created_at BIGINT,
  completed_at BIGINT,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_work_orders_updated_at ON work_orders (updated_at);
