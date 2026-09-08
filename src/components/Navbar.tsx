"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#destacados", label: "Destacados" },
  // Sección Galería desactivada por ahora — descomentar junto con <Galeria /> en page.tsx.
  // { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // El navbar se mantiene oscuro como contraste contra el resto amarillo
    // y para que el logo horizontal (texto negro) se lea bien.
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center">
          <Image
            src="/icc-logo-horizontal-white.png"
            alt="ICC - Ing. Carbone Construcciones"
            width={1600}
            height={414}
            priority
            className="h-11 w-auto md:h-12"
            style={{ width: "auto" }}
          />
        </a>

        <ul className="hidden gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-neutral-300 transition-colors hover:text-white lg:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-[#0a0a0a] px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
