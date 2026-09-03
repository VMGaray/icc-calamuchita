"use client";

import { motion } from "framer-motion";
import WhatsappButton from "./WhatsappButton";

export default function Contacto() {
  return (
    <section id="contacto" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-lg border border-border bg-surface p-10 text-center"
      >
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          CONTACTO
        </h2>
        <p className="text-muted sm:text-lg">
          Contanos tu proyecto y te respondemos a la brevedad.
        </p>

        <WhatsappButton variant="green" className="text-lg">
          Escribinos: 3546 535551
        </WhatsappButton>

        <div className="flex flex-col gap-2 text-foreground">
          <p>
            <span className="text-muted">Instagram:</span>{" "}
            <a
              href="https://instagram.com/icccalamuchita"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#8a5a00] transition-colors hover:text-[#8a5a00]/80"
            >
              @icccalamuchita
            </a>
          </p>
          
          <p className="text-muted">
            Zona de trabajo: Valle de Calamuchita
          </p>
        </div>
      </motion.div>
    </section>
  );
}
