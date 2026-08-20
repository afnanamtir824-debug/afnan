// إصلاح: رفع رقم النسخة (v22 -> v23) لأن fetch handler تغيّر بشكل جوهري (استثناء طلبات
// الـ API الديناميكية من الكاش، انظر التعليق أسفل معالج 'fetch')، فيجب حذف أي كاش قديم
// كان قد خزّن استجابات API (مثل قائمة الموظفين) بالخطأ ضمن نظام الكاش السابق.
const CACHE_NAME = 'field-tech-v23';

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

  const requestUrl = new URL(event.request.url);

  // إصلاح جوهري: كان معالج fetch يعترض *كل* طلبات GET بدون استثناء، بما فيها طلبات
  // الـ API الديناميكية على السيرفر (مثل جلب قائمة الموظفين /.netlify/functions/users-admin).
  // كان يُرجع النسخة المخزَّنة بالكاش فوراً إن وُجدت (cachedResponse || fetchPromise)، فحتى
  // لو نجح حذف موظف فعلياً من قاعدة البيانات (ولهذا يفشل تسجيل دخوله بعدها)، كانت قائمة
  // الموظفين بالواجهة تستمر بعرض نسخة قديمة مخزَّنة من قبل الحذف بدل جلب القائمة الحقيقية
  // الحالية من السيرفر. الحل: أي طلب يذهب لمسارات الدوال البرمجية على نتليفاي
  // (/.netlify/functions/...) لا يجب أن يعترضه الـ Service Worker إطلاقاً - نتركه يمر
  // مباشرة للشبكة كما لو لم يكن هناك Service Worker أصلاً، فتبقى بيانات المستخدمين
  // والمهام والمصادقة حية ومحدّثة دائماً. التخزين المؤقت هنا مخصص فقط لملفات التطبيق
  // الثابتة (CORE_ASSETS) ومكتبات CDN الخارجية (CDN_ASSETS) كما كان الهدف أصلاً.
  if (requestUrl.pathname.startsWith('/.netlify/functions/')) {
    return; // لا event.respondWith هنا = يمر الطلب للشبكة مباشرة بدون أي تدخل من الكاش
  }

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
