import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "מדיניות ביטול והחזרים | CCHUB",
  description:
    "איך מבטלים מנוי ל־CCHUB, עד מתי המנוי נשאר פעיל, ואיך מטופלות בקשות להחזר באמצעות Paddle.",
  alternates: { canonical: "/refund" },
};

const linkClass = "font-bold text-blue-700 underline";
const paddleRefundUrl = "https://www.paddle.com/legal/refund-policy";

type PolicySection = {
  title: string;
  text: ReactNode[];
};

const sections: PolicySection[] = [
  {
    title: "1. ביטול מנוי",
    text: [
      "ניתן לבטל את המנוי בכל עת. לאחר הביטול המנוי נשאר תקף וזמין עד תום תקופת המנוי ששולמה, חודשית או שנתית, ובסופה הוא לא יתחדש ולא יבוצע חיוב נוסף.",
      <>
        ביטול מנוי אינו מוחק בהכרח את החשבון או המידע באופן מיידי; בקשת מחיקה מטופלת בנפרד לפי{" "}
        <a className={linkClass} href="/privacy">
          מדיניות הפרטיות
        </a>
        .
      </>,
    ],
  },
  {
    title: "2. ניסיון חינם",
    text: [
      "החבילות כוללות ניסיון חינם של 14 ימים, בכפוף להזנת אמצעי תשלום תקף. במהלך הניסיון החיוב הוא 0 ₪. אם המנוי לא יבוטל לפני תום הניסיון, הוא יתחדש אוטומטית בתשלום במסלול החודשי או השנתי שנבחר.",
    ],
  },
  {
    title: "3. תשלום והחזרים",
    text: [
      "התשלום על מנויי CCHUB מתבצע באמצעות Paddle, שמשמשת כ-Merchant of Record ומטפלת בסליקה, במסים ובחשבוניות.",
      <>
        בקשות להחזר ייבחנו בהתאם לדין החל, לתנאי Paddle ול
        <a className={linkClass} href={paddleRefundUrl} target="_blank" rel="noopener noreferrer">
          מדיניות ההחזרים של Paddle
        </a>
        , ולנסיבות המקרה.
      </>,
    ],
  },
  {
    title: "4. יצירת קשר",
    text: [
      <>
        לשאלות על ביטול, חיוב או החזר אפשר לפנות אל{" "}
        <a className={`${linkClass} font-en`} dir="ltr" href="mailto:mycchubapp@gmail.com">
          mycchubapp@gmail.com
        </a>
        .
      </>,
      <>
        השירות CCHUB – Customer Control Hub מופעל על ידי <span dir="ltr">MYCCHUB</span>.
      </>,
    ],
  },
];

export default function RefundPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F6FAFF] text-[#071B4D]">
      <section className="relative overflow-hidden border-b border-blue-100">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF6FF_100%)]" />
        <div className="cchub-container relative py-16 text-center">
          <span className="cchub-trial-badge-strong">עודכן: 28 באוקטובר 2026</span>
          <h1 className="cchub-title-xl mx-auto mt-5 max-w-4xl">מדיניות ביטול והחזרים</h1>
          <p className="cchub-text mx-auto mt-5 max-w-3xl">
            המדיניות מסבירה איך מבטלים מנוי ל־CCHUB ואיך מטופלות בקשות להחזר. היא חלק מ
            <a className={linkClass} href="/terms">
              תנאי השימוש
            </a>
            .
          </p>
        </div>
      </section>

      <section className="cchub-container py-14">
        <div className="mx-auto grid max-w-5xl gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <div className="mt-4 grid gap-3">
                {section.text.map((paragraph, index) => (
                  <p key={index} className="leading-9 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
