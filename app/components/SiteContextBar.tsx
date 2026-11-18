"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type ContextItem = {
  href: string;
  label: string;
};

type PageContext = {
  title: string;
  homeHref: string;
  homeLabel: string;
  items: ContextItem[];
};

const articles: ContextItem[] = [
  { href: "/articles/business-password-management", label: "ניהול סיסמאות" },
  { href: "/articles/client-digital-assets", label: "נכסים דיגיטליים" },
  { href: "/articles/crm-for-small-business", label: "CRM לעסק קטן" },
  { href: "/articles/hebrew-client-management-system", label: "ניהול לקוחות בעברית" },
  { href: "/articles/import-excel-to-client-system", label: "ייבוא מאקסל" },
  { href: "/articles/internal-knowledge-base", label: "מרכז ידע" },
  { href: "/articles/make-zapier-business-automation", label: "אוטומציות" },
  { href: "/articles/manage-long-term-clients", label: "לקוחות קבועים" },
  { href: "/articles/stop-searching-business-information", label: "סוף לחיפושים" },
  { href: "/articles/task-time-costs", label: "זמן ועלויות" },
  { href: "/articles/tasks-by-client", label: "משימות לפי לקוח" },
  { href: "/articles/user-permissions-business", label: "הרשאות משתמשים" },
];

const tutorials: ContextItem[] = [
  { href: "/tutorials/add-client", label: "הוספת לקוח" },
  { href: "/tutorials/import-excel", label: "ייבוא מאקסל" },
  { href: "/tutorials/add-task", label: "הוספת משימה" },
  { href: "/tutorials/time-costs", label: "זמן ועלויות" },
  { href: "/tutorials/close-task", label: "סגירת משימה" },
  { href: "/tutorials/daily-workflow", label: "עבודה יומית" },
  { href: "/tutorials/client-documents", label: "מסמכי לקוח" },
  { href: "/tutorials/save-passwords", label: "שמירת סיסמאות" },
  { href: "/tutorials/digital-assets", label: "נכסים דיגיטליים" },
  { href: "/tutorials/custom-terms", label: "התאמת מונחים" },
  { href: "/tutorials/make-zapier", label: "Make / Zapier" },
  { href: "/tutorials/user-permissions", label: "הרשאות משתמשים" },
];

const simplePages: ContextItem[] = [
  { href: "/features", label: "יכולות המערכת" },
  { href: "/pricing", label: "מחירים" },
  { href: "/faq", label: "שאלות נפוצות" },
];

function getContext(pathname: string): PageContext | null {
  if (pathname === "/") return null;

  // Known pages only. An unknown address such as /tutorials/nope is the static 404,
  // rendered on the server without a bar; showing one in the browser caused a
  // hydration error (React #418).
  const known = (home: string, items: ContextItem[]) =>
    pathname === home || items.some((item) => item.href === pathname);

  if (known("/articles", articles)) {
    return {
      title: "מאמרים",
      homeHref: "/articles",
      homeLabel: "כל המאמרים",
      items: articles,
    };
  }

  if (known("/tutorials", tutorials)) {
    return {
      title: "מדריכים",
      homeHref: "/tutorials",
      homeLabel: "כל המדריכים",
      items: tutorials,
    };
  }

  const simplePage = simplePages.find((page) => page.href === pathname);

  if (simplePage) {
    return {
      title: simplePage.label,
      homeHref: simplePage.href,
      homeLabel: simplePage.label,
      items: [],
    };
  }

  return null;
}

export default function SiteContextBar() {
  const pathname = usePathname() || "/";
  const context = getContext(pathname);

  if (!context) return null;

  const activeItem = context.items.find((item) => item.href === pathname);

  return (
    <section className="border-b border-blue-100 bg-[#F6FAFF]">
      <div className="cchub-container relative py-3">
        <div className="flex flex-wrap items-center gap-2 text-sm font-black text-slate-500">
          <Link className="text-blue-700 hover:text-blue-900" href="/">
            עמוד הבית
          </Link>

          <span className="text-slate-300">/</span>

          <a className="text-[#061A44] hover:text-blue-700" href={context.homeHref}>
            {context.title}
          </a>

          {activeItem && (
            <>
              <span className="text-slate-300">/</span>

              <details className="inline-block sm:relative">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 shadow-sm transition hover:bg-blue-50">
                  <span>{activeItem.label}</span>
                  <span className="text-xs">▼</span>
                </summary>

                <div className="absolute inset-x-0 top-full z-[70] mt-2 cchub-dropdown-menu max-h-80 w-auto overflow-y-auto sm:inset-x-auto sm:right-0 sm:w-72 rounded-2xl border border-blue-100 bg-white p-2 shadow-xl">
                  <div className="sticky top-0 z-10 mb-1 rounded-lg bg-white/95 py-1 text-center text-xs font-black text-blue-300">▲</div>

                  <a
                    href={context.homeHref}
                    className="block rounded-xl px-4 py-3 text-sm font-black text-blue-700 hover:bg-blue-50"
                  >
                    {context.homeLabel}
                  </a>

                  <div className="my-1 border-t border-blue-50" />

                  {context.items.map((item) => {
                    const active = item.href === pathname;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`block rounded-xl px-4 py-3 text-sm font-black transition ${
                          active
                            ? "bg-[#0B7A70] !text-white hover:bg-[#08665D]"
                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}

                  <div className="sticky bottom-0 z-10 mt-1 rounded-lg bg-white/95 py-1 text-center text-xs font-black text-blue-300">▼</div>
                </div>
              </details>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
