"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <div className="hidden items-center gap-3 lg:flex">
          <a className="cchub-button-primary" href="/pricing">
            7 ימי ניסיון חינם
          </a>
          <a className="cchub-button-secondary" href="/login">
            כניסה למערכת
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-black text-[#061A44] shadow-sm lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="פתיחת תפריט"
        >
          <span>{mobileOpen ? "×" : "☰"}</span>
          <span>תפריט</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-blue-100 bg-white shadow-lg lg:hidden">
          <div className="cchub-container py-4">
            <nav className="grid gap-2" aria-label="ניווט מובייל">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-[#F6FAFF] text-[#061A44] hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2">
              <a className="cchub-button-primary justify-center" href="/pricing">
                7 ימי ניסיון חינם
              </a>
              <a className="cchub-button-secondary justify-center" href="/login">
                כניסה למערכת
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
