import type { Metadata } from "next";
import { Inter, Big_Shoulders_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fuente stencil sólo para títulos grandes (clase font-display).
const bigShouldersStencil = Big_Shoulders_Stencil({
  variable: "--font-stencil",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
  // Google no publica métricas para esta fuente; evita el warning de fallback.
  adjustFontFallback: false,
});

const siteTitle =
  "ICC Calamuchita | Movimiento de suelos, piscinas, tratamiento de aguas residuales y redes de agua";
const siteDescription =
  "ICC Calamuchita - Ing. Carbone Construcciones. Movimiento de suelos, construcción de piscinas, tratamiento de aguas residuales y redes de agua en el Valle de Calamuchita.";
const siteUrl = "https://icc-calamuchita.com.ar";
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "ICC Calamuchita",
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${bigShouldersStencil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <GridBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
