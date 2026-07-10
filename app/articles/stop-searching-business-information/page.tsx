import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך מפסיקים לחפש סיסמאות, מסמכים והודעות ישנות? | CCHUB",
  description: "כך מפסיקים לחפש מידע עסקי בין וואטסאפ, מיילים, דרייבים ואקסלים ומתחילים לרכז לקוחות, מסמכים, סיסמאות וידע במקום אחד.",
  alternates: { canonical: "/articles/stop-searching-business-information" },
  openGraph: {
    title: "איך מפסיקים לחפש סיסמאות, מסמכים והודעות ישנות? | CCHUB",
    description: "כך מפסיקים לחפש מידע עסקי בין וואטסאפ, מיילים, דרייבים ואקסלים ומתחילים לרכז לקוחות, מסמכים, סיסמאות וידע במקום אחד.",
    url: "https://www.mycchub.app/articles/stop-searching-business-information",
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
          <h1 className="cchub-title-xl mt-5">איך מפסיקים לחפש סיסמאות, מסמכים והודעות ישנות?</h1>
          <p className="cchub-text mt-5">אחת הבעיות הגדולות בעסק קטן היא לא שאין מידע — אלא שיש יותר מדי מקומות שבהם המידע יכול להתחבא.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">הבעיה היא לא חיפוש, אלא פיזור</h2>
            <p className="mt-4 leading-9 text-slate-600">כשסיסמה נמצאת בוואטסאפ, הצעת מחיר בדרייב, החלטה במייל ומשימה באקסל, כל פעולה פשוטה הופכת לחיפוש. זה גוזל זמן, יוצר טעויות ומקשה על המשכיות.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">כל מידע צריך הקשר</h2>
            <p className="mt-4 leading-9 text-slate-600">מסמך לא אמור להיות רק קובץ. הוא צריך להיות מחובר ללקוח. סיסמה לא אמורה להיות הודעה ישנה. היא צריכה להיות מחוברת לנכס הדיגיטלי הנכון. ידע לא אמור להיעלם בשיחה. הוא צריך להישמר במקום שאפשר לחזור אליו.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">הדרך לסדר: מרכז אחד סביב הלקוח</h2>
            <p className="mt-4 leading-9 text-slate-600">במקום לנהל מידע לפי סוג הכלי שבו הוא נוצר, מנהלים אותו לפי הלקוח שאליו הוא שייך. כך כל משימה, מסמך, סיסמה ונכס מקבלים מקום ברור.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מה מרוויחים מזה?</h2>
            <p className="mt-4 leading-9 text-slate-600">פחות זמן חיפוש, פחות תלות בזיכרון, פחות הודעות חוזרות לצוות, ויותר יכולת להבין במהירות מה מצב הלקוח ומה צריך לעשות עכשיו.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">פיזור מידע הוא עלות נסתרת.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">הקשר ללקוח חשוב יותר ממיקום הקובץ.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">סדר טוב מפחית טעויות ותלות באנשים.</span>
                </div>
              </div>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">ממשיכים מכאן</h2>
              <p className="mt-3 leading-8 text-slate-600">
                אחרי שמבינים את העיקרון, השלב הבא הוא לראות איך זה מתחבר לעבודה יומיומית בתוך מערכת אחת.
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
          <h2 className="mt-4 text-3xl font-black">רוצים להפוך את זה לשיטת עבודה אמיתית?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            CCHUB מרכזת לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע כדי שהמידע לא יישאר מפוזר.
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
