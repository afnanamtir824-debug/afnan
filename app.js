// ==========================================
// 0. نظام الترجمة وتغيير اللغة الكامل (عربي / انجليزي)
// ==========================================
let currentLang = localStorage.getItem('appLang') || 'ar';

const i18nTranslations = {
  ar: {
    companyName: "شركة ألياف التقنية",
    companyTitle: "ألياف التقنية (FiberTech ISP)",
    techDashboard: "لوحة تحكم الفني الميداني",
    netOnline: "🌐 الاتصال: متصل (Online)",
    netOffline: "📡 الاتصال: غير متصل (Offline)",
    pendingSync: "⏳ العمليات المعلقة بالرفع:",
    searchPlaceholder: "🔍 بحث في كافة الصفحات والعملاء والمهام...",
    navDashboard: "لوحة التحكم (Dashboard)",
    navActiveTasks: "المهام النشطة (Active Tasks)",
    navCalendar: "جدولة المهام (Calendar)",
    navClients: "جدول العملاء",
    thPriority: "الأولوية",
    labelPriority: "أولوية المهمة (Priority):",
    priorityFilterAll: "كل الأولويات",
    priorityUrgent: "🔴 عاجل",
    priorityNormal: "🔵 عادي",
    priorityLow: "⚪ منخفض",
    calendarTitle: "🗓️ جدولة وتقويم المهام",
    calendarDesc: "تنظيم المهام حسب التاريخ لمعرفة عدد المهام باليوم لكل فني والتخطيط الأسبوعي/الشهري.",
    calendarToday: "اليوم",
    calendarWeekView: "أسبوعي",
    calendarMonthView: "شهري",
    calendarAllTechs: "كل الفنيين",
    calendarDayDetailTitle: "مهام هذا اليوم",
    btnClose: "✖ إغلاق",
    navTransferred: "المهام المنقولة (Transferred)",
    navNotes: "ملاحظات المهام (Task Notes)",
    navHistory: "السجل المكتمل (History)",
    navReports: "التقارير (Reports)",
    navTasks: "إدارة المهام (Tasks)",
    navSettings: "الإعدادات (Settings)",
    appLanguage: "🌐 لغة التطبيق",
    darkMode: "المظهر الداكن",
    statTotal: "المجموع",
    statTotalTasks: "إجمالي المهام:",
    statInProgress: "قيد التنفيذ:",
    statCompleted: "مكتملة:",
    statPendingTrans: "معلقة / منقولة:",
    statCompletionRate: "نسبة الإنجاز:",
    statPendingRate: "قيد التنفيذ:",
    currentTasks: "المهام الحالية",
    filterAll: "الكل",
    filterPending: "قيد التنفيذ",
    filterCompleted: "مكتملة",
    filterOnhold: "معلقة",
    filterTransferred: "منقولة",
    addNewTask: "إضافة مهمة جديدة",
    thTaskId: "رقم المهمة",
    thCustomer: "العنوان / العميل",
    thStatus: "الحالة",
    thAssignedTo: "المسند إليه",
    thDeadline: "الموعد النهائي",
    thActions: "الإجراءات",
    btnTransferSelected: "🔄 نقل المهام",
    btnDeleteSelected: "🗑️ حذف المحدد",
    btnExportCsv: "📊 تصدير Excel / CSV",
    slaOverdueBadge: "🔴 متأخرة",
    slaApproachingBadge: "🟠 يقترب الموعد",
    slaBannerOverdue: "مهمة تجاوزت الموعد النهائي",
    slaBannerApproaching: "مهمة يقترب موعدها النهائي",
    slaBannerViewBtn: "عرض المهام ⬇",
    slaNotifyOverdueTitle: "⚠️ تذكرة تجاوزت الموعد النهائي",
    slaNotifyApproachingTitle: "⏰ تذكرة يقترب موعدها النهائي",
    activeTasksTitle: "📋 المهام النشطة (In Progress)",
    activeTasksDesc: "عرض إداري لجميع المهام التي يتم العمل عليها حالياً في الميدان.",
    clientsPageTitle: "👥 جدول العملاء ومعلوماتهم التفصيلية",
    btnRefresh: "🔄 تحديث",
    clientsPageDesc: "عرض شامل لكافة العملاء والمشتركين مع تفاصيل المكان، المشرف، نوع الخدمة، والملاحظات المرفقة.",
    thClientName: "اسم العميل / المشترك",
    thPhone: "رقم الهاتف",
    thAddress: "العنوان / الموقع",
    thTechnician: "المشرف / الفني",
    thServiceType: "نوع الخدمة",
    thNotes: "الملاحظات",
    transferredTasksTitle: "🔄 المهام المنقولة (Transferred Tasks)",
    transferredTasksDesc: "سجل المهام التي تم نقل مسؤولية إنجازها إلى فنيين آخرين.",
    thOriginalTech: "الفني الأصلي",
    thTransferredTo: "المنقول إليه",
    notesPageTitle: "📝 سجل ملاحظات جميع المهام",
    notesPageDesc: "عرض شامل لكافة الملاحظات (الكتابية، الصوتية، الميديا) المضافة لكافة المهام مع إمكانية الدخول المباشر للمهمة.",
    historyTitle: "📜 سجل المهام المكتملة (History)",
    historyDesc: "أرشيف الأعمال التي تم إنجازها وتسليمها بنجاح.",
    thCompletionStatus: "حالة الإنجاز",
    reportsTitle: "📈 تقارير الأداء الميداني",
    reportsDesc: "ملخص العمليات ونسب الإنجاز اليومية والشهرية.",
    repCompleted: "إجمالي المهام المنجزة",
    repSuccessRate: "نسبة النجاح العامة",
    repOnHoldTrans: "العمليات المعلقة/المنقولة",
    allTasksTitle: "📑 تفاصيل وإدارة جميع المهام",
    btnCreateWorkOrder: "إنشاء ورقة عمل",
    settingsTitle: "⚙️ إعدادات النظام والتطبيق",
    autoSync: "مزامنة البيانات تلقائياً",
    autoSyncDesc: "رفع التغييرات فور الاتصال بالشبكة",
    resetDB: "إعادة تهيئة قاعدة البيانات المحلية",
    resetDBDesc: "مسح البيانات المخزنة محلياً وإعادة تحميلها",
    btnResetDB: "مسح وإعادة التهيئة",
    modalNewTaskTitle: "➕ إنشاء ورقة عمل جديدة (ISP Task)",
    labelCustName: "عنوان المهمة / اسم المشترك:",
    labelPhone: "رقم الهاتف:",
    labelAddress: "العنوان / المكان التفصيلي:",
    labelAssignedTech: "المشرف / الفني المسند إليه:",
    btnSuggestNearestTech: "📍 اقتراح أقرب فني متاح",
    suggestingNearestTech: "⏳ جاري تحديد أقرب فني...",
    labelServiceType: "نوع الخدمة (FiberTech):",
    labelStatus: "حالة التذكرة:",
    labelDeadline: "تاريخ الموعد النهائي:",
    btnAddTask: "إضافة المهمة",
    btnCancel: "إلغاء",
    modalTransferTitle: "🔄 نقل المهام المحددة",
    labelSelectTech: "اختر الفني الموكل بالمهام:",
    labelNewTechCustom: "أو اكتب اسم فني جديد (اختياري):",
    btnConfirmTransfer: "تأكيد النقل",
    btnBackList: "⬅ العودة للقائمة",
    ticketDetails: "تفاصيل التذكرة",
    notesHeader: "📝 ملاحظات المهمة (نص، صوت، صورة أو فيديو)",
    btnAddNote: "إضافة ➕",
    btnRecordAudio: "🎙️ تسجيل صوتي",
    btnStopRecord: "⏹️ إيقاف التسجيل",
    recordingText: "جاري التسجيل...",
    btnAttachMedia: "📎 إرفاق صورة / فيديو",
    hardwareScanTitle: "📦 توثيق مسح باركود/QR للعتاد (Hardware Scan)",
    labelDeviceType: "نوع الجهاز:",
    btnStartCam: "📷 فتح الكاميرا للمسح",
    btnStopCam: "⏹ إيقاف الكاميرا",
    btnImportBarcodeImage: "📁 استيراد صورة الباركود",
    serialLabel: "الرقم التسلسلي (S/N):",
    signalTitle: "⚡ فحص الإشارة الضوئية (Optical Signal Check)",
    labelSignalInput: "إدخال قيمة الإشارة الميدانية (dBm-):",
    fieldPhotosTitle: "📸 التقاط الصور الميدانية (الكابلات ومكان التركيب)",
    btnTakePhoto: "📷 التقاط صورة جديدة",
    btnAttachPhotoGallery: "🖼️ إرفاق صورة من المعرض",
    btnCaptureNow: "📸 تصوير الآن",
    btnSwitchCamera: "🔄 تبديل الكاميرا",
    sigTitle: "✍️ توقيع المشترك الرقمي",
    btnClearSig: "🗑️ مسح التوقيع وإعادته",
    ticketStatusSaveTitle: "📌 حالة التذكرة عند الحفظ",
    btnSaveTask: "💾 حفظ وإغلاق المهمة",
    btnExitTask: "🚪 خروج بدون حفظ",
    navMenuTitle: "☰ القائمة الرئيسية",
    btnTodayRouteMaps: "🗺️ فتح مسار اليوم (خرائط جوجل)",
    btnTodayRouteWaze: "🚗 أقرب موقع (Waze)",
    noTasksToday: "لا توجد مهام مجدولة اليوم لعرض مسار.",
    noAddressToday: "المهام المجدولة اليوم لا تحتوي عناوين كافية لبناء المسار.",
    navPerformance: "🏆 تقييم أداء الفنيين",
    navInventory: "📦 إدارة مخزون العتاد",
    navTechMap: "🗺️ خريطة تتبع الفنيين (Live Map)",
    navEmployees: "🧑‍💼 إدارة الموظفين (Employees)",
    navMessages: "📩 الرسائل والطلبات (Messages)",
    navProfile: "👤 ملفي الشخصي (My Profile)",
    profileMyLocationLabel: "موقعك المخصص",
    btnEnableLocationSharing: "📍 تفعيل مشاركة موقعي مع المسؤول",
    profileTasksTitle: "🗂️ مهامي وتفاصيلها",
    tabMyCurrentTasks: "📋 مهامي الحالية",
    tabTransferredToMe: "🔄 المهام المحولة لهذا المستخدم",
    tabMyCompletedHistory: "📜 سجل مهامي المكتملة",
    thTaskId: "رقم المهمة",
    thAddressClient: "العنوان / العميل",
    thServiceType: "نوع الخدمة",
    thStatusCol: "الحالة",
    thDeadlineDate: "الموعد النهائي / التاريخ",
    thActions: "إجراءات",
    statusUpdateTitle: "🔄 تحديث الحالة الحالية",
    receivedTasksCountTitle: "🧾 عدد المهام المستلمة",
    btnSaveUpdate: "حفظ التحديث",
    inboxTitle: "📥 الرسائل الواردة من المسؤول",
    sendMsgTitle: "📤 إرسال ملاحظة أو طلب إلى المسؤول",
    msgTypeLabel: "نوع الرسالة:",
    msgTypeNote: "📝 ملاحظة عامة",
    msgTypeTaskUpdate: "🔧 تحديث عن مهمة",
    msgTypeTaskRequest: "🙋 طلب استلام مهمة",
    msgTypeTransferRequest: "🔄 طلب تبديل مهمة مع زميل",
    linkTaskLabel: "ربط بمهمة (اختياري):",
    transferColleagueLabel: "تبديل المهمة مع الزميل:",
    msgContentLabel: "نص الرسالة:",
    msgContentPlaceholder: "اكتب ملاحظتك أو طلبك هنا...",
    btnSendToManager: "إرسال إلى المسؤول"
  },
  en: {
    companyName: "FiberTech Corporation",
    companyTitle: "FiberTech ISP System",
    techDashboard: "Field Tech Dashboard",
    netOnline: "🌐 Network: Online",
    netOffline: "📡 Network: Offline",
    pendingSync: "⏳ Pending Sync Queue:",
    searchPlaceholder: "🔍 Search across all pages, clients & tasks...",
    navDashboard: "Dashboard",
    navActiveTasks: "Active Tasks",
    navCalendar: "Task Calendar",
    navClients: "Clients Directory",
    thPriority: "Priority",
    labelPriority: "Task Priority:",
    priorityFilterAll: "All Priorities",
    priorityUrgent: "🔴 Urgent",
    priorityNormal: "🔵 Normal",
    priorityLow: "⚪ Low",
    calendarTitle: "🗓️ Task Scheduling & Calendar",
    calendarDesc: "Organize tasks by date to see how many tasks each technician has per day and plan weekly/monthly.",
    calendarToday: "Today",
    calendarWeekView: "Week",
    calendarMonthView: "Month",
    calendarAllTechs: "All Technicians",
    calendarDayDetailTitle: "Tasks for this day",
    btnClose: "✖ Close",
    navTransferred: "Transferred Tasks",
    navNotes: "Task Notes",
    navHistory: "History",
    navReports: "Reports",
    navTasks: "Manage Tasks",
    navSettings: "Settings",
    appLanguage: "🌐 App Language",
    darkMode: "Dark Mode",
    statTotal: "Total",
    statTotalTasks: "Total Tasks:",
    statInProgress: "In Progress:",
    statCompleted: "Completed:",
    statPendingTrans: "On Hold / Transferred:",
    statCompletionRate: "Completion Rate:",
    statPendingRate: "In Progress Rate:",
    currentTasks: "Current Work Orders",
    filterAll: "All",
    filterPending: "In Progress",
    filterCompleted: "Completed",
    filterOnhold: "On Hold",
    filterTransferred: "Transferred",
    addNewTask: "Add New Task",
    thTaskId: "Task ID",
    thCustomer: "Title / Customer",
    thStatus: "Status",
    thAssignedTo: "Assigned To",
    thDeadline: "Deadline",
    thActions: "Actions",
    btnTransferSelected: "🔄 Transfer Selected",
    btnDeleteSelected: "🗑️ Delete Selected",
    btnExportCsv: "📊 Export Excel / CSV",
    slaOverdueBadge: "🔴 Overdue",
    slaApproachingBadge: "🟠 Due soon",
    slaBannerOverdue: "task(s) past their deadline",
    slaBannerApproaching: "task(s) due very soon",
    slaBannerViewBtn: "View Tasks ⬇",
    slaNotifyOverdueTitle: "⚠️ Ticket past its deadline",
    slaNotifyApproachingTitle: "⏰ Ticket deadline approaching",
    activeTasksTitle: "📋 Active Tasks (In Progress)",
    activeTasksDesc: "Administrative view of all tasks currently in field operation.",
    clientsPageTitle: "👥 Clients Directory & Details",
    btnRefresh: "🔄 Refresh",
    clientsPageDesc: "Comprehensive list of clients with location, supervisor, service type, and notes.",
    thClientName: "Client Name",
    thPhone: "Phone",
    thAddress: "Address / Location",
    thTechnician: "Technician",
    thServiceType: "Service Type",
    thNotes: "Notes",
    transferredTasksTitle: "🔄 Transferred Tasks",
    transferredTasksDesc: "Log of work orders reassigned to other field technicians.",
    thOriginalTech: "Original Tech",
    thTransferredTo: "Transferred To",
    notesPageTitle: "📝 Consolidated Task Notes",
    notesPageDesc: "Unified view of all written, audio, and media notes with direct task navigation.",
    historyTitle: "📜 Completed Task History",
    historyDesc: "Archive of successfully completed and delivered field orders.",
    thCompletionStatus: "Status",
    reportsTitle: "📈 Field Performance Reports",
    reportsDesc: "Operational summary and daily/monthly completion metrics.",
    repCompleted: "Total Completed Tasks",
    repSuccessRate: "Overall Success Rate",
    repOnHoldTrans: "On Hold / Transferred",
    allTasksTitle: "📑 Task Management",
    btnCreateWorkOrder: "Create Work Order",
    settingsTitle: "⚙️ System & App Settings",
    autoSync: "Auto Sync Data",
    autoSyncDesc: "Upload pending queue as soon as online",
    resetDB: "Re-initialize Local DB",
    resetDBDesc: "Wipe local IndexedDB cache and reload",
    btnResetDB: "Wipe & Reload",
    modalNewTaskTitle: "➕ Create New Work Order (FiberTech)",
    labelCustName: "Task Title / Customer Name:",
    labelPhone: "Phone Number:",
    labelAddress: "Detailed Address / Location:",
    labelAssignedTech: "Assigned Technician:",
    btnSuggestNearestTech: "📍 Suggest Nearest Technician",
    suggestingNearestTech: "⏳ Locating nearest technician...",
    labelServiceType: "Service Type (FiberTech):",
    labelStatus: "Initial Status:",
    labelDeadline: "Deadline:",
    btnAddTask: "Add Task",
    btnCancel: "Cancel",
    modalTransferTitle: "🔄 Transfer Selected Tasks",
    labelSelectTech: "Select Destination Tech:",
    labelNewTechCustom: "Or Enter Custom Tech Name:",
    btnConfirmTransfer: "Confirm Transfer",
    btnBackList: "⬅ Back to List",
    ticketDetails: "Ticket Details",
    notesHeader: "📝 Task Notes (Text, Audio, Photo/Video)",
    btnAddNote: "Add ➕",
    btnRecordAudio: "🎙️ Record Audio",
    btnStopRecord: "⏹️ Stop Recording",
    recordingText: "Recording...",
    btnAttachMedia: "📎 Attach Photo / Video",
    hardwareScanTitle: "📦 Hardware Barcode/QR Scan",
    labelDeviceType: "Device Category:",
    btnStartCam: "📷 Open Camera",
    btnStopCam: "⏹ Stop Camera",
    btnImportBarcodeImage: "📁 Import Barcode Image",
    serialLabel: "Serial Number (S/N):",
    signalTitle: "⚡ Optical Signal Inspection",
    labelSignalInput: "Enter Signal Value (-dBm):",
    fieldPhotosTitle: "📸 Field Installation Photos",
    btnTakePhoto: "📷 Take Photo",
    btnAttachPhotoGallery: "🖼️ Attach from Gallery",
    btnCaptureNow: "📸 Capture Now",
    btnSwitchCamera: "🔄 Switch Camera",
    sigTitle: "✍️ Client Digital Signature",
    btnClearSig: "🗑️ Clear Signature",
    ticketStatusSaveTitle: "📌 Save Ticket Status",
    btnSaveTask: "💾 Save & Close Task",
    btnExitTask: "🚪 Exit Without Saving",
    navMenuTitle: "☰ Main Menu",
    btnTodayRouteMaps: "🗺️ Open Today's Route (Google Maps)",
    btnTodayRouteWaze: "🚗 Nearest Stop (Waze)",
    noTasksToday: "No tasks scheduled today to build a route.",
    noAddressToday: "Today's tasks don't have enough addresses to build a route.",
    navPerformance: "🏆 Technician Performance",
    navInventory: "📦 Equipment Inventory",
    navTechMap: "🗺️ Live Technician Map",
    navEmployees: "🧑‍💼 Employee Management",
    navMessages: "📩 Messages & Requests",
    navProfile: "👤 My Profile",
    profileMyLocationLabel: "Your assigned location",
    btnEnableLocationSharing: "📍 Enable location sharing with manager",
    profileTasksTitle: "🗂️ My Tasks & Details",
    tabMyCurrentTasks: "📋 My Current Tasks",
    tabTransferredToMe: "🔄 Tasks Transferred To Me",
    tabMyCompletedHistory: "📜 My Completed History",
    thTaskId: "Task #",
    thAddressClient: "Address / Client",
    thServiceType: "Service Type",
    thStatusCol: "Status",
    thDeadlineDate: "Deadline / Date",
    thActions: "Actions",
    statusUpdateTitle: "🔄 Update Current Status",
    receivedTasksCountTitle: "🧾 Received Tasks Count",
    btnSaveUpdate: "Save Update",
    inboxTitle: "📥 Messages from Manager",
    sendMsgTitle: "📤 Send a Note or Request to Manager",
    msgTypeLabel: "Message type:",
    msgTypeNote: "📝 General Note",
    msgTypeTaskUpdate: "🔧 Task Update",
    msgTypeTaskRequest: "🙋 Request to Take a Task",
    msgTypeTransferRequest: "🔄 Request to Swap Task with Colleague",
    linkTaskLabel: "Link to a task (optional):",
    transferColleagueLabel: "Swap task with colleague:",
    msgContentLabel: "Message text:",
    msgContentPlaceholder: "Write your note or request here...",
    btnSendToManager: "Send to Manager"
  }
};

function updateAppLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('appLang', lang);

  const htmlElem = document.documentElement;
  htmlElem.setAttribute('lang', lang);
  htmlElem.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const btnText = document.getElementById('current-lang-btn-text');
  if (btnText) btnText.textContent = lang === 'ar' ? 'English' : 'عربي';

  const transElements = document.querySelectorAll('[data-i18n]');
  transElements.forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (i18nTranslations[lang] && i18nTranslations[lang][key]) {
      elem.textContent = i18nTranslations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (i18nTranslations[lang] && i18nTranslations[lang][key]) {
      elem.setAttribute('placeholder', i18nTranslations[lang][key]);
    }
  });

  updateNetworkStatus();

  // إعادة رسم محتوى الصفحة النشطة حالياً بعد تبديل اللغة. الجداول والقوائم
  // التي تُبنى ديناميكياً عبر JS (خصوصاً صفحة "ملفي الشخصي" الخاصة بالموظف)
  // تعتمد على قيمة currentLang وقت بنائها فقط، ولا تتحدث تلقائياً بمجرد تغيير
  // اللغة ما لم يُعاد استدعاء دالة الرسم الخاصة بها — وهذا هو سبب أن تبديل
  // اللغة كان يبدو وكأنه "لا يغيّر شيئاً" في تلك الصفحات.
  ftRerenderActiveViewLanguage();
}

function ftRerenderActiveViewLanguage() {
  const activeView = document.querySelector('.app-view:not(.hidden)');
  if (!activeView) return;
  const viewName = activeView.id.replace('view-', '');
  const filterSelect = document.getElementById('filter-all-select');

  if (viewName === 'dashboard') renderWorkOrders(filterSelect ? filterSelect.value : 'all');
  else if (viewName === 'active-tasks') renderActiveTasksPage();
  else if (viewName === 'calendar') renderCalendarPage();
  else if (viewName === 'clients') renderClientsPage();
  else if (viewName === 'history') renderHistoryPage();
  else if (viewName === 'transferred-tasks') renderTransferredTasksPage();
  else if (viewName === 'reports') renderReportsPage();
  else if (viewName === 'tasks') renderAllTasksPage();
  else if (viewName === 'notes') renderAllNotesPage();
  else if (viewName === 'performance') renderPerformancePage();
  else if (viewName === 'inventory') renderInventoryPage();
  else if (viewName === 'employees') ftRenderEmployeesView();
  else if (viewName === 'profile') ftRenderProfileView();
  else if (viewName === 'messages') ftRenderMessagesView();
}

function toggleAppLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  updateAppLanguage(newLang);
}

// ==========================================
// 0.6 نظام تسجيل الدخول وإدارة حسابات الموظفين (Auth + Employees)
// يعتمد على LocalStorage بشكل منفصل عن قاعدة بيانات المهام (Dexie)
// ==========================================
const FT_USERS_KEY = 'ft_users_v1';
const FT_SESSION_KEY = 'ft_session_v1';

const FT_STATUS_OPTIONS = [
  { id: 'active', label: 'نشط في الموقع', cls: 'active' },
  { id: 'rest', label: 'في استراحة', cls: 'rest' },
  { id: 'done', label: 'تم إنجاز المهام', cls: 'done' },
  { id: 'off', label: 'غير متصل', cls: 'off' },
];

function ftStatusMeta(id) {
  return FT_STATUS_OPTIONS.find(s => s.id === id) || FT_STATUS_OPTIONS[3];
}

