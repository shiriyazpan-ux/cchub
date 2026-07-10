import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שאלות נפוצות | CCHUB",
  description:
    "שאלות נפוצות על CCHUB: מערכת לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים, יבוא מאקסל, ייצוא אקסל, Make, Zapier, הרשאות ו-7 ימי ניסיון חינם.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "שאלות נפוצות | CCHUB",
    description:
      "כל מה שצריך לדעת על CCHUB לפני שמתחילים: חבילות, ניסיון חינם, יבוא מאקסל, הרשאות, אינטגרציות וניהול לקוחות.",
    url: "https://www.mycchub.app/faq",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const faqGroups = [
  {
    title: "כללי",
    icon: "💡",
    questions: [
      {
        q: "מה זה CCHUB?",
        a: "CCHUB היא מערכת לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע במקום אחד. היא נבנתה לעסקים שמנהלים לקוחות לאורך זמן ורוצים להפסיק לחפש מידע בין וואטסאפ, מיילים, דרייבים ואקסלים.",
      },
      {
        q: "האם CCHUB היא CRM?",
        a: "CCHUB יכולה לשמש כחלופה או השלמה ל-CRM, אבל היא לא מתמקדת רק במכירות. היא מתמקדת בניהול העבודה סביב הלקוח אחרי שהלקוח כבר קיים: משימות, מסמכים, גישות, נכסים, ידע, זמן ועלויות.",
      },
      {
        q: "למי המערכת מתאימה?",
        a: "המערכת מתאימה לנותני שירותים, סוכנויות קטנות, מנהלי שיווק, יועצים, פרילנסרים מתקדמים ועסקים שמנהלים לקוחות קבועים ורוצים סדר, שליטה ותיעוד.",
      },
      {
        q: "האם המערכת בעברית?",
        a: "כן. CCHUB נבנית עם תמיכה בעברית ובאנגלית, כולל התאמה לכיוון כתיבה RTL בעברית ו-LTR באנגלית.",
      },
    ],
  },
  {
    title: "חבילות ומחירים",
    icon: "💳",
    questions: [
      {
        q: "האם יש 7 ימי ניסיון חינם?",
        a: "כן. כל החבילות מתחילות ב-7 ימי ניסיון חינם כדי שתוכלו לבדוק את המערכת לפני התחייבות.",
      },
      {
        q: "מה ההבדל בין Basic, Pro ו-Business?",
        a: "Basic מתאים להתחלה מסודרת עד 50 לקוחות. Pro מתאים לניהול מלא עד 500 לקוחות, כולל נכסים דיגיטליים, לידים, ייצוא ואינטגרציות. Business מתאים לעבודה בצוות עד 5,000 לקוחות, כולל הרשאות מתקדמות.",
      },
      {
        q: "כמה עולה כל חבילה?",
        a: "Solo Basic עולה 49$ לחודש, Solo Pro עולה 149$ לחודש, ו-Business עולה 299$ לחודש.",
      },
      {
        q: "אפשר להתחיל בחבילה קטנה ולעבור לחבילה גדולה יותר?",
        a: "כן. הרעיון הוא לאפשר לעסק להתחיל מסודר ולהתקדם לחבילה רחבה יותר כשהצרכים גדלים.",
      },
    ],
  },
  {
    title: "יבוא, ייצוא ואינטגרציות",
    icon: "🔗",
    questions: [
      {
        q: "האם אפשר לייבא נתונים מאקסל?",
        a: "כן. יבוא מאקסל קיים גם ב-Basic וגם בחבילות המתקדמות, כדי לאפשר התחלה מהירה בלי להזין הכול ידנית.",
      },
      {
        q: "האם Basic כולל ייצוא אקסל?",
        a: "לא. Basic כולל יבוא מאקסל בלבד. ייצוא אקסל קיים בחבילות Solo Pro ו-Business.",
      },
      {
        q: "האם יש חיבור ל-Make או Zapier?",
        a: "כן. אינטגרציה ל-Make / Zapier קיימת בחבילות המתאימות, כדי לחבר את CCHUB לתהליכים אוטומטיים וכלים חיצוניים.",
      },
      {
        q: "האם אפשר לשלוט מי רשאי לייבא או לייצא נתונים?",
        a: "בחבילת Business ניתן לעבוד עם הרשאות מתקדמות, כולל הרשאות יבוא / יצוא והרשאות אינטגרציות לפי משתמש.",
      },
    ],
  },
  {
    title: "ניהול עבודה יומיומית",
    icon: "✅",
    questions: [
      {
        q: "איך CCHUB עוזרת בניהול משימות?",
        a: "המערכת מאפשרת לנהל משימות לפי לקוח ונכס, עם סטטוסים, תאריכים, תיעוד, זמן עבודה ועלויות. כך כל משימה נשמרת בהקשר הנכון.",
      },
      {
        q: "האם אפשר לעקוב אחרי זמן ועלויות?",
        a: "כן. המשימות יכולות לכלול זמן עבודה, הערכת שעות ועלויות, כך שניתן להבין טוב יותר כמה זמן הושקע ומה הבסיס להתחשבנות.",
      },
      {
        q: "האם אפשר לשמור סיסמאות במערכת?",
        a: "כן. CCHUB כוללת ניהול סיסמאות וגישות בצורה מסודרת לפי לקוח ונכס, כדי להפחית תלות בצ׳אטים, פתקים והודעות ישנות.",
      },
      {
        q: "מה זה נכסים דיגיטליים?",
        a: "נכסים דיגיטליים הם אתרים, דומיינים, מערכות, חשבונות, פלטפורמות וכל נכס שקשור ללקוח. לכל נכס ניתן לשייך משימות, מסמכים, סיסמאות וידע.",
      },
    ],
  },
  {
    title: "התאמה והרשאות",
    icon: "🛡️",
    questions: [
      {
        q: "האם אפשר לשנות שמות ומונחים במערכת?",
        a: "כן. CCHUB מאפשרת להתאים שמות, מילים ומונחים לשפה הפנימית של העסק, כדי שהמערכת תרגיש טבעית לצוות ולמשתמשים.",
      },
      {
        q: "האם יש הרשאות לפי משתמשים?",
        a: "כן. בחבילות המתאימות, ובעיקר ב-Business, ניתן לעבוד עם משתמשים וצוותים והרשאות מתקדמות לפי צורך.",
      },
      {
        q: "האם לקוחות יכולים להיכנס למערכת?",
        a: "הגישה ללקוחות תלויה במבנה החבילה ובהמשך הפיתוח. המערכת מתוכננת לתמוך בהרשאות וסוגי משתמשים שונים לפי צורך עסקי.",
      },
      {
        q: "האם המידע נשמר בצורה מסודרת ובטוחה?",
        a: "המערכת מתוכננת לשמור מידע עסקי רגיש בצורה מסודרת, עם גישה מבוקרת, הרשאות וגיבויים בחבילות המתאימות.",
      },
    ],
  },
];

