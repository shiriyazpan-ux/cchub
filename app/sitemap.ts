import type { MetadataRoute } from "next";

const baseUrl = "https://www.mycchub.app";

const routes = [
  "",
  "/features",
  "/pricing",
  "/faq",
  "/tutorials",
  "/tutorials/add-client",
  "/tutorials/import-excel",
  "/tutorials/add-task",
  "/tutorials/time-costs",
  "/tutorials/close-task",
  "/tutorials/daily-workflow",
  "/tutorials/client-documents",
  "/tutorials/save-passwords",
  "/tutorials/digital-assets",
  "/tutorials/custom-terms",
  "/tutorials/make-zapier",
  "/tutorials/user-permissions",
  "/articles",
  "/articles/hebrew-client-management-system",
  "/articles/stop-searching-business-information",
  "/articles/tasks-by-client",
  "/articles/crm-for-small-business",
  "/articles/manage-long-term-clients",
  "/articles/import-excel-to-client-system",
  "/articles/business-password-management",
  "/articles/internal-knowledge-base",
  "/articles/client-digital-assets",
  "/articles/task-time-costs",
  "/articles/make-zapier-business-automation",
  "/articles/user-permissions-business",
  "/privacy",
  "/terms",
  "/en",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/articles/") || route.includes("/tutorials/") ? 0.7 : 0.8,
  }));
}
