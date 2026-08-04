"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsappButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.7),rgba(10,10,10,0.7))]" />

      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 -z-10 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center justify-center"
        style={{
          width: "clamp(6rem, 18vw, 12.5rem)",
          height: "clamp(6rem, 18vw, 12.5rem)",
        }}
      >
        {/* rgba mirrors --accent-orange (#f0b000); box-shadow can't read a CSS var's alpha channel */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_70px_22px_rgba(240,176,0,0.35)]" />
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/icc-logo.webp"
            alt="ICC - Ing. Carbone Construcciones"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col gap-3"
      >
        <h1 className="font-display text-5xl tracking-wide text-foreground sm:text-7xl lg:text-8xl">
          ICC{" "}
          <span className="text-accent-orange [text-shadow:0_0_30px_rgba(240,176,0,0.45)]">
            CALAMUCHITA
          </span>
        </h1>
        <p className="text-lg text-muted sm:text-xl">
          Movimiento de suelo, piletas y saneamiento en el Valle de Calamuchita
        </p>
      </motion.div>

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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
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
