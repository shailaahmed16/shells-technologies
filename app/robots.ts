import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Allow search crawlers to index public pages and point them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
