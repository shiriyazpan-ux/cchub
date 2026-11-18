import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "איך מנהלים הרשאות משתמשים ב-CCHUB | מדריך",
  description: "מדריך לניהול משתמשים, צוותים והרשאות מתקדמות ב-CCHUB בחבילת Enterprise.",
  alternates: { canonical: "/tutorials/user-permissions" },
  openGraph: {
    title: "איך מנהלים הרשאות משתמשים ב-CCHUB | מדריך | CCHUB",
    description: "מדריך לניהול משתמשים, צוותים והרשאות מתקדמות ב-CCHUB בחבילת Enterprise.",
    url: `${SITE_URL}/tutorials/user-permissions`,
    siteName: "CCHUB",
    locale: "he_IL",
    type: "article",
    images: [OG_IMAGE],
  },
};

const steps = [
  "ממפים את סוגי המשתמשים בעסק: Super Admin, Admin, Employee, Freelancer או Client.",
  "מחליטים מי צריך גישה מלאה ומי צריך גישה מוגבלת.",
  "מוסיפים משתמשים או צוותים במערכת.",
  "מגדירים הרשאות לפי תפקיד וצורך עסקי.",
  "בודקים הרשאות ייבוא, ייצוא ואינטגרציות למשתמשים המתאימים.",
  "מבצעים בדיקה ממשתמש לדוגמה כדי לוודא שאין גישה מיותרת.",
];

const tips = [
  "לא כל משתמש צריך הרשאת ייצוא.",
  "הרשאות צריכות להתאים לתפקיד ולא לאדם ספציפי בלבד.",
  "כדאי לבדוק הרשאות מחדש כשהצוות משתנה.",
];

export default function TutorialPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="cchub-container py-16">
        <div className="max-w-4xl text-right">
          <span className="cchub-trial-badge-strong">מדריך Enterprise · 4 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך מנהלים הרשאות משתמשים <span className="cchub-nowrap">ב-CCHUB</span></h1>
          <p className="cchub-text mt-5">הרשאות עוזרות לשלוט מי יכול לראות, לערוך, לייבא, לייצא או לחבר אינטגרציות במערכת.</p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
          <article className="cchub-card p-8">
            <h2 className="text-3xl font-black">שלבי העבודה</h2>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 border-t border-blue-100 pt-4 first:border-t-0 first:pt-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B7A70] font-black text-white">
                    {index + 1}
                  </span>
                  <p className="leading-8 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="grid gap-5">
            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">למה זה חשוב?</h2>
              <p className="mt-3 leading-8 text-slate-600">
                בחבילת Enterprise ניתן להתאים גישה לתפקיד ולהגביל פעולות
                רגישות כמו ייבוא, ייצוא וחיבור אינטגרציות.
              </p>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">טיפים חשובים</h2>
              <div className="mt-4 grid gap-3">
                {tips.map((tip) => (
                  <div key={tip} className="price-row">
                    <span className="price-row-mark">✓</span>
                    <span className="price-row-text">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 rounded-[30px] bg-[#061A44] p-8 text-center text-white">
          <h2 className="text-3xl font-black">המשיכו למדריך הבא</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            ככל שמחברים יותר מידע ללקוח, כך CCHUB הופכת למרכז עבודה אמיתי ולא רק לרשימת נתונים.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/tutorials">חזרה למרכז ההדרכה</a>
            <a className="cchub-button-dark" href="/pricing">14 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
