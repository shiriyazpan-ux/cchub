import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "נכסים דיגיטליים של לקוח: איך עושים סדר באתרים, דומיינים ומערכות? | CCHUB",
  description: "איך לנהל נכסים דיגיטליים של לקוחות: אתרים, דומיינים, מערכות, חשבונות ופלטפורמות בצורה מסודרת.",
  alternates: { canonical: "/articles/client-digital-assets" },
  openGraph: {
    title: "נכסים דיגיטליים של לקוח: איך עושים סדר באתרים, דומיינים ומערכות? | CCHUB",
    description: "איך לנהל נכסים דיגיטליים של לקוחות: אתרים, דומיינים, מערכות, חשבונות ופלטפורמות בצורה מסודרת.",
    url: "https://www.mycchub.app/articles/client-digital-assets",
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
          <h1 className="cchub-title-xl mt-5">נכסים דיגיטליים של לקוח: איך עושים סדר באתרים, דומיינים ומערכות?</h1>
          <p className="cchub-text mt-5">לקוח אחד יכול להחזיק אתר, דומיין, מערכת ניהול, חשבון פרסום, חנות, דפי נחיתה ועוד. בלי סדר, כל נכס הופך לאי נפרד.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">נכס דיגיטלי הוא לא רק URL</h2>
            <p className="mt-4 leading-9 text-slate-600">נכס יכול להיות אתר, דומיין, חשבון פרסום, מערכת CRM, חנות, כלי דיוור או כל פלטפורמה שקשורה לעבודה מול הלקוח.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">לכל נכס יש מידע משלו</h2>
            <p className="mt-4 leading-9 text-slate-600">לכל נכס יש משימות, סיסמאות, מסמכים, תאריכי חידוש, אנשי קשר וידע. אם הכול נשמר רק ברמת הלקוח, פרטים חשובים מתערבבים.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">שיוך נכסים מונע טעויות</h2>
            <p className="mt-4 leading-9 text-slate-600">כאשר משימה משויכת לנכס מסוים, ברור על מה עובדים. זה חשוב במיוחד ללקוחות עם כמה אתרים, כמה דומיינים או כמה מערכות.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">תיק לקוח טוב מציג גם את הנכסים</h2>
            <p className="mt-4 leading-9 text-slate-600">המטרה היא לפתוח לקוח ולראות לא רק פרטים כלליים, אלא גם את כל הנכסים הדיגיטליים שדורשים ניהול.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">נכס דיגיטלי צריך מקום משלו.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">משימות וסיסמאות צריכות להיות מחוברות לנכס.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">לקוחות מורכבים דורשים מיפוי נכסים ברור.</span>
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
                <a className="cchub-button-primary justify-center" href="/tutorials/digital-assets">למדריך נכסים דיגיטליים</a>
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
