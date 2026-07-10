import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://www.mycchub.app"),
  title: {
    default: "CCHUB | מערכת לניהול לקוחות, משימות, מסמכים וסיסמאות",
    template: "%s | CCHUB",
  },
  description:
    "CCHUB היא מערכת בעברית ובאנגלית לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע במקום אחד. התחילו 7 ימי ניסיון חינם.",
  keywords: [
    "מערכת לניהול לקוחות",
    "CRM בעברית",
    "ניהול משימות",
    "ניהול מסמכים",
    "ניהול סיסמאות",
    "ניהול נכסים דיגיטליים",
    "מרכז ידע",
    "יבוא מאקסל",
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
    title: "CCHUB | מערכת לניהול לקוחות, משימות, מסמכים וסיסמאות",
    description:
      "נהלו לקוחות, משימות, מסמכים, סיסמאות, נכסים דיגיטליים וידע במקום אחד — פשוט, נקי והגיוני.",
    url: "https://www.mycchub.app",
    siteName: "CCHUB",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCHUB | מערכת לניהול לקוחות, משימות, מסמכים וסיסמאות",
    description:
      "מערכת אחת לניהול לקוחות, משימות, מסמכים, סיסמאות, נכסים וידע. 7 ימי ניסיון חינם.",
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
        {children}

        <footer className="cchub-footer">
          <div className="cchub-container flex flex-col items-center justify-between gap-4 text-sm text-blue-100 md:flex-row">
            <div className="font-en font-bold">© 2026 CCHUB</div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="/">עמוד הבית</a>
              <a href="/features">יכולות המערכת</a>
              <a href="/pricing">מחירים</a>
              <a href="/faq">שאלות נפוצות</a>
              <a href="/terms">תנאי שימוש</a>
              <a href="/privacy">מדיניות פרטיות</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
