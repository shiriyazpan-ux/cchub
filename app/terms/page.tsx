import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש | CCHUB",
  description:
    "תנאי השימוש באתר ובמערכת CCHUB לניהול לקוחות, משימות, מסמכים, סיסמאות, ידע ונכסים דיגיטליים.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "קבלת תנאי השימוש",
    text:
      "השימוש באתר או במערכת CCHUB מהווה הסכמה לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אין להשתמש בשירות.",
  },
  {
    title: "תיאור השירות",
    text:
      "CCHUB היא מערכת לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים, ידע, הרשאות ואינטגרציות בהתאם לחבילה שנבחרה.",
  },
  {
    title: "חשבון משתמש",
    text:
      "המשתמש אחראי לשמור על פרטי ההתחברות שלו, להגדיר משתמשים והרשאות בזהירות, ולוודא שהמידע שמוזן למערכת נכון ומותר לשימוש.",
  },
  {
    title: "תוכן ומידע שהמשתמש מזין",
    text:
      "המשתמש אחראי לכל מידע, קובץ, סיסמה, מסמך או נתון שהוא מזין למערכת. אין להזין מידע שאינכם מורשים לשמור, לעבד או לנהל.",
  },
  {
    title: "שימוש תקין במערכת",
    text:
      "אין להשתמש במערכת לצורך פעילות בלתי חוקית, פגיעה באבטחה, ניסיון חדירה, הפרעה לפעילות השירות או פגיעה במשתמשים אחרים.",
  },
  {
    title: "חבילות, תשלום וניסיון חינם",
    text:
      "המערכת מציעה חבילות שונות, לרבות 7 ימי ניסיון חינם. תנאי המחיר, ההיקפים והיכולות עשויים להשתנות בהתאם לחבילה ולמדיניות החברה.",
  },
  {
    title: "אינטגרציות צד שלישי",
    text:
      "שימוש באינטגרציות כגון Make או Zapier כפוף גם לתנאים של אותם שירותים. המשתמש אחראי לבדוק שהאוטומציות מוגדרות בצורה נכונה ובטוחה.",
  },
  {
    title: "הגבלת אחריות",
    text:
      "השירות ניתן כפי שהוא. CCHUB אינה מתחייבת שהשירות יהיה נטול תקלות בכל עת, ואינה אחראית לנזק עקיף, אובדן נתונים שנגרם משימוש לא נכון או הגדרות שגויות מצד המשתמש.",
  },
  {
    title: "שינויים בתנאים",
    text:
      "CCHUB רשאית לעדכן את תנאי השימוש מעת לעת. המשך שימוש בשירות לאחר עדכון מהווה הסכמה לתנאים המעודכנים.",
  },
];

export default function TermsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB - Customer Control Hub" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
            <a className="cchub-nav-link" href="/">עמוד הבית</a>
            <a className="cchub-nav-link" href="/features">יכולות המערכת</a>
            <a className="cchub-nav-link" href="/tutorials">טוטריאלים</a>
            <a className="cchub-nav-link" href="/articles">מאמרים</a>
            <a className="cchub-nav-link" href="/pricing">מחירים</a>
            <a className="cchub-nav-link" href="/faq">שאלות נפוצות</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="cchub-button-primary" href="/pricing">7 ימי ניסיון חינם</a>
            <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">כניסה למערכת</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />
        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">מסמך משפטי</span>
          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">תנאי שימוש</h1>
          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            תנאי השימוש באתר ובמערכת CCHUB. העמוד מספק בסיס מסודר לפרסום,
            בכפוף לבדיקה משפטית לפני שימוש רשמי.
          </p>
        </div>
      </section>

      <section className="cchub-container py-14">
        <div className="mx-auto grid max-w-5xl gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-4 leading-9 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[30px] bg-blue-50 p-7 text-center">
          <h2 className="text-2xl font-black">הערה חשובה</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-8 text-slate-600">
          </p>
        </div>
      </section>
    </main>
  );
}
