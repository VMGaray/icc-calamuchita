import type { MetadataRoute } from "next";

// Requerido por `output: 'export'`: se genera un sitemap.xml estático en el build.
export const dynamic = "force-static";

// Landing de una sola página con secciones ancla: solo la URL raíz.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://icc-calamuchita.com.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
