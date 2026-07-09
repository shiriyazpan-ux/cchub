import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ניהול סיסמאות בעסק: למה וואטסאפ הוא לא מקום לסיסמאות? | CCHUB",
  description: "למה לא כדאי לנהל סיסמאות וגישה לעסק בוואטסאפ, ואיך לשמור גישות לפי לקוח ונכס דיגיטלי.",
  alternates: { canonical: "/articles/business-password-management" },
  openGraph: {
    title: "ניהול סיסמאות בעסק: למה וואטסאפ הוא לא מקום לסיסמאות? | CCHUB",
    description: "למה לא כדאי לנהל סיסמאות וגישה לעסק בוואטסאפ, ואיך לשמור גישות לפי לקוח ונכס דיגיטלי.",
    url: "https://www.mycchub.app/articles/business-password-management",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="border-b border-blue-100 bg-white">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>
          <div className="flex items-center gap-3">
            <a className="cchub-button-secondary" href="/articles">חזרה למאמרים</a>
            <a className="cchub-button-primary hidden sm:inline-flex" href="/pricing">7 ימי ניסיון חינם</a>
          </div>
        </div>
      </header>

      <article className="cchub-container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="cchub-trial-badge-strong">מאמר מקצועי</span>
          <h1 className="cchub-title-xl mt-5">ניהול סיסמאות בעסק: למה וואטסאפ הוא לא מקום לסיסמאות?</h1>
          <p className="cchub-text mt-5">בעסקים רבים סיסמאות נשלחות בצ׳אטים, נשמרות בצילומי מסך או מופיעות במסמכים פתוחים. זה נוח לרגע — ומסוכן לאורך זמן.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">סיסמה בלי הקשר יוצרת בלבול</h2>
            <p className="mt-4 leading-9 text-slate-600">כשמופיעה סיסמה בהודעה ישנה, לא תמיד ברור לאיזה לקוח היא שייכת, לאיזה נכס, האם היא עדיין עדכנית ומי רשאי להשתמש בה.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">וואטסאפ לא נועד לניהול גישות</h2>
            <p className="mt-4 leading-9 text-slate-600">צ׳אטים טובים לתקשורת, לא לניהול מידע רגיש. חיפוש הודעות ישנות, העתקת סיסמאות ושיתוף לא מבוקר יוצרים סיכון ואי סדר.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">גישה צריכה להיות מחוברת ללקוח ולנכס</h2>
            <p className="mt-4 leading-9 text-slate-600">הדרך הנכונה היא לשמור כל גישה תחת הלקוח והנכס הדיגיטלי שלה: אתר, דומיין, מערכת, חשבון פרסום או פלטפורמה אחרת.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">עדכון גישה הוא חלק מהתהליך</h2>
            <p className="mt-4 leading-9 text-slate-600">כאשר סיסמה משתנה, צריך לעדכן אותה במקום המרכזי ולא לשלוח גרסה חדשה בעוד הודעה. אחרת מהר מאוד לא ברור מה נכון.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">סיסמאות צריכות הקשר ברור.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">צ׳אט הוא לא כספת עסקית.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">כל גישה צריכה להיות משויכת ללקוח ונכס.</span>
                </div>
              </div>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">ממשיכים מכאן</h2>
              <p className="mt-3 leading-8 text-slate-600">
                אחרי שמבינים את העיקרון, השלב הבא הוא להפוך אותו לתהליך קבוע
                בתוך העבודה היומיומית של העסק.
              </p>
              <div className="mt-5 grid gap-3">
                <a className="cchub-button-primary justify-center" href="/tutorials/save-passwords">למדריך שמירת סיסמאות</a>
                <a className="cchub-button-secondary justify-center" href="/features">צפייה ביכולות המערכת</a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[30px] bg-[#061A44] p-8 text-center text-white">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">7 ימי ניסיון חינם</span>
          <h2 className="mt-4 text-3xl font-black">רוצים לראות איך זה עובד בפועל?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            CCHUB מרכזת לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע
            במקום אחד — כדי שהעסק יעבוד מסודר יותר.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">התחילו 7 ימי ניסיון חינם</a>
            <a className="cchub-button-dark" href="/tutorials">מעבר לטוטריאלים</a>
          </div>
        </div>
      </article>
    </main>
  );
}
