"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    let animId = 0;

    // Respeta la preferencia del sistema: sin animación pinta un frame fijo
    // y no arranca el loop de requestAnimationFrame (ahorro de batería/CPU).
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = 20;
      const rows = 14;
      const spacingX = canvas.width / cols;
      const spacingY = canvas.height / rows;

      ctx.lineWidth = 0.5;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacingX;
          const baseY = j * spacingY;
          const wave = Math.sin(i * 0.5 + t) * 8 + Math.cos(j * 0.5 + t) * 8;
          const y = baseY + wave;

          const alpha = 0.06 + Math.abs(Math.sin(i + j + t)) * 0.16;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${alpha})`;
          ctx.fill();

          if (i < cols) {
            const nx = (i + 1) * spacingX;
            const nWave =
              Math.sin((i + 1) * 0.5 + t) * 8 + Math.cos(j * 0.5 + t) * 8;
            const ny = baseY + nWave;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = "rgba(0,0,0,0.08)";
            ctx.stroke();
          }
        }
      }
    };

    const tick = () => {
      render();
      t += 0.018;
      animId = requestAnimationFrame(tick);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (reduceMotion) render();
    };
    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) render();
    else tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}
