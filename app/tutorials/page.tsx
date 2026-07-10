import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טוטריאלים | מדריכים לשימוש ב-CCHUB",
  description:
    "מרכז הטוטריאלים של CCHUB: מדריכים לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים, יבוא מאקסל, זמן עבודה ועלויות.",
  alternates: {
    canonical: "/tutorials",
  },
  openGraph: {
    title: "טוטריאלים | CCHUB",
    description:
      "מדריכים קצרים לשימוש ב-CCHUB: איך מוסיפים לקוח, מייבאים אקסל, מנהלים משימות, שומרים סיסמאות ומרכזים ידע.",
    url: "https://www.mycchub.app/tutorials",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const tutorialGroups = [
  {
    title: "התחלה מהירה",
    icon: "🚀",
    description: "הצעדים הראשונים כדי להתחיל לעבוד מסודר עם CCHUB.",
    tutorials: [
      {
        title: "איך מוסיפים לקוח חדש",
        time: "4 דקות",
        level: "בסיסי",
        href: "/tutorials/add-client",
        text: "פתיחת תיק לקוח מסודר, הוספת פרטים בסיסיים והכנה לניהול משימות, מסמכים ונכסים.",
      },
      {
        title: "איך מייבאים לקוחות מאקסל",
        time: "6 דקות",
        level: "בסיסי",
        href: "/tutorials/import-excel",
        text: "טעינת נתונים קיימים מאקסל כדי להתחיל לעבוד בלי להזין הכול ידנית מחדש.",
      },
      {
        title: "איך מוסיפים משימה ללקוח",
        time: "4 דקות",
        level: "בסיסי",
        href: "/tutorials/add-task",
        text: "יצירת משימה, שיוך ללקוח ונכס, קביעת סטטוס ותיעוד העבודה במקום אחד.",
      },
    ],
  },
  {
    title: "ניהול עבודה יומיומית",
    icon: "✅",
    description: "ניהול משימות, תיעוד, זמן ועלויות בצורה מסודרת.",
    tutorials: [
      {
        title: "איך עוקבים אחרי זמן עבודה ועלויות",
        time: "5 דקות",
        level: "מתקדם",
        href: "/tutorials/time-costs",
        text: "שימוש בשדות זמן, הערכת שעות ועלויות כדי להבין כמה עבודה הושקעה בכל משימה.",
      },
      {
        title: "איך סוגרים משימה ושומרים היסטוריה",
        time: "3 דקות",
        level: "בסיסי",
        href: "/tutorials/close-task",
        text: "סגירת משימות בלי לאבד מידע, כך שכל פעולה נשארת חלק מהיסטוריית הלקוח.",
      },
      {
        title: "איך בונים סדר עבודה יומי",
        time: "5 דקות",
        level: "בסיסי",
        href: "/tutorials/daily-workflow",
        text: "שימוש בתמונה כללית, משימות פתוחות ולקוחות כדי להבין במה לטפל קודם.",
      },
    ],
  },
  {
    title: "מסמכים, סיסמאות ונכסים",
    icon: "🔒",
    description: "ריכוז כל המידע הרגיש והחשוב סביב הלקוח.",
    tutorials: [
      {
        title: "איך שומרים מסמכים לפי לקוח",
        time: "4 דקות",
        level: "בסיסי",
        href: "/tutorials/client-documents",
        text: "שמירת הצעות מחיר, קבצים, מסמכים ותיעוד חשוב בתוך תיק הלקוח.",
      },
      {
        title: "איך שומרים סיסמאות וגישות",
        time: "5 דקות",
        level: "חשוב",
        href: "/tutorials/save-passwords",
        text: "ניהול גישות בצורה מסודרת לפי לקוח ונכס, במקום לשלוח פרטים רגישים בצ׳אטים.",
      },
      {
        title: "איך מנהלים נכסים דיגיטליים",
        time: "5 דקות",
        level: "מתקדם",
        href: "/tutorials/digital-assets",
        text: "ניהול אתרים, דומיינים, מערכות ופלטפורמות שמחוברות לכל לקוח.",
      },
    ],
  },
  {
    title: "התאמות ואוטומציות",
    icon: "🔗",
    description: "התאמת המערכת לשפה של העסק וחיבור לתהליכים חיצוניים.",
    tutorials: [
      {
        title: "איך מתאימים שמות ומונחים במערכת",
        time: "4 דקות",
        level: "מתקדם",
        href: "/tutorials/custom-terms",
        text: "התאמת מילים ושמות במערכת לשפה הפנימית של העסק והצוות.",
      },
      {
        title: "איך עובדים עם Make / Zapier",
        time: "7 דקות",
        level: "מתקדם",
        href: "/tutorials/make-zapier",
        text: "הבנה בסיסית של חיבור CCHUB לאוטומציות ולכלים חיצוניים בחבילות המתאימות.",
      },
      {
        title: "איך מנהלים הרשאות משתמשים",
        time: "6 דקות",
        level: "Business",
        href: "/tutorials/user-permissions",
        text: "הגדרת משתמשים, צוותים והרשאות מתקדמות לעסקים שעובדים עם כמה אנשים.",
      },
    ],
  },
];

const learningPath = [
  "התחילו מהוספת לקוח ראשון",
  "חברו אליו משימה אחת",
  "הוסיפו מסמך או סיסמה",
  "צרו נכס דיגיטלי במידת הצורך",
  "בדקו זמן ועלויות במשימות",
  "עברו ליבוא מאקסל כשיש לכם מידע קיים",
];

export default function TutorialsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB - Customer Control Hub" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
            <a className="cchub-nav-link" href="/">עמוד הבית</a>
            <a className="cchub-nav-link" href="/features">יכולות המערכת</a>
            <a className="cchub-nav-link active" href="/tutorials">טוטריאלים</a>
            <a className="cchub-nav-link" href="/articles">מאמרים</a>
            <a className="cchub-nav-link" href="/pricing">מחירים</a>
            <a className="cchub-nav-link" href="/faq">שאלות נפוצות</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="cchub-button-primary" href="/pricing">7 ימי ניסיון חינם</a>
            <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">כניסה למערכת</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />
        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">מרכז הדרכה</span>
          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            טוטריאלים קצרים שיעזרו לכם להתחיל לעבוד מסודר עם CCHUB
          </h1>
          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            מדריכים פשוטים לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים
            דיגיטליים, יבוא מאקסל, זמן עבודה, עלויות והרשאות.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">התחילו 7 ימי ניסיון חינם</a>
            <a className="cchub-button-secondary" href="/features">צפייה ביכולות המערכת</a>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cchub-card p-7">
            <p className="text-sm font-black text-blue-600">מסלול מומלץ</p>
            <h2 className="mt-2 text-3xl font-black">מה כדאי ללמוד קודם?</h2>
            <p className="mt-4 leading-8 text-slate-600">
              לא צריך ללמוד הכול ביום אחד. הדרך הנכונה היא להתחיל מתיק לקוח
              ראשון, להוסיף משימות ומידע, ואז להתקדם ליבוא, אוטומציות והרשאות.
            </p>
            <div className="mt-6 grid gap-3">
              {learningPath.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-blue-100 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["👥", "לקוחות", "הוספה, עריכה וניהול תיק לקוח"],
                ["✅", "משימות", "סטטוסים, תאריכים, זמן ועלויות"],
                ["📁", "מסמכים", "שמירת קבצים ותיעוד לפי לקוח"],
                ["🔒", "סיסמאות", "ניהול גישות בצורה מסודרת"],
                ["🧊", "נכסים", "אתרים, דומיינים ומערכות"],
                ["📥", "אקסל", "יבוא נתונים להתחלה מהירה"],
              ].map(([icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    {icon}
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section">
          <div className="text-center">
            <p className="text-sm font-black text-blue-600">כל הטוטריאלים</p>
            <h2 className="cchub-title-lg mt-2">מדריכים לפי נושא</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              כל כרטיס מוביל למדריך ייעודי. בשלב הראשון פתחנו את המדריכים
              הקריטיים להתחלה, ובהמשך נוסיף מדריכים נוספים לכל תהליך במערכת.
            </p>
          </div>

          <div className="mt-9 grid gap-8">
            {tutorialGroups.map((group) => (
              <section key={group.title} className="rounded-[30px] border border-blue-100 bg-blue-50/60 p-6">
                <div className="mb-6 flex flex-col items-center text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-3xl shadow-sm">
                    {group.icon}
                  </div>
                  <h2 className="text-3xl font-black">{group.title}</h2>
                  <p className="mt-2 max-w-2xl leading-7 text-slate-600">{group.description}</p>
                </div>

                <div className="grid items-stretch gap-5 md:grid-cols-3">
                  {group.tutorials.map((tutorial) => (
                    <article key={tutorial.title} className="cchub-mini-card flex min-h-[280px] flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{tutorial.level}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">{tutorial.time}</span>
                      </div>
                      <h3 className="text-2xl font-black leading-tight">{tutorial.title}</h3>
                      <p className="mt-4 leading-8 text-slate-600">{tutorial.text}</p>
                      <div className="mt-auto pt-5">
                        <a href={tutorial.href} className="cchub-button-secondary w-full justify-center">
                          למדריך המלא
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">התחלה פשוטה</span>
          <h2 className="mt-4 text-3xl font-black">הדרך הכי טובה ללמוד היא להתחיל לעבוד עם לקוח ראשון</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו 7 ימי ניסיון חינם, פתחו תיק לקוח ראשון, והוסיפו משימה,
            מסמך או סיסמה ראשונה.
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
