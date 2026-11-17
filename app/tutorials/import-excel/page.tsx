import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "../../lib/seo";

export const metadata: Metadata = {
  title: "איך מייבאים לקוחות מאקסל ל-CCHUB | מדריך",
  description:
    "מדריך לייבוא לקוחות מאקסל ל-CCHUB: הכנת הקובץ, התאמת עמודות, בדיקה לפני טעינה ותחילת עבודה מסודרת.",
  alternates: { canonical: "/tutorials/import-excel" },
  openGraph: {
    title: "איך מייבאים לקוחות מאקסל ל-CCHUB | מדריך | CCHUB",
    description: "מדריך לייבוא לקוחות מאקסל ל-CCHUB: הכנת הקובץ, התאמת עמודות, בדיקה לפני טעינה ותחילת עבודה מסודרת.",
    url: `${SITE_URL}/tutorials/import-excel`,
    siteName: "CCHUB",
    locale: "he_IL",
    type: "article",
    images: [OG_IMAGE],
  },
};

const steps = [
  "מכינים קובץ אקסל נקי עם לקוחות בלבד וללא שורות מיותרות.",
  "מוודאים שיש עמודות בסיסיות כמו שם לקוח, איש קשר, טלפון ומייל.",
  "נכנסים למסך הלקוחות ולוחצים על ייבוא מאקסל.",
  "בודקים התאמה בין עמודות האקסל לשדות במערכת.",
  "מאשרים טעינה ובודקים כמה לקוחות נקלטו בהצלחה.",
  "פותחים כמה לקוחות לדוגמה ומוודאים שהמידע נכנס למקום הנכון.",
];

const tips = [
  "לפני ייבוא, כדאי לגבות את הקובץ המקורי.",
  "לא להכניס לקובץ לקוחות כפולים אם אין צורך.",
  "עמודות שלא בטוחים לגביהן עדיף לשמור כהערות ולא למחוק מידע חשוב.",
];

export default function ImportExcelTutorialPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="cchub-container py-16">
        <div className="max-w-4xl text-right">
          <span className="cchub-trial-badge-strong">מדריך בסיסי · 4 דקות</span>
          <h1 className="cchub-title-xl mt-5">איך מייבאים לקוחות מאקסל ל-CCHUB</h1>
          <p className="cchub-text mt-5">
            ייבוא מאקסל מאפשר להתחיל לעבוד מהר עם מידע קיים, בלי להזין ידנית
            לקוחות שכבר קיימים אצלכם בקבצים.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
          <article className="cchub-card p-8">
            <h2 className="text-3xl font-black">שלבי הייבוא</h2>
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
              <h2 className="text-2xl font-black">למי זה מתאים?</h2>
              <p className="mt-3 leading-8 text-slate-600">
                לעסק שכבר מחזיק רשימת לקוחות באקסל ורוצה להעביר אותה למערכת
                מסודרת עם משימות ומידע נוסף בהתאם לחבילה.
              </p>
            </div>

            <div className="cchub-card p-6">
              <h2 className="text-2xl font-black">טיפים לפני טעינה</h2>
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
          <h2 className="text-3xl font-black">אחרי הייבוא: בדקו תיק לקוח אחד לעומק</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            פתחו לקוח לדוגמה, בדקו שהנתונים נכונים, ואז התחילו להוסיף משימות ומסמכים.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/tutorials/add-task">למדריך הוספת משימה</a>
            <a className="cchub-button-dark" href="/pricing">14 ימי ניסיון חינם</a>
          </div>
        </div>
      </section>
    </main>
  );
}
