import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יכולות המערכת | מערכת לניהול לקוחות, משימות, מסמכים וסיסמאות",
  description:
    "הכירו את יכולות CCHUB: ניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים, מרכז ידע, יבוא מאקסל, ייצוא אקסל, Make, Zapier, התאמת מילים במערכת, התחשבנות, עלויות וזמני עבודה.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "יכולות המערכת | CCHUB",
    description:
      "כל היכולות המרכזיות של CCHUB לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים, ידע, עלויות וזמן עבודה במקום אחד.",
    url: "https://www.mycchub.app/features",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const coreFeatures = [
  {
    title: "ניהול לקוחות",
    icon: "👥",
    text:
      "תיק לקוח אחד שמרכז את כל המידע החשוב: משימות, מסמכים, נכסים, סיסמאות, אנשי קשר וידע. כך כל לקוח מקבל תמונת עבודה ברורה ומסודרת.",
    points: ["תמונה מלאה לכל לקוח", "היסטוריית עבודה מסודרת", "חיבור לכל רכיבי המערכת"],
  },
  {
    title: "ניהול משימות",
    icon: "✅",
    text:
      "משימות לפי לקוח ונכס, עם סטטוסים, תאריכים, תיעוד ועדיפות ברורה לעבודה היומית. כל משימה נשמרת בהקשר הנכון ולא הולכת לאיבוד.",
    points: ["משימות פתוחות וסגורות", "שיוך ללקוח ולנכס", "פחות דברים שנופלים בין הכיסאות"],
  },
  {
    title: "זמן, עלויות והתחשבנות",
    icon: "⏱️",
    text:
      "המשימות יכולות לכלול זמן עבודה, הערכת שעות ועלויות עבודה. כך קל להבין כמה זמן הושקע ומה הבסיס להתחשבנות מול לקוחות או בתוך העסק.",
    points: ["מעקב זמן לפי משימה", "חישוב עלויות עבודה", "בסיס מסודר להתחשבנות"],
  },
  {
    title: "ניהול מסמכים",
    icon: "📁",
    text:
      "שמירה מסודרת של מסמכים, הצעות מחיר, קבצים ותיעוד חשוב לפי לקוח. במקום לחפש בדרייבים ומיילים, הכול נמצא בתוך תיק הלקוח.",
    points: ["מסמכים לפי לקוח", "גישה מהירה לקבצים", "סדר במקום חיפוש בדרייבים"],
  },
  {
    title: "ניהול סיסמאות",
    icon: "🔒",
    text:
      "ניהול גישות וסיסמאות בצורה מוצפנת ומסודרת לפי לקוח ונכס. המטרה היא להפחית תלות בצ׳אטים, פתקים והודעות ישנות עם פרטים רגישים.",
    points: ["גישה מרוכזת ומאובטחת", "שמירה לפי לקוח ונכס", "פחות תלות בהודעות ישנות"],
  },
  {
    title: "נכסים דיגיטליים",
    icon: "🧊",
    text:
      "ניהול אתרים, דומיינים, מערכות, חשבונות ופלטפורמות שקשורים ללקוח. כל נכס יכול להתחבר למשימות, מסמכים, סיסמאות וידע.",
    points: ["אתרים ודומיינים", "מערכות חיצוניות", "שיוך משימות ומסמכים לנכס"],
  },
  {
    title: "מרכז ידע",
    icon: "📘",
    text:
      "מקום אחד לשמירת החלטות, סיכומי פגישות, נהלים, הערות וכל ידע שצריך לחזור אליו. הידע נשמר ליד הלקוח ולא נעלם בין הודעות.",
    points: ["תיעוד החלטות", "סיכומי עבודה", "ידע שלא הולך לאיבוד"],
  },
  {
    title: "התאמת שמות ומילים",
    icon: "✏️",
    text:
      "המערכת מאפשרת להתאים שמות, מילים ומונחים לשפה הפנימית של העסק. כך הצוות עובד במונחים שמוכרים לו ולא נאלץ להתאים את עצמו למערכת.",
    points: ["התאמת מונחים עסקיים", "שפה פנימית שמתאימה לעסק", "פחות בלבול לצוות ולמשתמשים"],
  },
];

