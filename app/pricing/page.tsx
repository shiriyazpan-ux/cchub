import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מחירים | חבילות CCHUB לניהול לקוחות ומשימות",
  description:
    "חבילות CCHUB לפי יכולות: Solo Pro ב־99₪, Premium ב־199₪ ו־Enterprise ב־399₪ לחודש כולל מע״מ, עם 14 ימי ניסיון חינם.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "מחירים | CCHUB",
    description:
      "בחרו חבילת CCHUB שמתאימה לעסק: Solo Pro, Premium או Enterprise, עם פירוט מדויק של היכולות בכל חבילה.",
    url: "https://cchub-dusky.vercel.app/pricing",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
};

const plans = [
  {
    name: "Solo Pro",
    className: "basic",
    badge: "👤",
    tag: "לעסק בתחילת הדרך",
    label: "14 ימי ניסיון חינם",
    price: "99₪",
    priceText: "לחודש",
    yearlyPrice: "990₪ לשנה",
    description: "לעסק שרוצה להתחיל לעבוד מסודר בלי מערכת כבדה.",
    clients: "עד 200 לקוחות",
    users: "משתמש אחד",
    cta: "התחילו Solo Pro",
    signupUrl: "https://mycchub.app/register?plan=solo-pro&billing=month",
    yearlySignupUrl: "https://mycchub.app/register?plan=solo-pro&billing=year",
    features: [
      "עד 200 לקוחות",
      "ייבוא Excel",
      "ניהול לקוחות, משימות ונכסים",
      "אנשי קשר",
      "גיבויים אוטומטיים",
      "היסטוריית פעולות",
      "דשבורד מלא",
    ],
    notIncluded: [
      "ייצוא אקסל",
      "לידים",
      "מסמכים ומרכז ידע",
      "Make / Zapier",
      "משתמשים וצוותים",
      "הרשאות מתקדמות",
    ],
  },
  {
    name: "Premium",
    className: "pro",
    badge: "👑",
    tag: "הכי מומלץ",
    label: "הכי מומלץ · 14 ימי ניסיון חינם",
    price: "199₪",
    priceText: "לחודש",
    yearlyPrice: "1,990₪ לשנה",
    description:
      "לעסק שרוצה תמונה מלאה של לקוחות, נכסים, משימות, ידע ואוטומציות.",
    clients: "עד 1,000 לקוחות",
    users: "משתמש אחד",
    cta: "התחילו Premium",
    signupUrl: "https://mycchub.app/register?plan=premium&billing=month",
    yearlySignupUrl: "https://mycchub.app/register?plan=premium&billing=year",
    features: [
      "עד 1,000 לקוחות",
      "כל היכולות של Solo Pro",
      "לידים, מסמכים ומרכז ידע",
      "אינטגרציות Make / Zapier",
      "דוחות ותובנות מתקדמות",
      "תגיות מותאמות אישית",
      "ייבוא וייצוא Excel",
      "תמיכה בעדיפות",
    ],
    notIncluded: [
      "משתמשים וצוותים",
      "הרשאות יבוא / יצוא לפי משתמש",
      "הרשאות אינטגרציות לפי משתמש",
    ],
  },
  {
    name: "Enterprise",
    className: "business",
    badge: "🏢",
    tag: "לצוותים ועסקים מתקדמים",
    label: "14 ימי ניסיון חינם",
    price: "399₪",
    priceText: "לחודש",
    yearlyPrice: "3,990₪ לשנה",
    description:
      "לעסקים וצוותים שצריכים עבודה משותפת, הרשאות מתקדמות ואינטגרציות.",
    clients: "עד 5,000 לקוחות",
    users: "משתמשים וצוותים",
    cta: "התחילו Enterprise",
    signupUrl: "https://mycchub.app/register?plan=enterprise&billing=month",
    yearlySignupUrl: "https://mycchub.app/register?plan=enterprise&billing=year",
    features: [
      "עד 5,000 לקוחות",
      "כל היכולות של Premium",
      "גישות וסיסמאות מוצפנות",
      "משתמשים וצוותים",
      "הרשאות מתקדמות",
      "הרשאות יבוא / יצוא לפי משתמש",
      "הרשאות אינטגרציות לפי משתמש",
      "התראות ומעקב אחר מועדי יעד",
      "תמיכה ייעודית",
    ],
    notIncluded: [],
  },
];

