export type GalleryCategory =
  | "movimiento-suelos"
  | "piscinas"
  | "tratamiento-residuales";

export const galleryData: Record<GalleryCategory, string[]> = {
  "movimiento-suelos": Array.from(
    { length: 4 },
    (_, i) =>
      `/gallery/movimiento-suelos/movimiento-${String(i + 1).padStart(2, "0")}.webp`
  ),
  piscinas: Array.from(
    { length: 0 },
    (_, i) => `/gallery/piscinas/piscinas-${String(i + 1).padStart(2, "0")}.webp`
  ),
  "tratamiento-residuales": Array.from(
    { length: 3 },
    (_, i) =>
      `/gallery/tratamiento-residuales/tratamiento-${String(i + 1).padStart(2, "0")}.webp`
  ),
};

export const galleryFilters: { key: "todo" | GalleryCategory; label: string }[] = [
  { key: "todo", label: "Todo" },
  { key: "movimiento-suelos", label: "Movimiento de suelos" },
  { key: "piscinas", label: "Piscinas" },
  { key: "tratamiento-residuales", label: "Tratamiento de aguas residuales" },
];