const advancedFeatures = [
  {
    title: "יבוא מאקסל",
    icon: "📥",
    text: "התחלה מהירה עם טעינת נתונים מאקסל, כדי לא לבנות הכול מחדש ידנית.",
  },
  {
    title: "ייצוא אקסל",
    icon: "📤",
    text: "ייצוא נתונים למשתמשים ולחבילות המתאימות, כדי לשמור שליטה מלאה במידע.",
  },
  {
    title: "Make / Zapier",
    icon: "🔗",
    text: "חיבור לאוטומציות וכלים חיצוניים למשתמשים מתאימים ולתהליכים מתקדמים.",
  },
  {
    title: "הרשאות",
    icon: "🛡️",
    text: "הפרדת יכולות לפי סוג משתמש, כולל הרשאות מתקדמות בחבילות המתאימות.",
  },
  {
    title: "התאמת מונחים במערכת",
    icon: "📝",
    text: "אפשרות להחליף שמות, מילים ומונחים במערכת כך שיתאימו לשפה של העסק.",
  },
  {
    title: "זמן ועלויות במשימות",
    icon: "💰",
    text: "מעקב אחר זמן עבודה, עלויות והערכת שעות כחלק מניהול המשימות.",
  },
  {
    title: "גיבויים",
    icon: "☁️",
    text: "שמירה וגיבוי של מידע חשוב, כדי שהמערכת תהיה יציבה ובטוחה לאורך זמן.",
  },
  {
    title: "תמונה כללית",
    icon: "📊",
    text: "דשבורד ניהולי שמציג את מה שפתוח, מה חשוב ומה דורש טיפול.",
  },
];

const useCases = [
  "ניהול לקוחות קבועים לאורך זמן",
  "מעקב אחרי משימות פתוחות",
  "מעקב זמן ועלויות לפי משימה",
  "שמירת סיסמאות וגישות במקום בטוח",
  "חיבור מסמכים ונכסים לכל לקוח",
  "התאמת שפת המערכת לשפה של העסק",
  "הפחתת חיפוש במיילים, וואטסאפ ודרייב",
  "בניית מרכז ידע פנימי לעסק",
];

const comparisonRows = [
  {
    before: "מתמקד בעיקר במכירות",
    after: "מנהלת את הלקוח גם אחרי שהעבודה התחילה",
  },
  {
    before: "הרבה שדות שלא תמיד צריך",
    after: "מבנה פשוט סביב לקוח, נכס, משימה וידע",
  },
  {
    before: "לא תמיד מתאים לשפה הפנימית של העסק",
    after: "אפשר להתאים שמות ומונחים במערכת",
  },
  {
    before: "התחשבנות וזמן עבודה נשארים בכלים אחרים",
    after: "משימות כוללות זמן, עלויות והתחשבנות",
  },
  {
    before: "מידע תפעולי נשאר מפוזר",
    after: "כל המידע התפעולי מתרכז במקום אחד",
  },
];