function ftLoadUsers() {
  const raw = localStorage.getItem(FT_USERS_KEY);
  if (!raw) {
    const seed = [
      {
        id: 'u-admin',
        username: 'admin',
        password: 'admin123',
        role: 'manager',
        name: 'مدير النظام',
        location: '—',
        tasksCount: 0,
        status: 'active',
        updatedAt: Date.now(),
      },
    ];
    localStorage.setItem(FT_USERS_KEY, JSON.stringify(seed));
    return seed;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function ftSaveUsers(users) {
  localStorage.setItem(FT_USERS_KEY, JSON.stringify(users));
}

function ftGetSession() {
  try {
    return JSON.parse(sessionStorage.getItem(FT_SESSION_KEY) || 'null');
  } catch (e) {
    return null;
  }
}

function ftSetSession(userId) {
  sessionStorage.setItem(FT_SESSION_KEY, JSON.stringify({ userId }));
}

function ftClearSession() {
  sessionStorage.removeItem(FT_SESSION_KEY);
}

function ftCurrentUser() {
  const session = ftGetSession();
  if (!session) return null;
  const users = ftLoadUsers();
  return users.find(u => u.id === session.userId) || null;
}

let ftPendingCounter = 0;
let ftPendingStatus = 'active';
let ftDeleteTargetId = null;

function ftHandleLogin(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('ft-login-username');
  const passwordInput = document.getElementById('ft-login-password');
  const errorBox = document.getElementById('ft-login-error');

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const users = ftLoadUsers();
  const found = users.find(u => u.username === username && u.password === password);

  if (!found) {
    errorBox.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    errorBox.classList.remove('hidden');
    return;
  }
  errorBox.classList.add('hidden');
  ftSetSession(found.id);
  ftRenderAuthGate();
}

function ftLogout() {
  ftClearSession();
  const form = document.getElementById('ft-login-form');
  if (form) form.reset();
  ftRenderAuthGate();
}

// يعرض بوابة الدخول أو التطبيق حسب حالة الجلسة الحالية
function ftRenderAuthGate() {
  const loginScreen = document.getElementById('ft-login-screen');
  const appWrapper = document.getElementById('ft-app-wrapper');
  const currentUser = ftCurrentUser();

  if (!currentUser) {
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (appWrapper) appWrapper.classList.add('hidden');
    return;
  }

  if (loginScreen) loginScreen.classList.add('hidden');
  if (appWrapper) appWrapper.classList.remove('hidden');
  ftBootAuthenticatedApp();
}

// يهيّئ الواجهة بعد التأكد من وجود مستخدم مسجل دخوله
async function ftBootAuthenticatedApp() {
  const currentUser = ftCurrentUser();
  if (!currentUser) return;

  const nameBadge = document.getElementById('ft-user-name-badge');
  const roleBadge = document.getElementById('ft-user-role-badge');
  if (nameBadge) nameBadge.textContent = currentUser.name;
  if (roleBadge) roleBadge.textContent = currentUser.role === 'manager' ? 'مسؤول' : 'موظف';

  const managerOnlyNav = document.getElementById('nav-item-employees');
  const employeeOnlyNav = document.getElementById('nav-item-profile');
  const managerMessagesNav = document.getElementById('nav-item-messages');
  const managerMapNav = document.getElementById('nav-item-tech-map');
  if (managerOnlyNav) managerOnlyNav.classList.toggle('hidden', currentUser.role !== 'manager');
  if (employeeOnlyNav) employeeOnlyNav.classList.toggle('hidden', currentUser.role !== 'employee');
  if (managerMessagesNav) managerMessagesNav.classList.toggle('hidden', currentUser.role !== 'manager');
  if (managerMapNav) managerMapNav.classList.toggle('hidden', currentUser.role !== 'manager');

  // تجهيز نظام الرسائل: طلب إذن الإشعارات وتحديث شارات العداد غير المقروء
  ftRequestNotificationPermission();
  ftUpdateMessagesBadges();

  // بدء متابعة موقع الموظف تلقائياً (بصمت) ليظهر على خريطة المسؤول لحظياً
  ftStartLocationTrackingIfEmployee(currentUser);

  // إخفاء تبويبات نظام التذاكر (لوحة التحكم، المهام، التقارير...) عن الموظف
  // ليبقى له واجهته الخاصة فقط لتحديد حالته وعدد مهامه
  document.querySelectorAll('.ft-manager-only-nav').forEach(btn => {
    btn.classList.toggle('hidden', currentUser.role !== 'manager');
  });

  // توجيه الموظف تلقائياً إلى واجهته الخاصة (تحديد الحالة وعدد المهام)
  // بينما يبقى المسؤول على لوحة التحكم الرئيسية كما هي
  if (currentUser.role === 'employee') {
    const profileNavBtn = document.getElementById('nav-item-profile');
    switchTab('profile', profileNavBtn);
  } else {
    const dashboardNavBtn = document.querySelector('.top-nav-item[onclick*="dashboard"]');
    switchTab('dashboard', dashboardNavBtn);
  }

  // تشغيل التطبيق الأساسي (المهام/التذاكر) مرة واحدة فقط بعد الدخول
  if (!ftBootAuthenticatedApp._initialized) {
    ftBootAuthenticatedApp._initialized = true;
    await seedInitialData();
    updateAppLanguage(currentLang);
    renderWorkOrders('all');

    // إصلاح: تفعيل المزامنة الحقيقية مع Netlify DB. أول شيء نجلب آخر نسخة من التذاكر
    // من السيرفر (حتى لو هذا أول فتح للتطبيق على هذا الجهاز)، ثم نكرر محاولة رفع/جلب
    // التحديثات كل 15 ثانية طالما التطبيق مفتوح ومتصل بالإنترنت، بالإضافة لمحاولة
    // فورية عند عودة الاتصال (موجودة أصلاً بحدث 'online' بالأسفل).
    pullRemoteWorkOrders();
    if (!window._ftSyncIntervalStarted) {
      window._ftSyncIntervalStarted = true;
      setInterval(processSyncQueue, 15000);
    }
  }
}

/* ---------------------- لوحة إدارة الموظفين (للمسؤول) ---------------------- */

function ftHandleAddEmployee(event) {
  event.preventDefault();
  const name = document.getElementById('ft-new-emp-name').value.trim();
  const username = document.getElementById('ft-new-emp-username').value.trim();
  const password = document.getElementById('ft-new-emp-password').value;
  const location = document.getElementById('ft-new-emp-location').value.trim();

  if (!name || !username || !password || !location) return;

  const users = ftLoadUsers();
  if (users.some(u => u.username === username)) {
    alert('اسم المستخدم مستخدم بالفعل، اختر اسماً آخر');
    return;
  }

  users.push({
    id: 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    username,
    password,
    role: 'employee',
    name,
    location,
    tasksCount: 0,
    status: 'active',
    updatedAt: Date.now(),
  });
  ftSaveUsers(users);
  document.getElementById('ft-add-employee-form').reset();
  ftRenderEmployeesView();
}

function ftRenderEmployeesView() {
  const tbody = document.getElementById('ft-employees-table-body');
  if (!tbody) return;
  const users = ftLoadUsers();
  const employees = users.filter(u => u.role === 'employee');

  const statTotal = document.getElementById('ft-stat-emp-total');
  const statActive = document.getElementById('ft-stat-emp-active');
  const statTasks = document.getElementById('ft-stat-emp-tasks');
  const statDone = document.getElementById('ft-stat-emp-done');
  if (statTotal) statTotal.textContent = employees.length;
  if (statActive) statActive.textContent = employees.filter(e => e.status === 'active').length;
  if (statTasks) statTasks.textContent = employees.reduce((sum, e) => sum + (Number(e.tasksCount) || 0), 0);
  if (statDone) statDone.textContent = employees.filter(e => e.status === 'done').length;

  if (employees.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color: var(--text-muted);">لا يوجد موظفون مسجلون بعد — أضف أول موظف من النموذج أعلاه</td></tr>`;
    return;
  }

  tbody.innerHTML = employees.map(emp => {
    const meta = ftStatusMeta(emp.status);
    return `
      <tr>
        <td>${escapeHtml(emp.name)}</td>
        <td>${escapeHtml(emp.username)}</td>
        <td>${escapeHtml(emp.location)}</td>
        <td>${Number(emp.tasksCount) || 0}</td>
        <td><span class="ft-emp-pill ft-emp-${meta.cls}">${meta.label}</span></td>
        <td>${new Date(emp.updatedAt || Date.now()).toLocaleString('ar-EG', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })}</td>
        <td><button class="btn btn-danger" style="padding:6px 12px; font-size:0.8rem;" onclick="ftConfirmDeleteEmployee('${emp.id}')">حذف</button></td>
      </tr>
    `;
  }).join('');
}

function ftConfirmDeleteEmployee(userId) {
  const users = ftLoadUsers();
  const target = users.find(u => u.id === userId);
  if (!target) return;
  if (confirm(`هل أنت متأكد من حذف حساب "${target.name}"؟ لا يمكن التراجع عن هذا الإجراء.`)) {
    ftDeleteTargetId = userId;
    ftSaveUsers(users.filter(u => u.id !== userId));
    ftRenderEmployeesView();
  }
}

/* ---------------------- الملف الشخصي للموظف ---------------------- */

function ftRenderProfileView() {
  const user = ftCurrentUser();
  if (!user) return;

  const nameEl = document.getElementById('ft-profile-name');
  const locEl = document.getElementById('ft-profile-location');
  const counterEl = document.getElementById('ft-profile-counter');
  const statusGrid = document.getElementById('ft-profile-status-grid');
  const saveNote = document.getElementById('ft-profile-save-note');

  if (nameEl) nameEl.textContent = user.name;
  if (locEl) locEl.textContent = user.location;

  const locNote = document.getElementById('ft-location-status-note');
  if (locNote) {
    if (typeof user.lat === 'number' && user.locUpdatedAt) {
      const timeStr = new Date(user.locUpdatedAt).toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' });
      locNote.textContent = currentLang === 'ar' ? `✅ تتم مشاركة موقعك (آخر تحديث ${timeStr})` : `✅ Sharing your location (updated ${timeStr})`;
    } else {
      locNote.textContent = currentLang === 'ar' ? 'لم تُفعّل مشاركة موقعك بعد' : 'Location sharing not enabled yet';
    }
  }

  ftPendingCounter = Number(user.tasksCount) || 0;
  ftPendingStatus = user.status || 'active';
  if (counterEl) counterEl.textContent = ftPendingCounter;
  if (saveNote) saveNote.textContent = '';

  if (statusGrid) {
    statusGrid.innerHTML = FT_STATUS_OPTIONS.map(s => `
      <button type="button" class="ft-status-option ft-sel-${s.cls} ${s.id === ftPendingStatus ? 'ft-active-choice' : ''}" onclick="ftSelectStatus('${s.id}', this)">
        <span class="ft-status-dot"></span>${s.label}
      </button>
    `).join('');
  }

  // تحديث صندوق الرسائل الخاص بالموظف (وارد من المسؤول + نموذج الإرسال)
  ftRenderEmployeeMessagesPanel();

  // تحديث قائمة مهام الموظف الفرعية (مهامي الحالية / المحولة إليّ / سجل مهامي)
  ftRenderProfileTasksPanel(ftProfileTasksActiveTab);
}

/* ---------------------- قائمة مهام الموظف الفرعية داخل ملفه الشخصي ---------------------- */

let ftProfileTasksActiveTab = 'assigned';

// التبديل بين تبويبات "مهامي الحالية / المهام المحولة إليّ / سجل مهامي المكتملة"
function ftSwitchProfileTasksTab(tab, btnElement) {
  ftProfileTasksActiveTab = tab;

  document.querySelectorAll('.ft-profile-tasks-tab').forEach(btn => {
    btn.classList.remove('btn-teal-add', 'active');
    btn.classList.add('btn-secondary');
  });
  if (btnElement) {
    btnElement.classList.remove('btn-secondary');
    btnElement.classList.add('btn-teal-add', 'active');
  }

  ftRenderProfileTasksPanel(tab);
}

// عرض جدول مهام الموظف الحالي حسب التبويب المختار
async function ftRenderProfileTasksPanel(tab = 'assigned') {
  const user = ftCurrentUser();
  const tbody = document.getElementById('ft-profile-tasks-list');
  if (!user || !tbody || user.role !== 'employee') return;

  const allOrders = await db.workOrders.toArray();
  const myName = (user.name || '').trim();

  let filtered = [];
  if (tab === 'assigned') {
    // المهام المسندة إلى هذا الموظف أصلاً ولم تُنقل عنه، وما زالت قيد التنفيذ أو معلقة
    filtered = allOrders.filter(o => (o.assignedTo || '').trim() === myName && o.status !== 'completed');
  } else if (tab === 'transferred') {
    // المهام التي تم تحويلها/نقلها لتصبح مسؤولية هذا الموظف
    filtered = allOrders.filter(o => (o.transferredTo || '').trim() === myName);
  } else if (tab === 'history') {
    // سجل مهام هذا الموظف المكتملة (سواء كانت مسندة إليه أصلاً أو محولة إليه)
    filtered = allOrders.filter(o => o.status === 'completed' && ((o.assignedTo || '').trim() === myName || (o.transferredTo || '').trim() === myName));
  }

  const statusMap = {
    pending: { text: i18nTranslations[currentLang].filterPending, class: "pending" },
    completed: { text: i18nTranslations[currentLang].filterCompleted, class: "completed" },
    on_hold: { text: i18nTranslations[currentLang].filterOnhold, class: "on_hold" },
    transferred: { text: `${i18nTranslations[currentLang].filterTransferred} 🔄`, class: "on_hold" }
  };

  if (filtered.length === 0) {
    const emptyMsgMap = {
      assigned: currentLang === 'ar' ? 'لا توجد مهام حالية مسندة إليك.' : 'No current tasks assigned to you.',
      transferred: currentLang === 'ar' ? 'لا توجد مهام محولة إليك حتى الآن.' : 'No tasks transferred to you yet.',
      history: currentLang === 'ar' ? 'لا يوجد سجل مهام مكتملة بعد.' : 'No completed task history yet.'
    };
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color: var(--text-muted);">${emptyMsgMap[tab] || ''}</td></tr>`;
    return;
  }

  // ترتيب حسب الأولوية أولاً كي يعرف الفني من أين يبدأ
  filtered.sort((a, b) => getPriorityMeta(a.priority).order - getPriorityMeta(b.priority).order);

  tbody.innerHTML = filtered.map(order => {
    const statusObj = statusMap[order.status] || { text: i18nTranslations[currentLang].filterPending, class: "pending" };
    const slaStatus = ftGetSlaStatus(order);
    const slaRowClass = slaStatus === 'overdue' ? 'ft-row-sla-overdue' : (slaStatus === 'approaching' ? 'ft-row-sla-approaching' : '');
    return `
      <tr class="${slaRowClass}">
        <td><strong>${order.id}</strong></td>
        <td>${escapeHtml(order.customerName || '')}</td>
        <td>${escapeHtml(order.serviceType || '')}</td>
        <td><span class="status-pill ${statusObj.class}">${statusObj.text}</span></td>
        <td>${priorityPillHtml(order.priority)}</td>
        <td>${order.deadline || '—'} ${ftSlaBadgeHtml(slaStatus)}</td>
        <td><button class="action-icon-btn" title="${currentLang === 'ar' ? 'عرض التفاصيل' : 'View details'}" onclick="openTicketDetails(${order.id})">📝</button></td>
      </tr>
    `;
  }).join('');
}

function ftSelectStatus(statusId, btnElement) {
  ftPendingStatus = statusId;
  const grid = document.getElementById('ft-profile-status-grid');
  if (grid) {
    [...grid.children].forEach(c => c.classList.remove('ft-active-choice'));
  }
  if (btnElement) btnElement.classList.add('ft-active-choice');
}

function ftCounterChange(delta) {
  ftPendingCounter = Math.max(0, ftPendingCounter + delta);
  const counterEl = document.getElementById('ft-profile-counter');
  if (counterEl) counterEl.textContent = ftPendingCounter;
}

function ftSaveProfileUpdate() {
  const session = ftGetSession();
  if (!session) return;
  const users = ftLoadUsers();
  const idx = users.findIndex(u => u.id === session.userId);
  if (idx === -1) return;

  users[idx].tasksCount = ftPendingCounter;
  users[idx].status = ftPendingStatus;
  users[idx].updatedAt = Date.now();
  ftSaveUsers(users);

  const saveNote = document.getElementById('ft-profile-save-note');
  if (saveNote) {
    saveNote.textContent = currentLang === 'ar' ? 'تم حفظ التحديث ✓' : 'Update saved ✓';
    setTimeout(() => { saveNote.textContent = ''; }, 2500);
  }
}

// مزامنة حية: أي تحديث من الموظف ينعكس مباشرة في جدول المسؤول
window.addEventListener('storage', (e) => {
  if (e.key === FT_USERS_KEY) {
    const view = document.getElementById('view-employees');
    if (view && !view.classList.contains('hidden')) ftRenderEmployeesView();
    const mapView = document.getElementById('view-tech-map');
    if (mapView && !mapView.classList.contains('hidden')) renderTechMap();
  }
  if (e.key === FT_MESSAGES_KEY) {
    ftUpdateMessagesBadges();
  }
});
setInterval(() => {
  const view = document.getElementById('view-employees');
  if (view && !view.classList.contains('hidden')) ftRenderEmployeesView();
  ftUpdateMessagesBadges();
  const mapView = document.getElementById('view-tech-map');
  if (mapView && !mapView.classList.contains('hidden')) renderTechMap();
  ftCheckSlaAndNotify();
}, 4000);

/* ==========================================================================
   خريطة تتبع مواقع الفنيين المباشرة (Live Technicians Map)
   يعتمد على Leaflet.js + OpenStreetMap لعرض الخريطة، وعلى Geolocation API
   لدى جهاز كل موظف لتحديث موقعه (يُخزَّن ضمن سجل المستخدم بنفس أسلوب
   نظام حسابات الموظفين، ويُقرأ لاحقاً من صفحة خريطة المسؤول)
   ========================================================================== */

let ftLocationWatchId = null;
let ftMapInstance = null;
let ftMapMarkers = {};

// تحديث موقع المستخدم الحالي (الموظف) في سجله الشخصي
function ftUpdateMyLocation(lat, lng) {
  const session = ftGetSession();
  if (!session) return;
  const users = ftLoadUsers();
  const idx = users.findIndex(u => u.id === session.userId);
  if (idx === -1) return;
  users[idx].lat = lat;
  users[idx].lng = lng;
  users[idx].locUpdatedAt = Date.now();
  ftSaveUsers(users);

  const note = document.getElementById('ft-location-status-note');
  if (note) {
    const timeStr = new Date().toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    note.textContent = currentLang === 'ar' ? `✅ تتم مشاركة موقعك (آخر تحديث ${timeStr})` : `✅ Sharing your location (updated ${timeStr})`;
  }
}

// بدء متابعة الموقع تلقائياً بعد تسجيل دخول موظف (بصمت، بدون إزعاج لو رفض الإذن)
function ftStartLocationTrackingIfEmployee(user) {
  if (!user || user.role !== 'employee') return;
  if (ftLocationWatchId !== null) return; // المتابعة مفعّلة مسبقاً
  if (!navigator.geolocation) return;

  ftLocationWatchId = navigator.geolocation.watchPosition(
    (pos) => ftUpdateMyLocation(pos.coords.latitude, pos.coords.longitude),
    (err) => console.warn('Geolocation tracking not active:', err.message),
    { enableHighAccuracy: true, maximumAge: 15000, timeout: 20000 }
  );
}

// زر صريح بصفحة الموظف لتفعيل مشاركة الموقع (يطلب الإذن فوراً بضغطة المستخدم)
function ftManualEnableLocationSharing() {
  if (!navigator.geolocation) {
    alert(currentLang === 'ar' ? 'هذا المتصفح لا يدعم تحديد الموقع الجغرافي' : 'Geolocation is not supported by this browser');
    return;
  }
  const user = ftCurrentUser();
  const note = document.getElementById('ft-location-status-note');
  if (note) note.textContent = currentLang === 'ar' ? '⏳ جارِ تحديد موقعك...' : '⏳ Locating you...';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      ftUpdateMyLocation(pos.coords.latitude, pos.coords.longitude);
      ftStartLocationTrackingIfEmployee(user);
    },
    (err) => {
      console.error('Geolocation error:', err);
      if (note) note.textContent = currentLang === 'ar' ? '❌ تعذر الحصول على الموقع، تأكد من منح الإذن' : '❌ Could not get location, please grant permission';
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
}

// رسم/تحديث خريطة تتبع الفنيين (صفحة المسؤول)
function renderTechMap() {
  const mapEl = document.getElementById('tech-map');
  if (!mapEl || typeof L === 'undefined') return;

  const employees = ftLoadUsers().filter(u => u.role === 'employee');
  const withLocation = employees.filter(e => typeof e.lat === 'number' && typeof e.lng === 'number');

  if (!ftMapInstance) {
    ftMapInstance = L.map('tech-map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(ftMapInstance);
  }

  // مسح العلامات القديمة قبل إعادة رسم المواقع المحدّثة
  Object.values(ftMapMarkers).forEach(m => ftMapInstance.removeLayer(m));
  ftMapMarkers = {};

  if (withLocation.length === 0) {
    ftMapInstance.setView([31.9038, 35.2034], 9); // موقع افتراضي (رام الله) حتى تتوفر مواقع فعلية
  } else {
    const bounds = [];
    withLocation.forEach(emp => {
      const marker = L.marker([emp.lat, emp.lng]).addTo(ftMapInstance);
      const minutesAgo = emp.locUpdatedAt ? Math.round((Date.now() - emp.locUpdatedAt) / 60000) : null;
      const agoText = minutesAgo === null ? '' : (minutesAgo < 1 ? (currentLang === 'ar' ? 'الآن' : 'just now') : (currentLang === 'ar' ? `منذ ${minutesAgo} دقيقة` : `${minutesAgo} min ago`));
      marker.bindPopup(`<strong>${escapeHtml(emp.name)}</strong><br>${escapeHtml(emp.location || '')}<br><span style="color:#666; font-size:11px;">${agoText}</span>`);
      ftMapMarkers[emp.id] = marker;
      bounds.push([emp.lat, emp.lng]);
    });
    if (bounds.length === 1) {
      ftMapInstance.setView(bounds[0], 14);
    } else {
      ftMapInstance.fitBounds(bounds, { padding: [40, 40] });
    }
  }

  // قائمة نصية أسفل الخريطة بحالة كل موظف
  const legend = document.getElementById('tech-map-legend');
  if (!legend) return;

  if (employees.length === 0) {
    legend.innerHTML = `<p style="color: var(--text-muted); font-size:0.85rem;">${currentLang === 'ar' ? 'لا يوجد موظفون مسجلون بعد.' : 'No employees registered yet.'}</p>`;
    return;
  }

  legend.innerHTML = employees.map(emp => {
    const hasLoc = typeof emp.lat === 'number';
    const minutesAgo = emp.locUpdatedAt ? Math.round((Date.now() - emp.locUpdatedAt) / 60000) : null;
    let statusText;
    if (!hasLoc) {
      statusText = currentLang === 'ar' ? '📍 لم يشارك موقعه بعد' : '📍 No location shared yet';
    } else if (minutesAgo < 5) {
      statusText = currentLang === 'ar' ? '🟢 نشط الآن' : '🟢 Live';
    } else {
      statusText = currentLang === 'ar' ? `🟡 آخر تحديث منذ ${minutesAgo} دقيقة` : `🟡 Updated ${minutesAgo} min ago`;
    }
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.02); border:1px solid var(--border-color); border-radius:8px; padding:10px 14px; flex-wrap:wrap; gap:8px;">
        <div>
          <strong>${escapeHtml(emp.name)}</strong>
          <div style="font-size:0.78rem; color:var(--text-muted);">${escapeHtml(emp.location || '')}</div>
        </div>
        <div style="font-size:0.8rem; display:flex; align-items:center; gap:6px;">
          <span>${statusText}</span>
          ${hasLoc ? `<button class="action-icon-btn" title="${currentLang === 'ar' ? 'تركيز على الفني' : 'Focus'}" onclick="ftFocusTech('${emp.id}')">🎯</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// تركيز الخريطة على فني محدد عند الضغط على 🎯 بجانب اسمه في القائمة
function ftFocusTech(empId) {
  const marker = ftMapMarkers[empId];
  if (marker && ftMapInstance) {
    ftMapInstance.setView(marker.getLatLng(), 15);
    marker.openPopup();
  }
}

/* ==========================================================================
   ميزة 1: توزيع تلقائي حسب أقرب فني (Nearest Available Technician Suggestion)
   تعتمد على مواقع الفنيين الحية (lat/lng) المخزَّنة أعلاه، وعلى تحويل عنوان
   التذكرة الجديدة (نص) إلى إحداثيات عبر خدمة Nominatim/OpenStreetMap
   المجانية، ثم ترتيب الفنيين حسب المسافة الجوية (Haversine) الأقرب.
   الاقتراح مساعد فقط ولا يفرض التعيين — يبقى بإمكان المسؤول التعديل يدوياً.
   ========================================================================== */

// حساب المسافة الجوية بين نقطتين (كم) بمعادلة Haversine
function ftHaversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // نصف قطر الأرض بالكيلومتر
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// تحويل عنوان نصي إلى إحداثيات عبر Nominatim (يتطلب اتصال إنترنت، يفشل بأمان دون اتصال)
async function ftGeocodeAddress(addressText) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(addressText)}`;
    const res = await fetch(url, { signal: controller.signal, headers: { 'Accept-Language': currentLang === 'ar' ? 'ar' : 'en' } });
    clearTimeout(timeoutId);
    if (!res.ok) return null;
    const results = await res.json();
    if (!Array.isArray(results) || results.length === 0) return null;
    return { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) };
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn('Geocoding failed (offline or no results):', err.message);
    return null;
  }
}

// الزر الرئيسي: يُقرأ عنوان التذكرة الجديدة، يحدد إحداثياته، ثم يقترح أقرب 3 فنيين
async function ftSuggestNearestTechnician() {
  const addressInput = document.getElementById('new-cust-address-text');
  const statusNote = document.getElementById('nearest-tech-status-note');
  const suggestionsBox = document.getElementById('nearest-tech-suggestions');
  if (!addressInput || !statusNote || !suggestionsBox) return;

  const addressText = addressInput.value.trim();
  suggestionsBox.innerHTML = '';

  if (!addressText) {
    statusNote.textContent = currentLang === 'ar'
      ? '⚠️ يرجى إدخال العنوان أولاً لتحديد أقرب فني.'
      : '⚠️ Please enter the address first to find the nearest technician.';
    return;
  }

  statusNote.textContent = i18nTranslations[currentLang].suggestingNearestTech;

  const coords = await ftGeocodeAddress(addressText);
  if (!coords) {
    statusNote.textContent = currentLang === 'ar'
      ? '❌ تعذر تحديد إحداثيات العنوان (تأكد من الاتصال بالإنترنت) — يمكنك إسناد الفني يدوياً.'
      : '❌ Could not resolve address coordinates (check your internet connection) — you can still assign a technician manually.';
    return;
  }

  const employees = ftLoadUsers().filter(u => u.role === 'employee' && typeof u.lat === 'number' && typeof u.lng === 'number');
  if (employees.length === 0) {
    statusNote.textContent = currentLang === 'ar'
      ? 'لا يوجد فنيون يشاركون موقعهم الحي حالياً.'
      : 'No technicians are currently sharing their live location.';
    return;
  }

  const ranked = employees.map(emp => ({
    emp,
    distanceKm: ftHaversineKm(coords.lat, coords.lng, emp.lat, emp.lng)
  })).sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 3);

  statusNote.textContent = currentLang === 'ar'
    ? `📍 أقرب الفنيين إلى عنوان التذكرة (بناءً على آخر موقع مُشارَك):`
    : `📍 Nearest technicians to the ticket address (based on last shared location):`;

  suggestionsBox.innerHTML = ranked.map(r => {
    const minutesAgo = r.emp.locUpdatedAt ? Math.round((Date.now() - r.emp.locUpdatedAt) / 60000) : null;
    const agoText = minutesAgo === null
      ? (currentLang === 'ar' ? 'وقت التحديث غير معروف' : 'update time unknown')
      : (minutesAgo < 5
        ? (currentLang === 'ar' ? '🟢 نشط الآن' : '🟢 Live')
        : (currentLang === 'ar' ? `🟡 آخر تحديث منذ ${minutesAgo} دقيقة` : `🟡 Updated ${minutesAgo} min ago`));
    return `
      <button type="button" class="ft-nearest-tech-item" onclick="ftPickNearestTechnician('${(r.emp.name || '').replace(/'/g, "\\'")}')">
        <div>
          <div class="ft-nearest-tech-name">${escapeHtml(r.emp.name)}</div>
          <div class="ft-nearest-tech-meta">${agoText}</div>
        </div>
        <div class="ft-nearest-tech-distance">${r.distanceKm.toFixed(1)} ${currentLang === 'ar' ? 'كم' : 'km'}</div>
      </button>
    `;
  }).join('');
}

// عند اختيار المسؤول أحد الفنيين المقترَحين، يُملأ حقل "المسند إليه" تلقائياً (ويبقى قابلاً للتعديل اليدوي)
function ftPickNearestTechnician(techName) {
  const input = document.getElementById('new-assigned-tech');
  if (input) input.value = techName;
  const statusNote = document.getElementById('nearest-tech-status-note');
  if (statusNote) {
    statusNote.textContent = currentLang === 'ar'
      ? `✅ تم إسناد المهمة إلى: ${techName} (يمكن تعديل الاسم يدوياً في أي وقت)`
      : `✅ Task assigned to: ${techName} (you can still edit this manually)`;
  }
  const suggestionsBox = document.getElementById('nearest-tech-suggestions');
  if (suggestionsBox) suggestionsBox.innerHTML = '';
}

/* ==========================================================================
   ميزة 2: ترتيب مسار اليوم للفني (Optimized Daily Route)
   تجمع كل مهام الفني المجدولة لليوم الحالي (غير المكتملة) من "مهامي الحالية"
   و"المهام المحولة إليّ"، ثم تفتح رابط اتجاهات خرائط جوجل مع تفعيل
   waypoints=optimize:true الذي يرتب المحطات بأفضل مسار تلقائياً بدل الترتيب
   العشوائي، بدءاً من موقع الفني الحالي (يحدده المتصفح/الهاتف عند الفتح).
   بديل Waze: يفتح أقرب/أول محطة فقط لأن Waze لا يدعم محطات متعددة عبر الرابط.
   ========================================================================== */

// إعادة قائمة مهام اليوم الحالي (غير المكتملة) للفني الحالي، مرتبة حسب الأولوية
async function ftGetTodaysTasksForCurrentTech() {
  const user = ftCurrentUser();
  if (!user || user.role !== 'employee') return [];

  const myName = (user.name || '').trim();
  const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD بنفس صيغة حقل deadline

  const allOrders = await db.workOrders.toArray();
  const todays = allOrders.filter(o =>
    o.status !== 'completed' &&
    o.deadline === todayStr &&
    ((o.assignedTo || '').trim() === myName || (o.transferredTo || '').trim() === myName)
  );

  todays.sort((a, b) => getPriorityMeta(a.priority).order - getPriorityMeta(b.priority).order);
  return todays;
}

// فتح مسار اليوم الأمثل على خرائط جوجل (Google Maps Directions - optimize:true)
async function ftOpenTodayRouteGoogleMaps() {
  const todaysTasks = await ftGetTodaysTasksForCurrentTech();
  if (todaysTasks.length === 0) {
    alert(i18nTranslations[currentLang].noTasksToday);
    return;
  }

  const addresses = todaysTasks.map(o => (o.address || '').trim()).filter(a => a !== "");
  if (addresses.length === 0) {
    alert(i18nTranslations[currentLang].noAddressToday);
    return;
  }

  const destination = encodeURIComponent(addresses[addresses.length - 1]);
  let url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;

  if (addresses.length > 1) {
    const waypoints = addresses.slice(0, -1).map(a => encodeURIComponent(a)).join('|');
    url += `&waypoints=optimize:true|${waypoints}`;
  }

  window.open(url, '_blank');
}

// فتح أقرب/أول محطة على Waze (Waze لا يدعم محطات متعددة مرتبة عبر رابط واحد)
async function ftOpenTodayRouteWaze() {
  const todaysTasks = await ftGetTodaysTasksForCurrentTech();
  if (todaysTasks.length === 0) {
    alert(i18nTranslations[currentLang].noTasksToday);
    return;
  }

  const firstAddress = (todaysTasks[0].address || '').trim();
  if (!firstAddress) {
    alert(i18nTranslations[currentLang].noAddressToday);
    return;
  }

  if (todaysTasks.length > 1) {
    const note = currentLang === 'ar'
      ? `لديك ${todaysTasks.length} مهام اليوم. Waze يدعم وجهة واحدة فقط، سيتم فتح أقرب/أول محطة حسب الأولوية. لمسار كامل مرتّب لكل المحطات استخدم زر خرائط جوجل.`
      : `You have ${todaysTasks.length} tasks today. Waze only supports one destination, so the first/nearest stop by priority will open. For the full optimized route use the Google Maps button.`;
    alert(note);
  }

  const url = `https://waze.com/ul?q=${encodeURIComponent(firstAddress)}&navigate=yes`;
  window.open(url, '_blank');
}

/* ==========================================================================
   نظام الرسائل والإشعارات بين الموظف والمسؤول (Employee <-> Manager Messaging)
   يخزَّن في LocalStorage بنفس أسلوب نظام حسابات الموظفين أعلاه، ويُحدَّث حياً
   عبر أحداث storage والفحص الدوري كما هو معمول به بالفعل في هذا الملف.
   ========================================================================== */

const FT_MESSAGES_KEY = 'ft_messages_v1';

// أنواع الرسائل المتاحة وتسمياتها بالعربي/الإنجليزي
const FT_MSG_TYPES = {
  note: { ar: '📝 ملاحظة عامة', en: '📝 General Note' },
  task_update: { ar: '🔧 تحديث عن مهمة', en: '🔧 Task Update' },
  task_request: { ar: '🙋 طلب استلام مهمة', en: '🙋 Task Request' },
  transfer_request: { ar: '🔄 طلب تبديل مهمة', en: '🔄 Transfer Request' },
  assignment: { ar: '📌 تعيين / تفاصيل مهمة', en: '📌 Assignment' },
  update: { ar: '📢 تحديث من المسؤول', en: '📢 Update' },
  broadcast: { ar: '📣 إشعار عام لجميع الموظفين', en: '📣 Broadcast' }
};

function ftMsgTypeLabel(type) {
  const meta = FT_MSG_TYPES[type];
  if (!meta) return type;
  return currentLang === 'ar' ? meta.ar : meta.en;
}

function ftLoadMessages() {
  const raw = localStorage.getItem(FT_MESSAGES_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function ftSaveMessages(msgs) {
  localStorage.setItem(FT_MESSAGES_KEY, JSON.stringify(msgs));
}

let ftLastKnownUnread = 0;

// طلب إذن إشعارات المتصفح مرة واحدة (اختياري وغير إلزامي لعمل التطبيق)
function ftRequestNotificationPermission() {
  if (typeof Notification === 'undefined') return;
  if (Notification.permission === 'default') {
    Notification.requestPermission().catch(() => {});
  }
}

function ftMaybeBrowserNotify(title, body) {
  try {
    if (typeof Notification === 'undefined') return;
    if (Notification.permission === 'granted') {
      new Notification(title, { body, icon: './icons/icon-192.png' });
    }
  } catch (e) {
    // تجاهل أي بيئة لا تدعم الإشعارات
  }
}

/* ==========================================================================
   ميزة تنبيه اقتراب الموعد النهائي (SLA Deadline Alert & Escalation)
   تفحص كل التذاكر غير المكتملة دورياً، وتصنّفها:
   - "متأخرة" (overdue): تجاوز موعدها النهائي ولم تُغلق بعد.
   - "يقترب موعدها" (approaching): موعدها اليوم أو غداً.
   يُصعَّد الأمر تلقائياً: تلوين أحمر/برتقالي في الجداول + شارة تحذير +
   بانر تنبيه أعلى لوحة المسؤول + إشعار متصفح (مرة واحدة لكل تذكرة باليوم)
   بدل ما يكتشفها المسؤول يدوياً بمراجعة كل تذكرة على حدة.
   ========================================================================== */

const FT_SLA_NOTIFIED_KEY = 'ft_sla_notified_v1';

// إعادة تاريخ اليوم/الغد بصيغة YYYY-MM-DD (نفس صيغة حقل deadline)
function ftDateStrOffset(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().slice(0, 10);
}

// تصنيف حالة SLA لتذكرة واحدة: 'overdue' | 'approaching' | null (لا خطر)
function ftGetSlaStatus(order) {
  if (!order || order.status === 'completed' || !order.deadline) return null;
  const todayStr = ftDateStrOffset(0);
  const tomorrowStr = ftDateStrOffset(1);
  if (order.deadline < todayStr) return 'overdue';
  if (order.deadline === todayStr || order.deadline === tomorrowStr) return 'approaching';
  return null;
}

// شارة HTML صغيرة تُعرض بجانب التذاكر المهدَّدة بتجاوز SLA
function ftSlaBadgeHtml(slaStatus) {
  if (slaStatus === 'overdue') {
    return `<span class="sla-badge sla-badge-overdue">${i18nTranslations[currentLang].slaOverdueBadge}</span>`;
  }
  if (slaStatus === 'approaching') {
    return `<span class="sla-badge sla-badge-approaching">${i18nTranslations[currentLang].slaApproachingBadge}</span>`;
  }
  return '';
}

// جلب/حفظ مجموعة التذاكر التي سبق تنبيه المسؤول بها اليوم (لتفادي تكرار الإشعار)
function ftLoadSlaNotifiedState() {
  try {
    const raw = localStorage.getItem(FT_SLA_NOTIFIED_KEY);
    const state = raw ? JSON.parse(raw) : null;
    const todayStr = ftDateStrOffset(0);
    if (!state || state.date !== todayStr) {
      return { date: todayStr, ids: [] };
    }
    return state;
  } catch (e) {
    return { date: ftDateStrOffset(0), ids: [] };
  }
}
function ftSaveSlaNotifiedState(state) {
  try {
    localStorage.setItem(FT_SLA_NOTIFIED_KEY, JSON.stringify(state));
  } catch (e) {
    // تجاهل أي بيئة لا تدعم التخزين المحلي
  }
}

// الفحص الدوري الرئيسي: يحدّث بانر التنبيه أعلى لوحة المسؤول ويرسل إشعارات
// المتصفح للتذاكر المهدَّدة الجديدة فقط (مرة واحدة لكل تذكرة في نفس اليوم)
async function ftCheckSlaAndNotify() {
  const user = ftCurrentUser();
  const banner = document.getElementById('sla-alert-banner');
  if (!user || user.role !== 'manager') {
    if (banner) banner.classList.add('hidden');
    return;
  }

  const allOrders = await db.workOrders.toArray();
  const overdue = allOrders.filter(o => ftGetSlaStatus(o) === 'overdue');
  const approaching = allOrders.filter(o => ftGetSlaStatus(o) === 'approaching');

  if (banner) {
    if (overdue.length === 0 && approaching.length === 0) {
      banner.classList.add('hidden');
      banner.innerHTML = '';
    } else {
      banner.classList.remove('hidden');
      banner.classList.toggle('sla-banner-critical', overdue.length > 0);
      const parts = [];
      if (overdue.length > 0) {
        parts.push(`🔴 <strong>${overdue.length}</strong> ${i18nTranslations[currentLang].slaBannerOverdue}`);
      }
      if (approaching.length > 0) {
        parts.push(`🟠 <strong>${approaching.length}</strong> ${i18nTranslations[currentLang].slaBannerApproaching}`);
      }
      banner.innerHTML = `
        <span>${parts.join(' &nbsp;|&nbsp; ')}</span>
        <button type="button" class="btn btn-secondary" style="padding:6px 14px; font-size:0.8rem;" onclick="ftScrollToWorkOrders()">${i18nTranslations[currentLang].slaBannerViewBtn}</button>
      `;
    }
  }

  // إرسال إشعار متصفح مرة واحدة فقط لكل تذكرة جديدة تدخل نطاق الخطر اليوم
  const notifiedState = ftLoadSlaNotifiedState();
  const notifiedSet = new Set(notifiedState.ids);
  let changed = false;

  [...overdue, ...approaching].forEach(o => {
    const key = `${o.id}:${ftGetSlaStatus(o)}`;
    if (!notifiedSet.has(key)) {
      notifiedSet.add(key);
      changed = true;
      const slaStatus = ftGetSlaStatus(o);
      const title = slaStatus === 'overdue'
        ? i18nTranslations[currentLang].slaNotifyOverdueTitle
        : i18nTranslations[currentLang].slaNotifyApproachingTitle;
      const body = `#${o.id} — ${o.customerName || ''} (${o.assignedTo || '—'})`;
      ftMaybeBrowserNotify(title, body);
    }
  });

  if (changed) {
    ftSaveSlaNotifiedState({ date: notifiedState.date, ids: Array.from(notifiedSet) });
  }
}

// تمرير سلس إلى جدول المهام عند الضغط على زر البانر
function ftScrollToWorkOrders() {
  const section = document.getElementById('work-orders-section');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ==========================================================================
   ميزة تصدير Excel / CSV (بالإضافة لتصدير PDF الموجود لكل تذكرة)
   يصدّر جدول المهام الحالية (بعد تطبيق الفلاتر والبحث الحالية) كملف CSV
   قياسي يفتح مباشرة في Excel/Google Sheets لتحليل أسهل من ملف PDF المرئي.
   ========================================================================== */

// تهريب قيمة نصية لتكون آمنة داخل خلية CSV (فواصل/اقتباسات/أسطر جديدة)
function ftCsvEscape(value) {
  const str = (value === null || value === undefined) ? '' : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// بناء ملف CSV من مصفوفة صفوف (كل صف مصفوفة قيم) وتنزيله بالمتصفح
function ftDownloadCSV(rows, fileNamePrefix) {
  const csvContent = rows.map(row => row.map(ftCsvEscape).join(',')).join('\r\n');
  // إضافة BOM لضمان ظهور النصوص العربية بشكل صحيح عند فتح الملف في Excel
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `${fileNamePrefix}-${dateStr}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// تصدير جدول "المهام الحالية" المعروض حالياً (بعد تطبيق نفس فلاتر الحالة/الأولوية/البحث)
async function ftExportWorkOrdersCSV() {
  let orders = await db.workOrders.toArray();

  const statusSelectEl = document.getElementById('filter-all-select');
  const activeStatusFilter = statusSelectEl ? statusSelectEl.value : 'all';
  if (activeStatusFilter && activeStatusFilter !== 'all') {
    orders = orders.filter(o => o.status === activeStatusFilter);
  }
  if (currentPriorityFilter && currentPriorityFilter !== 'all') {
    orders = orders.filter(o => (o.priority || 'normal') === currentPriorityFilter);
  }
  if (globalSearchQuery !== "") {
    orders = orders.filter(o =>
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.phone && o.phone.toLowerCase().includes(globalSearchQuery)) ||
      (o.address && o.address.toLowerCase().includes(globalSearchQuery)) ||
      (o.assignedTo && o.assignedTo.toLowerCase().includes(globalSearchQuery)) ||
      (o.serviceType && o.serviceType.toLowerCase().includes(globalSearchQuery))
    );
  }

  if (orders.length === 0) {
    alert(currentLang === 'ar' ? 'لا توجد بيانات لتصديرها وفق الفلاتر الحالية.' : 'No data to export for the current filters.');
    return;
  }

  const statusLabels = {
    pending: i18nTranslations[currentLang].filterPending,
    completed: i18nTranslations[currentLang].filterCompleted,
    on_hold: i18nTranslations[currentLang].filterOnhold,
    transferred: i18nTranslations[currentLang].filterTransferred
  };

  const header = currentLang === 'ar'
    ? ['رقم المهمة', 'العنوان/العميل', 'الهاتف', 'العنوان التفصيلي', 'الحالة', 'الأولوية', 'المسند إليه', 'محوّلة إلى', 'نوع الخدمة', 'الموعد النهائي', 'حالة SLA', 'تقييم العميل']
    : ['Task ID', 'Customer', 'Phone', 'Address', 'Status', 'Priority', 'Assigned To', 'Transferred To', 'Service Type', 'Deadline', 'SLA Status', 'Customer Rating'];

  const rows = [header];
  orders.forEach(o => {
    const slaStatus = ftGetSlaStatus(o);
    const slaLabel = slaStatus === 'overdue'
      ? i18nTranslations[currentLang].slaOverdueBadge
      : (slaStatus === 'approaching' ? i18nTranslations[currentLang].slaApproachingBadge : '');
    rows.push([
      o.id,
      o.customerName || '',
      o.phone || '',
      o.address || '',
      statusLabels[o.status] || o.status || '',
      o.priority || 'normal',
      o.assignedTo || '',
      o.transferredTo || '',
      o.serviceType || '',
      o.deadline || '',
      slaLabel,
      o.customerRating || ''
    ]);
  });

  ftDownloadCSV(rows, currentLang === 'ar' ? 'المهام' : 'work-orders');
}

// تصدير جدول "تقييم أداء الفنيين" الحالي كملف CSV (نفس بيانات الجدول المعروض بالضبط)
async function ftExportPerformanceCSV() {
  let allOrders = await db.workOrders.toArray();

  if (globalSearchQuery !== "") {
    allOrders = allOrders.filter(o => {
      const techName = ((o.transferredTo && o.transferredTo.trim()) || (o.assignedTo && o.assignedTo.trim()) || '').toLowerCase();
      return techName.includes(globalSearchQuery);
    });
  }

  const techMap = new Map();
  allOrders.forEach(o => {
    const techName = (o.transferredTo && o.transferredTo.trim()) || (o.assignedTo && o.assignedTo.trim());
    if (!techName) return;
    if (!techMap.has(techName)) {
      techMap.set(techName, { total: 0, completed: 0, closeTimes: [], ratings: [] });
    }
    const entry = techMap.get(techName);
    entry.total++;
    if (o.status === 'completed') {
      entry.completed++;
      if (o.completedAt && o.createdAt) entry.closeTimes.push(o.completedAt - o.createdAt);
    }
    if (o.customerRating) entry.ratings.push(o.customerRating);
  });

  if (techMap.size === 0) {
    alert(currentLang === 'ar' ? 'لا توجد بيانات كافية بعد لتصديرها.' : 'Not enough data yet to export.');
    return;
  }

  const header = currentLang === 'ar'
    ? ['الفني', 'المهام المنجزة', 'إجمالي المهام', 'نسبة الإنجاز %', 'متوسط وقت الإغلاق', 'متوسط تقييم العميل']
    : ['Technician', 'Completed', 'Total Tasks', 'Completion Rate %', 'Avg Close Time', 'Avg Customer Rating'];

  const rows = [header];
  techMap.forEach((entry, techName) => {
    const rate = entry.total > 0 ? Math.round((entry.completed / entry.total) * 100) : 0;
    const avgCloseMs = entry.closeTimes.length > 0
      ? entry.closeTimes.reduce((a, b) => a + b, 0) / entry.closeTimes.length
      : null;
    const avgRating = entry.ratings.length > 0
      ? entry.ratings.reduce((a, b) => a + b, 0) / entry.ratings.length
      : null;
    rows.push([
      techName,
      entry.completed,
      entry.total,
      rate,
      avgCloseMs !== null ? formatDurationHuman(avgCloseMs) : '',
      avgRating !== null ? avgRating.toFixed(1) : ''
    ]);
  });

  ftDownloadCSV(rows, currentLang === 'ar' ? 'تقييم-الأداء' : 'technician-performance');
}

// إرسال رسالة جديدة (تُستخدم من نموذج المسؤول ونموذج الموظف كليهما)
// attachment (اختياري): { type: 'image'|'video'|'audio', mediaUrl: base64 string, fileName, mimeType }
function ftSendMessage({ toId, toName, type, workOrderId, workOrderLabel, transferToId, transferToName, content, attachment }) {
  const sender = ftCurrentUser();
  if (!sender) return null;
  if (!content || !content.trim()) {
    alert(currentLang === 'ar' ? 'الرجاء كتابة نص الرسالة' : 'Please write a message');
    return null;
  }

  const msgs = ftLoadMessages();
  const newMsg = {
    id: 'm-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    fromId: sender.id,
    fromName: sender.name,
    fromRole: sender.role,
    toId: toId,
    toName: toName || '',
    type: type,
    workOrderId: workOrderId || null,
    workOrderLabel: workOrderLabel || null,
    transferToId: transferToId || null,
    transferToName: transferToName || null,
    content: content.trim(),
    attachmentType: attachment ? attachment.type : null,
    attachmentUrl: attachment ? attachment.mediaUrl : null,
    attachmentFileName: attachment ? (attachment.fileName || null) : null,
    attachmentMimeType: attachment ? (attachment.mimeType || null) : null,
    read: false,
    createdAt: Date.now(),
  };
  msgs.push(newMsg);
  ftSaveMessages(msgs);
  ftUpdateMessagesBadges();
  return newMsg;
}

// جميع الرسائل الموجّهة للمستخدم الحالي (وارد المسؤول أو وارد الموظف)
function ftInboxFor(user) {
  const msgs = ftLoadMessages();
  if (!user) return [];
  if (user.role === 'manager') {
    return msgs.filter(m => m.toId === 'manager' || m.toId === user.id);
  }
  return msgs.filter(m => m.toId === user.id || m.toId === 'all');
}

function ftUnreadCountFor(user) {
  return ftInboxFor(user).filter(m => !m.read).length;
}

function ftMarkMessageRead(msgId) {
  const msgs = ftLoadMessages();
  const idx = msgs.findIndex(m => m.id === msgId);
  if (idx === -1) return;
  if (!msgs[idx].read) {
    msgs[idx].read = true;
    ftSaveMessages(msgs);
    ftUpdateMessagesBadges();
  }
}

// تحديث شارات عدد الرسائل غير المقروءة في القائمة، وإطلاق إشعار متصفح عند وصول جديد
function ftUpdateMessagesBadges() {
  const user = ftCurrentUser();
  if (!user) return;
  const unread = ftUnreadCountFor(user);

  const managerBadge = document.getElementById('ft-messages-badge');
  if (managerBadge) {
    managerBadge.textContent = unread;
    managerBadge.classList.toggle('hidden', unread === 0);
  }
  const profileBadge = document.getElementById('ft-profile-messages-badge');
  if (profileBadge) {
    profileBadge.textContent = unread;
    profileBadge.classList.toggle('hidden', unread === 0);
  }

  if (unread > ftLastKnownUnread) {
    ftMaybeBrowserNotify(
      currentLang === 'ar' ? 'رسالة جديدة' : 'New message',
      currentLang === 'ar' ? `لديك ${unread} رسالة/رسائل غير مقروءة` : `You have ${unread} unread message(s)`
    );
  }
  ftLastKnownUnread = unread;

  // تحديث صندوق رسائل المسؤول لو كان مفتوحاً حالياً
  const msgView = document.getElementById('view-messages');
  if (msgView && !msgView.classList.contains('hidden')) ftRenderMessagesView();

  // تحديث صندوق رسائل الموظف لو كان في صفحته الشخصية حالياً
  const profileView = document.getElementById('view-profile');
  if (profileView && !profileView.classList.contains('hidden')) ftRenderEmployeeMessagesPanel();
}

// تعبئة قائمة اختيار المهام (لربط الرسالة برقم مهمة اختيارياً)
// ملاحظة: يتم استدعاء هذه الدالة بشكل دوري (كل عدة ثوانٍ) لتحديث القوائم حياً،
// لذا يجب الحفاظ على اختيار المستخدم الحالي بدلاً من إعادة ضبطه للخيار الأول في كل مرة
async function ftPopulateMessageTaskSelect(selectId, onlyAssignedToName) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const previousValue = select.value; // احتفظ بالاختيار الحالي قبل إعادة بناء القائمة
  let orders = await db.workOrders.toArray();
  if (onlyAssignedToName) {
    orders = orders.filter(o => (o.assignedTo || '').trim() === onlyAssignedToName.trim());
  }
  const emptyLabel = currentLang === 'ar' ? '— بدون تحديد مهمة —' : '— No specific task —';
  select.innerHTML = `<option value="">${emptyLabel}</option>` +
    orders.map(o => `<option value="${o.id}">#${o.id} - ${escapeHtml(o.customerName || '')}</option>`).join('');

  // أعد ضبط القيمة المختارة سابقاً إذا كانت لا تزال موجودة ضمن الخيارات الجديدة
  if (previousValue && [...select.options].some(opt => opt.value === previousValue)) {
    select.value = previousValue;
  }
}

// تعبئة قائمة اختيار الموظف المرسَل إليه (للمسؤول)
// نفس ملاحظة الدالة أعلاه: يجب عدم فقدان اختيار المستخدم عند إعادة التحديث الدوري للصندوق
function ftPopulateMessageEmployeeSelect(selectId, includeAllOption) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const previousValue = select.value; // احتفظ بالاختيار الحالي (مثلاً اسم موظف محدد) قبل إعادة البناء
  const employees = ftLoadUsers().filter(u => u.role === 'employee');
  let optionsHtml = '';
  if (includeAllOption) {
    optionsHtml += `<option value="all">${currentLang === 'ar' ? '📣 جميع الموظفين' : '📣 All Employees'}</option>`;
  }
  optionsHtml += employees.map(e => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join('');
  select.innerHTML = optionsHtml;

  // أعد ضبط القيمة المختارة سابقاً إذا كانت لا تزال موجودة ضمن الخيارات الجديدة
  // (هذا هو إصلاح مشكلة: الخيار كان يرجع تلقائياً إلى "جميع الموظفين" مع كل تحديث دوري)
  if (previousValue && [...select.options].some(opt => opt.value === previousValue)) {
    select.value = previousValue;
  }
}

// إظهار/إخفاء حقل اختيار الزميل عند اختيار "طلب تبديل مهمة" في نموذج الموظف
function ftToggleEmployeeMsgFields(type) {
  const wrap = document.getElementById('ft-msg-emp-transfer-wrap');
  if (wrap) wrap.classList.toggle('hidden', type !== 'transfer_request');
}

// عرض قائمة رسائل عامة (تُستخدم لصندوق المسؤول وصندوق الموظف كليهما)
function ftRenderMessageList(containerId, messages, opts = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (messages.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size:0.85rem; padding: 12px 0;">${currentLang === 'ar' ? 'لا توجد رسائل بعد.' : 'No messages yet.'}</p>`;
    return;
  }

  container.innerHTML = messages.map(m => {
    const timeStr = new Date(m.createdAt).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });
    const taskLine = m.workOrderId ? `<div class="ft-msg-meta">📎 ${currentLang === 'ar' ? 'المهمة' : 'Task'}: #${m.workOrderId}${m.workOrderLabel ? ' - ' + escapeHtml(m.workOrderLabel) : ''}</div>` : '';
    const transferLine = (m.type === 'transfer_request' && m.transferToName) ? `<div class="ft-msg-meta">🔄 ${currentLang === 'ar' ? 'إلى الزميل' : 'To colleague'}: ${escapeHtml(m.transferToName)}</div>` : '';
    const toLabel = m.toId === 'all' ? (currentLang === 'ar' ? 'الجميع' : 'All') : (m.toId === 'manager' ? (currentLang === 'ar' ? 'المسؤول' : 'Manager') : (m.toName || ''));
    const senderLine = opts.showSender
      ? `<span class="ft-msg-sender">${escapeHtml(m.fromName)}</span> ${currentLang === 'ar' ? 'إلى' : 'to'} <span class="ft-msg-sender">${escapeHtml(toLabel)}</span>`
      : `<span class="ft-msg-sender">${escapeHtml(m.fromName)}</span>`;

    // عرض المرفق (صورة / فيديو / تسجيل صوتي) المرفق مع الرسالة إن وجد
    let attachmentHtml = '';
    if (m.attachmentUrl && m.attachmentType === 'image') {
      attachmentHtml = `<img src="${m.attachmentUrl}" style="max-width:100%; max-height:220px; border-radius:6px; margin-top:8px; display:block;">`;
    } else if (m.attachmentUrl && m.attachmentType === 'video') {
      attachmentHtml = `<video controls src="${m.attachmentUrl}" style="max-width:100%; max-height:220px; border-radius:6px; margin-top:8px; display:block;"></video>`;
    } else if (m.attachmentUrl && m.attachmentType === 'audio') {
      attachmentHtml = `<audio controls src="${m.attachmentUrl}" style="width:100%; margin-top:8px;"></audio>`;
    }

    return `
      <div class="ft-msg-item ${m.read ? '' : 'ft-msg-unread'}" onclick="ftMarkMessageRead('${m.id}')">
        ${!m.read ? `<span class="ft-msg-unread-dot"></span>` : ''}
        <div class="ft-msg-top-row">
          <span class="ft-msg-type-pill">${ftMsgTypeLabel(m.type)}</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="ft-msg-time">🕒 ${timeStr}</span>
            <button class="ft-msg-delete-btn" onclick="ftDeleteMessage('${m.id}', event)" title="${currentLang === 'ar' ? 'حذف الرسالة' : 'Delete message'}">🗑️</button>
          </div>
        </div>
        <div class="ft-msg-from-line">${senderLine}</div>
        ${taskLine}
        ${transferLine}
        <p class="ft-msg-content">${escapeHtml(m.content)}</p>
        ${attachmentHtml}
      </div>
    `;
  }).join('');
}

// حذف رسالة من صندوق الوارد (متاح للمسؤول وللموظف على رسائله)، مع تحديث الشارات والصندوق المفتوح حالياً
function ftDeleteMessage(msgId, event) {
  if (event) event.stopPropagation(); // لمنع فتح/تعليم الرسالة كمقروءة عند الضغط على زر الحذف
  const confirmMsg = currentLang === 'ar' ? 'هل أنت متأكد من حذف هذه الرسالة؟' : 'Delete this message?';
  if (!confirm(confirmMsg)) return;

  const msgs = ftLoadMessages();
  const filtered = msgs.filter(m => m.id !== msgId);
  ftSaveMessages(filtered);
  ftUpdateMessagesBadges();

  const msgView = document.getElementById('view-messages');
  if (msgView && !msgView.classList.contains('hidden')) ftRenderMessagesView();

  const profileView = document.getElementById('view-profile');
  if (profileView && !profileView.classList.contains('hidden')) ftRenderEmployeeMessagesPanel();
}

/* ----------------------------------------------------------------------
   إرفاق صورة / فيديو / تسجيل صوتي بنموذج رسالة المسؤول (📤 إرسال رسالة / إشعار إلى الموظفين)
   يتم تخزين المرفق كـ base64 مؤقتاً في المتغير أدناه لحين ضغط زر "إرسال"
   ---------------------------------------------------------------------- */

let ftMgrMsgAttachment = null; // { type, mediaUrl, fileName, mimeType }
let ftMgrMsgMediaRecorder = null;
let ftMgrMsgAudioChunks = [];
let ftMgrMsgRecordingTimer = null;
let ftMgrMsgRecordingSeconds = 0;

// عرض معاينة المرفق الحالي (أو إخفاء الصندوق إن لم يوجد مرفق)
function ftRenderMgrMsgAttachmentPreview() {
  const box = document.getElementById('ft-mgr-msg-attachment-preview');
  if (!box) return;

  if (!ftMgrMsgAttachment) {
    box.innerHTML = '';
    return;
  }

  let mediaHtml = '';
  if (ftMgrMsgAttachment.type === 'image') {
    mediaHtml = `<img src="${ftMgrMsgAttachment.mediaUrl}" style="max-width:160px; max-height:120px; border-radius:6px; display:block;">`;
  } else if (ftMgrMsgAttachment.type === 'video') {
    mediaHtml = `<video src="${ftMgrMsgAttachment.mediaUrl}" controls style="max-width:220px; max-height:140px; border-radius:6px; display:block;"></video>`;
  } else if (ftMgrMsgAttachment.type === 'audio') {
    mediaHtml = `<audio src="${ftMgrMsgAttachment.mediaUrl}" controls style="width:220px;"></audio>`;
  }

  box.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px; background: rgba(0,0,0,0.03); border:1px solid var(--border-color); border-radius:8px; padding:8px; flex-wrap:wrap;">
      ${mediaHtml}
      <button type="button" class="btn btn-danger" style="padding:6px 12px; font-size:0.8rem;" onclick="ftClearMgrMsgAttachment()">${currentLang === 'ar' ? '🗑️ إزالة المرفق' : '🗑️ Remove'}</button>
    </div>
  `;
}

// إرفاق صورة أو فيديو عبر اختيار ملف
function ftHandleMgrMsgAttachment(event, kind) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    ftMgrMsgAttachment = {
      type: kind,
      mediaUrl: e.target.result,
      fileName: file.name,
      mimeType: file.type
    };
    ftRenderMgrMsgAttachmentPreview();
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

// إزالة المرفق الحالي قبل الإرسال
function ftClearMgrMsgAttachment() {
  ftMgrMsgAttachment = null;
  ftRenderMgrMsgAttachmentPreview();
}

// تشغيل/إيقاف تسجيل صوتي لإرفاقه مع رسالة المسؤول
async function ftToggleMgrMsgRecording() {
  const isRecording = ftMgrMsgMediaRecorder && ftMgrMsgMediaRecorder.state === 'recording';
  if (isRecording) {
    ftMgrMsgMediaRecorder.stop();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert(currentLang === 'ar' ? 'التسجيل الصوتي غير مدعوم على هذا الجهاز' : 'Audio recording not supported');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    ftMgrMsgAudioChunks = [];
    const supportedMimeType = ftGetSupportedAudioMimeType();
    ftMgrMsgMediaRecorder = supportedMimeType ? new MediaRecorder(stream, { mimeType: supportedMimeType }) : new MediaRecorder(stream);
    const actualMimeType = ftMgrMsgMediaRecorder.mimeType || supportedMimeType || 'audio/webm';
    const fileExt = actualMimeType.includes('mp4') ? 'm4a' : (actualMimeType.includes('ogg') ? 'ogg' : 'webm');

    ftMgrMsgMediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) ftMgrMsgAudioChunks.push(e.data);
    };

    ftMgrMsgMediaRecorder.onstop = () => {
      const audioBlob = new Blob(ftMgrMsgAudioChunks, { type: actualMimeType });
      const reader = new FileReader();
      reader.onloadend = () => {
        ftMgrMsgAttachment = {
          type: 'audio',
          mediaUrl: reader.result,
          fileName: `voice-note.${fileExt}`,
          mimeType: actualMimeType
        };
        ftRenderMgrMsgAttachmentPreview();
      };
      reader.readAsDataURL(audioBlob);
      stream.getTracks().forEach(track => track.stop());

      clearInterval(ftMgrMsgRecordingTimer);
      const recordBtn = document.getElementById('ft-mgr-msg-record-btn');
      const statusEl = document.getElementById('ft-mgr-msg-record-status');
      if (recordBtn) recordBtn.textContent = currentLang === 'ar' ? '🎙️ تسجيل صوتي' : '🎙️ Record Audio';
      if (statusEl) statusEl.classList.add('hidden');
    };

    ftMgrMsgMediaRecorder.start();
    ftMgrMsgRecordingSeconds = 0;
    const recordBtn = document.getElementById('ft-mgr-msg-record-btn');
    const statusEl = document.getElementById('ft-mgr-msg-record-status');
    const timerEl = document.getElementById('ft-mgr-msg-record-timer');
    if (recordBtn) recordBtn.textContent = currentLang === 'ar' ? '⏹️ إيقاف التسجيل' : '⏹️ Stop';
    if (statusEl) statusEl.classList.remove('hidden');
    if (timerEl) timerEl.textContent = '00:00';

    ftMgrMsgRecordingTimer = setInterval(() => {
      ftMgrMsgRecordingSeconds++;
      const mins = String(Math.floor(ftMgrMsgRecordingSeconds / 60)).padStart(2, '0');
      const secs = String(ftMgrMsgRecordingSeconds % 60).padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }, 1000);

  } catch (err) {
    console.error('Mic error:', err);
    alert(currentLang === 'ar' ? 'يجب السماح باستخدام الميكروفون' : 'Microphone permission required');
  }
}

/* ---------------------- صندوق رسائل المسؤول ---------------------- */

async function ftRenderMessagesView() {
  const user = ftCurrentUser();
  if (!user || user.role !== 'manager') return;

  await ftPopulateMessageTaskSelect('ft-msg-mgr-task-select', null);
  ftPopulateMessageEmployeeSelect('ft-msg-mgr-to-select', true);

  const msgs = ftInboxFor(user).sort((a, b) => b.createdAt - a.createdAt);

  const totalEl = document.getElementById('ft-stat-msg-total');
  const unreadEl = document.getElementById('ft-stat-msg-unread');
  const requestsEl = document.getElementById('ft-stat-msg-requests');
  const transfersEl = document.getElementById('ft-stat-msg-transfers');
  if (totalEl) totalEl.textContent = msgs.length;
  if (unreadEl) unreadEl.textContent = msgs.filter(m => !m.read).length;
  if (requestsEl) requestsEl.textContent = msgs.filter(m => m.type === 'task_request').length;
  if (transfersEl) transfersEl.textContent = msgs.filter(m => m.type === 'transfer_request').length;

  ftRenderMessageList('ft-messages-inbox-list', msgs, { showSender: true });
}

// إرسال المسؤول رسالة إلى موظف محدد أو لجميع الموظفين (تعيين/تحديث/إشعار عام)
function ftManagerSendMessage(event) {
  event.preventDefault();
  const toSelect = document.getElementById('ft-msg-mgr-to-select');
  const typeSelect = document.getElementById('ft-msg-mgr-type-select');
  const taskSelect = document.getElementById('ft-msg-mgr-task-select');
  const contentInput = document.getElementById('ft-msg-mgr-content');
  if (!toSelect || !typeSelect || !taskSelect || !contentInput) return;

  const toId = toSelect.value;
  const employees = ftLoadUsers().filter(u => u.role === 'employee');
  const toName = toId === 'all'
    ? (currentLang === 'ar' ? 'جميع الموظفين' : 'All Employees')
    : ((employees.find(e => e.id === toId) || {}).name || '');

  const taskOption = taskSelect.options[taskSelect.selectedIndex];
  const workOrderId = taskSelect.value ? Number(taskSelect.value) : null;
  const workOrderLabel = workOrderId ? taskOption.textContent.replace(/^#\d+\s*-\s*/, '') : null;

  const sent = ftSendMessage({
    toId,
    toName,
    type: typeSelect.value,
    workOrderId,
    workOrderLabel,
    content: contentInput.value,
    attachment: ftMgrMsgAttachment
  });

  if (sent) {
    contentInput.value = '';
    taskSelect.value = '';
    ftClearMgrMsgAttachment();
    ftRenderMessagesView();
  }
}

/* ---------------------- لوحة رسائل الموظف ---------------------- */

// إرسال الموظف ملاحظة/تحديث/طلب استلام مهمة/طلب تبديل مهمة إلى المسؤول
function ftEmployeeSendMessage(event) {
  event.preventDefault();
  const user = ftCurrentUser();
  if (!user) return;

  const typeSelect = document.getElementById('ft-msg-emp-type-select');
  const taskSelect = document.getElementById('ft-msg-emp-task-select');
  const transferSelect = document.getElementById('ft-msg-emp-transfer-select');
  const contentInput = document.getElementById('ft-msg-emp-content');
  if (!typeSelect || !taskSelect || !contentInput) return;

  const taskOption = taskSelect.options[taskSelect.selectedIndex];
  const workOrderId = taskSelect.value ? Number(taskSelect.value) : null;
  const workOrderLabel = workOrderId ? taskOption.textContent.replace(/^#\d+\s*-\s*/, '') : null;

  let transferToId = null, transferToName = null;
  if (typeSelect.value === 'transfer_request' && transferSelect) {
    transferToId = transferSelect.value || null;
    const emp = ftLoadUsers().find(u => u.id === transferToId);
    transferToName = emp ? emp.name : (transferSelect.options[transferSelect.selectedIndex] ? transferSelect.options[transferSelect.selectedIndex].textContent : null);
  }

  const sent = ftSendMessage({
    toId: 'manager',
    toName: currentLang === 'ar' ? 'المسؤول' : 'Manager',
    type: typeSelect.value,
    workOrderId,
    workOrderLabel,
    transferToId,
    transferToName,
    content: contentInput.value
  });

  if (sent) {
    contentInput.value = '';
    taskSelect.value = '';
    const note = document.getElementById('ft-msg-emp-sent-note');
    if (note) {
      note.textContent = currentLang === 'ar' ? 'تم إرسال الرسالة إلى المسؤول ✓' : 'Message sent ✓';
      setTimeout(() => { note.textContent = ''; }, 2500);
    }
    ftRenderEmployeeMessagesPanel();
  }
}

// عرض صندوق وارد الموظف (رسائل من المسؤول + إشعارات عامة) وتجهيز نماذج الإرسال
async function ftRenderEmployeeMessagesPanel() {
  const user = ftCurrentUser();
  if (!user || user.role !== 'employee') return;

  await ftPopulateMessageTaskSelect('ft-msg-emp-task-select', user.name);
  const transferSelect = document.getElementById('ft-msg-emp-transfer-select');
  if (transferSelect) {
    const others = ftLoadUsers().filter(u => u.role === 'employee' && u.id !== user.id);
    transferSelect.innerHTML = others.map(e => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join('');
  }

  const inbox = ftInboxFor(user).sort((a, b) => b.createdAt - a.createdAt);
  ftRenderMessageList('ft-profile-inbox-list', inbox, { showSender: false });

  const badge = document.getElementById('ft-profile-messages-badge');
  if (badge) {
    const unread = inbox.filter(m => !m.read).length;
    badge.textContent = unread;
    badge.classList.toggle('hidden', unread === 0);
  }
}

// ==========================================
// 1. إعداد قاعدة البيانات المحلية IndexedDB (Dexie.js)
// ==========================================
const db = new Dexie("FieldTechDB");

db.version(5).stores({
  workOrders: "++id, customerName, phone, status, serviceType, assignedTo, transferredTo, deadline, signalValue, address",
  hardwareLogs: "++id, workOrderId, serialNumber, deviceType",
  taskNotes: "++id, workOrderId, type, content, mediaUrl, fileName, mimeType, timestamp",
  syncQueue: "++id, action, payload, status, timestamp"
});

// الإصدار 6: إضافة حقل "الأولوية" (priority) لأوراق العمل لدعم نظام أولوية المهام
// (عاجل / عادي / منخفض)، مع ترقية آمنة للبيانات القديمة بإعطائها أولوية "عادي" افتراضياً
db.version(6).stores({
  workOrders: "++id, customerName, phone, status, serviceType, assignedTo, transferredTo, deadline, signalValue, address, priority",
  hardwareLogs: "++id, workOrderId, serialNumber, deviceType",
  taskNotes: "++id, workOrderId, type, content, mediaUrl, fileName, mimeType, timestamp",
  syncQueue: "++id, action, payload, status, timestamp"
}).upgrade(async (tx) => {
  await tx.table('workOrders').toCollection().modify((order) => {
    if (!order.priority) order.priority = 'normal';
  });
});

// الإصدار 7: إضافة جدول "inventory" لإدارة مخزون العتاد (ONU/راوترات/سويتشات)
// وربط الباركود الممسوح ميدانياً بوحدة فعلية في المخزون (خصم تلقائي عند التوزيع)
db.version(7).stores({
  workOrders: "++id, customerName, phone, status, serviceType, assignedTo, transferredTo, deadline, signalValue, address, priority",
  hardwareLogs: "++id, workOrderId, serialNumber, deviceType",
  taskNotes: "++id, workOrderId, type, content, mediaUrl, fileName, mimeType, timestamp",
  syncQueue: "++id, action, payload, status, timestamp",
  inventory: "++id, barcode, deviceType, model, status, workOrderId, assignedTech"
});

db.on('versionchange', function () {
  db.close();
  alert('تم تحديث قاعدة البيانات من نافذة أخرى، سيتم إعادة تحميل الصفحة.');
  window.location.reload();
});

db.open().catch(function (err) {
  console.error('فشل فتح قاعدة البيانات المحلية:', err);
  if (err && err.name === 'VersionError') {
    if (confirm('يوجد تعارض في إصدار قاعدة البيانات المحلية. هل تريد إعادة التهيئة؟')) {
      Dexie.delete('FieldTechDB').then(() => window.location.reload());
    }
  }
});

// البيانات الأولية للتجربة (باسم شركة ألياف التقنية - FiberTech)
async function seedInitialData() {
  const count = await db.workOrders.count();
  if (count === 0) {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    // ملاحظة إصلاح: كانت مواعيد المهام التجريبية (deadline) تواريخ ثابتة مكتوبة يدوياً
    // (مثل "2026-03-29"). بمرور الوقت يتجاوز التاريخ الفعلي هذه القيم الثابتة فتظهر
    // كل المهام التجريبية "متأخرة 🔴" فور أول تشغيل للتطبيق مهما كان تاريخ اليوم.
    // الحل: حساب المواعيد ديناميكياً بالنسبة لتاريخ اليوم (نفس أسلوب createdAt أدناه)
    // عبر ftDateStrOffset(عدد الأيام) بحيث يبقى مزيج واقعي من مهام متأخرة/قريبة/مستقبلية.
    await db.workOrders.bulkAdd([
      { id: 130003, customerName: "شركة الهدى للتجارة", phone: "0590000001", assignedTo: "أحمد الكردي", deadline: ftDateStrOffset(2), status: "pending", serviceType: "تركيب خدمة جديد (FTTH - ألياف ضوئية)", address: "رام الله - الشارع الرئيسي", priority: "urgent", createdAt: now - 2 * day },
      { id: 120208, customerName: "مجمع الأمل الطبي", phone: "0590000002", assignedTo: "حلا", deadline: ftDateStrOffset(-5), status: "completed", serviceType: "صيانة وإصلاح ألياف ضوئية (FTTH Repair)", address: "البيرة - بالقرب من البلدية", priority: "normal", createdAt: now - 6 * day, completedAt: now - 5 * day, customerRating: 5 },
      { id: 130022, customerName: "مكتبة النجاح", phone: "0590000003", assignedTo: "نور", deadline: ftDateStrOffset(-1), status: "on_hold", serviceType: "تركيب وإصلاح IPTV", address: "رام الله - الماصيون", priority: "low", createdAt: now - 3 * day },
      { id: 130016, customerName: "فندق المدينة", phone: "0590000004", assignedTo: "افنان", deadline: ftDateStrOffset(0), status: "on_hold", serviceType: "استبدال عتاد / راوتر (Router Replacement)", address: "عين منجد", priority: "urgent", createdAt: now - 4 * day },
      { id: 130045, customerName: "مركز الحاسوب العربي", phone: "0590000005", assignedTo: "أحمد الكردي", deadline: ftDateStrOffset(5), status: "pending", serviceType: "صيانة شبكات وسويتشات (Switch Maintenance)", address: "بيتونيا", priority: "normal", createdAt: now - 1 * day }
    ]);
  }

  // بيانات أولية لمخزون العتاد (لتجربة ربط الباركود بالمخزون الفعلي)
  const invCount = await db.inventory.count();
  if (invCount === 0) {
    await db.inventory.bulkAdd([
      { barcode: "ONU-2024-0001", deviceType: "ONU/ONT", model: "Huawei HG8245", status: "available", workOrderId: null, assignedTech: null },
      { barcode: "ONU-2024-0002", deviceType: "ONU/ONT", model: "Huawei HG8245", status: "assigned", workOrderId: 120208, assignedTech: "حلا" },
      { barcode: "RT-2024-0010", deviceType: "Router", model: "TP-Link Archer", status: "available", workOrderId: null, assignedTech: null },
      { barcode: "SW-2024-0005", deviceType: "Switch", model: "TP-Link 8-Port", status: "available", workOrderId: null, assignedTech: null }
    ]);
  }
}

// متغيرات عامة
let activeTicketId = null;
let ftReturnViewId = 'view-dashboard'; // الصفحة التي سنعود إليها عند إغلاق تفاصيل التذكرة
let currentScannedSerial = "";
let capturedImages = [];
let html5QrCodeScanner = null;
let ftFieldCameraStream = null;
let ftFieldCameraDevices = [];
let ftFieldCameraActiveIndex = 0;
let canvas, ctx, isDrawing = false;
let selectedTaskIdsForTransfer = [];
let globalSearchQuery = "";

// متغيرات التسجيل الصوتي
let mediaRecorder = null;
let audioChunks = [];
let recordingTimer = null;
let recordingSeconds = 0;

// يختار صيغة تسجيل صوتي مدعومة فعلياً من متصفح الجهاز الحالي بدل افتراض 'audio/webm' دائماً.
// سبب ظهور "Error" مكان مشغّل الصوت سابقاً: بعض المتصفحات (خصوصاً على iOS/Safari) لا تدعم
// audio/webm فتسجّل بصيغة أخرى (مثل audio/mp4)، بينما كان الكود يضع تسمية "audio/webm" على
// الملف الناتج بشكل ثابت، فيفشل المتصفح لاحقاً في فك ترميز الصوت عند التشغيل.
function ftGetSupportedAudioMimeType() {
  const candidates = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/aac',
    'audio/ogg;codecs=opus',
    'audio/ogg'
  ];
  if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported) {
    for (const type of candidates) {
      if (MediaRecorder.isTypeSupported(type)) return type;
    }
  }
  return ''; // اترك المتصفح يختار الصيغة الافتراضية الخاصة به
}

// ==========================================
// 1.1 خاصية البحث الشامل لجميع الصفحات
// ==========================================
function handleGlobalSearch(query) {
  globalSearchQuery = query.trim().toLowerCase();
  
  renderWorkOrders('all');
  renderActiveTasksPage();
  renderClientsPage();
  renderTransferredTasksPage();
  renderHistoryPage();
  renderAllTasksPage();
  renderAllNotesPage();
  renderInventoryPage();
}

// ==========================================
// 2. إدارة حالة الشبكة والتنقل بين الصفحات والقائمة المنسدلة
// ==========================================
function toggleNavigationDropdown() {
  const menu = document.getElementById('nav-menu-dropdown');
  const backdrop = document.getElementById('nav-menu-backdrop');
  if (menu) {
    menu.classList.toggle('show');
    const isOpen = menu.classList.contains('show');
    if (backdrop) {
      backdrop.classList.toggle('show', isOpen);
      // العنصر يحمل فئة "hidden" الأصلية في HTML (display:none!important) والتي لم
      // تكن تُزال أبداً، فتبقى الخلفية الداكنة خلف القائمة مخفية دائماً حتى بعد إضافة
      // "show". ندير هذه الفئة هنا صراحة لضمان ظهور/اختفاء الخلفية بشكل صحيح.
      backdrop.classList.toggle('hidden', !isOpen);
    }
    // منع تمرير الصفحة الخلفية أثناء فتح القائمة الجانبية
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

// إغلاق القائمة الجانبية صراحةً (تُستخدم بعد اختيار عنصر من القائمة)
function closeNavigationDropdown() {
  const menu = document.getElementById('nav-menu-dropdown');
  const backdrop = document.getElementById('nav-menu-backdrop');
  if (menu) menu.classList.remove('show');
  if (backdrop) { backdrop.classList.remove('show'); backdrop.classList.add('hidden'); }
  document.body.style.overflow = '';
}

// إغلاق القائمة عند النقر في أي مكان خارجها (تبقى فعّالة أيضاً مع القائمة الجانبية الجديدة)
document.addEventListener('click', function(event) {
  const navContainer = document.querySelector('.dropdown-nav-wrapper');
  const menu = document.getElementById('nav-menu-dropdown');
  if (navContainer && menu && menu.classList.contains('show') && !navContainer.contains(event.target)) {
    closeNavigationDropdown();
  }
});

function updateNetworkStatus() {
  const statusBar = document.getElementById('network-status-bar');
  const statusText = document.getElementById('status-text');

  if (navigator.onLine) {
    if (statusBar) statusBar.className = "status-bar online";
    if (statusText) statusText.textContent = i18nTranslations[currentLang].netOnline;
  } else {
    if (statusBar) statusBar.className = "status-bar offline";
    if (statusText) statusText.textContent = i18nTranslations[currentLang].netOffline;
  }
  updatePendingSyncCount();
}

async function updatePendingSyncCount() {
  const count = await db.syncQueue.where('status').equals('pending').count();
  const badge = document.getElementById('pending-count');
  if (badge) badge.textContent = count;
}

window.addEventListener('online', () => {
  updateNetworkStatus();
  processSyncQueue();
});
window.addEventListener('offline', updateNetworkStatus);

function switchTab(viewName, btnElement) {
  document.getElementById('ticket-details-section').classList.add('hidden');

  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.add('hidden'));

  const navBtns = document.querySelectorAll('.top-nav-item');
  navBtns.forEach(btn => btn.classList.remove('active'));

  if (btnElement) btnElement.classList.add('active');

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.remove('hidden');

  // إغلاق القائمة الجانبية تلقائياً بعد اختيار الصفحة المطلوبة
  closeNavigationDropdown();

  if (viewName === 'dashboard') renderWorkOrders('all');
  else if (viewName === 'active-tasks') renderActiveTasksPage();
  else if (viewName === 'calendar') renderCalendarPage();
  else if (viewName === 'clients') renderClientsPage();
  else if (viewName === 'history') renderHistoryPage();
  else if (viewName === 'transferred-tasks') renderTransferredTasksPage();
  else if (viewName === 'reports') renderReportsPage();
  else if (viewName === 'tasks') renderAllTasksPage();
  else if (viewName === 'notes') renderAllNotesPage();
  else if (viewName === 'performance') renderPerformancePage();
  else if (viewName === 'inventory') renderInventoryPage();
  else if (viewName === 'employees') ftRenderEmployeesView();
  else if (viewName === 'profile') ftRenderProfileView();
  else if (viewName === 'messages') ftRenderMessagesView();
  else if (viewName === 'tech-map') setTimeout(renderTechMap, 50); // تأخير بسيط لضمان ظهور الحاوية قبل تهيئة الخريطة
}

// ==========================================
// 3. إدارة الفنيين الديناميكية والمهام
// ==========================================

// ==========================================
// 2.1 نظام أولوية المهام (عاجل / عادي / منخفض)
// ==========================================
let currentPriorityFilter = 'all';

function getPriorityMeta(priority) {
  const p = priority || 'normal';
  const map = {
    urgent: {
      class: 'urgent',
      textAr: '🔴 عاجل',
      textEn: '🔴 Urgent',
      order: 0
    },
    normal: {
      class: 'normal',
      textAr: '🔵 عادي',
      textEn: '🔵 Normal',
      order: 1
    },
    low: {
      class: 'low',
      textAr: '⚪ منخفض',
      textEn: '⚪ Low',
      order: 2
    }
  };
  const meta = map[p] || map.normal;
  return {
    class: meta.class,
    order: meta.order,
    text: currentLang === 'ar' ? meta.textAr : meta.textEn
  };
}

function priorityPillHtml(priority) {
  const meta = getPriorityMeta(priority);
  return `<span class="priority-pill ${meta.class}">${meta.text}</span>`;
}

// فلترة لوحة التحكم الرئيسية حسب الأولوية (يعمل بالتوازي مع فلتر الحالة والبحث الشامل)
function filterOrdersByPriority(value) {
  currentPriorityFilter = value;
  const statusSelect = document.getElementById('filter-all-select');
  renderWorkOrders(statusSelect ? statusSelect.value : 'all');
}

async function getUniqueTechnicians() {
  const orders = await db.workOrders.toArray();
  const techs = new Set();
  orders.forEach(o => {
    if (o.assignedTo && o.assignedTo.trim() !== "") techs.add(o.assignedTo.trim());
    if (o.transferredTo && o.transferredTo.trim() !== "") techs.add(o.transferredTo.trim());
  });
  return Array.from(techs);
}

async function populateTechSelect(selectId) {
  const selectElem = document.getElementById(selectId);
  if (!selectElem) return;
  const techList = await getUniqueTechnicians();
  
  if (selectElem.tagName.toLowerCase() === 'datalist') {
    selectElem.innerHTML = techList.map(t => `<option value="${t}">`).join('');
  } else {
    selectElem.innerHTML = techList.map(t => `<option value="${t}">${t}</option>`).join('');
  }
}

function toggleAddOrderModal(show) {
  const modal = document.getElementById('add-order-modal');
  if (modal) {
    if (show) {
      populateTechSelect('existing-techs-list');
      const statusNote = document.getElementById('nearest-tech-status-note');
      const suggestionsBox = document.getElementById('nearest-tech-suggestions');
      if (statusNote) statusNote.textContent = '';
      if (suggestionsBox) suggestionsBox.innerHTML = '';
      modal.classList.remove('hidden');
    } else modal.classList.add('hidden');
  }
}

function toggleTransferModal(show) {
  const modal = document.getElementById('transfer-order-modal');
  if (modal) {
    if (show) {
      populateTechSelect('transfer-tech-select');
      modal.classList.remove('hidden');
    } else modal.classList.add('hidden');
  }
}

async function createNewWorkOrder(event) {
  event.preventDefault();
  
  const title = document.getElementById('new-cust-name').value.trim();
  const phone = document.getElementById('new-cust-phone').value.trim();
  const address = document.getElementById('new-cust-address-text').value.trim();
  const assigned = document.getElementById('new-assigned-tech').value.trim();
  const service = document.getElementById('new-service-type').value;
  const statusVal = document.getElementById('new-ticket-status').value;
  const deadline = document.getElementById('new-deadline').value;
  const priorityEl = document.getElementById('new-priority');
  const priorityVal = priorityEl ? priorityEl.value : 'normal';

  if (!assigned) {
    alert(currentLang === 'ar' ? "يرجى كتابة اسم المشرف/الفني المسند إليه." : "Please enter assigned technician name.");
    return;
  }

  try {
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: randomId,
      customerName: title,
      phone: phone,
      address: address,
      assignedTo: assigned,
      // إصلاح: كان الموعد الافتراضي عند عدم اختيار المستخدم تاريخاً هو "2026-03-30" ثابتاً،
      // فبعد مرور هذا التاريخ كانت أي مهمة جديدة تُنشأ بدون تحديد موعد تظهر فوراً "متأخرة 🔴"
      // رغم أنها أُنشئت للتو. الآن يُحسب الموعد الافتراضي ديناميكياً: بعد 7 أيام من اليوم.
      deadline: deadline || ftDateStrOffset(7),
      serviceType: service,
      status: statusVal,
      priority: priorityVal || 'normal',
      createdAt: Date.now()
    };

    if (statusVal === 'completed') {
      newOrder.completedAt = Date.now();
    }

    await db.workOrders.add(newOrder);

    await db.syncQueue.add({
      action: 'CREATE',
      payload: newOrder,
      status: 'pending',
      timestamp: new Date().toISOString()
    });

    document.getElementById('add-order-form').reset();
    toggleAddOrderModal(false);
    await renderWorkOrders('all');
    updateNetworkStatus();
    alert(currentLang === 'ar' ? `تمت إضافة المهمة بنجاح واسنادها للفني: ${assigned}` : `Task created successfully for tech: ${assigned}`);
  } catch (err) {
    console.error("خطأ في إضافة التذكرة:", err);
  }
}

async function renderWorkOrders(filterStatus = 'all') {
  const listContainer = document.getElementById('orders-list');
  if (!listContainer) return;

  listContainer.innerHTML = '';
  let orders = await db.workOrders.toArray();

  if (filterStatus !== 'all') {
    orders = orders.filter(o => o.status === filterStatus);
  }

  if (currentPriorityFilter && currentPriorityFilter !== 'all') {
    orders = orders.filter(o => (o.priority || 'normal') === currentPriorityFilter);
  }

  if (globalSearchQuery !== "") {
    orders = orders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.phone && o.phone.toLowerCase().includes(globalSearchQuery)) ||
      (o.address && o.address.toLowerCase().includes(globalSearchQuery)) ||
      (o.assignedTo && o.assignedTo.toLowerCase().includes(globalSearchQuery)) ||
      (o.serviceType && o.serviceType.toLowerCase().includes(globalSearchQuery))
    );
  }

  const statusMap = {
    pending: { text: i18nTranslations[currentLang].filterPending, class: "pending" },
    completed: { text: i18nTranslations[currentLang].filterCompleted, class: "completed" },
    on_hold: { text: i18nTranslations[currentLang].filterOnhold, class: "on_hold" },
    transferred: { text: `${i18nTranslations[currentLang].filterTransferred} 🔄`, class: "on_hold" }
  };

  orders.forEach(order => {
    const statusObj = statusMap[order.status] || { text: i18nTranslations[currentLang].filterPending, class: "pending" };
    const slaStatus = ftGetSlaStatus(order);

    const tr = document.createElement('tr');
    if (slaStatus === 'overdue') tr.classList.add('ft-row-sla-overdue');
    else if (slaStatus === 'approaching') tr.classList.add('ft-row-sla-approaching');
    tr.innerHTML = `
      <td><input type="checkbox" class="ticket-checkbox" value="${order.id}"></td>
      <td><strong>${order.id}</strong></td>
      <td>${order.customerName}</td>
      <td><span class="status-pill ${statusObj.class}">${statusObj.text}</span></td>
      <td>${priorityPillHtml(order.priority)}</td>
      <td>${order.assignedTo || 'غير مسند'} ${order.transferredTo ? `➔ (${order.transferredTo})` : ''}</td>
      <td>${order.deadline || '—'} ${ftSlaBadgeHtml(slaStatus)}</td>
      <td>
        <button class="action-icon-btn" title="معاينة" onclick="openTicketDetails(${order.id})">👁️</button>
        <button class="action-icon-btn" title="تعديل" onclick="openTicketDetails(${order.id})">✏️</button>
        <button class="action-icon-btn" title="تفاصيل" onclick="openTicketDetails(${order.id})">📝</button>
      </td>
    `;
    listContainer.appendChild(tr);
  });

  updateDashboardStats();
  ftCheckSlaAndNotify();
}

function toggleSelectAll(masterCheckbox) {
  const checkboxes = document.querySelectorAll('.ticket-checkbox');
  checkboxes.forEach(cb => cb.checked = masterCheckbox.checked);
}

function openTransferModal() {
  const checkedBoxes = document.querySelectorAll('.ticket-checkbox:checked');
  if (checkedBoxes.length === 0) {
    alert(currentLang === 'ar' ? "يرجى تحديد مهمة واحدة على الأقل لنقلها." : "Please select at least one task to transfer.");
    return;
  }

  selectedTaskIdsForTransfer = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
  document.getElementById('transfer-count-badge').textContent = selectedTaskIdsForTransfer.length;
  toggleTransferModal(true);
}

async function confirmTransferTasks(event) {
  event.preventDefault();
  const selectVal = document.getElementById('transfer-tech-select').value;
  const customVal = document.getElementById('transfer-tech-custom').value.trim();
  
  const newTechName = customVal !== "" ? customVal : selectVal;

  if (!newTechName) {
    alert(currentLang === 'ar' ? "يرجى اختيار أو كتابة اسم الفني المنقول إليه." : "Please select or type destination technician.");
    return;
  }

  for (let id of selectedTaskIdsForTransfer) {
    await db.workOrders.update(id, {
      transferredTo: newTechName,
      status: 'transferred'
    });

    await db.syncQueue.add({
      action: 'TRANSFER',
      payload: { id, transferredTo: newTechName },
      status: 'pending',
      timestamp: new Date().toISOString()
    });
  }

  alert(currentLang === 'ar' ? `تم نقل (${selectedTaskIdsForTransfer.length}) مهمة بنجاح إلى الفني: ${newTechName}` : `Transferred (${selectedTaskIdsForTransfer.length}) tasks to: ${newTechName}`);
  document.getElementById('transfer-order-form').reset();
  toggleTransferModal(false);
  
  const masterCb = document.getElementById('select-all-tickets');
  if (masterCb) masterCb.checked = false;
  
  renderWorkOrders('all');
  updateNetworkStatus();
}

async function deleteSelectedTickets() {
  const checkedBoxes = document.querySelectorAll('.ticket-checkbox:checked');
  if (checkedBoxes.length === 0) {
    alert(currentLang === 'ar' ? "يرجى تحديد مهمة واحدة على الأقل للحذف." : "Please select at least one task to delete.");
    return;
  }

  const idsToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.value));

  if (confirm(currentLang === 'ar' ? `هل أنت متأكد من حذف (${idsToDelete.length}) مهمة محددة؟` : `Delete (${idsToDelete.length}) selected tasks?`)) {
    await db.workOrders.bulkDelete(idsToDelete);
    await db.taskNotes.where('workOrderId').anyOf(idsToDelete).delete();

    for (let id of idsToDelete) {
      await db.syncQueue.add({
        action: 'DELETE',
        payload: { id },
        status: 'pending',
        timestamp: new Date().toISOString()
      });
    }
    await renderWorkOrders('all');
    updateNetworkStatus();
    alert(currentLang === 'ar' ? "تم الحذف بنجاح وتحديث قائمة الفنيين التلقائية." : "Deleted successfully.");
  }
}

async function updateDashboardStats() {
  const allOrders = await db.workOrders.toArray();
  const total = allOrders.length;
  const pending = allOrders.filter(o => o.status === 'pending').length;
  const completed = allOrders.filter(o => o.status === 'completed').length;
  const onHold = allOrders.filter(o => o.status === 'on_hold' || o.status === 'transferred').length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-total-val').textContent = total;
  document.getElementById('stat-pending').textContent = pending;
  document.getElementById('stat-completed').textContent = completed;
  document.getElementById('stat-onhold').textContent = onHold;

  const compPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const pendPercent = total > 0 ? Math.round((pending / total) * 100) : 0;

  document.getElementById('bar-val-progress').textContent = pending;
  document.getElementById('bar-val-completed').textContent = completed;
  
  document.getElementById('bar-fill-progress').style.width = pendPercent + '%';
  document.getElementById('bar-fill-completed').style.width = compPercent + '%';

  document.getElementById('stat-percent-completed').textContent = compPercent + '%';
  document.getElementById('stat-percent-pending').textContent = pendPercent + '%';
}

function filterOrders(status) {
  renderWorkOrders(status);
}

// ==========================================
// 4. بناء الصفحات الفرعية وجدول العملاء
// ==========================================
async function renderClientsPage() {
  const container = document.getElementById('clients-table-list');
  if (!container) return;
  container.innerHTML = '';

  let orders = await db.workOrders.toArray();
  const notes = await db.taskNotes.toArray();

  if (globalSearchQuery !== "") {
    orders = orders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.phone && o.phone.toLowerCase().includes(globalSearchQuery)) ||
      (o.address && o.address.toLowerCase().includes(globalSearchQuery)) ||
      (o.assignedTo && o.assignedTo.toLowerCase().includes(globalSearchQuery))
    );
  }

  const notesMap = new Map();
  notes.forEach(n => {
    if (!notesMap.has(n.workOrderId)) notesMap.set(n.workOrderId, []);
    notesMap.get(n.workOrderId).push(n);
  });

  if (orders.length === 0) {
    container.innerHTML = `<tr><td colspan="9" style="text-align:center;">${currentLang === 'ar' ? 'لا يوجد عملاء مطابقين حالياً' : 'No matching clients found'}</td></tr>`;
    return;
  }

  const statusMap = {
    pending: { text: i18nTranslations[currentLang].filterPending, class: "pending" },
    completed: { text: i18nTranslations[currentLang].filterCompleted, class: "completed" },
    on_hold: { text: i18nTranslations[currentLang].filterOnhold, class: "on_hold" },
    transferred: { text: `${i18nTranslations[currentLang].filterTransferred} 🔄`, class: "on_hold" }
  };

  orders.forEach(order => {
    const statusObj = statusMap[order.status] || { text: i18nTranslations[currentLang].filterPending, class: "pending" };
    const taskNotes = notesMap.get(order.id) || [];
    
    let noteSummary = currentLang === 'ar' ? "لا توجد ملاحظات" : "No notes";
    if (taskNotes.length > 0) {
      const textNotes = taskNotes.filter(n => n.type === 'text');
      if (textNotes.length > 0) {
        noteSummary = escapeHtml(textNotes[textNotes.length - 1].content);
      } else {
        noteSummary = `Media Notes (${taskNotes.length})`;
      }
    }

    const addressEncoded = encodeURIComponent(order.address || 'Ramallah');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${order.customerName}</strong></td>
      <td><a href="tel:${order.phone}">${order.phone || '0590000000'}</a> 📞</td>
      <td>${order.address || 'N/A'} <a href="https://maps.google.com/?q=${addressEncoded}" target="_blank">🗺️</a></td>
      <td>${order.assignedTo || 'Unassigned'} ${order.transferredTo ? `➔ (${order.transferredTo})` : ''}</td>
      <td>${order.serviceType || 'N/A'}</td>
      <td><span class="status-pill ${statusObj.class}">${statusObj.text}</span></td>
      <td>${order.deadline || '—'}</td>
      <td style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${noteSummary}</td>
      <td>
        <button class="btn btn-primary" style="padding:4px 10px; font-size:0.8rem;" onclick="openTicketDetails(${order.id})">⚙️</button>
      </td>
    `;
    container.appendChild(tr);
  });
}

async function renderActiveTasksPage() {
  const container = document.getElementById('active-tasks-list');
  if (!container) return;
  container.innerHTML = '';
  let activeOrders = await db.workOrders.where('status').equals('pending').toArray();

  if (globalSearchQuery !== "") {
    activeOrders = activeOrders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.assignedTo && o.assignedTo.toLowerCase().includes(globalSearchQuery))
    );
  }

  if (activeOrders.length === 0) {
    container.innerHTML = `<tr><td colspan="6" style="text-align:center;">${currentLang === 'ar' ? 'لا توجد مهام نشطة حالياً' : 'No active tasks found'}</td></tr>`;
    return;
  }

  // ترتيب المهام النشطة بحيث تظهر العاجلة أولاً لمساعدة الفني على معرفة من أين يبدأ
  activeOrders.sort((a, b) => getPriorityMeta(a.priority).order - getPriorityMeta(b.priority).order);

  activeOrders.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customerName}</td>
      <td>${priorityPillHtml(o.priority)}</td>
      <td>${o.assignedTo}</td>
      <td>${o.deadline}</td>
      <td><button class="btn btn-primary" style="padding:4px 10px; font-size:0.8rem;" onclick="openTicketDetails(${o.id})">🛠️</button></td>
    `;
    container.appendChild(tr);
  });
}

async function renderHistoryPage() {
  const container = document.getElementById('history-tasks-list');
  if (!container) return;
  container.innerHTML = '';
  let completedOrders = await db.workOrders.where('status').equals('completed').toArray();

  if (globalSearchQuery !== "") {
    completedOrders = completedOrders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.assignedTo && o.assignedTo.toLowerCase().includes(globalSearchQuery))
    );
  }

  if (completedOrders.length === 0) {
    container.innerHTML = `<tr><td colspan="5" style="text-align:center;">${currentLang === 'ar' ? 'لا يوجد سجل للمهام المكتملة بعد' : 'No completed history found'}</td></tr>`;
    return;
  }

  completedOrders.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customerName}</td>
      <td>${o.assignedTo}</td>
      <td><span class="status-pill completed">مكتملة ✅</span></td>
      <td>${o.deadline}</td>
    `;
    container.appendChild(tr);
  });
}

