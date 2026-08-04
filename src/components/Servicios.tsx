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
    title: "Cartelería metálica",
    description:
      "Diseño y fabricación de carteles en chapa y hierro para comercios, campos y viviendas.",
    icon: (
      <IconWrapper>
        <rect x="3" y="6" width="18" height="10" rx="1" />
        <path d="M8 20h8M12 16v4" />
      </IconWrapper>
    ),
  },
  {
    title: "Corte CNC por plasma",
    description:
      "Cortes de precisión en metal a partir de diseños digitales, para piezas y detalles a medida.",
    icon: (
      <IconWrapper>
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </IconWrapper>
    ),
  },
  {
    title: "Soldadura",
    description:
      "Hierro, aluminio, inoxidable, bronce y cobre: uniones resistentes y prolijas para todo tipo de proyectos.",
    icon: (
      <IconWrapper>
        <path d="M3 21 21 3M14 3h7v7M7 14l3 3" />
      </IconWrapper>
    ),
  },
  {
    title: "Rejas y portones",
    description:
      "Fabricación e instalación de rejas y portones a medida, combinando seguridad y diseño.",
    icon: (
      <IconWrapper>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M8 4v16M13 4v16M18 4v16M3 10h18" />
      </IconWrapper>
    ),
  },
  {
    title: "Escaleras metálicas",
    description:
      "Escaleras interiores y exteriores en hierro, con estructura resistente y terminaciones prolijas.",
    icon: (
      <IconWrapper>
        <path d="M4 20h4v-4h4v-4h4v-4h4" />
      </IconWrapper>
    ),
  },
  {
    title: "Estructuras a medida",
    description:
      "Estructuras metálicas para naves, techos y proyectos especiales, diseñadas a tu necesidad.",
    icon: (
      <IconWrapper>
        <path d="M4 21V9l8-5 8 5v12" />
        <path d="M4 21h16M9 21v-6h6v6" />
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
            Trabajos en metal con precisión y terminaciones de calidad.
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
