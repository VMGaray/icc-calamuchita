# ICC Calamuchita

Landing institucional de **ICC Calamuchita – Ing. Carbone Construcciones**: movimiento de
suelos, construcción de piscinas, tratamiento de aguas residuales y redes de agua en el
Valle de Calamuchita, Córdoba.

Sitio de una sola página con navegación por secciones ancla (`#hero`, `#servicios`,
`#nosotros`, `#contacto`) y contacto directo por WhatsApp.

## Stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Runtime | React 19 |
| Estilos | Tailwind CSS v4 (config vía `@theme` en `src/app/globals.css`) |
| Animaciones | Framer Motion |
| Carrusel | Embla Carousel |
| Lenguaje | TypeScript |
| Salida | Export estático (`output: "export"` → carpeta `out/`) |

> **Nota:** este proyecto usa una versión de Next.js con cambios de API respecto de
> releases anteriores. Ante la duda, consultá la guía correspondiente en
> `node_modules/next/dist/docs/` antes de escribir código. Ver `AGENTS.md`.

## Requisitos

- Node.js ≥ 20.9
- npm (o el gestor que prefieras)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción → genera el sitio estático en `out/` |
| `npm run start` | *No aplica* con `output: "export"`; servir `out/` con un host estático |
| `npm run lint` | ESLint |

Chequeo de tipos sin emitir:

```bash
npx tsc --noEmit
```

## Estructura

```
src/
  app/
    layout.tsx      Layout raíz: fuentes, metadata (SEO / Open Graph / Twitter), JSON-LD
    page.tsx        Composición de secciones de la home
    globals.css     Tokens de diseño (colores de marca) y base de Tailwind
    sitemap.ts      Genera /sitemap.xml (estático)
    robots.ts       Genera /robots.txt (estático)
  components/
    Navbar.tsx          Barra fija con menú mobile
    Hero.tsx            Portada con video de fondo que congela en foto al terminar
    Servicios.tsx       Grilla de servicios con modales (marca / explicativo / video / detalle)
    SobreNosotros.tsx   Sección "Nosotros"
    Galeria.tsx         Galería filtrable (desactivada en page.tsx por ahora)
    Contacto.tsx        Datos de contacto + WhatsApp
    WhatsappButton.tsx  Botón reutilizable de WhatsApp
    GridBackground.tsx  Fondo decorativo
    Footer.tsx
  data/
    gallery.ts      Categorías y rutas de imágenes de la galería
public/
  brand/            Logos e imágenes de marcas asociadas (Moldear, etc.)
  gallery/          Fotos de obra por categoría
  videos/           Video del hero y posters
  og-image.jpg      Imagen 1200×630 para previews en redes / WhatsApp
```

## Contenido

Los textos e imágenes de los servicios están definidos como datos dentro de cada
componente (por ejemplo, el array `servicios` en `src/components/Servicios.tsx`). Las
fotos de la galería se listan en `src/data/gallery.ts` y viven en `public/gallery/<categoría>/`.

La sección **Galería** está desactivada: para reactivarla, descomentar `<Galeria />` en
`src/app/page.tsx` y el link correspondiente en `src/components/Navbar.tsx`.

## SEO

- **Metadata** (title, description, Open Graph, Twitter Card) centralizada en
  `src/app/layout.tsx` mediante la API de metadata de Next.js.
- **Datos estructurados** JSON-LD (`schema.org/GeneralContractor`) inyectados en el
  `<body>` desde `layout.tsx`.
- **`sitemap.xml`** y **`robots.txt`** generados en build por `src/app/sitemap.ts` y
  `src/app/robots.ts`. Ambos declaran `export const dynamic = "force-static"`, requisito
  de `output: "export"`.
- URL canónica del sitio: `https://icc-calamuchita.com.ar`.

## Deploy

```bash
npm run build
```

Publicar el contenido de `out/` en cualquier hosting de estáticos (Vercel, Netlify,
Cloudflare Pages, S3, etc.). Las imágenes se sirven sin optimización de Next
(`images.unoptimized: true`).
