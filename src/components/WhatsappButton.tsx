const WHATSAPP_URL =
  "https://wa.me/543546500950?text=Hola%20ICC%20Calamuchita%2C%20quiero%20hacer%20una%20consulta";

const variants = {
  // Sólo se usa en el Hero (fondo de video oscuro): mantiene el amarillo de
  // marca con texto oscuro para resaltar sobre el overlay.
  orange: "bg-[#f0b000] text-[#0a0a0a] hover:bg-[#f0b000]/85",
  green: "bg-accent-green text-white hover:bg-accent-green/85",
};

export default function WhatsappButton({
  className = "",
  variant = "orange",
  children = "Escribinos por WhatsApp",
}: {
  className?: string;
  variant?: "orange" | "green";
  children?: React.ReactNode;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.46 1.29 4.91L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.16c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.03.24-3.46-.72-2.93-1.16-4.8-4.13-4.94-4.32-.15-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
      </svg>
      {children}
    </a>
  );
}
