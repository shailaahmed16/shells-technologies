import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Keep all indexable public routes discoverable.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services/web-development",
    "/services/saas-development",
    "/services/ui-ux-design",
    "/services/technical-seo",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
