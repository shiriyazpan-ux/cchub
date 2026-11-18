"use client";

import { useLayoutEffect } from "react";

// The root layout serves every page as <html lang="he" dir="rtl">. The one English
// page sets its own language and direction: before first paint through the inline
// script in /en, and here on client-side navigation. Leaving the page restores Hebrew.
export default function DocumentLanguage({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    return () => { root.lang = "he"; root.dir = "rtl"; };
  }, [lang, dir]);
  return null;
}
