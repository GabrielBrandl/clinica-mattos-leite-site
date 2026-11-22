import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = [
    "",
    "/agendar",
    "/especialidades",
    "/blog",
    "/faq",
    "/privacidade",
    "/termos",
    "/cookies",
    "/reembolso",
    "/acessibilidade",
  ];

  const specialtyPaths = site.specialties.map((item) => ({
    url: `${base}/especialidades/${item.slug}`,
    lastModified: new Date("2026-11-16"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPaths = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date("2026-11-16"),
      changeFrequency:
        path === "" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/agendar" ? 0.9 : 0.6,
    })),
    ...specialtyPaths,
    ...blogPaths,
  ];
}
