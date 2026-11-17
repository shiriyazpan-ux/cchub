// Shared social-share image. Next.js merges metadata shallowly, so every page
// that defines its own `openGraph` must list the image again.
export const SITE_URL = "https://web.mycchub.app";

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "CCHUB · די לחפש. תתחילו לנהל. מערכת לניהול לקוחות, משימות ומידע עסקי",
};
