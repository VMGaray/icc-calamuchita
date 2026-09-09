"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WhatsappButton from "./WhatsappButton";

export default function Hero() {
  // Cuando el video termina, se congela en esta foto de fondo y no vuelve a
  // reproducirse (sólo se reinicia si el usuario recarga la página).
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.7),rgba(10,10,10,0.7))]" />

      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.webp"
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
      />

      <AnimatePresence>
        {videoEnded && (
          <motion.div
            key="hero-equipos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src="/videos/hero-equipos.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay oscuro: 60% con el video; se oscurece a 72% cuando queda fija
          la foto final (más detalle) para mantener la legibilidad del título. */}
      <motion.div
        className="absolute inset-0 -z-10 bg-black"
        initial={false}
        animate={{ opacity: videoEnded ? 0.72 : 0.6 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px]"
      >
        <Image
          src="/icc-logo-horizontal-white.png"
          alt="ICC - Ing. Carbone Construcciones"
          width={1600}
          height={414}
          priority
          className="h-auto w-full"
        />
      </motion.div>

      {/* Hero excepción: fondo de video con overlay oscuro y texto claro
          (no aplica el esquema amarillo global). */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "Movimiento de suelos",
          "Piscinas",
          "Tratamiento de aguas residuales",
          "Redes de agua",
        ].map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            className="rounded-full border border-[#f0b000]/40 bg-[#f0b000]/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm sm:text-base"
          >
            {label}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <WhatsappButton className="text-lg" />
      </motion.div>

      <motion.a
        href="#servicios"
        aria-label="Scroll hacia servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
