import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "כניסה למערכת | CCHUB",
  description:
    "כניסה למערכת CCHUB לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע.",
  alternates: { canonical: "/login" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">

      <section className="cchub-container flex min-h-[calc(100vh-90px)] items-center justify-center py-16">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[34px] border border-blue-100 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#061A44] p-8 text-white lg:p-10">
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-black text-blue-100">
              CCHUB
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight">
              כניסה למערכת ניהול הלקוחות
            </h1>

            <p className="mt-4 leading-8 text-blue-100">
              כאן תופיע הכניסה למערכת CCHUB. בשלב האתר השיווקי זהו עמוד זמני
              שמונע קישור שבור ומכין את המקום לחיבור המערכת האמיתית.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "ניהול לקוחות, משימות ומסמכים",
                "סיסמאות, נכסים דיגיטליים ומרכז ידע",
                "7 ימי ניסיון חינם דרך עמוד המחירים",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-blue-700">✓</span>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <div className="mx-auto max-w-md">
              <h2 className="text-3xl font-black">התחברות</h2>
              <p className="mt-3 leading-7 text-slate-600">
                טופס ההתחברות יחובר למערכת האמיתית בהמשך. כרגע ניתן להתחיל
                מהחבילות או לחזור לעמוד הבית.
              </p>

              <div className="mt-7 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-black text-slate-600">אימייל</span>
                  <input
                    className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 outline-none"
                    placeholder="name@example.com"
                    type="email"
                    disabled
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-black text-slate-600">סיסמה</span>
                  <input
                    className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4 outline-none"
                    placeholder="••••••••"
                    type="password"
                    disabled
                  />
                </label>

                <button
                  className="cchub-button-primary justify-center opacity-70"
                  disabled
                >
                  התחברות בקרוב
                </button>

                <a className="cchub-button-secondary justify-center" href="/pricing">
                  התחילו 7 ימי ניסיון חינם
                </a>

                <a className="text-center font-black text-blue-700" href="/">
                  חזרה לעמוד הבית
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
