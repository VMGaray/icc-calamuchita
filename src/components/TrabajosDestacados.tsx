"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const trabajos = [
  {
    id: 1,
    title: "Portón corredizo a medida",
    image: "/gallery/portones/portones-02.webp",
  },
  {
    id: 2,
    title: "Reja protectora exterior",
    image: "/gallery/estructuras/estruc-03.webp",
  },
  {
    id: 3,
    title: "Cartelería para comercio",
    image: "/gallery/carteleria/cartel-01.webp",
  },
  {
    id: 4,
    title: "Estructura de techo",
    image: "/gallery/estructuras/estruc-01.webp",
  },
  {
    id: 5,
    title: "Reja de seguridad",
    image: "/gallery/otros/otros-08.webp",
  },
  {
    id: 6,
    title: "Baranda de acero inoxidable",
    image: "/gallery/barandas/barandas-01.webp",
  },
];

export default function TrabajosDestacados() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="destacados" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            TRABAJOS DESTACADOS
          </h2>
          <p className="mt-3 text-muted">
            Una selección de proyectos realizados por Steel Mafa.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {trabajos.map((trabajo) => (
                <div
                  key={trabajo.id}
                  className="mr-4 flex min-w-0 flex-[0_0_85%] flex-col gap-3 sm:flex-[0_0_45%] lg:flex-[0_0_31%]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
                    <Image
                      src={trabajo.image}
                      alt={trabajo.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 31vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {trabajo.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Trabajo anterior"
            className="absolute left-0 top-[38%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-accent-orange hover:text-accent-orange"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Siguiente trabajo"
            className="absolute right-0 top-[38%] flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-accent-orange hover:text-accent-orange"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {trabajos.map((trabajo, i) => (
            <button
              key={trabajo.id}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Ir al trabajo ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-6 bg-accent-orange" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
