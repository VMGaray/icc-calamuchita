"use client";

import { motion } from "framer-motion";

type Servicio = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-accent-orange"
    >
      {children}
    </svg>
  );
}

const servicios: Servicio[] = [
  {
    title: "Movimiento de suelos",
    description:
      "Excavación, nivelación y relleno con maquinaria propia para obras y proyectos en todo el Valle de Calamuchita.",
    icon: (
      <IconWrapper>
        <path d="M2 20h20M4 20l3-7h4l2 4h4l3-4" />
        <path d="M9 13V7l3-3 3 3v6" />
      </IconWrapper>
    ),
  },
  {
    title: "Piletas",
    description:
      "Construcción y mantenimiento de piletas, desde la excavación hasta la terminación final.",
    icon: (
      <IconWrapper>
        <path d="M3 16c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0" />
        <rect x="4" y="4" width="16" height="10" rx="1.5" />
      </IconWrapper>
    ),
  },
  {
    title: "Tratamiento de aguas residuales",
    description:
      "Diseño e instalación de sistemas de saneamiento y tratamiento de efluentes para viviendas y establecimientos.",
    icon: (
      <IconWrapper>
        <path d="M12 2c3 4 5 7.2 5 10a5 5 0 0 1-10 0c0-2.8 2-6 5-10Z" />
        <path d="M8 21h8" />
      </IconWrapper>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            NUESTROS SERVICIOS
          </h2>
          <p className="mt-3 text-muted">
            Movimiento de suelos, piletas y saneamiento en el Valle de Calamuchita.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent-orange"
            >
              {servicio.icon}
              <h3 className="text-lg font-semibold text-foreground">
                {servicio.title}
              </h3>
              <p className="text-sm text-muted">{servicio.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
