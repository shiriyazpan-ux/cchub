import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מחירים | חבילות CCHUB לניהול לקוחות ומשימות",
  description:
    "חבילות CCHUB לניהול לקוחות, משימות, מסמכים, סיסמאות, ידע ונכסים דיגיטליים. Basic ב-199₪, Pro ב-499₪ ו-Business ב-999₪ לחודש כולל מע״מ, עם 7 ימי ניסיון חינם.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "מחירים | CCHUB",
    description:
      "בחרו חבילת CCHUB שמתאימה לעסק: Basic, Pro או Business לניהול לקוחות, משימות, מסמכים, סיסמאות, ידע, אוטומציות והרשאות.",
    url: "https://www.mycchub.app/pricing",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const plans = [
  {
    name: "Solo Basic",
    className: "basic",
    badge: "👤",
    tag: "לעסק בתחילת הדרך",
    label: "7 ימי ניסיון חינם",
    price: "199₪",
    priceText: "לחודש",
    description: "לעסק שרוצה להתחיל לעבוד מסודר בלי מערכת כבדה.",
    clients: "עד 50 לקוחות",
    users: "משתמש אחד",
    cta: "התחילו Basic",
    features: [
      "עד 50 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "יבוא מאקסל",
    ],
    notIncluded: [
      "ייצוא אקסל",
      "נכסים דיגיטליים",
      "לידים",
      "Make / Zapier",
      "משתמשים וצוותים",
      "הרשאות מתקדמות",
    ],
  },
  {
    name: "Solo Pro",
    className: "pro",
    badge: "👑",
    tag: "הכי מומלץ",
    label: "הכי מומלץ · 7 ימי ניסיון חינם",
    price: "499₪",
    priceText: "לחודש",
    description:
      "לעסק שרוצה תמונה מלאה של לקוחות, נכסים, משימות, ידע ואוטומציות.",
    clients: "עד 500 לקוחות",
    users: "משתמש אחד",
    cta: "התחילו Pro",
    features: [
      "עד 500 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "נכסים דיגיטליים",
      "לידים ולקוחות ממתינים",
      "אנשי קשר",
      "יבוא מאקסל",
      "ייצוא אקסל",
      "אינטגרציה Make / Zapier",
      "גיבויים",
      "פעילות מערכת",
      "תמונה כללית מלאה",
    ],
    notIncluded: [
      "משתמשים וצוותים",
      "הרשאות יבוא / יצוא לפי משתמש",
      "הרשאות אינטגרציות לפי משתמש",
    ],
  },
  {
    name: "Business",
    className: "business",
    badge: "🏢",
    tag: "לצוותים ועסקים מתקדמים",
    label: "7 ימי ניסיון חינם",
    price: "999₪",
    priceText: "לחודש",
    description:
      "לעסקים וצוותים שצריכים עבודה משותפת, הרשאות מתקדמות ואינטגרציות.",
    clients: "עד 5,000 לקוחות",
    users: "משתמשים וצוותים",
    cta: "התחילו Business",
    features: [
      "עד 5,000 לקוחות",
      "ניהול לקוחות",
      "ניהול משימות",
      "ניהול מסמכים",
      "ניהול סיסמאות",
      "מרכז ידע",
      "נכסים דיגיטליים",
      "לידים",
      "גיבויים",
      "יבוא מאקסל",
      "ייצוא אקסל",
      "אינטגרציה Make / Zapier",
      "משתמשים וצוותים",
      "הרשאות מתקדמות",
      "הרשאות יבוא / יצוא לפי משתמש",
      "הרשאות אינטגרציות לפי משתמש",
    ],
    notIncluded: [],
  },
];

