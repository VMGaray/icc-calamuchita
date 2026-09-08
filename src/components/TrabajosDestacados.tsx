"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import type { GalleryCategory } from "@/data/gallery";

type Trabajo = {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string | null;
};

const trabajos: Trabajo[] = [
  {
    id: 1,
    title: "Movimiento de suelos",
    category: "movimiento-suelos",
    image: null,
  },
  {
    id: 2,
    title: "Piscinas",
    category: "piscinas",
    image: null,
  },
  {
    id: 3,
    title: "Tratamiento de aguas residuales",
    category: "tratamiento-residuales",
    image: null,
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
            Muy pronto vas a poder ver acá nuestros trabajos realizados en el
            Valle de Calamuchita.
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
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-dashed border-border bg-surface">
                    {trabajo.image ? (
                      <Image
                        src={trabajo.image}
                        alt={trabajo.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 31vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 w-10"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>
                        <span className="text-xs">Próximamente</span>
                      </div>
                    )}
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
