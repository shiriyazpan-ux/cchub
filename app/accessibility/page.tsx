import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | CCHUB",
  description: "הצהרת הנגישות של אתר ומערכת CCHUB ודרכי פנייה בנושא נגישות.",
  alternates: { canonical: "/accessibility" },
};

const accessibilityFeatures = [
  "מבנה כותרות ורכיבי ניווט סמנטיים ככל האפשר.",
  "אפשרות ניווט באמצעות מקלדת ברכיבים המרכזיים.",
  "ניגודיות צבעים, טקסט ברור והתאמה למסכים בגדלים שונים.",
  "כיווניות RTL בעברית ו-LTR באנגלית והגדרת שפת העמוד.",
  "טקסט חלופי לתמונות תוכן ושמות נגישים לקישורים ולכפתורים.",
];

export default function AccessibilityPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />
        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">עודכן: 2 באוקטובר 2026</span>
          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">הצהרת נגישות</h1>
          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            CCHUB פועלת כדי לאפשר שימוש נוח ונגיש באתר ובמערכת למגוון רחב של משתמשים.
          </p>
        </div>
      </section>

      <section className="cchub-container py-14">
        <div className="mx-auto grid max-w-5xl gap-5">
          <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">המחויבות שלנו</h2>
            <p className="mt-4 leading-9 text-slate-600">
              אנו משפרים את הנגישות באופן שוטף ושואפים להתאים את הממשקים לעקרונות
              תקן ישראלי 5568 ולהנחיות WCAG 2.1 ברמה AA, ככל שהן חלות ומתאימות
              לאופי השירות. מאחר שהשירות מתפתח, ייתכנו רכיבים שטרם הונגשו במלואם.
            </p>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">התאמות שבוצעו</h2>
            <div className="mt-5 grid gap-3">
              {accessibilityFeatures.map((feature) => (
                <div key={feature} className="price-row">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text">{feature}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">שירותים חיצוניים ומגבלות</h2>
            <p className="mt-4 leading-9 text-slate-600">
              חלק מהפעולות נעשות בממשקים של צדדים שלישיים, כגון Paddle לתשלום
              ושירותי Google או כלי אוטומציה כאשר המשתמש מחבר אותם. רמת הנגישות
              בממשקים אלה נמצאת באחריות מפעיל השירות החיצוני. אם נתקלתם במחסום
              באתר או במערכת, נשמח לקבל תיאור של העמוד, הפעולה והטכנולוגיה המסייעת שבה השתמשתם.
            </p>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">יצירת קשר בנושא נגישות</h2>
            <p className="mt-4 leading-9 text-slate-600">
              ניתן לפנות אלינו בכתובת
              {" "}
              <a className="font-bold text-blue-700 underline" href="mailto:support@mycchub.app">
                support@mycchub.app
              </a>
              . נבדוק את הפנייה ונעשה מאמץ לספק מענה או חלופה נגישה בזמן סביר.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
