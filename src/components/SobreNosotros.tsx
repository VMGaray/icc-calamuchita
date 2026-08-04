"use client";

import { motion } from "framer-motion";

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            SOBRE NOSOTROS
          </h2>
          <p className="text-muted sm:text-lg">
            ICC Calamuchita es una empresa del Valle de Calamuchita dedicada
            al movimiento de suelos, la construcción de piletas y el
            tratamiento de aguas residuales. Trabajamos con maquinaria propia
            para acompañar cada obra de principio a fin, con un servicio
            prolijo y adaptado a las necesidades de cada cliente.
          </p>

          <ul className="flex flex-col gap-2 text-left text-muted sm:text-lg">
            <li>• Movimiento de suelos</li>
            <li>• Construcción de piletas</li>
            <li>• Tratamiento de aguas residuales</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="flex h-56 w-56 items-center justify-center rounded-full border border-border bg-surface shadow-[0_0_50px_rgba(212,82,10,0.15)] sm:h-72 sm:w-72">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-24 w-24 text-accent-orange sm:h-32 sm:w-32"
            >
              <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
