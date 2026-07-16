import type { MetadataRoute } from "next";
import { site, locations } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
const staticRoutes = ["","/about","/services","/team","/locations","/contact","/faqs","/book-online"];
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [...staticRoutes, ...Object.keys(servicePages).map((x) => `/${x}`), ...locations.map((l) => `/${l.slug}`)];
  return urls.map((path) => ({
    url: `${site.url}${path}`, lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("newcastle") || path.startsWith("/physiotherapy-") ? 0.9 : 0.7,
  }));
}