async function renderTransferredTasksPage() {
  const container = document.getElementById('transferred-tasks-list');
  if (!container) return;
  container.innerHTML = '';
  
  let transferredOrders = await db.workOrders.where('status').equals('transferred').toArray();

  if (globalSearchQuery !== "") {
    transferredOrders = transferredOrders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.transferredTo && o.transferredTo.toLowerCase().includes(globalSearchQuery))
    );
  }

  if (transferredOrders.length === 0) {
    container.innerHTML = `<tr><td colspan="6" style="text-align:center;">${currentLang === 'ar' ? 'لا توجد مهام منقولة حالياً' : 'No transferred tasks'}</td></tr>`;
    return;
  }

  transferredOrders.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customerName}</td>
      <td>${o.assignedTo || 'Unassigned'}</td>
      <td><strong style="color: var(--teal-main);">${o.transferredTo || 'Other Tech'}</strong></td>
      <td>${o.deadline}</td>
      <td>
        <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.8rem;" onclick="restoreTransferredTask(${o.id})">🔄</button>
      </td>
    `;
    container.appendChild(tr);
  });
}

async function restoreTransferredTask(id) {
  if (confirm(currentLang === 'ar' ? "هل تريد استعادة هذه المهمة وإعادتها لقائمة المهام النشطة؟" : "Restore this task to active queue?")) {
    await db.workOrders.update(id, {
      status: 'pending',
      transferredTo: null
    });
    renderTransferredTasksPage();
  }
}

async function renderReportsPage() {
  const allOrders = await db.workOrders.toArray();
  const total = allOrders.length;
  const completed = allOrders.filter(o => o.status === 'completed').length;
  const onHold = allOrders.filter(o => o.status === 'on_hold' || o.status === 'transferred').length;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById('report-completed-count').textContent = completed;
  document.getElementById('report-success-rate').textContent = rate + '%';
  document.getElementById('report-onhold-count').textContent = onHold;

  const ratedOrders = allOrders.filter(o => o.customerRating);
  const avgRatingEl = document.getElementById('report-customer-rating');
  if (avgRatingEl) {
    avgRatingEl.textContent = ratedOrders.length > 0
      ? `⭐ ${(ratedOrders.reduce((sum, o) => sum + o.customerRating, 0) / ratedOrders.length).toFixed(1)}`
      : '—';
  }

  const closedWithTimes = allOrders.filter(o => o.status === 'completed' && o.completedAt && o.createdAt);
  const avgCloseEl = document.getElementById('report-close-time');
  if (avgCloseEl) {
    avgCloseEl.textContent = closedWithTimes.length > 0
      ? formatDurationHuman(closedWithTimes.reduce((sum, o) => sum + (o.completedAt - o.createdAt), 0) / closedWithTimes.length)
      : '—';
  }
}

// تحويل فرق زمني (ميلي ثانية) إلى نص مقروء بالدقائق أو الساعات أو الأيام حسب اللغة الحالية
// يُحسب هذا الفرق من "وقت إنشاء التذكرة" (createdAt) إلى "وقت إغلاقها فعلياً"
// (completedAt، يُسجَّل تلقائياً أول مرة تتحول فيها حالة التذكرة إلى "مكتملة").
function formatDurationHuman(ms) {
  const minutes = ms / (1000 * 60);
  if (minutes < 60) {
    return `${Math.max(0, Math.round(minutes))} ${currentLang === 'ar' ? 'دقيقة' : 'min'}`;
  }
  const hours = ms / (1000 * 60 * 60);
  if (hours < 24) {
    return `${hours.toFixed(1)} ${currentLang === 'ar' ? 'ساعة' : 'hrs'}`;
  }
  const days = hours / 24;
  return `${days.toFixed(1)} ${currentLang === 'ar' ? 'يوم' : 'days'}`;
}

// ==========================================
// 5.1 تقييم أداء الفنيين: نسبة إنجاز، متوسط وقت إغلاق، تقييم العملاء، وتوصية تلقائية
// ==========================================
async function renderPerformancePage() {
  const summaryBox = document.getElementById('performance-summary');
  const listBody = document.getElementById('technician-performance-list');
  if (!listBody) return;

  let allOrders = await db.workOrders.toArray();

  if (globalSearchQuery !== "") {
    allOrders = allOrders.filter(o => {
      const techName = ((o.transferredTo && o.transferredTo.trim()) || (o.assignedTo && o.assignedTo.trim()) || '').toLowerCase();
      return techName.includes(globalSearchQuery);
    });
  }

  const techMap = new Map();

  allOrders.forEach(o => {
    const techName = (o.transferredTo && o.transferredTo.trim()) || (o.assignedTo && o.assignedTo.trim());
    if (!techName) return;

    if (!techMap.has(techName)) {
      techMap.set(techName, { total: 0, completed: 0, closeTimes: [], ratings: [] });
    }
    const entry = techMap.get(techName);
    entry.total++;

    if (o.status === 'completed') {
      entry.completed++;
      if (o.completedAt && o.createdAt) {
        entry.closeTimes.push(o.completedAt - o.createdAt);
      }
    }
    if (o.customerRating) {
      entry.ratings.push(o.customerRating);
    }
  });

  const rows = [];
  techMap.forEach((entry, techName) => {
    const rate = entry.total > 0 ? Math.round((entry.completed / entry.total) * 100) : 0;
    const avgCloseMs = entry.closeTimes.length > 0
      ? entry.closeTimes.reduce((a, b) => a + b, 0) / entry.closeTimes.length
      : null;
    const avgRating = entry.ratings.length > 0
      ? entry.ratings.reduce((a, b) => a + b, 0) / entry.ratings.length
      : null;
    rows.push({ techName, total: entry.total, completed: entry.completed, rate, avgCloseMs, avgRating });
  });

  rows.sort((a, b) => b.rate - a.rate);

  if (summaryBox) {
    const overallRate = rows.length > 0 ? Math.round(rows.reduce((s, r) => s + r.rate, 0) / rows.length) : 0;
    const topPerformer = rows.length > 0 ? rows[0].techName : '—';
    summaryBox.innerHTML = `
      <div class="report-box"><h4>${currentLang === 'ar' ? 'عدد الفنيين' : 'Technicians'}</h4><span class="report-num">${rows.length}</span></div>
      <div class="report-box"><h4>${currentLang === 'ar' ? 'متوسط نسبة الإنجاز' : 'Avg Completion'}</h4><span class="report-num">${overallRate}%</span></div>
      <div class="report-box"><h4>${currentLang === 'ar' ? 'الأفضل أداءً' : 'Top Performer'}</h4><span class="report-num" style="font-size:1.1rem;">${escapeHtml(topPerformer)}</span></div>
    `;
  }

  listBody.innerHTML = '';

  if (rows.length === 0) {
    listBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">${currentLang === 'ar' ? 'لا توجد بيانات كافية بعد لعرض تقييم الأداء.' : 'Not enough data yet.'}</td></tr>`;
    return;
  }

  rows.forEach(r => {
    const closeTimeLabel = r.avgCloseMs !== null ? formatDurationHuman(r.avgCloseMs) : '—';
    const ratingLabel = r.avgRating !== null
      ? `⭐ ${r.avgRating.toFixed(1)}`
      : (currentLang === 'ar' ? 'بدون تقييم' : 'No ratings');

    let recommendation;
    if (r.total >= 2 && r.rate >= 80 && (r.avgRating === null || r.avgRating >= 4)) {
      recommendation = `<span class="perf-badge perf-good">🏆 ${currentLang === 'ar' ? 'ترشيح لمكافأة' : 'Bonus candidate'}</span>`;
    } else if (r.total >= 2 && (r.rate < 50 || (r.avgRating !== null && r.avgRating < 3))) {
      recommendation = `<span class="perf-badge perf-bad">🔧 ${currentLang === 'ar' ? 'يحتاج متابعة وتحسين' : 'Needs improvement'}</span>`;
    } else {
      recommendation = `<span class="perf-badge perf-mid">➖ ${currentLang === 'ar' ? 'ضمن المعدل الطبيعي' : 'On track'}</span>`;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${escapeHtml(r.techName)}</strong></td>
      <td>${r.completed} / ${r.total}</td>
      <td>${r.rate}%</td>
      <td>${closeTimeLabel}</td>
      <td>${ratingLabel}</td>
      <td>${recommendation}</td>
    `;
    listBody.appendChild(tr);
  });
}

// ==========================================
// 5.2 إدارة مخزون العتاد: ربط الباركود الممسوح بوحدة فعلية وخصمها عند التوزيع
// ==========================================
async function addInventoryItem(event) {
  event.preventDefault();

  const barcodeInput = document.getElementById('inventory-barcode');
  const typeSelect = document.getElementById('inventory-device-type');
  const modelInput = document.getElementById('inventory-model');

  const barcode = barcodeInput.value.trim();
  if (!barcode) return;

  const existing = await db.inventory.where('barcode').equals(barcode).first();
  if (existing) {
    alert(currentLang === 'ar' ? 'هذا الباركود مسجل مسبقاً في المخزون.' : 'This barcode already exists in inventory.');
    return;
  }

  await db.inventory.add({
    barcode: barcode,
    deviceType: typeSelect.value,
    model: modelInput.value.trim() || null,
    status: 'available',
    workOrderId: null,
    assignedTech: null
  });

  document.getElementById('inventory-form').reset();
  await renderInventoryPage();
}

async function renderInventoryPage() {
  const summaryBox = document.getElementById('inventory-summary');
  const listBody = document.getElementById('inventory-list');
  if (!listBody) return;

  let items = await db.inventory.toArray();

  if (globalSearchQuery !== "") {
    items = items.filter(it =>
      (it.barcode && it.barcode.toLowerCase().includes(globalSearchQuery)) ||
      (it.model && it.model.toLowerCase().includes(globalSearchQuery)) ||
      (it.deviceType && it.deviceType.toLowerCase().includes(globalSearchQuery)) ||
      (it.assignedTech && it.assignedTech.toLowerCase().includes(globalSearchQuery))
    );
  }

  const totalCount = items.length;
  const availableCount = items.filter(it => it.status === 'available').length;
  const assignedCount = items.filter(it => it.status === 'assigned').length;

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="report-box"><h4>${currentLang === 'ar' ? 'إجمالي العتاد' : 'Total Units'}</h4><span class="report-num">${totalCount}</span></div>
      <div class="report-box"><h4>${currentLang === 'ar' ? 'متاح بالمخزون' : 'Available'}</h4><span class="report-num">${availableCount}</span></div>
      <div class="report-box"><h4>${currentLang === 'ar' ? 'موزع على مهام' : 'Distributed'}</h4><span class="report-num">${assignedCount}</span></div>
    `;
  }

  listBody.innerHTML = '';

  if (items.length === 0) {
    listBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">${currentLang === 'ar' ? 'لا يوجد عتاد مسجل في المخزون حتى الآن.' : 'No inventory items yet.'}</td></tr>`;
    return;
  }

  items.sort((a, b) => {
    if (a.status === b.status) return (a.barcode || '').localeCompare(b.barcode || '');
    return a.status === 'available' ? -1 : 1;
  });

  items.forEach(item => {
    const tr = document.createElement('tr');
    const statusLabel = item.status === 'available'
      ? `<span class="priority-pill low">${currentLang === 'ar' ? '⚪ متاح' : '⚪ Available'}</span>`
      : `<span class="priority-pill normal">${currentLang === 'ar' ? '🔵 موزع' : '🔵 Distributed'}</span>`;

    tr.innerHTML = `
      <td>${escapeHtml(item.barcode)}</td>
      <td>${escapeHtml(item.deviceType || '')}</td>
      <td>${item.model ? escapeHtml(item.model) : '—'}</td>
      <td>${statusLabel}</td>
      <td>${item.status === 'available' ? '✅' : '❌'}</td>
      <td>${item.workOrderId ? `#${item.workOrderId}` : '—'}</td>
      <td>${item.assignedTech ? escapeHtml(item.assignedTech) : '—'}</td>
      <td>
        <button class="action-icon-btn" onclick="openEditInventoryModal(${item.id})" title="${currentLang === 'ar' ? 'تعديل' : 'Edit'}">✏️</button>
        <button class="action-icon-btn" style="color:#e53e3e;" onclick="deleteInventoryItem(${item.id})" title="${currentLang === 'ar' ? 'حذف' : 'Delete'}">🗑️</button>
      </td>
    `;
    listBody.appendChild(tr);
  });
}

// فتح نافذة تعديل عنصر مخزون موجود وتعبئتها ببياناته الحالية
function toggleEditInventoryModal(show) {
  const modal = document.getElementById('edit-inventory-modal');
  if (modal) modal.classList.toggle('hidden', !show);
}

// إظهار/إخفاء حقلي رقم المهمة والفني المسؤول بحسب الحالة المختارة (متاح / موزّع)
function toggleEditInventoryAssignFields(status) {
  const wrap = document.getElementById('edit-inventory-assign-fields');
  if (wrap) wrap.classList.toggle('hidden', status !== 'assigned');
}

async function openEditInventoryModal(id) {
  const item = await db.inventory.get(id);
  if (!item) return;

  document.getElementById('edit-inventory-id').value = item.id;
  document.getElementById('edit-inventory-barcode').value = item.barcode || '';
  document.getElementById('edit-inventory-device-type').value = item.deviceType || 'ONU/ONT';
  document.getElementById('edit-inventory-model').value = item.model || '';
  document.getElementById('edit-inventory-status').value = item.status || 'available';
  document.getElementById('edit-inventory-workorder').value = item.workOrderId || '';
  document.getElementById('edit-inventory-tech').value = item.assignedTech || '';

  toggleEditInventoryAssignFields(item.status || 'available');
  toggleEditInventoryModal(true);
}

// حفظ التعديلات على عنصر مخزون موجود (مع منع تكرار الباركود بين عنصرين مختلفين)
async function confirmEditInventoryItem(event) {
  event.preventDefault();

  const id = Number(document.getElementById('edit-inventory-id').value);
  const barcode = document.getElementById('edit-inventory-barcode').value.trim();
  const deviceType = document.getElementById('edit-inventory-device-type').value;
  const model = document.getElementById('edit-inventory-model').value.trim();
  const status = document.getElementById('edit-inventory-status').value;
  const workOrderVal = document.getElementById('edit-inventory-workorder').value.trim();
  const techVal = document.getElementById('edit-inventory-tech').value.trim();

  if (!barcode) return;

  const duplicate = await db.inventory.where('barcode').equals(barcode).first();
  if (duplicate && duplicate.id !== id) {
    alert(currentLang === 'ar' ? 'يوجد عنصر آخر في المخزون مسجل بنفس الباركود.' : 'Another item already uses this barcode.');
    return;
  }

  const updatePayload = {
    barcode: barcode,
    deviceType: deviceType,
    model: model || null,
    status: status
  };

  if (status === 'assigned') {
    updatePayload.workOrderId = workOrderVal ? Number(workOrderVal) : null;
    updatePayload.assignedTech = techVal || null;
  } else {
    updatePayload.workOrderId = null;
    updatePayload.assignedTech = null;
  }

  await db.inventory.update(id, updatePayload);
  toggleEditInventoryModal(false);
  await renderInventoryPage();
}

// حذف عنصر بشكل كامل من مخزون العتاد بعد التأكيد
async function deleteInventoryItem(id) {
  const confirmMsg = currentLang === 'ar' ? 'هل أنت متأكد من حذف هذه الوحدة من المخزون؟' : 'Delete this inventory item?';
  if (!confirm(confirmMsg)) return;
  await db.inventory.delete(id);
  await renderInventoryPage();
}

// يربط الباركود الممسوح ضوئياً بالمهمة النشطة بوحدة فعلية من مخزون العتاد
// ويخصمها من "المتاح" لتقليل الأعطال الناتجة عن سوء توزيع العتاد
async function linkScannedItemToInventory(barcode, deviceType) {
  const statusBox = document.getElementById('inventory-scan-status');
  if (!activeTicketId) return;

  const ticket = await db.workOrders.get(activeTicketId);
  const techName = (ticket && ((ticket.transferredTo && ticket.transferredTo.trim()) || (ticket.assignedTo && ticket.assignedTo.trim())))
    || (ftCurrentUser() ? ftCurrentUser().name : null);

  const item = await db.inventory.where('barcode').equals(barcode).first();

  if (!item) {
    if (statusBox) {
      statusBox.textContent = currentLang === 'ar'
        ? '⚠️ هذا الباركود غير مسجل في مخزون العتاد. يرجى إضافته من صفحة "إدارة مخزون العتاد" أو مراجعة المشرف.'
        : '⚠️ This barcode is not registered in inventory. Please add it from the Inventory page.';
      statusBox.className = 'inventory-scan-status warning';
    }
    return;
  }

  if (item.status === 'assigned' && item.workOrderId && item.workOrderId !== activeTicketId) {
    if (statusBox) {
      statusBox.textContent = currentLang === 'ar'
        ? `⚠️ تنبيه: هذا العتاد مسجل مسبقاً على المهمة رقم #${item.workOrderId}. تحقق قبل التركيب لتفادي أعطال ناتجة عن سوء التوزيع.`
        : `⚠️ Warning: this unit is already linked to work order #${item.workOrderId}.`;
      statusBox.className = 'inventory-scan-status warning';
    }
    return;
  }

  await db.inventory.update(item.id, {
    status: 'assigned',
    workOrderId: activeTicketId,
    assignedTech: techName || null
  });

  if (statusBox) {
    statusBox.textContent = currentLang === 'ar'
      ? `✅ تم التحقق من الباركود وربط العتاد (${item.deviceType}${item.model ? ' - ' + item.model : ''}) بهذه المهمة، وخصمه من المخزون المتاح.`
      : `✅ Verified and linked (${item.deviceType}${item.model ? ' - ' + item.model : ''}) to this task, deducted from available stock.`;
    statusBox.className = 'inventory-scan-status success';
  }

  const inventoryView = document.getElementById('view-inventory');
  if (inventoryView && !inventoryView.classList.contains('hidden')) {
    renderInventoryPage();
  }
}

async function renderAllTasksPage() {
  const container = document.getElementById('all-tasks-list');
  if (!container) return;
  container.innerHTML = '';
  let allOrders = await db.workOrders.toArray();

  if (globalSearchQuery !== "") {
    allOrders = allOrders.filter(o => 
      String(o.id).toLowerCase().includes(globalSearchQuery) ||
      (o.customerName && o.customerName.toLowerCase().includes(globalSearchQuery)) ||
      (o.serviceType && o.serviceType.toLowerCase().includes(globalSearchQuery))
    );
  }

  allOrders.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${o.id}</strong></td>
      <td>${o.customerName}</td>
      <td>${o.serviceType || 'خدمة مزود إنترنت (FiberTech)'}</td>
      <td>${o.status}</td>
      <td>${priorityPillHtml(o.priority)}</td>
      <td>${o.assignedTo} ${o.transferredTo ? `➔ ${o.transferredTo}` : ''}</td>
      <td><button class="action-icon-btn" onclick="openTicketDetails(${o.id})">⚙️</button></td>
    `;
    container.appendChild(tr);
  });
}

async function renderAllNotesPage() {
  const container = document.getElementById('all-notes-container');
  if (!container) return;
  container.innerHTML = '';

  let notes = await db.taskNotes.toArray();
  if (notes.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted);">${currentLang === 'ar' ? 'لا توجد ملاحظات مضافة لأي مهمة حتى الآن.' : 'No notes recorded.'}</div>`;
    return;
  }

  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const ordersList = await db.workOrders.toArray();
  const ordersMap = new Map();
  ordersList.forEach(o => ordersMap.set(o.id, o));

  if (globalSearchQuery !== "") {
    notes = notes.filter(n => {
      const task = ordersMap.get(n.workOrderId);
      return (
        String(n.workOrderId).includes(globalSearchQuery) ||
        (n.content && n.content.toLowerCase().includes(globalSearchQuery)) ||
        (task && task.customerName && task.customerName.toLowerCase().includes(globalSearchQuery))
      );
    });
  }

  for (let note of notes) {
    const task = ordersMap.get(note.workOrderId) || { customerName: "Unknown Task", status: "unknown", assignedTo: "Unassigned" };
    const noteCard = document.createElement('div');
    noteCard.className = 'card note-item-card';
    
    let contentHtml = '';
    if (note.type === 'text') {
      contentHtml = `<p class="note-content-text">${escapeHtml(note.content)}</p>`;
    } else if (note.type === 'audio') {
      contentHtml = `<audio controls src="${note.mediaUrl}" style="width:100%; margin-top:8px;"></audio>`;
    } else if (note.type === 'image') {
      contentHtml = `<img src="${note.mediaUrl}" alt="Note Image" style="max-width:100%; max-height:250px; border-radius:8px; margin-top:8px; object-fit:contain;">`;
    } else if (note.type === 'video') {
      contentHtml = `<video controls src="${note.mediaUrl}" style="max-width:100%; max-height:250px; border-radius:8px; margin-top:8px;"></video>`;
    }

    const formattedDate = new Date(note.timestamp).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

    noteCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:10px;">
        <div>
          <h3 style="font-size:1.05rem; margin-bottom:4px; color:var(--teal-main);">${i18nTranslations[currentLang].navTasks} #${note.workOrderId} - ${task.customerName}</h3>
          <p style="font-size:0.82rem; color:var(--text-muted);">
            📍 ${task.address || 'N/A'} | 👤 ${task.assignedTo || 'Unassigned'} | 📌 ${task.serviceType || 'N/A'}
          </p>
        </div>
        <button class="btn btn-primary" style="padding:4px 10px; font-size:0.8rem; white-space:nowrap;" onclick="openTicketDetails(${note.workOrderId})">
          🔗
        </button>
      </div>
      <div style="background: rgba(0,0,0,0.02); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color);">
        ${contentHtml}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-size:0.78rem; color:var(--text-muted);">
        <span>🕒 ${formattedDate}</span>
        <button class="btn btn-danger" style="padding:2px 8px; font-size:0.75rem;" onclick="deleteTaskNote(${note.id}, true)">🗑️</button>
      </div>
    `;

    container.appendChild(noteCard);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

async function resetLocalDB() {
  if (confirm(currentLang === 'ar' ? "هل أنت متأكد من مسح جميع البيانات المحلية وإعادة ضبطها؟" : "Wipe local DB and reset?")) {
    await Dexie.delete('FieldTechDB');
    window.location.reload();
  }
}

// ==========================================
// 4.5 جدولة/تقويم المهام (Calendar Scheduling)
// عرض المهام مبوبة حسب التاريخ (أسبوعي/شهري) لمعرفة عدد المهام
// لكل فني في كل يوم، ما يساعد بالتخطيط الميداني
// ==========================================
let ftCalendarState = { mode: 'month', currentDate: new Date() };

const ftArMonths = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const ftEnMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ftArWeekdays = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const ftEnWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// إرجاع مفتاح التاريخ بصيغة YYYY-MM-DD اعتماداً على التوقيت المحلي (بدون مشاكل فروقات المنطقة الزمنية)
function ftCalendarDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function ftCalendarUpdateWeekdayHeader() {
  const container = document.getElementById('ft-calendar-weekday-header');
  if (!container) return;
  const names = currentLang === 'ar' ? ftArWeekdays : ftEnWeekdays;
  container.innerHTML = names.map(n => `<div>${n}</div>`).join('');
}

function ftGroupTasksByDate(orders) {
  const map = new Map();
  orders.forEach(o => {
    if (!o.deadline) return;
    if (!map.has(o.deadline)) map.set(o.deadline, []);
    map.get(o.deadline).push(o);
  });
  return map;
}

function ftCalendarSetMode(mode) {
  ftCalendarState.mode = mode;
  const weekBtn = document.getElementById('ft-calendar-mode-week');
  const monthBtn = document.getElementById('ft-calendar-mode-month');
  if (weekBtn) weekBtn.className = mode === 'week' ? 'btn btn-teal-add' : 'btn btn-secondary';
  if (monthBtn) monthBtn.className = mode === 'month' ? 'btn btn-teal-add' : 'btn btn-secondary';
  renderCalendarPage();
}

function ftCalendarNav(direction) {
  if (direction === 0) {
    ftCalendarState.currentDate = new Date();
  } else if (ftCalendarState.mode === 'month') {
    const d = new Date(ftCalendarState.currentDate);
    d.setDate(1);
    d.setMonth(d.getMonth() + direction);
    ftCalendarState.currentDate = d;
  } else {
    const d = new Date(ftCalendarState.currentDate);
    d.setDate(d.getDate() + (direction * 7));
    ftCalendarState.currentDate = d;
  }
  ftCloseCalendarDayDetail();
  renderCalendarPage();
}

// نقطة الدخول الرئيسية لصفحة التقويم: تجهّز فلتر الفنيين وتستدعي عرض الشهر أو الأسبوع
async function renderCalendarPage() {
  ftCalendarUpdateWeekdayHeader();

  const techSelect = document.getElementById('ft-calendar-tech-filter');
  if (techSelect) {
    const techs = await getUniqueTechnicians();
    const currentVal = techSelect.value || 'all';
    const allLabel = currentLang === 'ar' ? 'كل الفنيين' : 'All Technicians';
    techSelect.innerHTML = `<option value="all">${allLabel}</option>` +
      techs.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join('');
    techSelect.value = (currentVal === 'all' || techs.includes(currentVal)) ? currentVal : 'all';
  }
  const techFilterVal = techSelect ? techSelect.value : 'all';

  let orders = await db.workOrders.toArray();
  orders = orders.filter(o => !!o.deadline);
  if (techFilterVal !== 'all') {
    orders = orders.filter(o =>
      (o.assignedTo && o.assignedTo.trim() === techFilterVal) ||
      (o.transferredTo && o.transferredTo.trim() === techFilterVal)
    );
  }

  if (ftCalendarState.mode === 'month') {
    ftRenderCalendarMonthGrid(orders);
  } else {
    ftRenderCalendarWeekGrid(orders);
  }
}

// عرض شهري: شبكة 6 أسابيع × 7 أيام، كل خلية تعرض عدد المهام وأبرز الفنيين المسندين بذلك اليوم
function ftRenderCalendarMonthGrid(orders) {
  const grid = document.getElementById('ft-calendar-grid');
  if (!grid) return;
  grid.classList.add('month-mode');
  grid.classList.remove('week-mode');

  const cur = ftCalendarState.currentDate;
  const year = cur.getFullYear();
  const month = cur.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startDow = firstOfMonth.getDay();
  const gridStart = new Date(year, month, 1 - startDow);
  const totalCells = 42;
  const tasksByDate = ftGroupTasksByDate(orders);
  const todayKey = ftCalendarDateKey(new Date());

  let html = '';
  for (let i = 0; i < totalCells; i++) {
    const cellDate = new Date(gridStart);
    cellDate.setDate(gridStart.getDate() + i);
    const key = ftCalendarDateKey(cellDate);
    const isOtherMonth = cellDate.getMonth() !== month;
    const isToday = key === todayKey;
    const dayTasks = tasksByDate.get(key) || [];

    // تجميع عدد المهام لكل فني بهذا اليوم (لمعرفة "مين عنده كم مهمة باليوم")
    const techCounts = new Map();
    dayTasks.forEach(t => {
      const techName = (t.transferredTo && t.transferredTo.trim()) || (t.assignedTo && t.assignedTo.trim()) || (currentLang === 'ar' ? 'غير مسند' : 'Unassigned');
      techCounts.set(techName, (techCounts.get(techName) || 0) + 1);
    });
    const techEntries = Array.from(techCounts.entries());
    const techChipsHtml = techEntries.slice(0, 3).map(([name, count]) => `<div class="ft-cal-tech-chip">${escapeHtml(name)} (${count})</div>`).join('');
    const moreCount = techEntries.length - 3;
    const moreChipHtml = moreCount > 0 ? `<div class="ft-cal-tech-chip">+${moreCount} ${currentLang === 'ar' ? 'آخرين' : 'more'}</div>` : '';

    const presentPriorities = ['urgent', 'normal', 'low'].filter(p => dayTasks.some(t => (t.priority || 'normal') === p));
    const priorityDotsHtml = presentPriorities.length ? `<div class="ft-cal-priority-dots">${presentPriorities.map(p => `<span class="ft-priority-dot ${p}"></span>`).join('')}</div>` : '';

    const cellClasses = ['ft-cal-day-cell'];
    if (isOtherMonth) cellClasses.push('other-month');
    if (isToday) cellClasses.push('today');
    if (dayTasks.length === 0) cellClasses.push('empty-day');

    const clickAttr = dayTasks.length ? ` onclick="ftShowCalendarDayDetail('${key}')"` : '';

    html += `
      <div class="${cellClasses.join(' ')}"${clickAttr}>
        <div class="ft-cal-day-num">
          <span>${cellDate.getDate()}</span>
          ${dayTasks.length ? `<span class="ft-cal-day-count-badge">${dayTasks.length}</span>` : ''}
        </div>
        <div class="ft-cal-tech-chips">${techChipsHtml}${moreChipHtml}</div>
        ${priorityDotsHtml}
      </div>
    `;
  }
  grid.innerHTML = html;

  const monthNames = currentLang === 'ar' ? ftArMonths : ftEnMonths;
  const periodLabel = document.getElementById('ft-calendar-period-label');
  if (periodLabel) periodLabel.textContent = `${monthNames[month]} ${year}`;
}

// عرض أسبوعي: عمود لكل يوم يعرض بطاقات مصغّرة لكل مهمة (رقم/عميل/فني) بلون حسب الأولوية
function ftRenderCalendarWeekGrid(orders) {
  const grid = document.getElementById('ft-calendar-grid');
  if (!grid) return;
  grid.classList.add('week-mode');
  grid.classList.remove('month-mode');

  const cur = ftCalendarState.currentDate;
  const dow = cur.getDay();
  const weekStart = new Date(cur);
  weekStart.setDate(cur.getDate() - dow);
  const tasksByDate = ftGroupTasksByDate(orders);
  const todayKey = ftCalendarDateKey(new Date());
  const priorityRank = { urgent: 0, normal: 1, low: 2 };

  let html = '';
  for (let i = 0; i < 7; i++) {
    const cellDate = new Date(weekStart);
    cellDate.setDate(weekStart.getDate() + i);
    const key = ftCalendarDateKey(cellDate);
    const isToday = key === todayKey;
    let dayTasks = tasksByDate.get(key) || [];
    dayTasks = [...dayTasks].sort((a, b) => (priorityRank[a.priority || 'normal']) - (priorityRank[b.priority || 'normal']));

    const taskChipsHtml = dayTasks.map(t => {
      const p = t.priority || 'normal';
      const techName = (t.transferredTo && t.transferredTo.trim()) || t.assignedTo || (currentLang === 'ar' ? 'غير مسند' : 'Unassigned');
      return `<div class="ft-cal-task-chip ${p}" onclick="event.stopPropagation(); openTicketDetails(${t.id})">#${t.id} ${escapeHtml(t.customerName || '')} — ${escapeHtml(techName)}</div>`;
    }).join('');

    const cellClasses = ['ft-cal-day-cell'];
    if (isToday) cellClasses.push('today');
    if (dayTasks.length === 0) cellClasses.push('empty-day');
    const clickAttr = dayTasks.length ? ` onclick="ftShowCalendarDayDetail('${key}')"` : '';

    html += `
      <div class="${cellClasses.join(' ')}"${clickAttr}>
        <div class="ft-cal-day-num">
          <span>${cellDate.getDate()}</span>
          ${dayTasks.length ? `<span class="ft-cal-day-count-badge">${dayTasks.length}</span>` : ''}
        </div>
        <div class="ft-cal-week-tasks">${taskChipsHtml}</div>
      </div>
    `;
  }
  grid.innerHTML = html;

  const monthNames = currentLang === 'ar' ? ftArMonths : ftEnMonths;
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const startLabel = `${weekStart.getDate()} ${monthNames[weekStart.getMonth()]}`;
  const endLabel = `${weekEnd.getDate()} ${monthNames[weekEnd.getMonth()]} ${weekEnd.getFullYear()}`;
  const periodLabel = document.getElementById('ft-calendar-period-label');
  if (periodLabel) periodLabel.textContent = `${startLabel} - ${endLabel}`;
}

