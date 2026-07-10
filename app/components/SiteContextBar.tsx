"use client";

import { usePathname } from "next/navigation";

const articles = [
  { href: "/articles/business-password-management", label: "ניהול סיסמאות" },
  { href: "/articles/client-digital-assets", label: "נכסים דיגיטליים" },
  { href: "/articles/crm-for-small-business", label: "CRM לעסק קטן" },
  { href: "/articles/hebrew-client-management-system", label: "ניהול לקוחות בעברית" },
  { href: "/articles/import-excel-to-client-system", label: "יבוא מאקסל" },
  { href: "/articles/internal-knowledge-base", label: "מרכז ידע" },
  { href: "/articles/make-zapier-business-automation", label: "אוטומציות" },
  { href: "/articles/manage-long-term-clients", label: "לקוחות קבועים" },
  { href: "/articles/stop-searching-business-information", label: "סוף לחיפושים" },
  { href: "/articles/task-time-costs", label: "זמן ועלויות" },
  { href: "/articles/tasks-by-client", label: "משימות לפי לקוח" },
  { href: "/articles/user-permissions-business", label: "הרשאות משתמשים" },
];

const tutorials = [
  { href: "/tutorials/add-client", label: "הוספת לקוח" },
  { href: "/tutorials/import-excel", label: "יבוא מאקסל" },
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

function getContext(pathname: string) {
  if (pathname.startsWith("/articles/")) {
    return {
      title: "מאמרים",
      homeHref: "/articles",
      homeLabel: "כל המאמרים",
      items: articles,
    };
  }

  if (pathname.startsWith("/tutorials/")) {
    return {
      title: "מדריכים",
      homeHref: "/tutorials",
      homeLabel: "כל המדריכים",
      items: tutorials,
    };
  }

  if (pathname === "/features") {
    return {
      title: "יכולות המערכת",
      homeHref: "/features",
      homeLabel: "יכולות המערכת",
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
      <div className="cchub-container py-4">
        <div className="flex flex-wrap items-center gap-2 text-sm font-black text-slate-500">
          <a className="text-blue-700 hover:text-blue-900" href="/">
            עמוד הבית
          </a>

          <span className="text-slate-300">/</span>

          <a className="text-blue-700 hover:text-blue-900" href={context.homeHref}>
            {context.title}
          </a>

          {activeItem ? (
            <>
              <span className="text-slate-300">/</span>

              <details className="relative inline-block">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 shadow-sm transition hover:bg-blue-50">
                  <span>{activeItem.label}</span>
                  <span className="text-xs">▼</span>
                </summary>

                <div className="absolute right-0 top-full z-[70] mt-2 cchub-dropdown-menu max-h-80 w-72 overflow-y-auto rounded-2xl border border-blue-100 bg-white p-2 shadow-xl">
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
                            ? "bg-blue-600 !text-white hover:bg-blue-700"
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
          ) : (
            <>
              <span className="text-slate-300">/</span>
              <span className="text-[#061A44]">{context.title}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