const comparisonRows = [
  {
    label: "מחיר חודשי",
    basic: "99₪",
    pro: "199₪",
    business: "399₪",
  },
  {
    label: "מחיר שנתי",
    basic: "990₪",
    pro: "1,990₪",
    business: "3,990₪",
  },
  {
    label: "כמות לקוחות",
    basic: "עד 200",
    pro: "עד 1,000",
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
    basic: "—",
    pro: "מסמכים וידע",
    business: "מסמכים, ידע וסיסמאות",
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
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "אנשי קשר",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "לידים",
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
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    label: "דוחות מתקדמים ותגיות",
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
    q: "האם יש 14 ימי ניסיון חינם?",
    a: "כן. כל החבילות מתחילות ב־14 ימי ניסיון חינם. נדרש אמצעי תשלום, והחיוב בתקופת הניסיון הוא 0 ₪. אם לא מבטלים לפני הסיום, המנוי מתחדש אוטומטית במסלול שנבחר.",
  },
  {
    q: "האם Solo Pro כולל ייצוא אקסל?",
    a: "לא. Solo Pro כוללת יבוא מאקסל, וייצוא אקסל קיים בחבילות Premium ו־Enterprise.",
  },
  {
    q: "למי מתאימה חבילת Premium?",
    a: "Premium מתאימה לעסק שרוצה לנהל עד 1,000 לקוחות ולהוסיף ל-Solo Pro לידים, מסמכים, מרכז ידע, ייצוא Excel, דוחות ואינטגרציות.",
  },
  {
    q: "מתי צריך Enterprise?",
    a: "Enterprise מתאימה כשצריך עד 5,000 לקוחות, משתמשים וצוותים, הרשאות מתקדמות, הרשאות יבוא/יצוא לפי משתמש והרשאות אינטגרציות.",
  },
];

export default function PricingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />

        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">14 ימי ניסיון חינם</span>

          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">
            חבילות CCHUB לניהול לקוחות, משימות ומידע עסקי
          </h1>

          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            בחרו את החבילה שמתאימה לשלב שבו העסק נמצא: התחלה מסודרת עם Solo Pro,
            ניהול מלא עם Premium, או עבודה בצוות עם הרשאות מתקדמות ב־Enterprise.
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

                <p className="mt-2 text-sm font-black text-blue-700">
                  או {plan.yearlyPrice}
                </p>

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
                <a className="cchub-button-primary" href={plan.signupUrl}>
                  {plan.cta}
                </a>
                <a className="cchub-button-secondary" href={plan.yearlySignupUrl}>
                  הרשמה שנתית
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
              <div className="p-4">Solo Pro</div>
              <div className="p-4">Premium</div>
              <div className="p-4">Enterprise</div>
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
              Solo Pro מתאימה להתחלה מסודרת עד 200 לקוחות. Premium מתאימה לעסק שרוצה עד
              1,000 לקוחות, נכסים, לידים, ייצוא ואוטומציות. Enterprise מתאימה לעבודה
              בצוות ועד 5,000 לקוחות עם הרשאות מתקדמות.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "רוצים להתחיל לנהל עד 200 לקוחות? Solo Pro.",
                "צריכים עד 1,000 לקוחות, נכסים, לידים, ייצוא ואינטגרציות? Premium.",
                "יש צוות, הרשאות מתקדמות ועד 5,000 לקוחות? Enterprise.",
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
            מתחילים ב־14 ימי ניסיון חינם
          </span>

          <h2 className="mt-4 text-3xl font-black">
            אפשר להתחיל קטן ולהתקדם כשצריך
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            התחילו עם החבילה שמתאימה לכם עכשיו. נדרש אמצעי תשלום; החיוב בתקופת
            הניסיון הוא 0 ₪, ולאחריה המנוי מתחדש אוטומטית אם לא בוטל.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="https://mycchub.app/register">
              התחילו ניסיון חינם
            </a>
            <a className="cchub-button-dark" href="/features">
              חזרה ליכולות
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
