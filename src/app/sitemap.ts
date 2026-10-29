import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aaranyamistyvalleyresort.com";
  const currentDate = "2026-10-28T00:00:00.000Z";

  const routes = [
    "",
    "/rooms",
    "/gallery",
    "/about",
    "/services",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
