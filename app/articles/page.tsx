import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמרים | ניהול לקוחות, משימות וסדר בעסק | CCHUB",
  description:
    "מאמרים מקצועיים של CCHUB על ניהול לקוחות, CRM בעברית, ניהול משימות, סיסמאות, מסמכים, נכסים דיגיטליים, יבוא מאקסל וסדר בעסק.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "מאמרים | CCHUB",
    description:
      "תוכן מקצועי על ניהול לקוחות, סדר בעסק, CRM בעברית, ניהול משימות, מסמכים, סיסמאות וידע.",
    url: "https://www.mycchub.app/articles",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const featuredArticles = [
  {
    title: "מערכת לניהול לקוחות בעברית: מה באמת חשוב לבדוק?",
    href: "/articles/hebrew-client-management-system",
    category: "ניהול לקוחות",
    readTime: "7 דקות קריאה",
    icon: "👥",
    description:
      "איך לבחור מערכת לניהול לקוחות בעברית, למה CRM רגיל לא תמיד מספיק, ואיך לבנות סדר סביב לקוחות, משימות, מסמכים וידע.",
    tags: ["CRM בעברית", "ניהול לקוחות", "עסק קטן"],
  },
  {
    title: "איך מפסיקים לחפש סיסמאות, מסמכים והודעות ישנות?",
    href: "/articles/stop-searching-business-information",
    category: "סדר בעסק",
    readTime: "6 דקות קריאה",
    icon: "🔎",
    description:
      "וואטסאפ, מיילים, דרייבים ואקסלים יוצרים עומס. כך מרכזים מידע תפעולי במקום אחד ומחזירים שליטה לעבודה היומית.",
    tags: ["סיסמאות", "מסמכים", "ידע"],
  },
  {
    title: "ניהול משימות לפי לקוח: למה זה משנה את כל העבודה?",
    href: "/articles/tasks-by-client",
    category: "ניהול משימות",
    readTime: "5 דקות קריאה",
    icon: "✅",
    description:
      "משימה בלי לקוח ובלי הקשר נעלמת מהר. ניהול משימות לפי לקוח ונכס עוזר להבין מה פתוח, מה דחוף ומה כבר בוצע.",
    tags: ["משימות", "לקוחות", "זמן עבודה"],
  },
];

const articles = [
  {
    title: "CRM לעסק קטן: מתי צריך CRM ומתי צריך מערכת תפעולית?",
    href: "/articles/crm-for-small-business",
    category: "CRM",
    readTime: "6 דקות",
    icon: "📊",
    description:
      "ההבדל בין מערכת מכירות לבין מערכת שמנהלת את העבודה אחרי שהלקוח כבר קיים.",
  },
  {
    title: "איך לנהל לקוחות קבועים בלי לאבד מידע?",
    href: "/articles/manage-long-term-clients",
    category: "לקוחות",
    readTime: "5 דקות",
    icon: "🧩",
    description:
      "שיטה פשוטה לריכוז תיק לקוח, משימות, מסמכים, גישות והחלטות במקום אחד.",
  },
  {
    title: "יבוא מאקסל למערכת ניהול: איך לעשות את זה נכון?",
    href: "/articles/import-excel-to-client-system",
    category: "אקסל",
    readTime: "5 דקות",
    icon: "📥",
    description:
      "מה כדאי לנקות לפני יבוא, איך למנוע כפילויות ואילו עמודות באמת חשובות.",
  },
  {
    title: "ניהול סיסמאות בעסק: למה וואטסאפ הוא לא מקום לסיסמאות?",
    href: "/articles/business-password-management",
    category: "אבטחה",
    readTime: "6 דקות",
    icon: "🔒",
    description:
      "איך לנהל גישות בצורה מסודרת, לפי לקוח ונכס, בלי לפזר מידע רגיש בהודעות.",
  },
  {
    title: "מרכז ידע פנימי: הנכס הכי מוזנח בעסק קטן",
    href: "/articles/internal-knowledge-base",
    category: "ידע",
    readTime: "7 דקות",
    icon: "📘",
    description:
      "החלטות, נהלים, סיכומים ותובנות צריכים להישמר במקום שאפשר לחזור אליו.",
  },
  {
    title: "נכסים דיגיטליים של לקוח: איך עושים סדר באתרים, דומיינים ומערכות?",
    href: "/articles/client-digital-assets",
    category: "נכסים",
    readTime: "5 דקות",
    icon: "🧊",
    description:
      "למה חשוב לחבר כל אתר, דומיין ומערכת ללקוח, למשימות, למסמכים ולסיסמאות שלו.",
  },
  {
    title: "מעקב זמן ועלויות במשימות: הדרך להבין רווחיות אמיתית",
    href: "/articles/task-time-costs",
    category: "עלויות",
    readTime: "6 דקות",
    icon: "⏱️",
    description:
      "ניהול זמן עבודה ועלויות לפי משימה עוזר להבין איפה העסק מרוויח ואיפה הוא נשחק.",
  },
  {
    title: "Make ו-Zapier: מתי אוטומציה באמת עוזרת לעסק?",
    href: "/articles/make-zapier-business-automation",
    category: "אוטומציות",
    readTime: "6 דקות",
    icon: "🔗",
    description:
      "איך לזהות תהליך שחוזר על עצמו, לחבר אותו לאוטומציה, ולא ליצור בלגן אוטומטי.",
  },
  {
    title: "הרשאות משתמשים: למה לא כל אחד צריך לראות הכול?",
    href: "/articles/user-permissions-business",
    category: "הרשאות",
    readTime: "5 דקות",
    icon: "🛡️",
    description:
      "עבודה עם צוות דורשת הפרדה בין מי שמנהל, מי שמבצע, מי מייבא ומי מייצא מידע.",
  },
];

