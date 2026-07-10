import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך שומרים מסמכים לפי לקוח ב-CCHUB | מדריך CCHUB",
  description: "מדריך לשמירת מסמכים, הצעות מחיר, קבצים ותיעוד לפי לקוח בתוך CCHUB.",
  alternates: { canonical: "/tutorials/client-documents" },
};

const steps = [
  "נכנסים לתיק הלקוח שאליו המסמך שייך.",
  "פותחים את אזור המסמכים או מוסיפים מסמך חדש.",
  "נותנים למסמך שם ברור שמסביר מה הוא מכיל.",
  "מעלים או מקשרים את הקובץ הרלוונטי.",
  "מוסיפים הערה קצרה אם יש הקשר עסקי חשוב.",
  "בודקים שהמסמך מופיע בתוך תיק הלקוח וניתן למצוא אותו בחיפוש.",
];

const tips = [
  "שם מסמך טוב חוסך זמן חיפוש בעתיד.",
  "אל תשמרו מסמכים רגישים מחוץ להקשר של הלקוח.",
  "כדאי לשמור גם הצעות מחיר ישנות לצורך השוואה והיסטוריה.",
];

export default function TutorialPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="cchub-container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="cchub-trial-badge-strong">מדריך בסיסי · 4 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך שומרים מסמכים לפי לקוח ב-CCHUB</h1>
          <p className="cchub-text mt-5">כשמסמכים נשמרים בתוך תיק הלקוח, לא צריך לחפש אותם במיילים, דרייבים ותיקיות מפוזרות.</p>
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
            <a className="cchub-button-primary" href="/tutorials/save-passwords">למדריך שמירת סיסמאות</a>
            <a className="cchub-button-dark" href="/pricing">7 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
