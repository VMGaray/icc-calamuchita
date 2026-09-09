import type { MetadataRoute } from "next";

// Requerido por `output: 'export'`: se genera un robots.txt estático en el build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://icc-calamuchita.com.ar/sitemap.xml",
  };
}
