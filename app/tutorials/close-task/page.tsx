import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך סוגרים משימה ושומרים היסטוריה ב-CCHUB | מדריך CCHUB",
  description: "מדריך לסגירת משימות ב-CCHUB בלי לאבד תיעוד, החלטות, זמן עבודה והקשר ללקוח.",
  alternates: { canonical: "/tutorials/close-task" },
};

const steps = [
  "פותחים את המשימה שסיימתם לעבוד עליה.",
  "בודקים שהתיאור כולל את מה שבוצע בפועל.",
  "מעדכנים זמן עבודה או עלות אם המשימה כוללת התחשבנות.",
  "מוסיפים הערת סיום קצרה אם יש החלטה או פרט חשוב להמשך.",
  "משנים את הסטטוס למשימה שהושלמה.",
  "בודקים שהיא עדיין מופיעה בהיסטוריית הלקוח לצורך מעקב עתידי.",
];

const tips = [
  "אל תסגרו משימה בלי תיאור מינימלי של מה בוצע.",
  "שמרו החלטות חשובות במרכז הידע אם הן ישמשו בהמשך.",
  "משימה סגורה היא מקור מידע, לא רק סימון וי.",
];

export default function TutorialPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="border-b border-blue-100 bg-white">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>
          <a className="cchub-button-secondary" href="/tutorials">חזרה לטוטריאלים</a>
        </div>
      </header>

      <section className="cchub-container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="cchub-trial-badge-strong">מדריך בסיסי · 3 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך סוגרים משימה ושומרים היסטוריה ב-CCHUB</h1>
          <p className="cchub-text mt-5">סגירת משימה לא מוחקת את העבודה. היא שומרת היסטוריה ברורה של מה בוצע, מתי ולמי.</p>
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
                מדריך זה עוזר להפוך עבודה מפוזרת לתהליך ברור, מתועד ומחובר
                ללקוח, למשימות ולמידע החשוב במערכת.
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
            <a className="cchub-button-primary" href="/tutorials/daily-workflow">למדריך סדר עבודה יומי</a>
            <a className="cchub-button-dark" href="/pricing">7 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
