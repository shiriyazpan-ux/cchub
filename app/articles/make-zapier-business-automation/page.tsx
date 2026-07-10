import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make ו-Zapier: מתי אוטומציה באמת עוזרת לעסק? | CCHUB",
  description: "איך לדעת מתי כדאי לחבר אוטומציה עם Make או Zapier, ומה צריך להגדיר לפני שמחברים תהליך אוטומטי.",
  alternates: { canonical: "/articles/make-zapier-business-automation" },
  openGraph: {
    title: "Make ו-Zapier: מתי אוטומציה באמת עוזרת לעסק? | CCHUB",
    description: "איך לדעת מתי כדאי לחבר אוטומציה עם Make או Zapier, ומה צריך להגדיר לפני שמחברים תהליך אוטומטי.",
    url: "https://www.mycchub.app/articles/make-zapier-business-automation",
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
          <h1 className="cchub-title-xl mt-5">Make ו-Zapier: מתי אוטומציה באמת עוזרת לעסק?</h1>
          <p className="cchub-text mt-5">אוטומציה יכולה לחסוך זמן, אבל היא גם יכולה להפוך בלגן ידני לבלגן מהיר יותר אם מחברים אותה בלי תהליך ברור.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">אוטומציה מתחילה מתהליך קיים</h2>
            <p className="mt-4 leading-9 text-slate-600">לפני שמחברים כלי כמו Make או Zapier, צריך לדעת מה בדיוק קורה היום: מה הטריגר, איזה מידע עובר, לאן הוא צריך להגיע ומה נחשב הצלחה.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">לא כל פעולה צריכה אוטומציה</h2>
            <p className="mt-4 leading-9 text-slate-600">פעולות נדירות או מורכבות מדי לא תמיד שוות אוטומציה. כדאי להתחיל מתהליכים שחוזרים על עצמם הרבה וכוללים מידע ברור.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">בדיקה קטנה לפני הפעלה מלאה</h2>
            <p className="mt-4 leading-9 text-slate-600">אוטומציה חדשה צריכה להיבדק עם רשומה אחת או תרחיש קטן. רק אחרי שמוודאים שאין כפילויות או טעויות, מפעילים אותה בצורה רחבה.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">אוטומציה טובה משאירה תיעוד</h2>
            <p className="mt-4 leading-9 text-slate-600">אם פעולה אוטומטית יוצרת לקוח, ליד או משימה, חשוב שהמידע יישמר במקום הנכון ויהיה ברור מאיפה הוא הגיע.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">אוטומציה דורשת תהליך ברור.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">לא כל דבר צריך להפוך לאוטומטי.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">בדיקה קטנה מונעת בלגן גדול.</span>
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
                <a className="cchub-button-primary justify-center" href="/tutorials/make-zapier">למדריך Make / Zapier</a>
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
