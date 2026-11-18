"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const hebrewLinks = [
  { href: "/features", label: "יכולות המערכת" },
  { href: "/pricing", label: "מחירים" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/terms", label: "תנאי שימוש" },
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/refund", label: "מדיניות ביטול והחזרים" },
  { href: "/accessibility", label: "הצהרת נגישות" },
];

// Same destinations, English labels. The pages themselves are in Hebrew.
const englishLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms of use" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/refund", label: "Cancellation and refund policy" },
  { href: "/accessibility", label: "Accessibility statement" },
];

export default function SiteFooter() {
  const english = usePathname() === "/en";
  const links = english ? englishLinks : hebrewLinks;

  return (
    <footer className="cchub-footer" dir={english ? "ltr" : "rtl"} lang={english ? "en" : "he"}>
      <div className="cchub-container flex flex-col items-center justify-between gap-4 text-sm text-blue-100 md:flex-row">
        <div className="font-en font-bold">© 2026 CCHUB</div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {english
            ? <Link href="/" lang="he" hrefLang="he">עברית</Link>
            : <Link href="/">עמוד הבית</Link>}
          {links.map((link) => (
            <a key={link.href} href={link.href} {...(english ? { hrefLang: "he" } : {})}>{link.label}</a>
          ))}
          <a className="font-en" dir="ltr" href="mailto:mycchubapp@gmail.com">mycchubapp@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
