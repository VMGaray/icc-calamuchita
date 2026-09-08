"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            ICC Calamuchita — Ing. Carbone Construcciones — es una empresa del
            Valle de Calamuchita especializada en movimiento de suelos,
            construcción de piscinas y tratamiento de aguas residuales. Contamos
            con maquinaria propia y acompañamos cada proyecto de principio a
            fin, con un servicio prolijo, responsable y adaptado a las
            necesidades de cada cliente.
          </p>

          <ul className="flex flex-col gap-2 text-left text-muted sm:text-lg">
            <li>• Movimiento de suelos</li>
            <li>• Construcción de piscinas</li>
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
          <span className="relative block h-56 w-56 overflow-hidden rounded-full border border-border bg-surface shadow-[0_0_50px_rgba(212,82,10,0.15)] sm:h-72 sm:w-72">
            <Image
              src="/foto-nosotros.webp"
              alt="Equipo de ICC Calamuchita"
              fill
              sizes="(max-width: 640px) 14rem, 18rem"
              className="object-cover"
            />
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 max-w-6xl border-t border-border pt-12"
      >
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 text-center sm:p-8 md:text-left">
          <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            AL FRENTE DEL PROYECTO
          </h3>
          <p className="text-lg font-semibold text-foreground">
            Ing. César Carbone
          </p>
          <p className="text-muted sm:text-lg">
            Ingeniero Civil e Ingeniero Hidráulico (UTN Facultad Regional Rosario).
             Con más de 20 años de trayectoria como Jefe de Obra en proyectos de gran escala para empresas como YPF, Barrick Gold, POSCO, Livent, UPM y Yamana Gold, en obras de movimiento de suelos, fundaciones civiles y construcción de piscinas industriales en distintos puntos del país y la región. Hoy pone esa experiencia al servicio de cada proyecto en el Valle de Calamuchita.
          </p>
          <a
            href="https://www.linkedin.com/in/césar-carbone-b4778255/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de César Carbone"
            className="inline-flex items-center gap-2 self-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-orange hover:text-accent-orange md:self-start"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.4 7.5H6.9V18h2.7v-7.5Zm.18-2.68a1.57 1.57 0 0 0-1.53-1.57A1.57 1.57 0 1 0 8.26 9.4a1.57 1.57 0 0 0 1.52-1.58ZM18 13.4c0-2.5-1.33-3.66-3.11-3.66-1.44 0-2.08.79-2.44 1.35V10.5h-2.7c.04.76 0 7.5 0 7.5h2.7v-4.19c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.96 0 1.35.73 1.35 1.8V18H18v-4.6Z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