// عرض لوحة تفاصيل مهام يوم معيّن، مع ملخص عدد المهام لكل فني بذلك اليوم
async function ftShowCalendarDayDetail(dateKey) {
  const techSelect = document.getElementById('ft-calendar-tech-filter');
  const techFilterVal = techSelect ? techSelect.value : 'all';

  let orders = await db.workOrders.where('deadline').equals(dateKey).toArray();
  if (techFilterVal !== 'all') {
    orders = orders.filter(o =>
      (o.assignedTo && o.assignedTo.trim() === techFilterVal) ||
      (o.transferredTo && o.transferredTo.trim() === techFilterVal)
    );
  }

  const panel = document.getElementById('ft-calendar-day-detail');
  const title = document.getElementById('ft-calendar-day-detail-title');
  const techSummary = document.getElementById('ft-calendar-day-tech-summary');
  const listBody = document.getElementById('ft-calendar-day-detail-list');
  if (!panel || !title || !techSummary || !listBody) return;

  title.textContent = `${currentLang === 'ar' ? '🗓️ مهام يوم' : '🗓️ Tasks for'} ${dateKey} (${orders.length})`;

  const techCounts = new Map();
  orders.forEach(o => {
    const name = (o.transferredTo && o.transferredTo.trim()) || (o.assignedTo && o.assignedTo.trim()) || (currentLang === 'ar' ? 'غير مسند' : 'Unassigned');
    techCounts.set(name, (techCounts.get(name) || 0) + 1);
  });
  techSummary.innerHTML = Array.from(techCounts.entries()).map(([name, count]) =>
    `<span class="ft-calendar-tech-summary-chip">👤 ${escapeHtml(name)}: ${count}</span>`
  ).join('') || `<span style="color: var(--text-muted); font-size:0.85rem;">${currentLang === 'ar' ? 'لا توجد مهام' : 'No tasks'}</span>`;

  const statusMap = {
    pending: { text: i18nTranslations[currentLang].filterPending, class: "pending" },
    completed: { text: i18nTranslations[currentLang].filterCompleted, class: "completed" },
    on_hold: { text: i18nTranslations[currentLang].filterOnhold, class: "on_hold" },
    transferred: { text: `${i18nTranslations[currentLang].filterTransferred} 🔄`, class: "on_hold" }
  };

  const priorityRank = { urgent: 0, normal: 1, low: 2 };
  orders.sort((a, b) => (priorityRank[a.priority || 'normal']) - (priorityRank[b.priority || 'normal']));

  listBody.innerHTML = orders.map(o => {
    const statusObj = statusMap[o.status] || { text: i18nTranslations[currentLang].filterPending, class: "pending" };
    return `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${escapeHtml(o.customerName || '')}</td>
        <td>${priorityPillHtml(o.priority)}</td>
        <td>${escapeHtml(o.assignedTo || '')} ${o.transferredTo ? `➔ (${escapeHtml(o.transferredTo)})` : ''}</td>
        <td><span class="status-pill ${statusObj.class}">${statusObj.text}</span></td>
        <td><button class="action-icon-btn" onclick="openTicketDetails(${o.id})">📝</button></td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="6" style="text-align:center;">${currentLang === 'ar' ? 'لا توجد مهام' : 'No tasks'}</td></tr>`;

  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function ftCloseCalendarDayDetail() {
  const panel = document.getElementById('ft-calendar-day-detail');
  if (panel) panel.classList.add('hidden');
}

// ==========================================
// 5. تفاصيل التذكرة، قراءة الإشارة، المسح والتوقيع والملاحظات (محدث ليعمل بكفاءة)
// ==========================================
async function openTicketDetails(ticketId) {
  activeTicketId = ticketId;
  const ticket = await db.workOrders.get(ticketId);

  // احفظ الصفحة الحالية (مثلاً "ملفي الشخصي" للموظف أو "لوحة التحكم" للمسؤول)
  // كي نعود إليها عند إغلاق تفاصيل التذكرة بدلاً من العودة دائماً إلى لوحة التحكم
  const currentlyVisibleView = document.querySelector('.app-view:not(.hidden)');
  if (currentlyVisibleView) ftReturnViewId = currentlyVisibleView.id;

  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.add('hidden'));

  const navBtns = document.querySelectorAll('.top-nav-item');
  navBtns.forEach(btn => btn.classList.remove('active'));

  document.getElementById('ticket-details-section').classList.remove('hidden');
  document.getElementById('ticket-title').textContent = `${i18nTranslations[currentLang].ticketDetails} #${ticket.id}`;

  const addressEncoded = encodeURIComponent(ticket.address || 'Ramallah');
  document.getElementById('subscriber-info').innerHTML = `
    <div style="background: rgba(0,0,0,0.03); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <p><strong>${i18nTranslations[currentLang].labelCustName}</strong> ${ticket.customerName}</p>
      <p><strong>${i18nTranslations[currentLang].labelPhone}</strong> <a href="tel:${ticket.phone}">${ticket.phone || '0590000000'}</a> 📞</p>
      <p><strong>${i18nTranslations[currentLang].labelAddress}</strong> ${ticket.address || 'N/A'} <a href="https://maps.google.com/?q=${addressEncoded}" target="_blank">🗺️ Map</a></p>
      <p><strong>${i18nTranslations[currentLang].labelAssignedTech}</strong> ${ticket.assignedTo || 'N/A'}</p>
      ${ticket.transferredTo ? `<p><strong style="color:red;">Transferred To:</strong> ${ticket.transferredTo}</p>` : ''}
      <p><strong>${i18nTranslations[currentLang].labelServiceType}</strong> ${ticket.serviceType}</p>
      <p><strong>${i18nTranslations[currentLang].labelDeadline}</strong> ${ticket.deadline}</p>
      <p><strong>${i18nTranslations[currentLang].labelPriority}</strong> ${priorityPillHtml(ticket.priority)}</p>
    </div>
  `;

  if (ticket.signalValue) {
    document.getElementById('signal-input').value = ticket.signalValue;
    checkOpticalSignal();
  } else {
    document.getElementById('signal-input').value = '';
    document.getElementById('signal-result-box').className = "signal-box hidden";
  }

  const statusSelect = document.getElementById('ticket-status-select');
  if (statusSelect) statusSelect.value = ticket.status || 'pending';

  const ratingSelect = document.getElementById('customer-rating');
  if (ratingSelect) ratingSelect.value = ticket.customerRating ? String(ticket.customerRating) : '';

  const scannedText = document.getElementById('scanned-serial-text');
  if (scannedText) scannedText.textContent = currentLang === 'ar' ? 'لم يتم المسح بعد' : 'Not scanned yet';

  const invStatusBox = document.getElementById('inventory-scan-status');
  if (invStatusBox) {
    invStatusBox.textContent = currentLang === 'ar'
      ? 'سيتم التحقق من الباركود في المخزون وربط العتاد بالمهمة تلقائياً.'
      : 'Scanning will check inventory and link the unit automatically.';
    invStatusBox.className = 'inventory-scan-status';
  }

  await renderCurrentTaskNotes();
  setTimeout(initSignaturePad, 100);
}

function closeTicketDetails() {
  stopBarcodeScanner(); // إيقاف الكاميرا تلقائياً عند الخروج
  closeFieldCameraCapture(); // إيقاف كاميرا تصوير الحقل تلقائياً عند الخروج إن كانت مفتوحة
  document.getElementById('ticket-details-section').classList.add('hidden');

  // العودة إلى نفس الصفحة التي فُتحت منها تفاصيل التذكرة (لوحة التحكم للمسؤول، أو ملفي الشخصي للموظف...)
  const targetId = ftReturnViewId || 'view-dashboard';
  const targetView = document.getElementById(targetId);
  if (targetView) {
    targetView.classList.remove('hidden');
  } else {
    document.getElementById('view-dashboard').classList.remove('hidden');
  }

  if (targetId === 'view-profile') ftRenderProfileView();
  else if (targetId === 'view-active-tasks') renderActiveTasksPage();
  else if (targetId === 'view-calendar') renderCalendarPage();
  else if (targetId === 'view-transferred-tasks') renderTransferredTasksPage();
  else if (targetId === 'view-history') renderHistoryPage();
  else if (targetId === 'view-tasks') renderAllTasksPage();
  else if (targetId === 'view-clients') renderClientsPage();
  else renderWorkOrders('all');
}

function exitTicketWithoutSaving() {
  if (confirm(currentLang === 'ar' ? "هل أنت متأكد من الخروج بدون حفظ؟" : "Exit without saving?")) closeTicketDetails();
}

// كشف ما إذا كانت الصفحة مفتوحة داخل متصفح مضمّن ضمن تطبيق آخر (واتساب/فيسبوك/
// إنستغرام/ماسنجر/تيك توك...) بدل متصفح حقيقي مستقل. هذه المتصفحات المضمّنة تمنع
// الوصول إلى الكاميرا بشكل شبه دائم ولا يمكن إصلاحه من إعدادات الموقع لأن التطبيق
// المضيف نفسه لا يمنحها صلاحية الكاميرا أصلاً — الحل الوحيد هو فتح الرابط من متصفح
// حقيقي (Safari/Chrome) عبر خيار "فتح في المتصفح" أو نسخ الرابط ولصقه هناك.
function ftIsInAppBrowser() {
  const ua = navigator.userAgent || '';
  return /FBAN|FBAV|Instagram|WhatsApp|Line\/|MicroMessenger|TikTok|Snapchat/i.test(ua);
}

function ftCameraErrorMessage(err) {
  const name = (err && err.name) || '';
  const msg = (err && err.message) || String(err || '');

  if (name === 'NotAllowedError' || /permission/i.test(msg) || /denied/i.test(msg)) {
    if (ftIsInAppBrowser()) {
      return currentLang === 'ar'
        ? "يبدو أن الصفحة مفتوحة داخل متصفح مضمّن ضمن تطبيق آخر (مثل واتساب أو إنستغرام)، وهذه المتصفحات المضمّنة تمنع الوصول إلى الكاميرا ولا يمكن إصلاح ذلك من الإعدادات. افتح الرابط من متصفح حقيقي (Safari أو Chrome) بدلاً من فتحه مباشرة من داخل التطبيق، عبر خيار (فتح في المتصفح) أو بنسخ الرابط ولصقه في المتصفح."
        : "This page appears to be open inside another app's built-in browser (like WhatsApp or Instagram). These in-app browsers block camera access and this can't be fixed from settings. Open the link in a real browser (Safari or Chrome) instead — use the \"Open in Browser\" option, or copy the link and paste it into your browser.";
    }
    return currentLang === 'ar'
      ? "تم رفض صلاحية الكاميرا من المتصفح. يرجى فتح إعدادات الموقع/المتصفح، منح إذن الكاميرا لهذا العنوان، ثم إعادة تحميل الصفحة والمحاولة مجدداً."
      : "Camera permission was denied. Please open your browser's site settings, allow camera access for this page, then reload and try again.";
  }
  if (name === 'NotFoundError' || name === 'OverconstrainedError') {
    return currentLang === 'ar'
      ? "لم يتم العثور على كاميرا مناسبة على هذا الجهاز."
      : "No suitable camera was found on this device.";
  }
  if (name === 'NotReadableError' || name === 'TrackStartError') {
    return currentLang === 'ar'
      ? "الكاميرا مستخدمة حالياً من برنامج أو نافذة أخرى. أغلق أي تطبيق آخر يستخدم الكاميرا (مثل تطبيق آخر أو تبويب آخر) وحاول مجدداً."
      : "The camera is currently in use by another app or browser tab. Close it and try again.";
  }
  if (name === 'SecurityError') {
    return currentLang === 'ar'
      ? "الوصول إلى الكاميرا يتطلب تصفح الموقع عبر HTTPS أو من خلال localhost/127.0.0.1."
      : "Camera access requires HTTPS, or serving the page from localhost/127.0.0.1.";
  }
  return currentLang === 'ar'
    ? "تعذر فتح الكاميرا، يرجى التأكد من منح صلاحيات الكاميرا."
    : "Camera permission required or not supported.";
}

function ftHideBarcodeScannerError() {
  const errBox = document.getElementById('barcode-scanner-error');
  if (errBox) { errBox.classList.add('hidden'); errBox.innerHTML = ''; }
}

function ftShowBarcodeScannerError(err) {
  const errBox = document.getElementById('barcode-scanner-error');
  const message = ftCameraErrorMessage(err);
  if (errBox) {
    errBox.classList.remove('hidden');
    errBox.innerHTML = `
      <div>${message}</div>
      <div style="margin-top:8px; font-size:0.8rem; opacity:0.85;">
        ${currentLang === 'ar'
          ? 'يمكنك أيضاً استخدام زر "استيراد صورة الباركود" أدناه بدلاً من الكاميرا.'
          : 'You can also use the "Import barcode image" button below instead of the camera.'}
      </div>
      <button type="button" class="btn btn-secondary" style="margin-top:8px; width:100%; padding:8px;" onclick="startBarcodeScanner()">
        ${currentLang === 'ar' ? '🔄 إعادة المحاولة' : '🔄 Retry'}
      </button>
    `;
  } else {
    alert(message);
  }
}

async function startBarcodeScanner() {
  const stopBtn = document.getElementById('btn-stop-scanner');
  ftHideBarcodeScannerError();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    const errBox = document.getElementById('barcode-scanner-error');
    const msg = currentLang === 'ar'
      ? "متصفحك لا يدعم الوصول إلى الكاميرا على هذه الصفحة (يجب فتحها عبر HTTPS أو localhost/127.0.0.1)."
      : "Your browser does not support camera access on this page (must be served over HTTPS or localhost/127.0.0.1).";
    if (errBox) { errBox.classList.remove('hidden'); errBox.textContent = msg; }
    else alert(msg);
    return;
  }

  stopBtn.classList.remove('hidden');

  if (!html5QrCodeScanner) {
    html5QrCodeScanner = new Html5Qrcode("qr-reader");
  }

  // حجم مربع المسح يتكيّف مع عرض الشاشة كي لا يتجاوز حدود الجوّالات الصغيرة جداً
  const qrboxResponsiveSize = Math.max(180, Math.min(220, Math.floor(window.innerWidth * 0.7)));
  const scanConfig = { fps: 10, qrbox: qrboxResponsiveSize };

  const onScanSuccess = async (text) => {
    currentScannedSerial = text;
    document.getElementById('scanned-serial-text').textContent = text;
    const devType = document.getElementById('device-type').value;

    if (activeTicketId) {
      await db.hardwareLogs.add({
        workOrderId: activeTicketId,
        serialNumber: text,
        deviceType: devType
      });
      await linkScannedItemToInventory(text, devType);
    }

    stopBarcodeScanner();
  };

  const onScanFailure = () => {
    // تجاهل الأخطاء المتكررة أثناء مسح الإطار لتجنب إزعاج الكونسول
  };

  try {
    // المحاولة الأولى: الكاميرا الخلفية (الأنسب لمسح الباركود على الهاتف)
    await html5QrCodeScanner.start({ facingMode: "environment" }, scanConfig, onScanSuccess, onScanFailure);
    return;
  } catch (envErr) {
    console.warn("Environment-facing camera unavailable, trying fallback camera list:", envErr);
  }

  try {
    // المحاولة الثانية: تعداد كل الكاميرات المتاحة واستخدام أنسبها
    // (مفيد جداً على أجهزة الكمبيوتر/اللابتوب التي لا تحتوي كاميرا خلفية "environment")
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras || cameras.length === 0) {
      throw { name: 'NotFoundError' };
    }

    const preferredCam = cameras.find(c => /back|rear|environment|خلف/i.test(c.label || '')) || cameras[0];
    await html5QrCodeScanner.start({ deviceId: { exact: preferredCam.id } }, scanConfig, onScanSuccess, onScanFailure);
    return;
  } catch (fallbackErr) {
    console.error("Camera error:", fallbackErr);
    stopBtn.classList.add('hidden');
    ftShowBarcodeScannerError(fallbackErr);
  }
}

