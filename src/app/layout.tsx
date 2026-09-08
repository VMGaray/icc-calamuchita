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

export const metadata: Metadata = {
  title: "ICC Calamuchita | Movimiento de suelos, piscinas y saneamiento",
  description:
    "ICC Calamuchita - Movimiento de suelos, construcción de piscinas y tratamiento de aguas residuales en el Valle de Calamuchita, Córdoba.",
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
