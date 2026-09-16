import type { MetadataRoute } from "next";
import { SITE_URL, marketingPaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return marketingPaths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