function stopBarcodeScanner() {
  if (html5QrCodeScanner) {
    html5QrCodeScanner.stop().then(() => {
      const stopBtn = document.getElementById('btn-stop-scanner');
      if (stopBtn) stopBtn.classList.add('hidden');
      html5QrCodeScanner.clear();
      html5QrCodeScanner = null;
    }).catch((err) => {
      console.log("Scanner already stopped or error:", err);
      const stopBtn = document.getElementById('btn-stop-scanner');
      if (stopBtn) stopBtn.classList.add('hidden');
      html5QrCodeScanner = null;
    });
  }
}

// ==========================================
// استيراد صورة تحتوي على باركود/QR وقراءتها مباشرة من الملف
// بديل لا يحتاج صلاحية كاميرا على الإطلاق (مفيد عند رفض المتصفح صلاحية الكاميرا
// أو عند العمل على جهاز مكتبي، أو عند وجود صورة جاهزة للباركود بدل مسحه مباشرة).
//
// يتم استخدام محركين لفك الترميز لضمان قبول أي صورة باركود/QR صالحة تقريباً:
// 1) jsQR: مكتبة قوية ودقيقة جداً في فك ترميز رموز QR من صور مستوردة (تُجرَّب أولاً، وعلى أكثر من دقة/حجم).
// 2) html5-qrcode (scanFile): تُستخدم كخطة بديلة، وهي تدعم أيضاً أنواع باركود أخرى غير QR.
// ==========================================
function ftLoadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(objectUrl);
      reject(e);
    };
    img.src = objectUrl;
  });
}

