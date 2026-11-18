import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteContextBar from "./components/SiteContextBar";
import SiteFooter from "./components/SiteFooter";
import Analytics from "./components/Analytics";
import { OG_IMAGE } from "./lib/seo";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web.mycchub.app"),
  title: {
    default: "CCHUB | מערכת לניהול לקוחות, משימות ומידע עסקי",
    template: "%s | CCHUB",
  },
  description:
    "CCHUB היא מערכת בעברית ובאנגלית לניהול לקוחות, משימות, נכסים דיגיטליים ומידע עסקי, עם יכולות נוספות לפי החבילה. התחילו 14 ימי ניסיון חינם.",
  keywords: [
    "מערכת לניהול לקוחות",
    "CRM בעברית",
    "ניהול משימות",
    "ניהול מסמכים",
    "ניהול סיסמאות",
    "ניהול נכסים דיגיטליים",
    "מרכז ידע",
    "ייבוא מאקסל",
    "ייצוא אקסל",
    "Make",
    "Zapier",
    "Customer Control Hub",
    "client management system",
  ],
  alternates: {
    canonical: "/",
    languages: {
      he: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "CCHUB | מערכת לניהול לקוחות, משימות ומידע עסקי",
    description:
      "נהלו לקוחות, משימות, נכסים דיגיטליים ומידע עסקי במקום אחד, עם יכולות נוספות לפי החבילה.",
    url: "https://web.mycchub.app",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCHUB | מערכת לניהול לקוחות, משימות ומידע עסקי",
    description:
      "מערכת אחת לניהול לקוחות, משימות, נכסים ומידע עסקי. 14 ימי ניסיון חינם.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <Analytics />
        <SiteHeader />
        <SiteContextBar />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