export default function FeaturesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img
                src="/cchub-logo.png"
                alt="CCHUB - Customer Control Hub"
                className="cchub-logo"
              />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
            <a className="cchub-nav-link" href="/">עמוד הבית</a>
            <a className="cchub-nav-link active" href="/features">יכולות המערכת</a>
            <a className="cchub-nav-link" href="/tutorials">טוטריאלים</a>
            <a className="cchub-nav-link" href="/articles">מאמרים</a>
            <a className="cchub-nav-link" href="/pricing">מחירים</a>
            <a className="cchub-nav-link" href="/faq">שאלות נפוצות</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="cchub-button-primary" href="/pricing">7 ימי ניסיון חינם</a>
            <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">
              כניסה למערכת
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">יכולות המערכת</span>

          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            כל מה שצריך כדי לנהל לקוחות, משימות, מסמכים, סיסמאות ועלויות במקום אחד
          </h1>

          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            CCHUB נבנתה לעסקים שמנהלים לקוחות לאורך זמן ורוצים לעבוד מסודר:
            לקוחות, נכסים דיגיטליים, משימות, מסמכים, סיסמאות, ידע, זמן עבודה,
            עלויות ואוטומציות — מחוברים לתמונה אחת ברורה.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-secondary" href="/#pricing">
              צפייה בחבילות
            </a>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="text-center">
          <p className="text-sm font-black text-blue-600">יכולות מרכזיות</p>
          <h2 className="cchub-title-lg mt-2">
            המערכת בנויה סביב הדרך שבה העסק באמת עובד
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            במקום עוד כלי מנותק, כל רכיב במערכת מחובר ללקוח ולתהליך העבודה.
            כך קל יותר להבין מה קורה, מה פתוח, כמה זמן זה לוקח ומה העלות של העבודה.
          </p>
        </div>

        <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <article
              key={feature.title}
              className="cchub-card flex min-h-[390px] flex-col items-center p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-3xl shadow-sm">
                {feature.icon}
              </div>

              <h3 className="min-h-[58px] text-2xl font-black leading-tight">
                {feature.title}
              </h3>

              <p className="mt-3 min-h-[126px] text-center text-[15px] leading-7 text-slate-600">
                {feature.text}
              </p>

              <div className="mt-auto grid w-full gap-3 pt-5 text-right">
                {feature.points.map((point) => (
                  <div key={point} className="price-row">
                    <span className="price-row-mark">✓</span>
                    <span className="price-row-text">{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section">
          <div className="grid items-stretch gap-7 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="cchub-card flex flex-col justify-center p-8 text-right">
              <p className="text-sm font-black text-blue-600">לא רק CRM</p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                CCHUB היא מערכת ניהול עבודה סביב לקוחות
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                CRM רגיל עוזר לנהל מכירות. CCHUB עוזרת לנהל את כל מה שקורה אחרי
                שהלקוח כבר קיים: משימות, מסמכים, נכסים, סיסמאות, ידע, זמן עבודה,
                עלויות ותהליכים.
              </p>

              <p className="mt-3 leading-8 text-slate-600">
                בנוסף, היא מאפשרת להתאים את שמות המערכת לשפה הפנימית של העסק,
                כך שהמערכת מרגישה טבעית לצוות ולא כמו כלי זר.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="text-2xl">🧩</div>
                  <div className="mt-2 font-black">מותאמת לעסק</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    שמות, מונחים ושפה פנימית שמתאימים אליכם.
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="text-2xl">⏱️</div>
                  <div className="mt-2 font-black">זמן ועלויות</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    משימות עם זמן עבודה, הערכות ועלויות.
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="cchub-button-primary" href="/pricing">
                  התחילו ניסיון חינם
                </a>
                <a className="cchub-button-secondary" href="/articles">
                  לקריאת מאמרים
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-blue-100 bg-blue-50/70 p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-600">
                    CRM קלאסי
                  </div>

                  <div className="grid gap-3">
                    {comparisonRows.map((row) => (
                      <div
                        key={row.before}
                        className="rounded-2xl border border-red-100 bg-red-50/60 p-4 text-sm font-bold leading-6 text-slate-600"
                      >
                        <span className="ml-2 text-red-500">×</span>
                        {row.before}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-700">
                    CCHUB
                  </div>

                  <div className="grid gap-3">
                    {comparisonRows.map((row) => (
                      <div
                        key={row.after}
                        className="rounded-2xl border border-green-100 bg-green-50/70 p-4 text-sm font-black leading-6 text-blue-700"
                      >
                        <span className="ml-2 text-green-600">✓</span>
                        {row.after}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-blue-100 bg-white p-5 text-center">
                <div className="text-2xl">→</div>
                <p className="mt-2 font-black text-blue-700">
                  פחות מערכת מכירות כבדה — יותר שליטה יומיומית בלקוחות, עבודה, מידע ועלויות.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="text-center">
          <p className="text-sm font-black text-blue-600">יכולות מתקדמות</p>
          <h2 className="cchub-title-lg mt-2">
            יבוא, ייצוא, אוטומציות, התאמות והרשאות — לפי החבילה והמשתמש המתאים
          </h2>
        </div>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advancedFeatures.map((feature) => (
            <article
              key={feature.title}
              className="cchub-mini-card flex min-h-[220px] flex-col items-center p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {feature.icon}
              </div>
              <h3 className="min-h-[54px] text-xl font-black leading-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-center leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="interface-shell">
          <div className="interface-top">
            <div>
              <p className="text-sm font-black text-blue-600">שימושים נפוצים</p>
              <h2 className="mt-1 text-2xl font-black">
                מה אפשר לנהל בתוך CCHUB?
              </h2>
            </div>
            <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 md:block">
              הכל מחובר ללקוח אחד
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <div key={item} className="price-row rounded-2xl border border-blue-100 bg-white p-4">
                <span className="price-row-mark">✓</span>
                <span className="price-row-text font-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
            7 ימי ניסיון חינם
          </span>

          <h2 className="mt-4 text-3xl font-black">
            רוצים לראות איך כל היכולות מתחברות לעבודה אחת מסודרת?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו עם CCHUB ונהלו לקוחות, משימות, מסמכים, סיסמאות, זמן עבודה,
            עלויות וידע במקום אחד.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-dark" href="/login">
              כניסה למערכת
            </a>
          </div>
        </div>
      </section>

      <footer className="cchub-footer">
        <div className="cchub-container flex flex-col items-center justify-between gap-4 text-sm text-blue-100 md:flex-row">
          <div className="font-en font-bold">© 2026 CCHUB</div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="/terms">תנאי שימוש</a>
            <a href="/privacy">מדיניות פרטיות</a>
            <a href="/faq">שאלות נפוצות</a>
            <a href="/pricing">מחירים</a>
            <a href="/en">EN</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
