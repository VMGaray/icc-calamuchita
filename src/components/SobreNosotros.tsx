"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import logo from "../../public/logo_charlie.jpeg";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 30;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl text-accent-orange sm:text-6xl">
      {value}
      {suffix}
    </span>
  );
}

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            SOBRE NOSOTROS
          </h2>
          <p className="text-muted sm:text-lg">
            En Steel Mafa trabajamos el hierro con precisión y dedicación.
            Con años de experiencia en el Valle de Calamuchita, fabricamos
            rejas, portones, estructuras y trabajos en chapa a medida para
            clientes de toda la región. Cada trabajo es único.
          </p>

          <div className="flex justify-center gap-10 md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <Counter to={10} suffix="+" />
              <span className="text-sm text-muted">años de experiencia</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Counter to={500} suffix="+" />
              <span className="text-sm text-muted">trabajos realizados</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_50px_rgba(212,82,10,0.15)] sm:h-72 sm:w-72">
            <Image
              src={logo}
              alt="Steel Mafa"
              width={240}
              height={240}
              className="h-48 w-48 object-contain sm:h-60 sm:w-60"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
