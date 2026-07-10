import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM לעסק קטן: מתי צריך CRM ומתי צריך מערכת תפעולית? | CCHUB",
  description: "מה ההבדל בין CRM לעסק קטן לבין מערכת תפעולית לניהול לקוחות, משימות, מסמכים וסיסמאות.",
  alternates: { canonical: "/articles/crm-for-small-business" },
  openGraph: {
    title: "CRM לעסק קטן: מתי צריך CRM ומתי צריך מערכת תפעולית? | CCHUB",
    description: "מה ההבדל בין CRM לעסק קטן לבין מערכת תפעולית לניהול לקוחות, משימות, מסמכים וסיסמאות.",
    url: "https://www.mycchub.app/articles/crm-for-small-business",
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
          <h1 className="cchub-title-xl mt-5">CRM לעסק קטן: מתי צריך CRM ומתי צריך מערכת תפעולית?</h1>
          <p className="cchub-text mt-5">עסקים קטנים מחפשים CRM כי הם רוצים סדר. אבל לא תמיד הבעיה היא מכירות — לפעמים הבעיה היא ניהול העבודה אחרי שהלקוח כבר קיים.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-7 lg:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-6">

          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">CRM טוב לניהול מכירות</h2>
            <p className="mt-4 leading-9 text-slate-600">CRM קלאסי עוזר לנהל לידים, פניות, הצעות ותהליכי מכירה. זה חשוב לעסק שמנהל הרבה הזדמנויות, אבל זה לא בהכרח פותר את הבלגן התפעולי שמגיע אחרי שהלקוח התחיל לעבוד איתכם.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">מערכת תפעולית מנהלת את העבודה</h2>
            <p className="mt-4 leading-9 text-slate-600">מערכת תפעולית סביב לקוחות שמה במרכז את המשימות, המסמכים, הסיסמאות, הנכסים הדיגיטליים, הידע וההיסטוריה. היא עוזרת להבין מה צריך לעשות עכשיו, לא רק מי אולי יקנה בעתיד.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">לעסק קטן אין זמן לעוד מערכת כבדה</h2>
            <p className="mt-4 leading-9 text-slate-600">עסק קטן צריך מערכת שמרגישה פשוטה, לא כזאת שדורשת מנהל מערכת במשרה מלאה. המבנה צריך להיות ברור: לקוח, משימה, מסמך, סיסמה, נכס וידע.</p>
          </section>
          <section className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black leading-tight">איך יודעים מה מתאים לכם?</h2>
            <p className="mt-4 leading-9 text-slate-600">אם רוב הכאב שלכם הוא לידים ומכירות — CRM יכול להתאים. אם הכאב הוא חיפוש מידע, משימות מפוזרות, סיסמאות, מסמכים וניהול לקוחות קיימים — אתם צריכים מערכת תפעולית סביב לקוחות.</p>
          </section>
          </div>

          <aside className="grid content-start gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">מה לקחת מהמאמר?</h2>
              <div className="mt-4 grid gap-3">

                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">CRM מתאים למכירות ולידים.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">מערכת תפעולית מתאימה לניהול עבודה קיימת.</span>
                </div>
                <div className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">עסק קטן צריך סדר פשוט ולא כלי מסובך.</span>
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
                <a className="cchub-button-primary justify-center" href="/pricing">השוואת חבילות</a>
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