function ftGetImageDataFromImage(img, maxDimension) {
  let width = img.naturalWidth || img.width;
  let height = img.naturalHeight || img.height;

  if (maxDimension && Math.max(width, height) > maxDimension) {
    const scale = maxDimension / Math.max(width, height);
    width = Math.max(1, Math.round(width * scale));
    height = Math.max(1, Math.round(height * scale));
  }

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(img, 0, 0, width, height);
  return tempCtx.getImageData(0, 0, width, height);
}

async function ftDecodeBarcodeFromFile(file) {
  // المحاولة الأولى: jsQR — نجرب عدة دقات/أحجام لتغطية أكبر عدد من حالات الصور
  // (صور كبيرة من كاميرا الهاتف، صور مصغّرة، لقطات شاشة، إلخ).
  if (typeof jsQR === 'function') {
    try {
      const img = await ftLoadImageFromFile(file);
      const attemptSizes = [null, 1600, 1000, 2200, 700];

      for (const maxDim of attemptSizes) {
        try {
          const imageData = ftGetImageDataFromImage(img, maxDim);
          const result = jsQR(imageData.data, imageData.width, imageData.height);
          if (result && result.data) {
            return result.data;
          }
        } catch (innerErr) {
          console.warn("jsQR decode attempt failed at size", maxDim, innerErr);
        }
      }
    } catch (loadErr) {
      console.warn("Could not load imported image for jsQR, falling back to html5-qrcode:", loadErr);
    }
  }

  // المحاولة الثانية: html5-qrcode (تدعم أيضاً أنواع باركود أخرى غير QR)
  const fileScanner = new Html5Qrcode("qr-reader");
  try {
    const decodedText = await fileScanner.scanFile(file, true);
    return decodedText;
  } finally {
    try { await fileScanner.clear(); } catch (e) { /* تجاهل أي خطأ عند التنظيف */ }
  }
}

