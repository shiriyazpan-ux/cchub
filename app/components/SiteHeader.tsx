"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { trackCta } from "../lib/analytics";

const LOGIN_URL = "https://mycchub.app/login";

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
  // /en is the only English page; every other page (and every nav target) is Hebrew.
  const english = pathname === "/en";
  const t = english
    ? { home: "CCHUB - Home", nav: "Main navigation", mobileNav: "Mobile navigation", trial: "14-day free trial", trialShort: "Free trial", login: "Log in", open: "Open menu", close: "Close menu", menu: "Menu" }
    : { home: "CCHUB - עמוד הבית", nav: "ניווט ראשי", mobileNav: "ניווט מובייל", trial: "14 ימי ניסיון חינם", trialShort: "ניסיון חינם", login: "כניסה למערכת", open: "פתיחת תפריט", close: "סגירת תפריט", menu: "תפריט" };
  // On /en the Hebrew pages are offered through one language link instead of Hebrew nav labels.
  const items = english ? [{ href: "/", label: "עברית" }] : navItems;
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header dir={english ? "ltr" : "rtl"} lang={english ? "en" : "he"} className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="cchub-container cchub-header flex items-center justify-between gap-3">
        <Link href={english ? "/en" : "/"} className="cchub-brand" aria-label={t.home}>
          <span className="cchub-logo-frame">
            <Image
              src="/cchub-mark.png"
              alt="CCHUB - Customer Control Hub"
              width={256}
              height={241}
              sizes="42px"
              preload
              className="cchub-logo"
            />
          </span>
          <span className="cchub-brand-text">CCHUB</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label={t.nav}>
          {items.map((item) => (
            <a
              key={item.href}
              className={`cchub-nav-link whitespace-nowrap ${isActive(pathname, item.href) ? "active" : ""}`}
              href={item.href}
              {...(english ? { lang: "he", hrefLang: "he" } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a className="cchub-button-primary whitespace-nowrap" href="/pricing" onClick={() => trackCta({ location: "header_desktop" })}>
            {t.trial}
          </a>
          <a className="cchub-button-secondary whitespace-nowrap" href={LOGIN_URL}>
            {t.login}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            className="cchub-button-primary cchub-header-cta"
            href="/pricing"
            onClick={() => trackCta({ location: "header_mobile" })}
          >
            <span className="cchub-cta-long">{t.trial}</span>
            <span className="cchub-cta-short">{t.trialShort}</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-3 text-sm font-black text-[#061A44] shadow-sm"
            aria-expanded={mobileOpen}
            aria-controls="cchub-mobile-menu"
            aria-label={mobileOpen ? t.close : t.open}
          >
            <span aria-hidden="true" className="text-base leading-none">{mobileOpen ? "×" : "☰"}</span>
            <span className="cchub-menu-label">{t.menu}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="cchub-mobile-menu" className="border-t border-blue-100 bg-white shadow-lg xl:hidden">
          <div className="cchub-container py-4">
            <nav className="grid gap-2" aria-label={t.mobileNav}>
              {items.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    {...(english ? { lang: "he", hrefLang: "he" } : {})}
                    className={`flex min-h-11 items-center rounded-2xl px-4 py-3 text-sm font-black transition ${
                      active
                        ? "border-s-4 border-[#0B7A70] bg-[#ECFBF9] text-[#061A44]"
                        : "bg-[#F6FAFF] text-[#061A44] hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2">
              <a className="cchub-button-primary justify-center" href="/pricing" onClick={() => trackCta({ location: "header_mobile" })}>
                {t.trial}
              </a>
              <a className="cchub-button-secondary justify-center" href={LOGIN_URL}>
                {t.login}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
