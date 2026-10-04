// Basic consent only: do not load Google's tag or queue events before permission.
export const CONSENT_COOKIE = "cchub_analytics_consent";
export const CONSENT_EVENT = "cchub:analytics-consent";
export const ATTRIBUTION_COOKIE = "cchub_analytics_attribution";
export const SOURCES = ["youtube", "facebook", "instagram", "linkedin", "tiktok", "google", "newsletter"] as const;
export const MEDIUMS = ["organic", "social", "paid_social", "cpc", "email", "video", "referral"] as const;
// Extend only with reviewed campaign/creative names; never accept free text.
export const CAMPAIGNS: readonly string[] = [];
export const CONTENT: readonly string[] = [];
export const PUBLIC_PATHS = [
  "/", "/features", "/pricing", "/faq", "/tutorials", "/tutorials/add-client",
  "/tutorials/import-excel", "/tutorials/add-task", "/tutorials/time-costs",
  "/tutorials/close-task", "/tutorials/daily-workflow", "/tutorials/client-documents",
  "/tutorials/save-passwords", "/tutorials/digital-assets", "/tutorials/custom-terms",
  "/tutorials/make-zapier", "/tutorials/user-permissions", "/articles",
  "/articles/hebrew-client-management-system", "/articles/stop-searching-business-information",
  "/articles/tasks-by-client", "/articles/crm-for-small-business", "/articles/manage-long-term-clients",
  "/articles/import-excel-to-client-system", "/articles/business-password-management",
  "/articles/internal-knowledge-base", "/articles/client-digital-assets", "/articles/task-time-costs",
  "/articles/make-zapier-business-automation", "/articles/user-permissions-business",
  "/privacy", "/terms", "/accessibility", "/en",
] as const;
const publicPaths = new Set<string>(PUBLIC_PATHS);
const locations = new Set(["header_desktop", "header_mobile", "pricing_monthly", "pricing_yearly", "pricing_footer"]);
const plans = new Set(["solo-pro", "premium", "enterprise"]);
const billing = new Set(["month", "year"]);
export type Consent = "granted" | "denied" | null;
export type Attribution = { source: string; medium: string };
export type Cta = { location: string; plan?: string; billing?: string };
type Snapshot = { url: string; referrer: string; consent: Consent; attribution?: Attribution | null };
export type Runtime = {
  snapshot: () => Snapshot;
  disable: (disabled: boolean) => void;
  emit: (...args: unknown[]) => void;
};

export function validId(id: string | undefined): id is string {
  return !!id && /^G-[A-Z0-9]{6,20}$/.test(id);
}
export function publicUrl(raw: string): URL | null {
  try {
    const url = new URL(raw);
    // Production host, or local development only. Preview hosts are excluded.
    if (!(url.protocol === "https:" && url.hostname === "web.mycchub.app") &&
        !(url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname))) return null;
    if (url.username || url.password || !publicPaths.has(url.pathname)) return null;
    return new URL(url.origin + url.pathname);
  } catch { return null; }
}
export function safeReferrer(raw: string): string {
  try {
    const url = new URL(raw);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return "";
    // Never include an external path, query, hash, or arbitrary page title.
    return url.origin;
  } catch { return ""; }
}
export function approvedAttribution(value: unknown): Attribution | null {
  if (!value || typeof value !== "object") return null;
  const { source, medium } = value as Record<string, unknown>;
  return typeof source === "string" && typeof medium === "string" &&
    (SOURCES as readonly string[]).includes(source) && (MEDIUMS as readonly string[]).includes(medium)
    ? { source, medium } : null;
}
export function attributionFromUrl(raw: string): Attribution | null {
  try {
    const params = new URL(raw).searchParams;
    // Duplicate keys are ambiguous; reject rather than choosing attacker input.
    if (params.getAll("utm_source").length !== 1 || params.getAll("utm_medium").length !== 1) return null;
    return approvedAttribution({ source: params.get("utm_source"), medium: params.get("utm_medium") });
  } catch { return null; }
}
function campaignParams(attribution: Attribution | null) {
  // Explicit overrides prevent raw UTM values from being inferred by the tag.
  return {
    campaign_source: attribution?.source || "(not set)",
    campaign_medium: attribution?.medium || "(not set)",
    campaign_name: "(not set)", campaign_content: "(not set)",
    campaign_term: "(not set)", campaign_id: "(not set)",
  };
}
function pageParams(url: URL, referrer: string, attribution: Attribution | null) {
  return {
    page_location: url.href, page_referrer: referrer,
    page_title: `CCHUB | ${url.pathname === "/" ? "home" : url.pathname.slice(1)}`,
    language: url.pathname === "/en" ? "en" : "he",
    ...campaignParams(attribution),
  };
}

