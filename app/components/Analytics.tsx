"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  GA_ID, PUBLIC_PATHS, analytics, prepareTag, readConsent,
  setConsent, subscribeConsent, validId, publicUrl,
} from "../lib/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);
  const publicPage = !!pathname && (PUBLIC_PATHS as readonly string[]).includes(pathname);
  const enabled = validId(GA_ID) && publicPage && consent === "granted" && typeof window !== "undefined" && !!publicUrl(window.location.href);
  const english = pathname === "/en";
  const consentText = english
    ? "With your permission, we use Google Analytics to measure visits and predefined button clicks on public pages. Your choice applies to this website and the CCHUB app. You can change it anytime."
    : "באישורכם, נשתמש ב־Google Analytics למדידת ביקורים ולחיצות על כפתורים מוגדרים בעמודים ציבוריים. הבחירה חלה על האתר ועל אפליקציית CCHUB. אפשר לשנות אותה בכל עת.";

  useLayoutEffect(() => {
    try {
      prepareTag();
      analytics.sync();
    } catch { /* Optional analytics must not affect the page. */ }
  }, [pathname, consent]);

  const bannerOpen = validId(GA_ID) && publicPage && (consent === null || settingsOpen);
  // While the banner is open, the footer and scroll padding grow by the banner's
  // height, so the last links on the page and focused controls can always be
  // scrolled clear of it. Layout only: consent state is not read or changed here.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const banner = bannerRef.current;
    if (!bannerOpen || !banner) { root.style.removeProperty("--cchub-consent-space"); return; }
    const update = () => {
      const space = Math.max(0, Math.ceil(window.innerHeight - banner.getBoundingClientRect().top));
      root.style.setProperty("--cchub-consent-space", `${space}px`);
    };
    update();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    observer?.observe(banner);
    window.addEventListener("resize", update);
    return () => { observer?.disconnect(); window.removeEventListener("resize", update); root.style.removeProperty("--cchub-consent-space"); };
  }, [bannerOpen]);

  if (!validId(GA_ID) || !publicPage) return null;

  const title = english ? "Help us improve CCHUB" : "עזרו לנו לשפר את CCHUB";
  const privacyLabel = english ? "Privacy policy" : "מדיניות פרטיות";

  return (
    <>
      {enabled && (
        <Script
          id="cchub-ga4-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
          onReady={() => { try { analytics.ready(); } catch { /* Collection is best effort. */ } }}
        />
      )}
      {bannerOpen ? (
        <section
          ref={bannerRef}
          aria-label={english ? "Analytics preferences" : "העדפות מדידה"}
          dir={english ? "ltr" : "rtl"}
          className="cchub-consent fixed inset-x-0 bottom-0 z-[70] rounded-t-2xl border-t border-slate-200 bg-white px-3 pt-2 text-[#061A44] shadow-[0_-8px_30px_rgba(6,22,48,0.14)] sm:inset-x-auto sm:bottom-4 sm:end-4 sm:w-[25rem] sm:rounded-2xl sm:border sm:p-5 sm:shadow-xl"
        >
          {/* Same text, buttons and choice on every screen. Phones get one compact row
              (explanation behind "Details"); larger screens get a corner card on the
              end side (left in Hebrew, right on /en), away from the hero text and its buttons. */}
          <p className="hidden font-bold sm:block">{title}</p>
          <p className="mt-2 hidden text-sm leading-6 sm:block">{consentText}</p>
          {detailsOpen && (
            <div id="cchub-consent-details" className="pb-1 sm:hidden">
              {english && <p className="text-xs font-bold leading-5">{title}</p>}
              <p className="text-xs leading-5">{consentText}</p>
              <a className="inline-flex min-h-11 items-center text-xs underline" href="/privacy">{privacyLabel}</a>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-4 sm:gap-3">
            {/* One row on phones in both languages. The English button labels are longer, so
                there the title is read by screen readers here and shown inside "Details". */}
            <p className={`${english ? "shrink-0" : "min-w-[7.5rem] flex-1"} text-xs font-bold leading-4 sm:hidden`}>
              {english ? <span className="sr-only">{title} </span> : <>{title}{" "}</>}
              <button
                type="button"
                className="inline-flex min-h-6 items-center bg-transparent p-0 align-middle text-xs font-normal text-[#061A44] underline"
                aria-expanded={detailsOpen}
                aria-controls="cchub-consent-details"
                onClick={() => setDetailsOpen((open) => !open)}
              >
                {english ? "Details" : "פרטים"}
              </button>
            </p>
            <button type="button" className="min-h-11 shrink-0 rounded-full bg-[#061A44] px-3 text-sm font-bold text-white sm:px-4" onClick={() => { setConsent("granted"); setSettingsOpen(false); }}>
              {english ? "Allow analytics" : "אישור מדידה"}
            </button>
            <button type="button" className="min-h-11 shrink-0 rounded-full border border-slate-300 px-3 text-sm font-bold sm:px-4" onClick={() => { setConsent("denied"); setSettingsOpen(false); }}>
              {english ? "Decline analytics" : "ללא מדידה"}
            </button>
            <a className="hidden min-h-11 items-center px-1 text-sm underline sm:inline-flex" href="/privacy">{privacyLabel}</a>
          </div>
          <div className="h-2 sm:hidden" aria-hidden="true" />
        </section>
      ) : (
        <button type="button" className="fixed bottom-3 left-3 z-[60] min-h-11 rounded-full border border-slate-200 bg-white px-3 text-xs text-[#061A44] shadow-sm" onClick={() => setSettingsOpen(true)}>
          {english ? "Analytics preferences" : "העדפות מדידה"}
        </button>
      )}
    </>
  );
}
