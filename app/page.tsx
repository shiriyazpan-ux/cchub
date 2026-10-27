import Icon from "./components/Icon";
import Reveal from "./components/Reveal";
import VideoShowcase from "./components/VideoShowcase";

const tools = ["וואטסאפ", "מיילים", "דרייב", "אקסלים", "פתקים", "סיסמאות בצ׳אט"];

const modules = [
  { icon: "task", label: "משימות עם זמן ועלות" },
  { icon: "globe", label: "נכסים דיגיטליים" },
  { icon: "file", label: "מסמכים והצעות מחיר" },
  { icon: "lock", label: "גישות וסיסמאות מוצפנות" },
  { icon: "book", label: "מרכז ידע וסיכומי פגישות" },
  { icon: "users", label: "אנשי קשר וצוות" },
];

const features = [
  { icon: "search", title: "חיפוש גלובלי ⌘K", text: "לקוח, משימה, מסמך או סיסמה – חיפוש אחד מכל מסך." },
  { icon: "funnel", title: "לידים ושלבי מכירה", text: "כל פנייה נכנסת ללוח, ועוברת מליד חדש ועד סגירה." },
  { icon: "clock", title: "זמן ועלות לכל משימה", text: "יודעים כמה זמן הלך על כל לקוח – ומה לחייב." },
  { icon: "lock", title: "סיסמאות מוצפנות", text: "גישות לכל לקוח ונכס, בהצפנת AES-256." },
  { icon: "moon", title: "מצב בהיר וכהה", text: "נעים לעיניים, גם בעשר בלילה." },
  { icon: "languages", title: "עברית ו־English", text: "מערכת מלאה בשתי השפות, בלחיצה אחת." },
  { icon: "import", title: "ייבוא וייצוא Excel", text: "מעבירים את הלקוחות מאקסל – בלי להקליד מחדש." },
  { icon: "shield", title: "צוות והרשאות", text: "כל אחד רואה רק את מה שהוא צריך. גיבוי יומי בכל החבילות." },
];

const audiences = [
  { icon: "megaphone", title: "מנהלי שיווק", text: "לקוחות, נכסים, גישות ומשימות – בלי לרדוף אחרי מידע." },
  { icon: "briefcase", title: "סוכנויות קטנות", text: "מקום אחד לצוות, למסמכים, למשימות ולתיעוד העבודה." },
  { icon: "user", title: "פרילנסרים", text: "להיראות מסודרים ומקצועיים גם כשעובדים לבד." },
  { icon: "bulb", title: "יועצים", text: "ידע, החלטות וסיכומי עבודה – לפי לקוח." },
  { icon: "building", title: "נותני שירותים", text: "לקוחות קבועים, משימות פתוחות ומסמכים במקום אחד." },
  { icon: "handshake", title: "עסקים עם לקוחות קבועים", text: "קשר ארוך טווח, בלי לאבד מידע בדרך." },
];

const plans = [
  {
    name: "Solo Pro",
    text: "לעסק שרוצה להתחיל לעבוד מסודר בלי מערכת כבדה.",
    price: "99₪",
    yearly: "או 990₪ לשנה",
    items: ["עד 200 לקוחות", "ניהול לקוחות, משימות ונכסים", "ייבוא Excel ואנשי קשר", "גיבויים אוטומטיים ודשבורד מלא"],
    hot: false,
  },
  {
    name: "Premium",
    text: "תמונה מלאה של לקוחות, נכסים, משימות, ידע ואוטומציות.",
    price: "199₪",
    yearly: "או 1,990₪ לשנה",
    items: ["עד 1,000 לקוחות", "לידים, מסמכים ומרכז ידע", "אינטגרציות Make / Zapier", "דוחות, תגיות וייצוא Excel"],
    hot: true,
  },
  {
    name: "Enterprise",
    text: "לצוותים שצריכים עבודה משותפת, הרשאות מתקדמות ואינטגרציות.",
    price: "399₪",
    yearly: "או 3,990₪ לשנה",
    items: ["עד 5,000 לקוחות", "גישות וסיסמאות מוצפנות", "משתמשים, צוותים והרשאות", "התראות ותמיכה ייעודית"],
    hot: false,
  },
];

