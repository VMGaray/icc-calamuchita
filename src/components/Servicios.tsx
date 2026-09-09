"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Servicio = {
  title: string;
  description: string;
  thumb: { src: string; alt: string };
  brand?: {
    logo: { src: string; alt: string };
    text: string;
    image: { src: string; alt: string };
    link: { href: string; label: string };
  };
  explainer?: {
    title: string;
    image: { src: string; alt: string };
    steps: { heading: string; body: string }[];
  };
  detail?: {
    image: { src: string; alt: string };
  };
  video?: {
    embedUrl: string;
    infoUrl: string;
  };
};

const servicios: Servicio[] = [
  {
    title: "Movimiento de suelos",
    description:
      "Excavación, nivelación y relleno con maquinaria propia para obras y proyectos en todo el Valle de Calamuchita.",
    thumb: {
      src: "/gallery/movimiento-suelos/movimiento-a.webp",
      alt: "Maquinaria de ICC Calamuchita realizando movimiento de suelos",
    },
    detail: {
      image: {
        src: "/gallery/movimiento-suelos/movimiento-a.webp",
        alt: "Trabajo de movimiento de suelos realizado por ICC Calamuchita",
      },
    },
  },
  {
    title: "Piscinas",
    description:
      "Construcción y mantenimiento de piscinas, desde la excavación hasta la terminación final.",
    thumb: {
      src: "/brand/piletas-moldear.webp",
      alt: "Piscina construida con sistema Moldear",
    },
    brand: {
      logo: {
        src: "/brand/moldear-logo-new.png",
        alt: "Moldear Piscinas",
      },
      text: "Trabajamos con Moldear Piscinas, que garantiza sus productos a través de la mejora continua y procesos certificados por normativas internacionales.",
      image: {
        src: "/brand/piletas-moldear.webp",
        alt: "Piscina construida con sistema Moldear",
      },
      link: {
        href: "https://www.moldear.com.ar/",
        label: "Conocé más sobre Moldear Piscinas",
      },
    },
  },
  {
    title: "Tratamiento de aguas residuales",
    description:
      "Diseño e instalación de sistemas de saneamiento y tratamiento de efluentes para viviendas y establecimientos.",
    thumb: {
      src: "/gallery/tratamiento-residuales/tratamiento-01.webp",
      alt: "Sistema de tratamiento de aguas residuales",
    },
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
  {
    title: "Redes de agua",
    description:
      "Instalación y mantenimiento de redes de agua para obras y proyectos en el Valle de Calamuchita.",
    thumb: {
      src: "/brand/redes-agua-01.webp",
      alt: "Instalación de redes de agua",
    },
    detail: {
      image: {
        src: "/brand/redes-agua-01.webp",
        alt: "Instalación de redes de agua realizada por ICC Calamuchita",
      },
    },
  },
];

function hasModal(servicio: Servicio) {
  return Boolean(
    servicio.brand ||
      servicio.explainer ||
      servicio.video ||
      servicio.detail
  );
}

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
            Movimiento de suelos, piscinas, tratamiento de aguas residuales y
            redes de agua en el Valle de Calamuchita.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio, i) => {
            const clickable = hasModal(servicio);
            const Wrapper = clickable ? motion.button : motion.div;
            return (
              <Wrapper
                key={servicio.title}
                type={clickable ? "button" : undefined}
                onClick={clickable ? () => setSelected(servicio) : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { duration: 0.3, delay: 0 },
                }}
                className={`flex flex-col overflow-hidden rounded-lg border border-border bg-surface text-left shadow-md transition-[border-color,box-shadow] duration-300 hover:border-accent-orange hover:shadow-2xl ${
                  clickable ? "cursor-pointer" : ""
                }`}
              >
                <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={servicio.thumb.src}
                    alt={servicio.thumb.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {servicio.title}
                  </h3>
                  <p className="text-sm text-muted">{servicio.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && hasModal(selected) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-black/85 px-4 pb-8 pt-28"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[calc(100dvh-9rem)] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-surface"
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

                {selected.detail && (
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-border bg-black/20">
                      <Image
                        src={selected.detail.image.src}
                        alt={selected.detail.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42rem"
                        className="object-cover"
                      />
                    </div>

                    <p className="text-sm text-muted">{selected.description}</p>
                  </div>
                )}

                {selected.brand && (
                  <div className="flex flex-col gap-4">
                    <div className="relative h-24 w-full overflow-hidden rounded-lg bg-[#1C9AD6]">
                      <Image
                        src={selected.brand.logo.src}
                        alt={selected.brand.logo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42rem"
                        className="object-contain p-4"
                      />
                    </div>

                    <p className="text-sm text-muted">{selected.brand.text}</p>

                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-border bg-black/20">
                      <Image
                        src={selected.brand.image.src}
                        alt={selected.brand.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42rem"
                        className="object-cover"
                      />
                    </div>

                    <a
                      href={selected.brand.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 self-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-orange hover:text-accent-orange sm:self-start"
                    >
                      {selected.brand.link.label}
                    </a>
                  </div>
                )}

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

                {selected.video && (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
