const dashboardCards = [
  { title: "לקוחות", value: "128", text: "סה״כ לקוחות", icon: "👥" },
  { title: "משימות", value: "32", text: "פתוחות", icon: "✅" },
  { title: "נכסים", value: "74", text: "סה״כ נכסים", icon: "🧊" },
  { title: "מסמכים", value: "156", text: "מסמכים", icon: "📁" },
  { title: "סיסמאות", value: "43", text: "גישות", icon: "🔒" },
  { title: "מרכז ידע", value: "89", text: "פריטי ידע", icon: "📘" },
];

const sidebarIcons = ["☰", "👥", "✅", "🧊", "📁", "🔒", "📘", "📊", "⚙️"];

const problems = [
  { title: "וואטסאפ", icon: "💬" },
  { title: "מיילים", icon: "✉️" },
  { title: "דרייב", icon: "🔺" },
  { title: "אקסלים", icon: "📊" },
  { title: "פתקים", icon: "📝" },
  { title: "סיסמאות", icon: "🔑" },
];

const flow = [
  { title: "לקוח", icon: "👥" },
  { title: "נכסים", icon: "🧊" },
  { title: "משימות", icon: "✅" },
  { title: "מסמכים", icon: "📁" },
  { title: "סיסמאות", icon: "🔒" },
  { title: "ידע", icon: "📘" },
];

const audiences = [
  {
    title: "מנהלי שיווק",
    text: "לנהל לקוחות, נכסים, גישות ומשימות בלי לרדוף אחרי מידע.",
    icon: "📣",
  },
  {
    title: "סוכנויות קטנות",
    text: "מקום אחד לצוות, למסמכים, למשימות ולתיעוד העבודה.",
    icon: "🏢",
  },
  {
    title: "פרילנסרים מתקדמים",
    text: "להיראות מסודרים ומקצועיים גם כשעובדים לבד.",
    icon: "👤",
  },
  {
    title: "יועצים",
    text: "לשמור ידע, החלטות וסיכומי עבודה לפי לקוח.",
    icon: "💡",
  },
  {
    title: "נותני שירותים",
    text: "לרכז לקוחות קבועים, משימות פתוחות ומסמכים במקום אחד.",
    icon: "💼",
  },
  {
    title: "עסקים עם לקוחות קבועים",
    text: "לנהל קשר ארוך טווח בלי לאבד מידע בדרך.",
    icon: "🤝",
  },
];

const features = [
  { title: "ניהול לקוחות", icon: "👥" },
  { title: "ניהול משימות", icon: "✅" },
  { title: "ניהול נכסים", icon: "🧊" },
  { title: "ניהול מסמכים", icon: "📁" },
  { title: "ניהול סיסמאות", icon: "🔒" },
  { title: "מרכז ידע", icon: "📘" },
  { title: "יבוא מאקסל", icon: "📥" },
  { title: "ייצוא אקסל", icon: "📤" },
  { title: "Make / Zapier", icon: "🔗" },
  { title: "הרשאות", icon: "🛡️" },
];

const beforeItems = [
  "מידע מפוזר בכמה כלים",
  "משימות נשכחות",
  "סיסמאות בצ׳אטים",
  "מסמכים בדרייב",
];

const afterItems = [
  "כל המידע במקום אחד",
  "חיפוש מהיר ושקט",
  "פחות טעויות ויותר שקט",
  "שליטה מלאה ושיתוף קל",
];