async function handleBarcodeImageImport(event) {
  const fileInput = event.target;
  const file = fileInput.files && fileInput.files[0];
  const statusBox = document.getElementById('barcode-import-status');

  if (!file) return;

  if (!file.type || !file.type.startsWith('image/')) {
    if (statusBox) {
      statusBox.classList.remove('hidden');
      statusBox.className = 'error';
      statusBox.textContent = currentLang === 'ar'
        ? "يرجى اختيار ملف صورة صالح (JPG, PNG...)."
        : "Please choose a valid image file (JPG, PNG...).";
    }
    fileInput.value = '';
    return;
  }

  // إن كانت الكاميرا الحية تعمل حالياً، نوقفها أولاً لتفادي أي تعارض قبل قراءة الصورة المستوردة
  if (html5QrCodeScanner) {
    stopBarcodeScanner();
  }

  if (statusBox) {
    statusBox.classList.remove('hidden');
    statusBox.className = '';
    statusBox.textContent = currentLang === 'ar' ? "⏳ جارِ قراءة الباركود من الصورة..." : "⏳ Reading barcode from image...";
  }

  try {
    const decodedText = await ftDecodeBarcodeFromFile(file);

    if (!decodedText) {
      throw new Error('BARCODE_NOT_FOUND');
    }

    currentScannedSerial = decodedText;
    document.getElementById('scanned-serial-text').textContent = decodedText;
    const devType = document.getElementById('device-type').value;

    if (activeTicketId) {
      await db.hardwareLogs.add({
        workOrderId: activeTicketId,
        serialNumber: decodedText,
        deviceType: devType
      });
      await linkScannedItemToInventory(decodedText, devType);
    }

    if (statusBox) {
      statusBox.className = 'success';
      statusBox.textContent = currentLang === 'ar'
        ? `✅ تم قراءة الباركود من الصورة بنجاح: ${decodedText}`
        : `✅ Barcode read successfully from image: ${decodedText}`;
    }
  } catch (err) {
    console.error("Barcode image import error:", err);
    if (statusBox) {
      statusBox.className = 'error';
      statusBox.textContent = currentLang === 'ar'
        ? "لم يتم العثور على باركود أو QR واضح في الصورة المستوردة. يرجى التأكد من وضوح الصورة والمحاولة مجدداً."
        : "No readable barcode/QR code was found in the imported image. Please try a clearer image.";
    }
  } finally {
    fileInput.value = '';
  }
}

function checkOpticalSignal() {
  const valInput = document.getElementById('signal-input').value;
  const box = document.getElementById('signal-result-box');
  const badge = document.getElementById('signal-status-badge');
  const msg = document.getElementById('signal-status-message');

  if (!valInput) { box.className = "signal-box hidden"; return; }
  const val = parseFloat(valInput);
  box.classList.remove('hidden');

  if (val <= -14 && val >= -25) {
    box.className = "signal-box excellent";
    badge.textContent = "🟢 Excellent Signal (Passed)";
    msg.textContent = `Reading (${val} dBm) is optimal.`;
  } else if (val <= -26 && val >= -28) {
    box.className = "signal-box warning";
    badge.textContent = "🟡 Warning (Weak Signal)";
    msg.textContent = `Reading (${val} dBm) is weak. Check splices/connectors.`;
  } else {
    box.className = "signal-box rejected";
    badge.textContent = "🔴 Rejected (Fails Standard)";
    msg.textContent = `Reading (${val} dBm) fails acceptance threshold.`;
  }
}

function handleImageCapture(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = document.createElement('img');
    img.src = evt.target.result;
    img.style.width = "70px";
    img.style.height = "70px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "4px";
    img.style.border = "1px solid var(--border-color)";
    document.getElementById('image-preview-container').appendChild(img);
    capturedImages.push(evt.target.result);
  };
  reader.readAsDataURL(file);
}

// ==========================================
// التقاط صورة حقلية مباشرة عبر الكاميرا الحية (getUserMedia)
// يعمل على الجوال وأجهزة الكمبيوتر، بعكس خاصية capture على input[type=file]
// التي تفتح متصفح ملفات عادي على أجهزة سطح المكتب بدل تشغيل الكاميرا.
// ==========================================
async function ftGetFieldCameraDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(d => d.kind === 'videoinput');
  } catch (e) {
    return [];
  }
}

async function ftStartFieldCameraStream(constraints) {
  if (ftFieldCameraStream) {
    ftFieldCameraStream.getTracks().forEach(track => track.stop());
    ftFieldCameraStream = null;
  }

  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  ftFieldCameraStream = stream;

  const video = document.getElementById('field-camera-video');
  if (video) {
    video.srcObject = stream;
    await video.play().catch(() => {});
  }

  return stream;
}

async function openFieldCameraCapture() {
  const modal = document.getElementById('field-camera-modal');
  const errBox = document.getElementById('field-camera-error');
  if (errBox) { errBox.classList.add('hidden'); errBox.textContent = ''; }
  if (!modal) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert(currentLang === 'ar'
      ? "متصفحك لا يدعم الوصول إلى الكاميرا على هذه الصفحة (يجب فتحها عبر HTTPS أو localhost/127.0.0.1)."
      : "Your browser does not support camera access on this page (must be served over HTTPS or localhost/127.0.0.1).");
    return;
  }

  modal.classList.remove('hidden');

  try {
    // المحاولة الأولى: الكاميرا الخلفية (الأنسب لتصوير الكابلات ومكان التركيب على الهاتف)
    await ftStartFieldCameraStream({ video: { facingMode: "environment" }, audio: false });
  } catch (envErr) {
    console.warn("Environment-facing camera unavailable for field photo, trying default camera:", envErr);
    try {
      // المحاولة الثانية: أي كاميرا متاحة (مفيد على أجهزة الكمبيوتر/اللابتوب التي لا تحتوي كاميرا خلفية)
      await ftStartFieldCameraStream({ video: true, audio: false });
    } catch (fallbackErr) {
      console.error("Field camera error:", fallbackErr);
      ftShowFieldCameraError(fallbackErr);
      return;
    }
  }

  ftFieldCameraDevices = await ftGetFieldCameraDevices();
  ftFieldCameraActiveIndex = 0;
}

