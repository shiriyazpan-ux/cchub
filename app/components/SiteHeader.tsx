"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "עמוד הבית" },
  { href: "/features", label: "יכולות המערכת" },
  { href: "/tutorials", label: "מדריכים" },
  { href: "/articles", label: "מאמרים" },
  { href: "/pricing", label: "מחירים" },
  { href: "/faq", label: "שאלות נפוצות" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
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
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`cchub-nav-link ${isActive(pathname, item.href) ? "active" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="cchub-button-primary" href="/pricing">
            7 ימי ניסיון חינם
          </a>
          <a className="cchub-button-secondary hidden sm:inline-flex" href="/login">
            כניסה למערכת
          </a>
        </div>
      </div>
    </header>
  );
}
