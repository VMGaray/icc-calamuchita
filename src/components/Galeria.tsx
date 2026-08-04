"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData, galleryFilters, type GalleryCategory } from "@/data/gallery";

type FilterKey = "todo" | GalleryCategory;

type Photo = {
  src: string;
  category: GalleryCategory;
};

const allPhotos: Photo[] = (
  Object.entries(galleryData) as [GalleryCategory, string[]][]
).flatMap(([category, srcs]) => srcs.map((src) => ({ src, category })));

export default function Galeria() {
  const [filter, setFilter] = useState<FilterKey>("todo");
  const [selected, setSelected] = useState<Photo | null>(null);

  const photos = useMemo(
    () =>
      filter === "todo"
        ? allPhotos
        : allPhotos.filter((p) => p.category === filter),
    [filter]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            GALERÍA
          </h2>
          <p className="mt-3 text-muted">
            Algunos de nuestros trabajos realizados en el Valle de Calamuchita.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {galleryFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-accent-orange text-white"
                  : "bg-[#1a1a1a] text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="columns-2 gap-4 sm:columns-3"
          >
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setSelected(photo)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                className="relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent-orange"
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
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
              className="relative flex h-[70vh] w-full max-w-3xl items-center justify-center rounded-lg border border-border bg-surface"
            >
              <Image
                src={selected.src}
                alt=""
                fill
                sizes="100vw"
                className="rounded-lg object-contain"
              />

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-foreground transition-colors hover:bg-accent-orange"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
