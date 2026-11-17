"use client";

import { useLayoutEffect, useState, useSyncExternalStore } from "react";
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

  if (!validId(GA_ID) || !publicPage) return null;

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
      {consent === null || settingsOpen ? (
        <section
          aria-label={english ? "Analytics preferences" : "העדפות מדידה"}
          dir={english ? "ltr" : "rtl"}
          className="fixed bottom-2 left-2 right-2 z-[70] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#061A44] shadow-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-5"
        >
          {/* Same text, buttons and choice on every screen; on phones the explanation folds into one line so the page's CTA stays visible. */}
          <p className="hidden font-bold sm:block">{english ? "Help us improve CCHUB" : "עזרו לנו לשפר את CCHUB"}</p>
          <p className="mt-2 hidden text-sm leading-6 sm:block">{consentText}</p>
          <details className="text-sm leading-6 sm:hidden">
            <summary className="cursor-pointer font-bold">
              {english ? "Help us improve CCHUB" : "עזרו לנו לשפר את CCHUB"}
              <span className="ms-2 text-xs underline">{english ? "Details" : "פרטים"}</span>
            </summary>
            <p className="mt-1 text-xs leading-5">{consentText}</p>
          </details>
          <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3">
            <button type="button" className="min-h-11 rounded-full bg-[#061A44] px-4 text-sm font-bold text-white" onClick={() => { setConsent("granted"); setSettingsOpen(false); }}>
              {english ? "Allow analytics" : "אישור מדידה"}
            </button>
            <button type="button" className="min-h-11 rounded-full border border-slate-300 px-4 text-sm font-bold" onClick={() => { setConsent("denied"); setSettingsOpen(false); }}>
              {english ? "Decline analytics" : "ללא מדידה"}
            </button>
            <a className="inline-flex min-h-11 items-center px-1 text-sm underline" href="/privacy">{english ? "Privacy policy" : "מדיניות פרטיות"}</a>
          </div>
        </section>
      ) : (
        <button type="button" className="fixed bottom-3 left-3 z-[60] min-h-11 rounded-full border border-slate-200 bg-white px-3 text-xs text-[#061A44] shadow-sm" onClick={() => setSettingsOpen(true)}>
          {english ? "Analytics preferences" : "העדפות מדידה"}
        </button>
      )}
    </>
  );
}