// عرض خطأ الكاميرا بشكل مضمّن داخل النافذة مع زر "إعادة المحاولة" بدل تنبيه المتصفح
// الذي يوقف الواجهة بدون أي طريقة للمعالجة أو المحاولة مجدداً
function ftShowFieldCameraError(err) {
  const errBox = document.getElementById('field-camera-error');
  const message = ftCameraErrorMessage(err);
  if (errBox) {
    errBox.classList.remove('hidden');
    errBox.innerHTML = `
      <div>${message}</div>
      <button type="button" class="btn btn-secondary" style="margin-top:8px; width:100%; padding:8px;" onclick="openFieldCameraCapture()">
        ${currentLang === 'ar' ? '🔄 إعادة المحاولة' : '🔄 Retry'}
      </button>
    `;
  } else {
    alert(message);
  }
}

async function switchFieldCamera() {
  if (!ftFieldCameraStream) return;

  if (!ftFieldCameraDevices || ftFieldCameraDevices.length < 2) {
    ftFieldCameraDevices = await ftGetFieldCameraDevices();
  }
  if (!ftFieldCameraDevices || ftFieldCameraDevices.length < 2) {
    alert(currentLang === 'ar' ? "لا توجد كاميرا إضافية على هذا الجهاز للتبديل إليها." : "No additional camera available to switch to.");
    return;
  }

  ftFieldCameraActiveIndex = (ftFieldCameraActiveIndex + 1) % ftFieldCameraDevices.length;
  const nextDevice = ftFieldCameraDevices[ftFieldCameraActiveIndex];

  try {
    await ftStartFieldCameraStream({ video: { deviceId: { exact: nextDevice.deviceId } }, audio: false });
  } catch (err) {
    console.error("Switch camera error:", err);
    ftShowFieldCameraError(err);
  }
}

function captureFieldPhoto() {
  const video = document.getElementById('field-camera-video');
  const canvasEl = document.getElementById('field-camera-canvas');
  if (!video || !canvasEl || !ftFieldCameraStream) return;

  canvasEl.width = video.videoWidth || 640;
  canvasEl.height = video.videoHeight || 480;
  const ctx2d = canvasEl.getContext('2d');
  ctx2d.drawImage(video, 0, 0, canvasEl.width, canvasEl.height);

  const dataUrl = canvasEl.toDataURL('image/jpeg', 0.9);

  const img = document.createElement('img');
  img.src = dataUrl;
  img.style.width = "70px";
  img.style.height = "70px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "4px";
  img.style.border = "1px solid var(--border-color)";
  document.getElementById('image-preview-container').appendChild(img);
  capturedImages.push(dataUrl);
}

function closeFieldCameraCapture() {
  const modal = document.getElementById('field-camera-modal');
  if (modal) modal.classList.add('hidden');

  if (ftFieldCameraStream) {
    ftFieldCameraStream.getTracks().forEach(track => track.stop());
    ftFieldCameraStream = null;
  }

  const video = document.getElementById('field-camera-video');
  if (video) video.srcObject = null;
}

function initSignaturePad() {
  canvas = document.getElementById('signature-pad');
  if (!canvas) return;
  canvas.width = canvas.offsetWidth;
  canvas.height = 140;
  ctx = canvas.getContext('2d');
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";

  canvas.onmousedown = (e) => { isDrawing = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); };
  canvas.onmousemove = (e) => { if (isDrawing) { ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); } };
  canvas.onmouseup = () => { isDrawing = false; };
  
  canvas.ontouchstart = (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
  };
  canvas.ontouchmove = (e) => {
    if (isDrawing) {
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
      ctx.stroke();
    }
  };
  canvas.ontouchend = () => { isDrawing = false; };
}

function clearSignature() {
  if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ==========================================
// 5.2 تصدير تقرير/فاتورة PDF لمهمة (توقيع + صور + قراءة إشارة + ملاحظات)
// يعتمد على html2canvas لالتقاط لقطة من قالب HTML مؤقت (يدعم العربية بشكل طبيعي عبر المتصفح)
// ثم jsPDF لتحويلها إلى ملف PDF قابل للتنزيل، مقسّم على عدة صفحات عند الحاجة
// ==========================================

function ftStatusLabelFor(status) {
  const map = {
    pending: i18nTranslations[currentLang].filterPending,
    completed: i18nTranslations[currentLang].filterCompleted,
    on_hold: i18nTranslations[currentLang].filterOnhold,
    transferred: i18nTranslations[currentLang].filterTransferred
  };
  return map[status] || status || '—';
}

async function exportTicketReportPDF() {
  if (!activeTicketId) return;
  if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    alert(currentLang === 'ar' ? 'تعذر تحميل مكتبات تصدير PDF، تأكد من اتصالك بالإنترنت أول مرة لتحميلها.' : 'PDF export libraries failed to load. Please connect to the internet once to cache them.');
    return;
  }

  const exportBtn = document.getElementById('btn-export-pdf');
  const originalBtnText = exportBtn ? exportBtn.textContent : '';
  if (exportBtn) { exportBtn.disabled = true; exportBtn.textContent = currentLang === 'ar' ? '⏳ جارِ تجهيز الملف...' : '⏳ Preparing PDF...'; }

  let wrapper = null;
  try {
    const ticket = await db.workOrders.get(activeTicketId);
    if (!ticket) return;

    const notes = await db.taskNotes.where('workOrderId').equals(activeTicketId).toArray();
    const hwLogs = await db.hardwareLogs.where('workOrderId').equals(activeTicketId).toArray();
    notes.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    const textNotes = notes.filter(n => n.type === 'text');
    const imageNotes = notes.filter(n => n.type === 'image');
    const audioNotes = notes.filter(n => n.type === 'audio');
    const videoNotes = notes.filter(n => n.type === 'video');

    // صور الحقل الملتقطة في هذه الجلسة (معروضة حالياً في صندوق "التقاط الصور الميدانية")
    const fieldPhotoSrcs = Array.from(document.querySelectorAll('#image-preview-container img')).map(img => img.src);
    const allImageSrcs = [...fieldPhotoSrcs, ...imageNotes.map(n => n.mediaUrl)];

    // توقيع المشترك (تحقق من أن اللوحة ليست فارغة قبل تضمينها)
    let signatureDataUrl = null;
    if (canvas) {
      const blankCheck = document.createElement('canvas');
      blankCheck.width = canvas.width;
      blankCheck.height = canvas.height;
      if (canvas.toDataURL() !== blankCheck.toDataURL()) {
        signatureDataUrl = canvas.toDataURL('image/png');
      }
    }

    const signalReading = document.getElementById('signal-input').value || ticket.signalValue || '';
    const generatedAt = new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

    const rowsHtml = [
      ['رقم المهمة', `#${ticket.id}`],
      ['اسم العميل / المشترك', ticket.customerName || ''],
      ['رقم الهاتف', ticket.phone || ''],
      ['العنوان / المكان', ticket.address || ''],
      ['نوع الخدمة', ticket.serviceType || ''],
      ['الفني المسؤول', (ticket.assignedTo || '—') + (ticket.transferredTo ? ` ← تم النقل إلى: ${ticket.transferredTo}` : '')],
      ['حالة المهمة', ftStatusLabelFor(ticket.status)],
      ['أولوية المهمة', getPriorityMeta(ticket.priority).text],
      ['الموعد النهائي', ticket.deadline || '—'],
    ];
    if (signalReading) rowsHtml.push(['قراءة الإشارة الضوئية', `${signalReading} dBm`]);
    if (hwLogs.length) rowsHtml.push(['الرقم التسلسلي للعتاد الممسوح', hwLogs.map(h => `${h.serialNumber} (${h.deviceType})`).join('، ')]);

    const infoTableHtml = `
      <table style="width:100%; border-collapse:collapse; font-size:13px; margin-bottom:20px;">
        ${rowsHtml.map((r, i) => `
          <tr style="background:${i % 2 === 0 ? '#f7f9fa' : '#ffffff'};">
            <td style="padding:8px 10px; font-weight:bold; width:38%; border:1px solid #e2e8f0;">${escapeHtml(r[0])}:</td>
            <td style="padding:8px 10px; border:1px solid #e2e8f0;">${escapeHtml(String(r[1]))}</td>
          </tr>
        `).join('')}
      </table>
    `;

    const notesHtml = textNotes.length ? `
      <h3 style="color:#2b7a78; font-size:15px; margin:0 0 8px;">📝 ملاحظات المهمة</h3>
      <ul style="font-size:12px; padding-right:18px; margin:0 0 20px;">
        ${textNotes.map(n => `<li style="margin-bottom:5px;">${escapeHtml(n.content || '')} <span style="color:#999; font-size:10px;">(${new Date(n.timestamp).toLocaleString('ar-EG')})</span></li>`).join('')}
      </ul>
    ` : '';

    const imagesHtml = allImageSrcs.length ? `
      <h3 style="color:#2b7a78; font-size:15px; margin:0 0 8px;">📸 الصور الميدانية المرفقة</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px;">
        ${allImageSrcs.map(src => `<img src="${src}" style="width:130px; height:130px; object-fit:cover; border-radius:6px; border:1px solid #ddd;">`).join('')}
      </div>
    ` : '';

    const mediaNoteHtml = (audioNotes.length || videoNotes.length) ? `
      <p style="font-size:11px; color:#888; margin:0 0 20px;">📎 يحتوي سجل هذه المهمة داخل التطبيق أيضاً على ${audioNotes.length} تسجيل صوتي و${videoNotes.length} مقطع فيديو غير مضمّنين في هذا الملف.</p>
    ` : '';

    const signatureHtml = signatureDataUrl ? `
      <h3 style="color:#2b7a78; font-size:15px; margin:0 0 8px;">✍️ توقيع المشترك</h3>
      <img src="${signatureDataUrl}" style="width:220px; border:1px solid #ddd; border-radius:6px; background:#fff;">
    ` : `
      <p style="font-size:11px; color:#c53030;">⚠️ لم يتم توقيع المشترك رقمياً بعد على هذه المهمة.</p>
    `;

    wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:fixed; top:0; left:-99999px; width:780px; background:#ffffff; color:#111827; padding:30px; font-family: Tahoma, Arial, sans-serif; direction:rtl;';
    wrapper.innerHTML = `
      <div style="text-align:center; border-bottom:3px solid #2b7a78; padding-bottom:14px; margin-bottom:22px;">
        <h1 style="margin:0; color:#2b7a78; font-size:22px;">ألياف التقنية (FiberTech ISP)</h1>
        <p style="margin:6px 0 0; font-size:13px; color:#555;">تقرير / إيصال تنفيذ مهمة ميدانية</p>
      </div>
      ${infoTableHtml}
      ${notesHtml}
      ${imagesHtml}
      ${mediaNoteHtml}
      ${signatureHtml}
      <div style="margin-top:26px; padding-top:12px; border-top:1px solid #ddd; font-size:10px; color:#999; text-align:center;">
        تم إصدار هذا التقرير تلقائياً بتاريخ ${generatedAt} — نظام إدارة الفنيين الميدانيين (FiberTech)
      </div>
    `;
    document.body.appendChild(wrapper);

    const shot = await html2canvas(wrapper, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (shot.height * imgWidth) / shot.width;
    const imgData = shot.toDataURL('image/jpeg', 0.92);

    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`ticket-report-${ticket.id}.pdf`);
  } catch (err) {
    console.error('PDF export error:', err);
    alert(currentLang === 'ar' ? 'حدث خطأ أثناء تجهيز ملف PDF، حاول مجدداً.' : 'An error occurred while generating the PDF. Please try again.');
  } finally {
    if (wrapper && wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
    if (exportBtn) { exportBtn.disabled = false; exportBtn.textContent = originalBtnText; }
  }
}

// ==========================================
// 5.1 إدارة ميزة الملاحظات بالكامل (كتابة / صوت / ميديا)
// ==========================================

async function addTextNote() {
  if (!activeTicketId) return;
  const textInput = document.getElementById('task-note-text');
  const textVal = textInput.value.trim();

  if (!textVal) {
    alert(currentLang === 'ar' ? "يرجى كتابة نص الملاحظة قبل الإضافة." : "Please type note content.");
    return;
  }

  const noteObj = {
    workOrderId: activeTicketId,
    type: 'text',
    content: textVal,
    timestamp: new Date().toISOString()
  };

  await db.taskNotes.add(noteObj);
  textInput.value = '';
  await renderCurrentTaskNotes();
}

async function startAudioRecording() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Audio recording not supported");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    const supportedMimeType = ftGetSupportedAudioMimeType();
    mediaRecorder = supportedMimeType ? new MediaRecorder(stream, { mimeType: supportedMimeType }) : new MediaRecorder(stream);
    const actualMimeType = mediaRecorder.mimeType || supportedMimeType || 'audio/webm';

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: actualMimeType });
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = reader.result;
        await db.taskNotes.add({
          workOrderId: activeTicketId,
          type: 'audio',
          mediaUrl: base64Audio,
          mimeType: actualMimeType,
          timestamp: new Date().toISOString()
        });
        await renderCurrentTaskNotes();
      };
      reader.readAsDataURL(audioBlob);

      stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorder.start();
    recordingSeconds = 0;
    document.getElementById('btn-start-record').classList.add('hidden');
    document.getElementById('btn-stop-record').classList.remove('hidden');
    document.getElementById('recording-status').classList.remove('hidden');
    document.getElementById('record-timer').textContent = "00:00";

    recordingTimer = setInterval(() => {
      recordingSeconds++;
      const mins = String(Math.floor(recordingSeconds / 60)).padStart(2, '0');
      const secs = String(recordingSeconds % 60).padStart(2, '0');
      document.getElementById('record-timer').textContent = `${mins}:${secs}`;
    }, 1000);

  } catch (err) {
    console.error("Mic error:", err);
    alert("Microphone permission required");
  }
}

function stopAudioRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
  clearInterval(recordingTimer);
  document.getElementById('btn-start-record').classList.remove('hidden');
  document.getElementById('btn-stop-record').classList.add('hidden');
  document.getElementById('recording-status').classList.add('hidden');
}

async function handleMediaFileUpload(event) {
  if (!activeTicketId) return;
  const file = event.target.files[0];
  if (!file) return;

  const isVideo = file.type.startsWith('video/');
  const isImage = file.type.startsWith('image/');

  if (!isImage && !isVideo) {
    alert("Please upload image or video file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    await db.taskNotes.add({
      workOrderId: activeTicketId,
      type: isVideo ? 'video' : 'image',
      mediaUrl: base64Data,
      fileName: file.name,
      mimeType: file.type,
      timestamp: new Date().toISOString()
    });
    event.target.value = '';
    await renderCurrentTaskNotes();
  };
  reader.readAsDataURL(file);
}

async function renderCurrentTaskNotes() {
  const container = document.getElementById('task-notes-list');
  if (!container || !activeTicketId) return;

  container.innerHTML = '';
  const notes = await db.taskNotes.where('workOrderId').equals(activeTicketId).toArray();

  if (notes.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size:0.85rem;">${currentLang === 'ar' ? 'لا توجد ملاحظات لهذه المهمة حتى الآن.' : 'No notes recorded.'}</p>`;
    return;
  }

  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note-card-item';
    div.style.cssText = 'background: rgba(0,0,0,0.02); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom: 8px; position: relative;';

    let mediaHtml = '';
    if (note.type === 'text') {
      mediaHtml = `<p style="font-size:0.9rem; white-space:pre-wrap;">${escapeHtml(note.content)}</p>`;
    } else if (note.type === 'audio') {
      mediaHtml = `<audio controls src="${note.mediaUrl}" style="width:100%; margin-top:4px;"></audio>`;
    } else if (note.type === 'image') {
      mediaHtml = `<img src="${note.mediaUrl}" style="max-width:100%; max-height:200px; border-radius:6px; margin-top:4px; display:block;">`;
    } else if (note.type === 'video') {
      mediaHtml = `<video controls src="${note.mediaUrl}" style="max-width:100%; max-height:200px; border-radius:6px; margin-top:4px; display:block;"></video>`;
    }

    const timeStr = new Date(note.timestamp).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <span style="font-size:0.75rem; color:var(--text-muted);">🕒 ${timeStr}</span>
        <button onclick="deleteTaskNote(${note.id})" style="background:none; border:none; color:#e53e3e; cursor:pointer; font-size:0.8rem;">🗑️</button>
      </div>
      ${mediaHtml}
    `;

    container.appendChild(div);
  });
}

async function deleteTaskNote(noteId, refreshAllNotesPage = false) {
  if (confirm(currentLang === 'ar' ? "هل انت متأكد من حذف هذه الملاحظة؟" : "Delete this note?")) {
    await db.taskNotes.delete(noteId);
    if (refreshAllNotesPage) {
      await renderAllNotesPage();
    } else {
      await renderCurrentTaskNotes();
    }
  }
}

async function submitTicket() {
  const selectedStatus = document.getElementById('ticket-status-select').value;
  const signalVal = document.getElementById('signal-input').value;
  const ratingEl = document.getElementById('customer-rating');
  const ratingVal = ratingEl && ratingEl.value ? parseInt(ratingEl.value, 10) : null;

  const existingTicket = await db.workOrders.get(activeTicketId);

  const updatePayload = {
    status: selectedStatus,
    signalValue: signalVal || null
  };

  if (ratingVal) {
    updatePayload.customerRating = ratingVal;
  }

  // تسجيل وقت الإغلاق الفعلي عند إتمام المهمة لأول مرة (يُستخدم في حساب متوسط وقت إغلاق المهمة)
  if (selectedStatus === 'completed' && existingTicket && !existingTicket.completedAt) {
    updatePayload.completedAt = Date.now();
  }

  await db.workOrders.update(activeTicketId, updatePayload);

  await db.syncQueue.add({
    action: 'UPDATE_TICKET',
    payload: { id: activeTicketId, ...updatePayload },
    status: 'pending',
    timestamp: new Date().toISOString()
  });

  alert(currentLang === 'ar' ? "تم حفظ التذكرة وتحديث القراءات وتجهيزها للمزامنة بنجاح!" : "Saved and queued for sync successfully!");
  closeTicketDetails();
  updateNetworkStatus();
}

async function processSyncQueue() {
  if (!navigator.onLine) return;
  const pendingItems = await db.syncQueue.where('status').equals('pending').toArray();

  if (pendingItems.length > 0) {
    console.log(`Syncing ${pendingItems.length} operations...`);

    // إصلاح: كانت هذه الدالة "تتظاهر" بالمزامنة فقط (تغيّر حالة العنصر إلى synced محلياً
    // دون إرسال أي شيء لأي سيرفر)، فلا يوجد أي اتصال فعلي بين الأجهزة المختلفة.
    // الآن تُرسَل العمليات المعلقة فعلياً إلى دالة sync-push على Netlify التي تكتبها
    // في قاعدة بيانات Netlify DB المركزية، ولا تُعلَّم كـ "synced" إلا بعد نجاح الإرسال
    // فعلياً، حتى تبقى في الطابور وتُعاد المحاولة لاحقاً إن فشل الاتصال.
    try {
      const res = await fetch('/.netlify/functions/sync-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: pendingItems.map((it) => ({ action: it.action, payload: it.payload }))
        })
      });

      if (!res.ok) throw new Error('sync-push failed: ' + res.status);

      for (let item of pendingItems) {
        await db.syncQueue.update(item.id, { status: 'synced' });
      }
    } catch (err) {
      console.warn('تعذّرت مزامنة العمليات المعلقة، سيُعاد المحاولة لاحقاً عند توفر الاتصال:', err);
    }

    updatePendingSyncCount();
  }

  // بعد رفع تغييراتنا (أو حتى لو ما كان عندنا شيء لنرفعه) نجلب آخر التحديثات القادمة
  // من الأجهزة الأخرى حتى تظهر على هذا الجهاز أيضاً.
  await pullRemoteWorkOrders();
}

// إصلاح: دالة جديدة تجلب كل أوراق العمل من قاعدة البيانات المركزية وتدمجها بالجدول
// المحلي (Dexie)، وهذه هي الآلية الفعلية التي تجعل تعديل تذكرة على جهاز يظهر على
// جهاز آخر. لا تكتب فوق أي تذكرة لسا عندها تغييرات محلية معلّقة بالرفع (status='pending')
// تفادياً لضياع تعديل حصل للتو على هذا الجهاز نفسه قبل ما يوصل للسيرفر.
async function pullRemoteWorkOrders() {
  if (!navigator.onLine) return;

  try {
    const res = await fetch('/.netlify/functions/sync-pull');
    if (!res.ok) throw new Error('sync-pull failed: ' + res.status);
    const remoteOrders = await res.json();

    const pendingItems = await db.syncQueue.where('status').equals('pending').toArray();
    const idsWithPendingChanges = new Set(
      pendingItems.filter((it) => it.payload && typeof it.payload.id !== 'undefined').map((it) => it.payload.id)
    );

    for (const remote of remoteOrders) {
      if (idsWithPendingChanges.has(remote.id)) continue;

      if (remote.deleted) {
        await db.workOrders.delete(remote.id);
        continue;
      }

      const { deleted, ...orderFields } = remote;
      const existing = await db.workOrders.get(remote.id);
      if (existing) {
        await db.workOrders.update(remote.id, orderFields);
      } else {
        await db.workOrders.add(orderFields);
      }
    }

    // renderWorkOrders تتحقق بنفسها من وجود عنصر القائمة بالصفحة الحالية قبل الرسم، فلا مشكلة باستدعائها دائماً
    await renderWorkOrders('all');
    if (typeof updateDashboardStats === 'function') {
      await updateDashboardStats();
    }
  } catch (err) {
    console.warn('تعذّر جلب آخر التحديثات من السيرفر:', err);
  }
}

function applyThemeIcon(isDark) {
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = isDark ? '☀️' : '🌙';
}

function toggleDarkTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('appTheme', isDark ? 'dark' : 'light');
  applyThemeIcon(isDark);
}

function initAppTheme() {
  const savedTheme = localStorage.getItem('appTheme');
  const isDark = savedTheme === 'dark';
  document.body.classList.toggle('dark-theme', isDark);
  applyThemeIcon(isDark);
}

// ==========================================
// مزامنة الارتفاع الفعلي لشريط حالة الشبكة مع شريط القائمة العلوي الثابت (sticky)
// كان شريط القائمة يفترض أن شريط الحالة أعلاه بارتفاع ثابت (سطر واحد)، لكنه يلتف
// لسطرين على الشاشات الضيقة (خصوصاً بعد تحديث عدّاد "العمليات المعلقة" أو تغيير
// اللغة)، فيتراكب شريط القائمة معه ويصبح مغطى جزئياً وتبدو أزراره "لا تستجيب"
// لأن اللمس يقع فعلياً على شريط الحالة الذي فوقه. هذه الدالة تقيس الارتفاع الحقيقي
// وتحدّث متغير CSS الذي يعتمد عليه .top-nav-bar بدلاً من الرقم الثابت السابق.
// ==========================================
function ftSyncStatusBarHeight() {
  const bar = document.getElementById('network-status-bar');
  if (!bar) return;
  const h = bar.offsetHeight || 31;
  document.documentElement.style.setProperty('--status-bar-h', h + 'px');
}

if (window.ResizeObserver) {
  const ftStatusBarResizeObserver = new ResizeObserver(() => ftSyncStatusBarHeight());
  document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('network-status-bar');
    if (bar) ftStatusBarResizeObserver.observe(bar);
    ftSyncStatusBarHeight();
  });
} else {
  document.addEventListener('DOMContentLoaded', ftSyncStatusBarHeight);
}
window.addEventListener('resize', ftSyncStatusBarHeight);
window.addEventListener('orientationchange', ftSyncStatusBarHeight);

// ==========================================
// تحويل الجداول تلقائياً لعرض "بطاقات" مريحة للمس على الهاتف: نربط كل خلية
// بعنوان عمودها عبر data-label (يُقرأ من نص <th> المقابل) حتى تعمل تنسيقات
// CSS الخاصة بوضع البطاقات دون الحاجة لتعديل كل دالة رسم جدول في الملف يدوياً.
// نراقب أي تغييرات على الصفحة (إعادة رسم جدول بعد فلترة/بحث/تحديث بيانات إلخ)
// ونطبّق التسميات تلقائياً على أي صفوف جديدة تُضاف.
// ==========================================
function ftApplyResponsiveTableLabels(table) {
  const headRow = table.querySelector('thead tr');
  if (!headRow) return;
  const labels = [...headRow.children].map(th => th.textContent.trim());
  table.querySelectorAll('tbody tr').forEach(tr => {
    const cells = [...tr.children];
    if (cells.length === labels.length) {
      cells.forEach((td, i) => {
        if (labels[i]) td.setAttribute('data-label', labels[i]);
      });
    }
  });
}

function ftApplyAllResponsiveTableLabels() {
  document.querySelectorAll('.data-table').forEach(ftApplyResponsiveTableLabels);
}

let ftTablesObserverTimer = null;
const ftTablesObserver = new MutationObserver(() => {
  clearTimeout(ftTablesObserverTimer);
  ftTablesObserverTimer = setTimeout(ftApplyAllResponsiveTableLabels, 60);
});

// ==========================================
// 6. التشغيل عند التحميل
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  initAppTheme();
  ftRenderAuthGate();
  ftApplyAllResponsiveTableLabels();
  ftTablesObserver.observe(document.body, { childList: true, subtree: true });
});