const plans = [
  {
    name: "Business",
    className: "business",
    badge: "🏢",
    label: "7 ימי ניסיון חינם",
    price: "999₪",
    text: "לעסקים וצוותים שצריכים עבודה משותפת, הרשאות מתקדמות ואינטגרציות.",
    items: [
      "עד 500 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "נכסים דיגיטליים",
      "לידים",
      "גיבויים",
      "יבוא מאקסל",
      "ייצוא אקסל",
      "אינטגרציה Make / Zapier",
      "משתמשים וצוותים",
      "הרשאות מתקדמות",
      "הרשאות יבוא / יצוא לפי משתמש",
      "הרשאות אינטגרציות לפי משתמש",
    ],
  },
  {
    name: "Solo Pro",
    className: "pro",
    badge: "👑",
    label: "הכי מומלץ · 7 ימי ניסיון חינם",
    price: "499₪",
    text: "לעסק שרוצה תמונה מלאה של לקוחות, נכסים, משימות, ידע ואוטומציות.",
    items: [
      "עד 200 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "נכסים דיגיטליים",
      "לידים ולקוחות ממתינים",
      "אנשי קשר",
      "יבוא מאקסל",
      "ייצוא אקסל",
      "אינטגרציה Make / Zapier",
      "גיבויים",
      "פעילות מערכת",
      "תמונה כללית מלאה",
    ],
  },
  {
    name: "Solo Basic",
    className: "basic",
    badge: "👤",
    label: "7 ימי ניסיון חינם",
    price: "199₪",
    text: "לעסק שרוצה להתחיל לעבוד מסודר בלי מערכת כבדה.",
    items: [
      "עד 50 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "יבוא מאקסל",
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "פותחים חשבון",
    text: "נרשמים ל־7 ימי ניסיון חינם ומתחילים לנהל לקוח ראשון.",
  },
  {
    number: "2",
    title: "מחברים מידע",
    text: "מוסיפים לקוחות, נכסים, משימות ומסמכים.",
  },
  {
    number: "3",
    title: "מסדרים ידע",
    text: "שומרים סיסמאות, הערות והיסטוריה במקום אחד.",
  },
  {
    number: "4",
    title: "מתחילים לנהל",
    text: "רואים תמונה ברורה ועובדים הרבה יותר שקט.",
  },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container cchub-hero relative grid items-center gap-10 py-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="text-right">
            <div className="mb-5">
              <span className="cchub-trial-badge-strong">7 ימי ניסיון חינם</span>
            </div>

            <h1 className="cchub-title-xl max-w-[620px]">
              די לחפש.
              <br />
              תתחילו לנהל.
            </h1>

            <p className="cchub-text mt-5 max-w-[720px]">
              CCHUB מרכזת במקום אחד את כל מה שהעסק צריך כדי לעבוד מסודר באמת —
              לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע. פחות
              חיפושים, פחות בלגן ופחות טעויות — ויותר שליטה, סדר, חיסכון בזמן
              ושקט בניהול היומיומי.
            </p>

            <div className="mt-5 max-w-[720px] rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-lg text-white">
                  ✨
                </span>
                <div>
                  <div className="text-lg font-black text-[#061A44]">
                    המערכת מדברת בשפה של העסק שלכם
                  </div>
                  <p className="mt-2 text-base font-bold leading-8 text-slate-600">
                    אצלכם “לקוחות” יכולים להיות גם ספקים, מוצרים, נכסים, פרויקטים
                    או כל דבר אחר שאתם מנהלים. ניתן להתאים את שמות הערכים במערכת
                    לשפה הפנימית של העסק.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a className="cchub-button-primary" href="/pricing">
                התחילו 7 ימי ניסיון חינם
              </a>
              <a className="cchub-button-secondary" href="/login">כניסה למערכת</a>
            </div>
          </div>

          <div className="hero-app-shell">
            <aside className="hero-app-sidebar" aria-label="תפריט מערכת לדוגמה">
              {sidebarIcons.map((icon, index) => (
                <div
                  key={icon}
                  className={`hero-app-sidebar-icon ${index === 0 ? "active" : ""}`}
                >
                  {icon}
                </div>
              ))}
            </aside>

            <div className="hero-app-content">
              <div className="hero-app-top">
                <div>
                  <p className="text-sm font-black text-slate-400">ברוכים הבאים</p>
                  <h2 className="text-2xl font-black leading-tight">שלום, שירי</h2>
                </div>

                <div className="cchub-chip">מערכת פעילה</div>
              </div>

              <div className="hero-app-grid">
                {dashboardCards.map((card) => (
                  <div key={card.title} className="hero-app-card">
                    <div className="hero-app-card-icon">{card.icon}</div>
                    <h3 className="hero-app-card-title">{card.title}</h3>
                    <div className="hero-app-card-value">{card.value}</div>
                    <p className="hero-app-card-sub">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section-tight text-center">
          <span className="cchub-trial-badge">מתחילים עם 7 ימי ניסיון חינם</span>

          <h2 className="cchub-title-lg mt-4">
            הבעיה היא לא שאין לכם מידע. הבעיה היא שהוא מפוזר.
          </h2>

          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-100 bg-red-50 px-4 py-5 text-base font-black"
              >
                <div className="mb-2 text-2xl">{item.icon}</div>
                {item.title}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            כל עסק מגיע לרגע שבו המידע כבר קיים — אבל קשה למצוא אותו, לחבר אותו
            ולהבין מה צריך לקרות עכשיו.
          </p>
        </div>
      </section>

      <section className="cchub-container cchub-section text-center">
        <h2 className="cchub-title-lg">
          CCHUB מחברת את כל חלקי העבודה סביב הלקוח
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {flow.map((item) => (
            <div key={item.title} className="cchub-mini-card p-5">
              <div className="mb-2 text-3xl">{item.icon}</div>
              <div className="text-lg font-black">{item.title}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
          לא עוד מודולים מנותקים. כל דבר מחובר ללקוח, לנכס ולתהליך העבודה.
        </p>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="interface-shell">
          <div className="interface-top">
            <div>
              <p className="text-sm font-black text-blue-600">ממשק עבודה לדוגמה</p>
              <h2 className="mt-1 text-2xl font-black">תיק לקוח: דוגמה בע״מ</h2>
            </div>

            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 md:block">
              הכל מחובר ללקוח אחד
            </div>
          </div>

          <div className="interface-content">
            <div className="interface-module">
              <h3 className="interface-module-title">משימות אחרונות</h3>

              <div className="task-list">
                {[
                  ["בדיקת הצעת מחיר", "באיחור", "status-orange"],
                  ["עדכון אתר", "בתהליך", "status-blue"],
                  ["פגישה חודשית", "הושלם", "status-green"],
                  ["העלאת מסמך חדש", "חדש", "status-purple"],
                ].map(([title, status, className]) => (
                  <div key={title} className="task-item">
                    <span>{title}</span>
                    <span className={`status-pill ${className}`}>{status}</span>
                  </div>
                ))}
              </div>

              <div className="interface-stats">
                <div className="interface-stat">
                  <div className="text-2xl font-black text-blue-600">12</div>
                  <div className="text-xs font-black text-slate-400">משימות</div>
                </div>
                <div className="interface-stat">
                  <div className="text-2xl font-black text-blue-600">8</div>
                  <div className="text-xs font-black text-slate-400">מסמכים</div>
                </div>
                <div className="interface-stat">
                  <div className="text-2xl font-black text-blue-600">4</div>
                  <div className="text-xs font-black text-slate-400">נכסים</div>
                </div>
              </div>
            </div>

            <div className="interface-module">
              <h3 className="interface-module-title">נכסים, מסמכים וידע</h3>

              <div className="asset-grid">
                {[
                  ["🌐", "אתר ראשי", "נכס דיגיטלי"],
                  ["📄", "הצעת מחיר.pdf", "מסמך"],
                  ["🔐", "פרטי אחסון", "גישה שמורה"],
                  ["📘", "סיכום פגישה", "פריט ידע"],
                ].map(([icon, title, sub]) => (
                  <div key={title} className="asset-card">
                    <div className="asset-card-icon">{icon}</div>
                    <div className="asset-card-title">{title}</div>
                    <div className="asset-card-sub">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cchub-container grid gap-7 py-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="cchub-card p-7">
          <h2 className="mb-5 text-3xl font-black">תיק לקוח מסודר</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "משימות פתוחות",
              "נכסים פעילים",
              "מסמכים אחרונים",
              "סיסמאות שמורות",
              "ידע פנימי",
              "פעילות אחרונה",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="font-black text-blue-700">{item}</div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-blue-100" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-blue-100" />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-blue-100 bg-white p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-[#061A44]">סיכום תיק הלקוח</h3>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  חלוקה מהירה של המידע לפי קטגוריות.
                </p>
              </div>
              <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
                236 פריטים
              </div>
            </div>

            <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3 text-sm font-black text-slate-600">
                {[
                  ["משימות", "42%", "bg-blue-600"],
                  ["מסמכים", "21%", "bg-teal-500"],
                  ["סיסמאות", "15%", "bg-violet-500"],
                  ["נכסים", "12%", "bg-orange-400"],
                  ["ידע וניהול", "10%", "bg-sky-400"],
                ].map(([label, value, color]) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2">
                      <span className={`h-3 w-3 rounded-full ${color}`} />
                      {label}
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0_42%,#14b8a6_42%_63%,#8b5cf6_63%_78%,#f59e0b_78%_90%,#38bdf8_90%_100%)] shadow-lg">
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                  <span className="text-3xl font-black text-[#061A44]">236</span>
                  <span className="text-xs font-black text-slate-500">פריטים</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cchub-card p-7">
          <h2 className="mb-5 text-3xl font-black">
            נבנתה לעסקים שמנהלים לקוחות לאורך זמן
          </h2>

          <div className="grid gap-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-right"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section text-center">
        <h2 className="cchub-title-lg">
          כל מה שצריך כדי לנהל לקוח בצורה מסודרת
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-5">
          {features.map((item) => (
            <a key={item.title} href="/features" className="cchub-mini-card p-5 font-black">
              <div className="mb-2 text-2xl">{item.icon}</div>
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <section className="cchub-container py-10 text-center">
        <p className="text-sm font-black text-blue-600">לפני / אחרי</p>
        <h2 className="mt-2 text-3xl font-black">
          גם ככה אפשר לעבוד. אבל ככה הרבה יותר טוב.
        </h2>

        <div
          dir="ltr"
          className="mt-8 grid items-center gap-5 lg:grid-cols-[1fr_74px_1fr]"
        >
          <div
            dir="rtl"
            className="rounded-[22px] border border-green-100 bg-green-50/90 p-6 text-right"
          >
            <div className="mb-5 text-center text-lg font-black text-green-700">
              אחרי
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {afterItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-right text-sm font-black text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white text-3xl font-black text-blue-600 shadow-lg shadow-blue-950/10">
              ←
            </div>
          </div>

          <div
            dir="rtl"
            className="rounded-[22px] border border-red-100 bg-red-50/90 p-6 text-right"
          >
            <div className="mb-5 text-center text-lg font-black text-red-600">
              לפני
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {beforeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-right text-sm font-black text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ×
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cchub-container py-8 text-center" id="pricing">
        <span className="cchub-trial-badge">
          כל החבילות מתחילות ב־7 ימי ניסיון חינם
        </span>

        <h2 className="mt-4 text-2xl font-black">
          בחרו את הדרך הנכונה עבור הסידור שלכם
        </h2>

        <div
          dir="ltr"
          className="pricing-grid mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              dir="rtl"
              className={`price-card ${plan.className}`}
            >
              <div
                className={`price-label ${
                  plan.className === "pro" ? "pro-label" : ""
                }`}
              >
                {plan.label}
              </div>

              <div className="price-head">
                <div className="text-3xl">{plan.badge}</div>

                <h3 className="font-en mt-2 text-2xl font-black text-[#061A44]">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end justify-center gap-1"><span className="text-5xl font-black text-[#061A44]">{plan.price}</span><span className="pb-2 text-sm font-black text-slate-500">לחודש</span></div>

                <p className="mt-2 min-h-[42px] text-sm font-bold text-slate-500">
                  {plan.text}
                </p>
              </div>

              <div className="price-body">
                <div className="price-list">
                  {plan.items.map((item) => (
                    <div key={item} className="price-row">
                      <span className="price-row-mark">✓</span>
                      <span className="price-row-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="price-actions">
                <a className="cchub-button-primary" href="/pricing">
                  התחילו 7 ימי ניסיון
                </a>
                <a className="cchub-button-secondary" href="/login">
                  כניסה למערכת
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cchub-container py-8 text-center">
        <h2 className="text-2xl font-black">מתחילים פשוט. בלי רעש.</h2>

        <div dir="ltr" className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              dir="rtl"
              className="rounded-[18px] border border-blue-100 bg-white p-5 shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-black text-white">
                {step.number}
              </div>
              <h3 className="font-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <div className="mb-4">
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
              7 ימי ניסיון חינם
            </span>
          </div>

          <h2 className="text-3xl font-black">
            כל מה שקשור ללקוח — במקום אחד.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו לעבוד מסודר עם לקוחות, משימות, נכסים, מסמכים, סיסמאות וידע.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-dark" href="/login">כניסה למערכת</a>
          </div>
        </div>
      </section>
    </main>
  );
}
