import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך בונים סדר עבודה יומי ב-CCHUB | מדריך CCHUB",
  description: "מדריך לבניית סדר עבודה יומי ב-CCHUB באמצעות תמונה כללית, משימות פתוחות, לקוחות וסטטוסים.",
  alternates: { canonical: "/tutorials/daily-workflow" },
};

const steps = [
  "פותחים את עמוד התמונה הכללית בתחילת היום.",
  "בודקים משימות פתוחות ותאריכי יעד קרובים.",
  "מסמנים את המשימות שחייבות טיפול באותו יום.",
  "נכנסים לכל לקוח רלוונטי ובודקים מידע חסר, מסמכים או גישות.",
  "מעדכנים סטטוסים לאורך היום במקום להשאיר הכול לזיכרון.",
  "בסוף היום סוגרים או מעדכנים משימות כדי שהיום הבא יתחיל נקי.",
];

const tips = [
  "התחילו ממשימות עם תאריך יעד ולא ממשימות שנראות קלות.",
  "אל תנהלו משימות בוואטסאפ במקביל למערכת.",
  "עדכון קטן בזמן אמת חוסך חיפוש גדול אחר כך.",
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
          <span className="cchub-trial-badge-strong">מדריך בסיסי · 5 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך בונים סדר עבודה יומי ב-CCHUB</h1>
          <p className="cchub-text mt-5">סדר עבודה יומי נכון מתחיל מתמונה כללית: מה פתוח, מה דחוף, ומה שייך לאיזה לקוח.</p>
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
            <a className="cchub-button-primary" href="/tutorials">חזרה למרכז ההדרכה</a>
            <a className="cchub-button-dark" href="/pricing">7 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
