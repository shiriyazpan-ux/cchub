import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "איך מוסיפים לקוח חדש ב-CCHUB | מדריך",
  description:
    "מדריך קצר להוספת לקוח חדש ב-CCHUB: פתיחת תיק לקוח, הוספת פרטים, שיוך משימות, מסמכים, סיסמאות ונכסים דיגיטליים.",
  alternates: { canonical: "/tutorials/add-client" },
};

const steps = [
  "נכנסים לעמוד הלקוחות מתוך התפריט הראשי.",
  "לוחצים על כפתור הוספת לקוח חדש.",
  "ממלאים שם לקוח, איש קשר, טלפון, מייל וכל פרט בסיסי שחשוב לכם.",
  "שומרים את הלקוח ומוודאים שנפתח תיק לקוח מסודר.",
  "מתוך תיק הלקוח מוסיפים משימה ראשונה, מסמך, סיסמה או נכס דיגיטלי.",
];

const tips = [
  "כדאי להשתמש בשם לקוח ברור וקבוע, כדי שיהיה קל למצוא אותו בחיפוש.",
  "אם יש כמה אנשי קשר אצל אותו לקוח, שמרו אותם בצורה מסודרת ולא בתוך הערות חופשיות בלבד.",
  "אל תעמיסו מידע מיותר בהתחלה. התחילו בפרטים החשובים והשלימו בהמשך.",
];

export default function AddClientTutorialPage() {
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
          <h1 className="cchub-title-xl mt-5">איך מוסיפים לקוח חדש ב-CCHUB</h1>
          <p className="cchub-text mt-5">
            לקוח הוא הבסיס של המערכת. אחרי שפותחים תיק לקוח, אפשר לחבר אליו
            משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע.
          </p>
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
              <h2 className="text-2xl font-black">למי זה מתאים?</h2>
              <p className="mt-3 leading-8 text-slate-600">
                לכל עסק שרוצה לנהל לקוחות קבועים בצורה מסודרת ולא לאבד מידע
                בין מיילים, וואטסאפ ואקסלים.
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
          <h2 className="text-3xl font-black">השלב הבא: להוסיף משימה ללקוח</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            אחרי שיש תיק לקוח, אפשר להתחיל לנהל את העבודה עצמה.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/tutorials/add-task">למדריך הוספת משימה</a>
            <a className="cchub-button-dark" href="/pricing">7 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
