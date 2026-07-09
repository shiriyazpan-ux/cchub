export default function NotFound() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <section className="cchub-container flex min-h-screen items-center justify-center py-16">
        <div className="mx-auto max-w-3xl rounded-[34px] border border-blue-100 bg-white p-10 text-center shadow-2xl">
          <a href="/" className="cchub-brand justify-center" aria-label="CCHUB - עמוד הבית">
            <span className="cchub-logo-frame">
              <img src="/cchub-logo.png" alt="CCHUB" className="cchub-logo" />
            </span>
            <span className="cchub-brand-text">CCHUB</span>
          </a>

          <div className="mt-8 text-7xl font-black text-blue-100">404</div>

          <h1 className="mt-4 text-4xl font-black">העמוד שחיפשת לא נמצא</h1>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            ייתכן שהקישור השתנה, שהעמוד עדיין לא נפתח, או שהכתובת הוקלדה לא נכון.
            אפשר לחזור לעמוד הבית או לעבור לעמודי האתר המרכזיים.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="cchub-button-primary" href="/">חזרה לעמוד הבית</a>
            <a className="cchub-button-secondary" href="/features">יכולות המערכת</a>
            <a className="cchub-button-secondary" href="/pricing">מחירים</a>
            <a className="cchub-button-secondary" href="/tutorials">טוטריאלים</a>
          </div>
        </div>
      </section>
    </main>
  );
}
