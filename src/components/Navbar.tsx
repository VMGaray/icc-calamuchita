"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#destacados", label: "Destacados" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/icc-logo.webp"
            alt="ICC - Ing. Carbone Construcciones"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-display text-2xl tracking-wide text-foreground">
            ICC CALAMUCHITA
          </span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent-orange"
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
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-muted transition-colors hover:text-accent-orange"
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
