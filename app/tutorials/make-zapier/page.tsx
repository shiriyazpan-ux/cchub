import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך עובדים עם Make ו-Zapier ב-CCHUB | מדריך CCHUB",
  description: "רשימת בדיקה לתכנון וחיבור אוטומציות עם Make או Zapier בחבילות Premium ו-Enterprise.",
  alternates: { canonical: "/tutorials/make-zapier" },
};

const steps = [
  "מגדירים איזה תהליך רוצים לאוטומט: ליד חדש, משימה, לקוח או עדכון.",
  "מוודאים שהחשבון נמצא בחבילת Premium או Enterprise.",
  "בוחרים את המחבר והאימות הזמינים לחשבון בתוך Make או Zapier.",
  "יוצרים תרחיש ומחברים את מקור המידע החיצוני לפעולה הנתמכת ב-CCHUB.",
  "מריצים בדיקה עם נתון אחד בלבד לפני שימוש אמיתי.",
  "בודקים שהמידע נכנס למקום הנכון ולא יוצר כפילויות.",
];

const tips = [
  "לא מחברים אוטומציה לפני שמגדירים תהליך עסקי ברור.",
  "תמיד מתחילים מבדיקה קטנה.",
  "כפילויות בלידים ולקוחות הן סימן שצריך לשפר את תנאי האוטומציה.",
];

export default function TutorialPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="cchub-container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="cchub-trial-badge-strong">רשימת בדיקה · 4 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך עובדים עם Make ו-Zapier ב-CCHUB</h1>
          <p className="cchub-text mt-5">אוטומציות בחבילות Premium ו-Enterprise מאפשרות לחבר תהליכים חיצוניים. שמות הפעולות ואופן האימות עשויים להשתנות לפי המחבר והגרסה הזמינים בחשבון.</p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
          <article className="cchub-card p-8">
            <h2 className="text-3xl font-black">שלבי העבודה</h2>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
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
                זו רשימת בדיקה תפעולית. לפני הפעלה קבועה, בדקו את הפעולות
                המוצגות במחבר שלכם והריצו תרחיש עם רשומה אחת בלבד.
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
            <a className="cchub-button-primary" href="/tutorials/user-permissions">למדריך הרשאות משתמשים</a>
            <a className="cchub-button-dark" href="/pricing">14 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
