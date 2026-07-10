import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מערכת לניהול לקוחות בעברית: מה באמת חשוב לבדוק? | CCHUB",
  description: "איך לבחור מערכת לניהול לקוחות בעברית, מה ההבדל בין CRM רגיל לבין מערכת תפעולית, ואילו יכולות חשובות לעסק קטן או נותן שירותים.",
  alternates: { canonical: "/articles/hebrew-client-management-system" },
  openGraph: {
    title: "מערכת לניהול לקוחות בעברית: מה באמת חשוב לבדוק? | CCHUB",
    description: "איך לבחור מערכת לניהול לקוחות בעברית, מה ההבדל בין CRM רגיל לבין מערכת תפעולית, ואילו יכולות חשובות לעסק קטן או נותן שירותים.",
    url: "https://www.mycchub.app/articles/hebrew-client-management-system",
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
          <h1 className="cchub-title-xl mt-5">מערכת לניהול לקוחות בעברית: מה באמת חשוב לבדוק?</h1>
          <p className="cchub-text mt-5">כשמחפשים מערכת לניהול לקוחות בעברית, קל להיתפס לרשימות ארוכות של פיצ׳רים. בפועל, הדבר החשוב הוא האם המערכת עוזרת לכם לעבוד מסודר ביום-יום.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מערכת טובה מתחילה מהלקוח, לא מהטופס</h2>
            <p className="mt-4 leading-9 text-slate-600">מערכת לניהול לקוחות צריכה לאפשר פתיחת תיק לקוח ברור, שבו מרוכזים אנשי קשר, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע. אם המידע נשאר מפוזר בכלים אחרים, המערכת לא באמת פתרה את הבעיה.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">CRM רגיל לא תמיד מספיק</h2>
            <p className="mt-4 leading-9 text-slate-600">CRM קלאסי נבנה בדרך כלל סביב מכירות, לידים וצינור מכירה. עסקים שנותנים שירות לאורך זמן צריכים גם ניהול עבודה אחרי שהלקוח כבר קיים: משימות, תיעוד, גישות, קבצים, החלטות ועלויות.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">עברית ו-RTL הם לא קישוט</h2>
            <p className="mt-4 leading-9 text-slate-600">מערכת בעברית צריכה להרגיש טבעית: כיוון כתיבה נכון, מילים ברורות, שפה עסקית ולא טכנית, והתאמה למונחים שהצוות באמת משתמש בהם.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מה כדאי לבדוק לפני שבוחרים מערכת?</h2>
            <p className="mt-4 leading-9 text-slate-600">בדקו האם אפשר לייבא לקוחות מאקסל, האם יש ניהול משימות לפי לקוח, האם יש מקום למסמכים וסיסמאות, האם קיימים נכסים דיגיטליים, והאם יש חבילות שמתאימות לגודל העסק שלכם.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">תיק לקוח הוא המרכז של העבודה.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">CRM מכירתי בלבד לא תמיד מתאים לניהול תפעולי.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">עברית טובה חוסכת הדרכה ובלבול לצוות.</span>
                </div>
              </div>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">ממשיכים מכאן</h2>
              <p className="mt-3 leading-8 text-slate-600">
                אחרי שמבינים את העיקרון, השלב הבא הוא לראות איך זה מתחבר לעבודה יומיומית בתוך מערכת אחת.
              </p>
              <div className="mt-5 grid gap-3">
                <a className="cchub-button-primary justify-center" href="/tutorials/add-client">למדריך הוספת לקוח</a>
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
