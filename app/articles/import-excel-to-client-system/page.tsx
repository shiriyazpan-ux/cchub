import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יבוא מאקסל למערכת ניהול: איך לעשות את זה נכון? | CCHUB",
  description: "כך מכינים קובץ לקוחות ליבוא, מונעים כפילויות, מתאימים עמודות ובודקים את הנתונים לאחר הטעינה למערכת.",
  alternates: { canonical: "/articles/import-excel-to-client-system" },
  openGraph: {
    title: "יבוא מאקסל למערכת ניהול: איך לעשות את זה נכון? | CCHUB",
    description: "מדריך להכנת קובץ Excel נקי, התאמת עמודות ובדיקת הנתונים לאחר היבוא.",
    url: "https://web.mycchub.app/articles/import-excel-to-client-system",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <article className="cchub-container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="cchub-trial-badge-strong">מאמר מקצועי</span>
          <h1 className="cchub-title-xl mt-5">יבוא מאקסל למערכת ניהול: איך לעשות את זה נכון?</h1>
          <p className="cchub-text mt-5">יבוא טוב לא מתחיל בלחיצה על כפתור. הוא מתחיל בקובץ נקי, בשדות ברורים ובבדיקה קטנה לפני שמעבירים את כל המידע.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מתחילים מעותק נקי של הקובץ</h2>
            <p className="mt-4 leading-9 text-slate-600">שמרו עותק של קובץ המקור ועבדו על קובץ נפרד ליבוא. הסירו שורות ריקות, כותרות כפולות ונוסחאות שאינן נחוצות, אבל אל תמחקו מידע שאתם עדיין לא בטוחים לגביו.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">עמודה אחת לכל סוג מידע</h2>
            <p className="mt-4 leading-9 text-slate-600">שם לקוח, איש קשר, טלפון ודוא״ל צריכים להיות בעמודות נפרדות. מבנה קבוע מאפשר למפות כל עמודה לשדה המתאים ומפחית טעויות בזמן הקליטה.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מטפלים בכפילויות לפני היבוא</h2>
            <p className="mt-4 leading-9 text-slate-600">בדקו לקוחות בעלי אותו שם, מספר טלפון או כתובת דוא״ל. החליטו מראש איזו רשומה נשארת ואיזה מידע מאחדים, כדי לא לפתוח כמה תיקים לאותו לקוח.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">בודקים מדגם לפני שממשיכים</h2>
            <p className="mt-4 leading-9 text-slate-600">לאחר היבוא פתחו כמה תיקי לקוח ובדקו שהשם, אנשי הקשר ופרטי ההתקשרות נקלטו בשדות הנכונים. רק לאחר הבדיקה מתחילים להוסיף משימות ומידע נוסף.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">שומרים תמיד עותק של קובץ המקור.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">מפרידים כל סוג מידע לעמודה משלו.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">בודקים כפילויות ומדגם של רשומות לאחר היבוא.</span>
                </div>
              </div>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">ממשיכים מכאן</h2>
              <p className="mt-3 leading-8 text-slate-600">
                רוצים לבצע את היבוא בפועל? עברו למדריך הקצר, הכינו קובץ נקי
                ובדקו כמה לקוחות לדוגמה לפני שממשיכים.
              </p>
              <div className="mt-5 grid gap-3">
                <a className="cchub-button-primary justify-center" href="/tutorials/import-excel">למדריך יבוא מאקסל</a>
                <a className="cchub-button-secondary justify-center" href="/features">צפייה ביכולות המערכת</a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[30px] bg-[#061A44] p-8 text-center text-white">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">14 ימי ניסיון חינם</span>
          <h2 className="mt-4 text-3xl font-black">רוצים לראות איך זה עובד בפועל?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            CCHUB מרכזת לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע
            במקום אחד — כדי שהעסק יעבוד מסודר יותר.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">התחילו 14 ימי ניסיון חינם</a>
            <a className="cchub-button-dark" href="/tutorials">מעבר לטוטריאלים</a>
          </div>
        </div>
      </article>
    </main>
  );
}