const comparisonRows = [
  {
    label: "מחיר חודשי",
    basic: "199₪",
    pro: "499₪",
    business: "999₪",
  },
  {
    label: "כמות לקוחות",
    basic: "עד 50",
    pro: "עד 500",
    business: "עד 5,000",
  },
  {
    label: "משתמשים",
    basic: "משתמש אחד",
    pro: "משתמש אחד",
    business: "משתמשים וצוותים",
  },
  {
    label: "ניהול לקוחות",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "ניהול משימות",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "מסמכים, סיסמאות וידע",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "יבוא מאקסל",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "ייצוא אקסל",
    basic: "—",
    pro: "✓",
    business: "✓",
  },
  {
    label: "נכסים דיגיטליים",
    basic: "—",
    pro: "✓",
    business: "✓",
  },
  {
    label: "לידים ואנשי קשר",
    basic: "—",
    pro: "✓",
    business: "✓",
  },
  {
    label: "Make / Zapier",
    basic: "—",
    pro: "✓",
    business: "✓",
  },
  {
    label: "גיבויים ופעילות מערכת",
    basic: "—",
    pro: "✓",
    business: "✓",
  },
  {
    label: "הרשאות מתקדמות",
    basic: "—",
    pro: "—",
    business: "✓",
  },
];

const faqs = [
  {
    q: "האם יש 7 ימי ניסיון חינם?",
    a: "כן. כל החבילות מתחילות ב־7 ימי ניסיון חינם כדי שתוכלו לבדוק את המערכת לפני התחייבות.",
  },
  {
    q: "האם Basic כולל ייצוא אקסל?",
    a: "לא. Basic כולל יבוא מאקסל, אבל ייצוא אקסל קיים בחבילות Solo Pro ו-Business.",
  },
  {
    q: "למי מתאימה חבילת Solo Pro?",
    a: "Solo Pro מתאימה לעסק שרוצה לנהל עד 500 לקוחות, נכסים דיגיטליים, לידים, אנשי קשר, גיבויים, פעילות מערכת ואינטגרציות.",
  },
  {
    q: "מתי צריך Business?",
    a: "Business מתאימה כשצריך עד 5,000 לקוחות, משתמשים וצוותים, הרשאות מתקדמות, הרשאות יבוא/יצוא לפי משתמש והרשאות אינטגרציות.",
  },
];