// One controller survives React re-renders and effect replays. A revisit is a
// new transition; changing only a query or granting consent again is not.
export function createAnalytics(id: string | undefined, runtime: Runtime) {
  let loaded = false;
  let initialized = false;
  let observed: string | null | undefined;
  let visit = 0;
  let emittedVisit = -1;
  let previousPublic = "";
  let referrer = "";
  function current() {
    const snapshot = runtime.snapshot();
    const url = publicUrl(snapshot.url);
    const path = url?.pathname || null;
    if (path !== observed) {
      visit += 1;
      referrer = previousPublic || safeReferrer(snapshot.referrer);
      observed = path;
      previousPublic = url?.href || "";
    }
    const allowed = validId(id) && snapshot.consent === "granted" && !!url;
    runtime.disable(!allowed);
    return { url, allowed, attribution: approvedAttribution(snapshot.attribution) };
  }
  function sync() {
    const state = current();
    if (!state.allowed || !state.url || !loaded) return false;
    const params = pageParams(state.url, referrer, state.attribution);
    if (!initialized) {
      runtime.emit("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      runtime.emit("js", new Date());
      runtime.emit("config", id, {
        send_page_view: false, cookie_domain: "mycchub.app",
        allow_google_signals: false, allow_ad_personalization_signals: false,
        ...params,
      });
      initialized = true;
    }
    if (visit === emittedVisit) return false;
    // Update safe defaults too, so subsequent automatic engagement uses them.
    runtime.emit("set", params);
    runtime.emit("event", "page_view", { ...params, send_to: id });
    emittedVisit = visit;
    return true;
  }
  return {
    sync,
    ready() { loaded = true; return sync(); },
    trackCta(cta: Cta) {
      const state = current();
      if (!state.allowed || !state.url || !loaded || !initialized || !locations.has(cta.location)) return false;
      if (cta.plan !== undefined && !plans.has(cta.plan)) return false;
      if (cta.billing !== undefined && !billing.has(cta.billing)) return false;
      runtime.emit("event", "cta_click", {
        ...pageParams(state.url, referrer, state.attribution), send_to: id,
        cta_location: cta.location,
        ...(cta.plan ? { plan_slug: cta.plan } : {}),
        ...(cta.billing ? { billing_cycle: cta.billing } : {}),
      });
      return true;
    },
  };
}

// Public stream ID: the complete app/ folder works without a Vercel env edit.
// An explicit empty override still disables the tag and all collection.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RH58NH7KSM";
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}
function cookieValue(name: string) {
  if (typeof document === "undefined") return null;
  const entry = document.cookie.split("; ").find((part) => part.startsWith(`${name}=`));
  try { return entry ? decodeURIComponent(entry.slice(name.length + 1)) : null; } catch { return null; }
}
function writeCookie(name: string, value: string, maxAge: number) {
  const hostname = window.location.hostname;
  const shared = hostname === "mycchub.app" || hostname.endsWith(".mycchub.app");
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${shared ? "; Domain=mycchub.app" : ""}${window.location.protocol === "https:" ? "; Secure" : ""}`;
}
export function readConsent(): Consent {
  const choice = cookieValue(CONSENT_COOKIE);
  return choice === "granted" || choice === "denied" ? choice : null;
}
function readAttribution(): Attribution | null {
  if (readConsent() !== "granted") return null;
  try { return approvedAttribution(JSON.parse(cookieValue(ATTRIBUTION_COOKIE) || "null")); } catch { return null; }
}
let landing: Attribution | null | undefined;
export function prepareTag() {
  if (!validId(GA_ID) || !publicUrl(window.location.href)) return;
  // Approved initial source/medium may be held in memory before permission;
  // no cookie, Google script, or event exists until the user grants consent.
  if (landing === undefined) landing = attributionFromUrl(window.location.href);
  if (readConsent() !== "granted") return;
  // Called in layout effect, before next/script's afterInteractive effect.
  window.dataLayer ||= [];
  // eslint-disable-next-line prefer-rest-params -- Google's gtag bootstrap queues arguments objects.
  window.gtag ||= function () { window.dataLayer!.push(arguments); };
  const attribution = landing || readAttribution();
  if (attribution) writeCookie(ATTRIBUTION_COOKIE, JSON.stringify(attribution), 1800);
}
const browserRuntime: Runtime = {
  snapshot: () => ({ url: window.location.href, referrer: document.referrer, consent: readConsent(), attribution: readAttribution() }),
  disable: (disabled) => {
    if (validId(GA_ID)) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = disabled;
  },
  emit: (...args) => window.gtag?.(...args),
};
export const analytics = createAnalytics(GA_ID, browserRuntime);
export function setConsent(choice: Exclude<Consent, null>) {
  if (choice !== "granted" && choice !== "denied") return;
  // Disable synchronously before notifying React or navigating.
  browserRuntime.disable(true);
  writeCookie(CONSENT_COOKIE, choice, 15552000);
  if (choice === "denied") { writeCookie(ATTRIBUTION_COOKIE, "", 0); landing = undefined; }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}
export function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("focus", callback);
  // Consent is shared across sibling hosts and tabs, without localStorage.
  const interval = window.setInterval(callback, 1000);
  return () => { window.removeEventListener(CONSENT_EVENT, callback); window.removeEventListener("focus", callback); window.clearInterval(interval); };
}
export function trackCta(cta: Cta) {
  try { return analytics.trackCta(cta); } catch { return false; }
}
