import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import TrabajosDestacados from "@/components/TrabajosDestacados";
// Sección Galería desactivada por ahora — descomentar para volver a mostrarla.
// import Galeria from "@/components/Galeria";
import SobreNosotros from "@/components/SobreNosotros";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      {/* <Galeria /> */}
      <SobreNosotros />
      <Contacto />
    </>
  );
}
