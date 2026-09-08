"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Servicio = {
  title: string;
  description: string;
  icon: React.ReactNode;
  explainer?: {
    title: string;
    image: { src: string; alt: string };
    steps: { heading: string; body: string }[];
  };
  video?: {
    embedUrl: string;
    infoUrl: string;
  };
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
    explainer: {
      title:
        "Cómo funciona nuestro sistema de Tratamiento de Aguas Residuales",
      image: {
        src: "/gallery/tratamiento-residuales/tratamiento-01.webp",
        alt: "Diagrama en corte de una vivienda mostrando las etapas del sistema de tratamiento de aguas residuales",
      },
      steps: [
        {
          heading: "Separación y Descomposición Natural",
          body: "donde se separan los sólidos más gruesos y se inicia la digestión anaeróbica (en ausencia de oxígeno) de la materia orgánica.",
        },
        {
          heading: "Tratamiento Biológico",
          body: "donde los microbios y microorganismos forman láminas biológicas dentro del reactor biológico. Utiliza discos móviles para facilitar el contacto entre el agua y la biomasa que permiten eliminar contaminantes orgánicos de manera eficiente y sostenible.",
        },
        {
          heading: "Filtración en el Suelo",
          body: "El agua previamente tratada se distribuye en un campo de infiltración a través de los túneles de infiltración, dispuestos sobre un lecho de piedras, arena o grava. Al percolar por este material filtrante, se promueve la oxidación de compuestos nitrogenados, iniciando el proceso de nitrificación. Finalmente, el agua filtrada se infiltra en el suelo, donde se completa de manera natural el proceso de depuración, garantizando una descarga limpia y segura para el medio ambiente.",
        },
      ],
    },
    video: {
      embedUrl: "https://www.youtube.com/embed/sDtqv5k9PPw",
      infoUrl: "https://youtu.be/sDtqv5k9PPw?si=Z2kcpp0KLe7yFTK_",
    },
  },
];

export default function Servicios() {
  const [selected, setSelected] = useState<Servicio | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          {servicios.map((servicio, i) => {
            const Wrapper = servicio.video ? motion.button : motion.div;
            return (
              <Wrapper
                key={servicio.title}
                type={servicio.video ? "button" : undefined}
                onClick={
                  servicio.video ? () => setSelected(servicio) : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 text-left transition-colors hover:border-accent-orange ${
                  servicio.video ? "cursor-pointer" : ""
                }`}
              >
                {servicio.icon}
                <h3 className="text-lg font-semibold text-foreground">
                  {servicio.title}
                </h3>
                <p className="text-sm text-muted">{servicio.description}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected?.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-accent-orange hover:text-background"
              >
                ✕
              </button>

              <div className="flex flex-col gap-4 overflow-y-auto p-4 sm:p-6">
                <h3 className="pr-10 text-lg font-semibold text-foreground">
                  {selected.title}
                </h3>

                {selected.explainer && (
                  <div className="flex flex-col gap-4">
                    <h4 className="text-base font-semibold text-foreground">
                      {selected.explainer.title}
                    </h4>

                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-border bg-black/20">
                      <Image
                        src={selected.explainer.image.src}
                        alt={selected.explainer.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42rem"
                        className="object-contain"
                      />
                    </div>

                    <ol className="flex flex-col gap-3">
                      {selected.explainer.steps.map((step) => (
                        <li key={step.heading} className="text-sm text-muted">
                          <span className="font-semibold text-foreground">
                            {step.heading}
                          </span>{" "}
                          — {step.body}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={selected.video.embedUrl}
                    title={selected.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <a
                  href={selected.video.infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 self-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-orange hover:text-accent-orange sm:self-start"
                >
                  Conocé más sobre Waterplast
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
