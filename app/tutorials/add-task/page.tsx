import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך מוסיפים משימה ללקוח ב-CCHUB | מדריך",
  description:
    "מדריך להוספת משימה ללקוח ב-CCHUB: בחירת לקוח ונכס, סטטוס, תאריך יעד, תיעוד, זמן עבודה ועלויות.",
  alternates: { canonical: "/tutorials/add-task" },
};

const steps = [
  "נכנסים לעמוד המשימות או לתיק הלקוח הרלוונטי.",
  "לוחצים על הוספת משימה חדשה.",
  "בוחרים את הלקוח שאליו המשימה שייכת.",
  "במידת הצורך משייכים את המשימה לנכס דיגיטלי כמו אתר, דומיין או מערכת.",
  "ממלאים כותרת ברורה, תיאור, סטטוס ותאריך יעד.",
  "מוסיפים זמן עבודה, הערכת שעות או עלות אם המשימה קשורה להתחשבנות.",
  "שומרים את המשימה וממשיכים לעקוב אחריה עד לסגירה.",
];

const tips = [
  "כותרת משימה צריכה להיות פעולה ברורה, לא משפט כללי.",
  "כדאי לשייך משימה לנכס כדי להבין באיזה אתר, דומיין או מערכת מדובר.",
  "משימות עם זמן ועלויות עוזרות להבין רווחיות והתחשבנות מול לקוח.",
];

export default function AddTaskTutorialPage() {
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
          <span className="cchub-trial-badge-strong">מדריך בסיסי · 4 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך מוסיפים משימה ללקוח ב-CCHUB</h1>
          <p className="cchub-text mt-5">
            משימה טובה לא עומדת לבד. היא מחוברת ללקוח, לנכס הרלוונטי, לתאריך,
            לסטטוס ולתיעוד שמסביר מה צריך לעשות.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
          <article className="cchub-card p-8">
            <h2 className="text-3xl font-black">שלבי הוספת משימה</h2>
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
              <h2 className="text-2xl font-black">למי זה מתאים?</h2>
              <p className="mt-3 leading-8 text-slate-600">
                לכל מי שמנהל עבודה שוטפת מול לקוחות ורוצה לדעת מה פתוח, מי אחראי,
                לאיזה לקוח זה שייך ומה העלות או הזמן שהושקעו.
              </p>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">טיפים לניהול נכון</h2>
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
          <h2 className="text-3xl font-black">משימה אחת מסודרת חוסכת הרבה חיפוש</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            כשהמשימה מחוברת ללקוח, לנכס ולתיעוד — הרבה יותר קל להבין מה קורה ומה צריך לעשות.
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
