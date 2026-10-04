"use client";

import type { ReactNode } from "react";
import { trackCta } from "../lib/analytics";

export default function AnalyticsLink({ href, className, location, children }: {
  href: string; className: string; location: "pricing_monthly" | "pricing_yearly" | "pricing_footer"; children: ReactNode;
}) {
  return <a href={href} className={className} onClick={() => {
    // Extract only checked plan/billing enums; never send href or visible text.
    try {
      const url = new URL(href, "https://web.mycchub.app");
      trackCta({ location, plan: url.searchParams.get("plan") || undefined, billing: url.searchParams.get("billing") || undefined });
    } catch { /* Analytics must never interrupt navigation. */ }
  }}>{children}</a>;
}