const steps = [
  { title: "פותחים חשבון", text: "נרשמים ל־14 ימי ניסיון ומתחילים עם לקוח ראשון." },
  { title: "מחברים מידע", text: "מוסיפים לקוחות, נכסים ומשימות – או מייבאים מאקסל." },
  { title: "מסדרים ידע", text: "שומרים הערות, מסמכים וגישות בתיק של כל לקוח." },
  { title: "מתחילים לנהל", text: "רואים תמונה ברורה ועובדים הרבה יותר שקט." },
];

export default function Home() {
  return (
    <main style={{ background: "#f5f8fa", color: "#0a1a33", overflowX: "hidden" }}>
      <Reveal />

      {/* HERO */}
      <section className="h-grid-bg" style={{ padding: "88px 0 104px" }}>
        <div className="h-wrap h-cols">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <span className="h-eyebrow"><span className="h-dot" />מערכת לניהול לקוחות · עברית ו־English</span>
            <h1 className="h-h1">די לחפש.<br /><span className="h-teal2">תתחילו לנהל.</span></h1>
            <p className="h-lead">
              CCHUB מרכזת במקום אחד את כל העבודה סביב הלקוח: משימות, נכסים דיגיטליים, מסמכים, גישות וידע.
              פחות חיפושים ופחות בלגן, יותר שליטה ושקט.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="h-btn h-btn-teal" href="/pricing">התחילו 14 ימי ניסיון חינם <Icon name="arrow" size={20} /></a>
              <a className="h-btn h-btn-ghost" href="#video">צפו בסיור של 30 שניות</a>
            </div>
            <div className="h-checks">
              <span><Icon name="check" size={18} />חיוב 0 ₪ בתקופת הניסיון</span>
              <span><Icon name="check" size={18} />גיבוי אוטומטי יומי</span>
              <span><Icon name="check" size={18} />מימין לשמאל, כמו שצריך</span>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="h-mock" aria-label="הדמיה של לוח הבקרה ב־CCHUB" role="img">
              <div className="h-mock-bar">
                <i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} />
                <span className="h-mock-url">web.mycchub.app</span>
              </div>
              <div className="h-mock-body">
                <div className="h-mock-side h-hide-sm">
                  <span style={{ width: 34, height: 34, borderRadius: 9, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cchub-mark.png" alt="" width={26} height={26} />
                  </span>
                  <span className="on"><Icon name="chart" size={17} /></span>
                  <Icon name="users" size={17} />
                  <Icon name="task" size={17} />
                  <Icon name="lock" size={17} />
                  <Icon name="funnel" size={17} />
                </div>
                <div className="h-mock-main">
                  <div className="h-mock-top">
                    <b style={{ fontSize: 16 }}>תמונה כללית</b>
                    <span className="h-mock-search"><Icon name="search" size={14} />חיפוש גלובלי... (⌘K)</span>
                  </div>
                  <div className="h-kpis">
                    <div className="h-kpi" style={{ background: "#fff8e6", borderColor: "#fde9b0" }}><b style={{ color: "#f59e0b" }}>38</b>משימות פתוחות</div>
                    <div className="h-kpi" style={{ background: "#ecfdf5", borderColor: "#bbf0d9" }}><b style={{ color: "#10b981" }}>96</b>הושלמו החודש</div>
                    <div className="h-kpi" style={{ background: "#fef2f2", borderColor: "#fbd0d0" }}><b style={{ color: "#ef4444" }}>4</b>באיחור</div>
                    <div className="h-kpi" style={{ background: "#ecfeff", borderColor: "#b5eef7" }}><b style={{ color: "#06b6d4" }}>19</b>לקוחות פעילים</div>
                  </div>
                  <div className="h-mock-panels">
                    <div className="h-panel">
                      <b>משימות</b>
                      <div className="h-prow"><span>קמפיין ממומן – נובה דיזיין</span><span style={{ color: "#ef4444" }}>15.11</span></div>
                      <div className="h-prow"><span>צילומי מוצר לאתר</span><span style={{ color: "#ef4444" }}>17.11</span></div>
                      <div className="h-prow"><span>חידוש דומיין ואחסון</span><span style={{ color: "#ef4444" }}>22.11</span></div>
                    </div>
                    <div className="h-panel">
                      <b>לקוחות פעילים לאחרונה</b>
                      <div className="h-prow"><span className="h-av" style={{ background: "#7c3aed" }}>נ</span><span style={{ flex: 1 }}>נובה דיזיין</span><span className="h-cnt">14</span></div>
                      <div className="h-prow"><span className="h-av" style={{ background: "#0ea5e9" }}>א</span><span style={{ flex: 1 }}>אלפא נדל״ן</span><span className="h-cnt">9</span></div>
                      <div className="h-prow"><span className="h-av" style={{ background: "#10b981" }}>ס</span><span style={{ flex: 1 }}>סטודיו גלים</span><span className="h-cnt">6</span></div>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: "#8a90a2" }}>הדמיה עם נתונים לדוגמה</span>
                </div>
              </div>
            </div>
            <div className="h-toast" aria-hidden="true">
              <span className="h-tic"><Icon name="funnel" size={16} /></span>ליד חדש נכנס מהאתר
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="h-section">
        <div className="h-wrap reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, textAlign: "center" }}>
          <h2 className="h-h2">הבעיה היא לא שאין לכם מידע.<br /><span className="h-teal">הבעיה היא שהוא מפוזר.</span></h2>
          <div className="h-chips">
            {tools.map((t) => <span key={t} className="h-chip-x">{t}</span>)}
          </div>
          <span style={{ color: "#17a195" }}><Icon name="down" size={40} /></span>
          <p className="h-text" style={{ fontSize: 22, maxWidth: 760, color: "#334155" }}>
            ב־CCHUB כל דבר מחובר ללקוח: המשימות, הנכסים, המסמכים, הגישות והידע.
            לא עוד מודולים מנותקים, אלא תיק לקוח אחד שבו רואים הכל.
          </p>
        </div>
      </section>

      {/* CLIENT FILE */}
      <section style={{ paddingBottom: 96 }}>
        <div className="h-wrap h-cols">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <span style={{ fontWeight: 800, color: "#0f8a7f" }}>תיק לקוח</span>
            <h2 className="h-h2">כל מה שקשור ללקוח – במקום אחד.</h2>
            <p className="h-text">
              נכנסים ללקוח ורואים את התמונה המלאה: מה פתוח, מה באיחור, כמה זמן הושקע, איפה המסמכים ומה הסיסמה לאחסון.
              המערכת גם מדברת בשפה של העסק שלכם: אפשר לקרוא ל״לקוחות״ ספקים, פרויקטים או נכסים.
            </p>
            <div className="h-mod">
              {modules.map((m) => (
                <span key={m.label}><span className="h-ibox"><Icon name={m.icon} size={20} /></span>{m.label}</span>
              ))}
            </div>
          </div>
          <div className="h-card h-file reveal d2">
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <span style={{ width: 64, height: 64, borderRadius: 16, background: "#7c3aed", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900 }}>נ</span>
              <div style={{ flex: 1, minWidth: 160 }}>
                <b style={{ fontSize: 24 }}>נובה דיזיין</b>
                <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                  <span className="h-pill" style={{ background: "#dcfce7", color: "#15803d" }}>פעיל</span>
                  <span className="h-pill" style={{ background: "#ede9fe", color: "#7c3aed" }}>לקוח</span>
                </div>
              </div>
            </div>
            <div className="h-stat4">
              <div><b>8</b><span>נכסים</span></div>
              <div><b>14</b><span>משימות</span></div>
              <div><b>21</b><span>מסמכים</span></div>
              <div><b>4</b><span>גישות</span></div>
            </div>
            <div>
              <div className="h-frow"><span style={{ fontWeight: 700 }}>השקת קמפיין חורף</span><span className="h-pill" style={{ background: "#fee2e2", color: "#dc2626" }}>גבוהה</span></div>
              <div className="h-frow"><span style={{ fontWeight: 700 }}>אחסון אתר</span><span style={{ letterSpacing: 3, color: "#64748b" }}>••••••••</span></div>
              <div className="h-frow"><span style={{ fontWeight: 700 }}>זמן עבודה החודש</span><span style={{ fontWeight: 800, color: "#0b7a43" }}>3:20 שע׳ · ₪750</span></div>
            </div>
            <span style={{ fontSize: 13, color: "#64748b" }}>הדמיה עם נתונים לדוגמה</span>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="h-grid-bg h-section">
        <div className="h-wrap reveal" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <h2 className="h-h2" style={{ color: "#fff" }}>ראו את CCHUB <span className="h-teal2">בפעולה.</span></h2>
            <p className="h-lead" style={{ textAlign: "center" }}>שלושה סרטונים קצרים, 30 שניות כל אחד.</p>
          </div>
          <VideoShowcase />
        </div>
      </section>

      {/* FEATURES */}
      <section className="h-section" style={{ background: "#fff", borderBottom: "1px solid #e3eaf0" }}>
        <div className="h-wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          <div className="reveal" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
            <h2 className="h-h2">כל מה שצריך כדי לעבוד מסודר</h2>
            <p className="h-text">ועוד כמה דברים שלא ידעתם שחסרים לכם.</p>
          </div>
          <div className="h-cards">
            {features.map((f, i) => (
              <article key={f.title} className={`h-card reveal d${i % 4}`}>
                <span className="h-ibox"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a className="h-btn h-btn-line" href="/features">לכל היכולות <Icon name="arrow" size={20} /></a>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="h-grid-bg h-section">
        <div className="h-wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          <div className="reveal" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
            <h2 className="h-h2" style={{ color: "#fff" }}>מתחבר לכלים <span className="h-teal2">שכבר יש לכם.</span></h2>
            <p className="h-lead" style={{ textAlign: "center" }}>בלי קוד, בלי מתכנת.</p>
          </div>
          <div className="h-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <div className="h-int reveal">
              <b style={{ fontSize: 24 }}>Google</b>
              <span style={{ color: "#c7d7e2", lineHeight: 1.6 }}>חיבור לעבודה בלבד, לא להתחברות. כל שירות מתחבר בנפרד, ורק עם ההרשאה שהוא צריך.</span>
              <div className="h-int-row"><Icon name="calendar" /><b>יומן</b><span>קובעים פגישות מתוך תיק הלקוח</span></div>
              <div className="h-int-row"><Icon name="drive" /><b>Drive</b><span>שומרים קבצים ישירות לתיקייה</span></div>
              <div className="h-int-row"><Icon name="mail" /><b>Gmail</b><span>שולחים מיילים ללקוח מהמערכת</span></div>
            </div>
            <div className="h-int reveal d2">
              <b style={{ fontSize: 24 }}>לידים חיצוניים</b>
              <span style={{ color: "#c7d7e2", lineHeight: 1.6 }}>מחברים טפסים מ־Make, Zapier או כל מקור אחר. כל חיבור מקבל כתובת Webhook וטוקן ייעודי.</span>
              <div className="h-srcs"><span>טופס באתר</span><span>Make</span><span>Zapier</span><span>Webhook</span></div>
              <div className="h-flowdot" aria-hidden="true" />
              <div className="h-newlead">ליד חדש בלוח הלידים<span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 999, padding: "2px 12px", fontSize: 14 }}>אוטומטי</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF (real numbers from the CCHUB team's own account) */}
      <section className="h-section">
        <div className="h-wrap h-cols">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="h-h2">את הלקוחות שלנו<br /><span className="h-teal">אנחנו מנהלים ב־CCHUB.</span></h2>
            <p className="h-text">לא מצגת. כל משימה, ערוץ, קובץ וגישה של העבודה שלנו נמצאים במערכת – כל יום.</p>
          </div>
          <div className="reveal d2" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="h-stats">
              <div className="h-card" style={{ padding: 22 }}><b>22</b><span>לקוחות פעילים החודש</span></div>
              <div className="h-card" style={{ padding: 22 }}><b>102</b><span>משימות הושלמו החודש</span></div>
              <div className="h-card" style={{ padding: 22 }}><b>154</b><span>משימות במערכת</span></div>
            </div>
            <span style={{ fontSize: 13, color: "#64748b" }}>מתוך החשבון של צוות CCHUB, אוקטובר 2026</span>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section style={{ paddingBottom: 96 }}>
        <div className="h-wrap" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <h2 className="h-h2 reveal" style={{ textAlign: "center" }}>נבנתה לעסקים שמנהלים לקוחות לאורך זמן</h2>
          <div className="h-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {audiences.map((a, i) => (
              <article key={a.title} className={`h-card reveal d${i % 3}`} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span className="h-ibox"><Icon name={a.icon} /></span>
                <div><h3 style={{ marginTop: 0 }}>{a.title}</h3><p>{a.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="h-section" style={{ background: "#fff", borderTop: "1px solid #e3eaf0" }}>
        <div className="h-wrap" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <h2 className="h-h2 reveal" style={{ textAlign: "center" }}>מתחילים פשוט. בלי רעש.</h2>
          <div className="h-cards">
            {steps.map((s, i) => (
              <article key={s.title} className={`h-card reveal d${i % 4}`}>
                <span className="h-ibox" style={{ fontWeight: 900, fontSize: 22 }}>{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="h-section">
        <div className="h-wrap" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div className="reveal" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <h2 className="h-h2">בחרו את החבילה שלכם</h2>
            <p className="h-text" style={{ fontSize: 18 }}>כל החבילות מתחילות ב־14 ימי ניסיון חינם. נדרש אמצעי תשלום; החיוב בתקופת הניסיון 0 ₪ והמנוי מתחדש אוטומטית אם לא בוטל.</p>
          </div>
          <div className="h-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", alignItems: "stretch" }}>
            {plans.map((p, i) => (
              <div key={p.name} className={`h-price reveal d${i % 3}${p.hot ? " hot" : ""}`}>
                {p.hot && <span className="h-pill" style={{ alignSelf: "flex-start", background: "#17a195", color: "#fff" }}>הכי מומלץ</span>}
                <b className="font-en" style={{ fontSize: 24 }}>{p.name}</b>
                <span style={{ color: "#475569" }}>{p.text}</span>
                <div><span className="h-amount">{p.price}</span><span style={{ color: "#64748b" }}> / לחודש · {p.yearly}</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.items.map((it) => <span key={it} className="h-check"><Icon name="check" size={20} />{it}</span>)}
                </div>
                <a className={`h-btn ${p.hot ? "h-btn-teal" : "h-btn-line"}`} href="/pricing" style={{ marginTop: "auto" }}>התחילו 14 ימי ניסיון</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="h-grid-bg" style={{ padding: "88px 0" }}>
        <div className="h-wrap reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
          <h2 className="h-h2" style={{ color: "#fff", fontSize: "clamp(36px, 4vw, 52px)" }}>כל מה שקשור ללקוח –<br /><span className="h-teal2">במקום אחד.</span></h2>
          <a className="h-btn h-btn-teal" href="/pricing" style={{ minHeight: 60, fontSize: 19, padding: "0 36px" }}>התחילו 14 ימי ניסיון חינם</a>
          <span style={{ color: "#9fb6c6" }}>בעברית וב־English · גיבוי יומי · חיוב 0 ₪ בתקופת הניסיון</span>
        </div>
      </section>
    </main>
  );
}
