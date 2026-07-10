import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | CCHUB",
  description:
    "מדיניות הפרטיות של CCHUB: מידע על איסוף, שימוש, שמירה ואבטחת מידע במערכת לניהול לקוחות, משימות, מסמכים וסיסמאות.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "כללי",
    text:
      "מדיניות פרטיות זו נועדה להסביר באופן ברור איך CCHUB מתייחסת למידע שנמסר או נשמר במסגרת השימוש באתר ובמערכת. הנוסח מיועד לעמוד תדמיתי וצריך לעבור התאמה משפטית לפני פרסום סופי.",
  },
  {
    title: "איזה מידע עשוי להיאסף?",
    text:
      "המידע עשוי לכלול פרטי יצירת קשר, פרטי משתמש, פרטי לקוחות שהוזנו למערכת, משימות, מסמכים, נכסים דיגיטליים, סיסמאות ונתונים תפעוליים נוספים שהמשתמש בוחר להזין.",
  },
  {
    title: "שימוש במידע",
    text:
      "המידע משמש להפעלת השירות, ניהול חשבון המשתמש, הצגת נתונים במערכת, מתן תמיכה, שיפור חוויית השימוש ושמירה על אבטחת המערכת.",
  },
  {
    title: "שמירה ואבטחת מידע",
    text:
      "CCHUB נבנית כמערכת שמיועדת לשמור מידע עסקי רגיש בצורה מסודרת ומבוקרת, כולל שימוש בהרשאות, גיבויים ואמצעי אבטחה לפי אופי השירות והחבילה.",
  },
  {
    title: "שיתוף מידע עם צדדים שלישיים",
    text:
      "מידע לא יימסר לצדדים שלישיים לצורך מסחרי ללא הסכמה, למעט כאשר הדבר נדרש להפעלת השירות, עמידה בדרישות חוק, אבטחה, תשלומים, אחסון או אינטגרציות שהמשתמש בחר להפעיל.",
  },
  {
    title: "אינטגרציות ואוטומציות",
    text:
      "בחבילות הכוללות Make, Zapier או כל אינטגרציה אחרת, ייתכן שמידע יעבור בין מערכות בהתאם להגדרות שהמשתמש בחר. האחריות להגדרת תרחישים נכונה ומבוקרת היא חלק מהשימוש התקין במערכת.",
  },
  {
    title: "זכויות משתמשים",
    text:
      "משתמש רשאי לבקש לעיין במידע, לתקן מידע, למחוק מידע או לקבל הסבר על השימוש במידע, בכפוף למגבלות השירות, דרישות אבטחה, התחייבויות חוקיות ושיקולים תפעוליים.",
  },
  {
    title: "עדכון המדיניות",
    text:
      "מדיניות זו עשויה להתעדכן מעת לעת. מומלץ לבדוק את העמוד מדי פעם כדי להתעדכן בשינויים.",
  },
];

export default function PrivacyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />
        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">מסמך משפטי</span>
          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">מדיניות פרטיות</h1>
          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            עמוד זה מרכז את עקרונות הפרטיות של CCHUB בנוגע למידע עסקי,
            לקוחות, משימות, מסמכים, סיסמאות ואינטגרציות.
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
