// إصلاح: رفع رقم النسخة (v21 -> v22) لأن index.html و style.css تغيّرا بشكل
// جوهري (تصميم متجاوب جديد يدمج بين مظهر الحاسوب ومظهر الهاتف بالكامل عبر
// كل صفحات التطبيق)، فيجب حذف الكاش القديم لضمان تحميل كل الأجهزة للتصميم
// الجديد فوراً بدل الاستمرار بعرض النسخة المرئية القديمة المخزّنة مسبقاً.
const CACHE_NAME = 'field-tech-v22';

// ملفات التطبيق الأساسية (من نفس النطاق) - يجب أن تنجح جميعها حتى يعمل التطبيق أوفلاين
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// مكتبات خارجية عبر CDN (unpkg) - إصلاح: تثبيت إصدار Dexie (كان بدون رقم إصدار)
const CDN_ASSETS = [
  'https://unpkg.com/dexie@3/dist/dexie.js',
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js',
  'https://unpkg.com/jsqr@1.4.0/dist/jsQR.js',
  'https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js',
  'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // إصلاح: كان يُستخدم cache.addAll() على كل الملفات (المحلية + الخارجية) دفعة واحدة.
      // addAll() عملية "كل شيء أو لا شيء": فشل تحميل ملف واحد فقط من CDN (بسبب انقطاع
      // مؤقت في الشبكة أثناء أول تثبيت مثلاً) كان يفشّل التثبيت بالكامل، فلا يُخزَّن حتى
      // ملفات التطبيق الأساسية (index.html, app.js...) ويظل التطبيق بلا دعم أوفلاين إطلاقاً.
      // الحل: ملفات التطبيق الأساسية تُخزَّن معاً (يجب أن تنجح كلها)، أما مكتبات CDN
      // فتُخزَّن كل واحدة على حدة بحيث لا يوقف فشل مكتبة واحدة تخزين البقية أو الملفات الأساسية.
      await cache.addAll(CORE_ASSETS);
      await Promise.all(
        CDN_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('تعذّر تخزين هذا المورد مؤقتاً (سيُحاول لاحقاً عند توفر الشبكة):', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      }).catch(() => {});

      return cachedResponse || fetchPromise;
    })
  );
});