export default function PricingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="cchub-container cchub-header flex items-center justify-between">
          <a href="/" className="cchub-brand" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img
                src="/cchub-logo.png"
                alt="CCHUB - Customer Control Hub"
                className="cchub-logo"
              />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
            <a className="cchub-nav-link" href="/">עמוד הבית</a>
            <a className="cchub-nav-link" href="/features">יכולות המערכת</a>
            <a className="cchub-nav-link" href="/tutorials">טוטריאלים</a>
            <a className="cchub-nav-link" href="/articles">מאמרים</a>
            <a className="cchub-nav-link active" href="/pricing">מחירים</a>
            <a className="cchub-nav-link" href="/faq">שאלות נפוצות</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="cchub-button-primary" href="/pricing">7 ימי ניסיון חינם</a>
            <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">
              כניסה למערכת
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">7 ימי ניסיון חינם</span>

          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            חבילות CCHUB לניהול לקוחות, משימות, מסמכים וסיסמאות
          </h1>

          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            בחרו את החבילה שמתאימה לשלב שבו העסק נמצא: התחלה מסודרת עם Basic,
            ניהול מלא עם Solo Pro, או עבודה בצוות עם הרשאות מתקדמות ב-Business.
          </p>
        </div>
      </section>

      <section className="cchub-container py-14">
        <div className="pricing-grid mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`price-card ${plan.className}`}
            >
              <div
                className={`price-label ${
                  plan.className === "pro" ? "pro-label" : ""
                }`}
              >
                {plan.label}
              </div>

              <div className="price-head">
                <div className="text-4xl">{plan.badge}</div>
                <p className="mt-2 text-sm font-black text-blue-600">{plan.tag}</p>

                <h2 className="font-en mt-2 text-3xl font-black text-[#061A44]">
                  {plan.name}
                </h2>

                <div className="mt-4 flex items-end justify-center gap-2">
                  <span className="font-en text-5xl font-black text-[#061A44]">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm font-black text-slate-500">
                    {plan.priceText}
                  </span>
                </div>

                <p className="mt-3 min-h-[58px] text-sm font-bold leading-7 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="text-xs font-black text-slate-400">לקוחות</div>
                    <div className="mt-1 font-black text-blue-700">{plan.clients}</div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="text-xs font-black text-slate-400">משתמשים</div>
                    <div className="mt-1 font-black text-blue-700">{plan.users}</div>
                  </div>
                </div>
              </div>

              <div className="price-body">
                <div className="price-list">
                  {plan.features.map((item) => (
                    <div key={item} className="price-row">
                      <span className="price-row-mark">✓</span>
                      <span className="price-row-text">{item}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-right text-sm font-bold text-slate-400">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        —
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="price-actions">
                <a className="cchub-button-primary" href="/login">
                  {plan.cta}
                </a>
                <a className="cchub-button-secondary" href="/features">
                  צפייה ביכולות
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="cchub-container cchub-section">
          <div className="text-center">
            <p className="text-sm font-black text-blue-600">השוואת חבילות</p>
            <h2 className="cchub-title-lg mt-2">
              מה כלול בכל חבילה?
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-blue-100 bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-[#061A44] text-center text-sm font-black text-white">
              <div className="p-4 text-right">יכולת</div>
              <div className="p-4">Solo Basic</div>
              <div className="p-4">Solo Pro</div>
              <div className="p-4">Business</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 items-center border-t border-blue-50 text-center text-sm font-bold ${
                  index % 2 === 0 ? "bg-blue-50/40" : "bg-white"
                }`}
              >
                <div className="p-4 text-right font-black text-[#071B4D]">
                  {row.label}
                </div>
                <div className="p-4 text-slate-600">{row.basic}</div>
                <div className="p-4 text-blue-700">{row.pro}</div>
                <div className="p-4 text-blue-700">{row.business}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cchub-card p-7">
            <p className="text-sm font-black text-blue-600">איך לבחור?</p>
            <h2 className="mt-2 text-3xl font-black">
              התחילו לפי רמת הסדר שאתם צריכים עכשיו
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Basic מתאים להתחלה מסודרת עד 50 לקוחות. Pro מתאים לעסק שרוצה עד
              500 לקוחות, נכסים, לידים, ייצוא ואוטומציות. Business מתאים לעבודה
              בצוות ועד 5,000 לקוחות עם הרשאות מתקדמות.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "רוצים להתחיל לנהל עד 50 לקוחות? Basic.",
                "צריכים עד 500 לקוחות, נכסים, לידים, ייצוא ואינטגרציות? Pro.",
                "יש צוות, הרשאות מתקדמות ועד 5,000 לקוחות? Business.",
              ].map((item) => (
                <div key={item} className="price-row rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <span className="price-row-mark">✓</span>
                  <span className="price-row-text font-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cchub-container cchub-section-tight">
        <div className="rounded-[30px] bg-[#061A44] px-8 py-9 text-center text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
            מתחילים ב־7 ימי ניסיון חינם
          </span>

          <h2 className="mt-4 text-3xl font-black">
            אפשר להתחיל קטן ולהתקדם כשצריך
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו עם החבילה שמתאימה לכם עכשיו, ותנו למערכת לגדול יחד עם העסק.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/login">
              התחילו ניסיון חינם
            </a>
            <a className="cchub-button-dark" href="/features">
              חזרה ליכולות
            </a>
          </div>
        </div>
      </section>

      <footer className="cchub-footer">
        <div className="cchub-container flex flex-col items-center justify-between gap-4 text-sm text-blue-100 md:flex-row">
          <div className="font-en font-bold">© 2026 CCHUB</div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="/terms">תנאי שימוש</a>
            <a href="/privacy">מדיניות פרטיות</a>
            <a href="/faq">שאלות נפוצות</a>
            <a href="/features">יכולות המערכת</a>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
