"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/logo_charlie.jpeg";
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
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 -z-10 bg-black/60" />

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_40px_rgba(0,0,0,0.5)] sm:h-40 sm:w-40"
      >
        <Image
          src={logo}
          alt="Logo Steel Mafa"
          width={140}
          height={140}
          priority
          className="h-28 w-28 object-contain sm:h-36 sm:w-36"
        />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col gap-3"
      >
        <h1 className="font-display text-7xl tracking-wide text-foreground sm:text-9xl">
          STEEL <span className="text-accent-orange">MAFA</span>
        </h1>
        <p className="text-lg text-muted sm:text-xl">
          Hierro, precisión y calidad
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