const quickLinks = [
  { title: "יכולות המערכת", href: "/features", icon: "🧊" },
  { title: "מחירים וחבילות", href: "/pricing", icon: "💳" },
  { title: "טוטריאלים", href: "/tutorials", icon: "🎬" },
  { title: "מאמרים", href: "/articles", icon: "📝" },
];

export default function FAQPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">שאלות נפוצות</span>

          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            כל מה שצריך לדעת לפני שמתחילים לעבוד עם CCHUB
          </h1>

          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            ריכזנו תשובות לשאלות החשובות על ניהול לקוחות, משימות, מסמכים,
            סיסמאות, יבוא מאקסל, ייצוא, אינטגרציות, הרשאות ו-7 ימי ניסיון חינם.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-secondary" href="/features">
              צפייה ביכולות
            </a>
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="grid gap-4 md:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="cchub-mini-card flex items-center justify-center gap-3 p-5 text-center font-black transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="cchub-container pb-14">
        <div className="grid gap-8">
          {faqGroups.map((group) => (
            <section key={group.title} className="cchub-card p-7">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  {group.icon}
                </div>
                <div>
                  <p className="text-sm font-black text-blue-600">FAQ</p>
                  <h2 className="text-3xl font-black">{group.title}</h2>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {group.questions.map((item) => (
                  <article
                    key={item.q}
                    className="rounded-3xl border border-blue-100 bg-blue-50/50 p-6"
                  >
                    <h3 className="text-xl font-black leading-8">{item.q}</h3>
                    <p className="mt-3 leading-8 text-slate-600">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
            7 ימי ניסיון חינם
          </span>

          <h2 className="mt-4 text-3xl font-black">
            נשארה שאלה? הדרך הכי טובה היא להיכנס ולבדוק
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו ניסיון חינם וראו איך CCHUB מרכזת לקוחות, משימות, מסמכים,
            סיסמאות, נכסים וידע במקום אחד.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/pricing">
              התחילו 7 ימי ניסיון חינם
            </a>
            <a className="cchub-button-dark" href="/login">
              כניסה למערכת
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
