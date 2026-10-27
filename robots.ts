import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://web.mycchub.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