const categories = [
  "ניהול לקוחות",
  "CRM בעברית",
  "ניהול משימות",
  "סיסמאות ומסמכים",
  "יבוא מאקסל",
  "אוטומציות",
  "הרשאות",
  "מרכז ידע",
];

export default function ArticlesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">מאמרים מקצועיים</span>

          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            מאמרים על ניהול לקוחות, משימות, מסמכים וסדר בעסק
          </h1>

          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            תוכן מקצועי לבעלי עסקים, מנהלי לקוחות, סוכנויות ונותני שירותים
            שרוצים להפסיק לעבוד מפוזר ולהתחיל לנהל את המידע במקום אחד.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-secondary" href="/features">
              צפייה ביכולות המערכת
            </a>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-black text-blue-700 shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="cchub-container pb-14">
        <div className="text-center">
          <p className="text-sm font-black text-blue-600">מומלצים להתחלה</p>
          <h2 className="cchub-title-lg mt-2">המאמרים שכדאי לקרוא קודם</h2>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.title}
              className="cchub-card flex min-h-[380px] flex-col p-7 text-center transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-3xl">
                {article.icon}
              </div>

              <div className="mb-3 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                  {article.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-black leading-tight">{article.title}</h3>

              <p className="mt-4 leading-8 text-slate-600">{article.description}</p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-slate-600">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <a className="cchub-button-secondary w-full justify-center" href={article.href}>
                  לקריאת המאמר
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section">
          <div className="grid items-end gap-5 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black text-blue-600">כל המאמרים</p>
              <h2 className="cchub-title-lg mt-2">מרכז ידע לניהול עסק מסודר</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                המאמרים כאן מיועדים לתת עומק מקצועי סביב הבעיות ש-CCHUB פותרת:
                מידע מפוזר, משימות ללא הקשר, סיסמאות בצ׳אטים, מסמכים בדרייבים
                וחוסר תמונה ברורה של מצב הלקוחות.
              </p>
            </div>

            <a className="cchub-button-primary" href="/tutorials">
              מעבר לטוטריאלים
            </a>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="cchub-mini-card flex min-h-[270px] flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                    {article.icon}
                  </span>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                      {article.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black leading-tight">{article.title}</h3>

                <p className="mt-4 leading-8 text-slate-600">{article.description}</p>

                <div className="mt-auto pt-5">
                  <a className="inline-flex font-black text-blue-700 hover:text-blue-900" href={article.href}>
                    לקריאת המאמר ←
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cchub-card p-7">
            <p className="text-sm font-black text-blue-600">למה בכלל לכתוב על זה?</p>
            <h2 className="mt-2 text-3xl font-black">
              כי סדר בעסק הוא לא רק תוכנה — הוא שיטת עבודה
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              CCHUB היא מערכת, אבל המטרה שלה רחבה יותר: לעזור לעסק לעבוד בצורה
              שבה כל לקוח, משימה, מסמך, סיסמה וידע נמצאים בהקשר הנכון.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "פחות חיפוש במיילים, וואטסאפ ודרייב.",
                "יותר שליטה במה פתוח ומה כבר בוצע.",
                "יותר סדר מול לקוחות קבועים וצוותים.",
              ].map((item) => (
                <div key={item} className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <a href="/features" className="cchub-mini-card p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 text-3xl">🧊</div>
              <h3 className="text-2xl font-black">יכולות המערכת</h3>
              <p className="mt-3 leading-7 text-slate-600">הכירו את כל היכולות של CCHUB במקום אחד.</p>
            </a>
            <a href="/pricing" className="cchub-mini-card p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 text-3xl">💳</div>
              <h3 className="text-2xl font-black">מחירים</h3>
              <p className="mt-3 leading-7 text-slate-600">השוואת חבילות לפי לקוחות, הרשאות ואינטגרציות.</p>
            </a>
            <a href="/tutorials" className="cchub-mini-card p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 text-3xl">🎬</div>
              <h3 className="text-2xl font-black">טוטריאלים</h3>
              <p className="mt-3 leading-7 text-slate-600">מדריכים מעשיים להתחלה מהירה עם המערכת.</p>
            </a>
            <a href="/faq" className="cchub-mini-card p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 text-3xl">❓</div>
              <h3 className="text-2xl font-black">שאלות נפוצות</h3>
              <p className="mt-3 leading-7 text-slate-600">תשובות על יבוא, ייצוא, הרשאות וניסיון חינם.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
            7 ימי ניסיון חינם
          </span>

          <h2 className="mt-4 text-3xl font-black">
            אחרי שקוראים על סדר — הכי נכון לראות אותו עובד
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו ניסיון חינם ובדקו איך CCHUB מרכזת לקוחות, משימות, מסמכים,
            סיסמאות, נכסים דיגיטליים וידע במקום אחד.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">התחילו 7 ימי ניסיון חינם</a>
            <a className="cchub-button-dark" href="/login">כניסה למערכת</a>
          </div>
        </div>
      </section>
    </main>
  );
}
