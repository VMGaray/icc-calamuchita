export type GalleryCategory =
  | "carteleria"
  | "portones"
  | "barandas"
  | "estructuras"
  | "puertas"
  | "otros";

export const galleryData: Record<GalleryCategory, string[]> = {
  carteleria: Array.from(
    { length: 19 },
    (_, i) => `/gallery/carteleria/cartel-${String(i + 1).padStart(2, "0")}.webp`
  ),
  portones: Array.from(
    { length: 2 },
    (_, i) => `/gallery/portones/portones-${String(i + 1).padStart(2, "0")}.webp`
  ),
  barandas: Array.from(
    { length: 1 },
    (_, i) => `/gallery/barandas/barandas-${String(i + 1).padStart(2, "0")}.webp`
  ),
  estructuras: Array.from(
    { length: 7 },
    (_, i) => `/gallery/estructuras/estruc-${String(i + 1).padStart(2, "0")}.webp`
  ),
  puertas: Array.from(
    { length: 4 },
    (_, i) => `/gallery/puertas/puertas-${String(i + 1).padStart(2, "0")}.webp`
  ),
  otros: Array.from(
    { length: 13 },
    (_, i) => `/gallery/otros/otros-${String(i + 1).padStart(2, "0")}.webp`
  ),
};

export const galleryFilters: { key: "todo" | GalleryCategory; label: string }[] = [
  { key: "todo", label: "Todo" },
  { key: "carteleria", label: "Cartelería" },
  { key: "portones", label: "Portones" },
  { key: "barandas", label: "Barandas" },
  { key: "estructuras", label: "Estructuras" },
  { key: "puertas", label: "Puertas" },
  { key: "otros", label: "Otros" },
];
