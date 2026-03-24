import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RM Seguros | Vida (preview)",
  description: "Vista previa estática de la landing de seguros de vida.",
  robots: { index: false, follow: false },
};

/**
 * Preview estático para iframe mientras vida.rmsegurospty.com no está estable.
 * No incluye lógica ni datos reales del producto final.
 */
export default function RmVidaEmbedPreviewPage() {
  return (
    <div className="min-h-[min(100dvh,780px)] bg-[#0a080c] text-[#f4f4f5] antialiased">
      <header className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5">
        <span className="text-sm font-semibold tracking-tight">RM Seguros</span>
        <span className="text-[11px] uppercase tracking-widest text-white/40">
          Vida
        </span>
      </header>

      <main className="mx-auto max-w-md px-5 py-10 sm:py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#f47285]">
          Seguros de vida
        </p>
        <h1 className="mt-2 font-syne text-2xl sm:text-3xl font-bold leading-tight text-white">
          Tu familia primero. Proceso claro.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          Cotización orientativa y acompañamiento con un asesor. Sin letra
          pequeña en el discurso: transparencia en cada paso.
        </p>

        <div className="mt-8 space-y-3 rounded-xl border border-white/[0.1] bg-white/[0.03] p-5">
          <div className="space-y-1.5">
            <div className="h-2 w-16 rounded bg-white/15" />
            <div className="h-10 w-full rounded-lg bg-white/[0.06]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-20 rounded bg-white/15" />
            <div className="h-10 w-full rounded-lg bg-white/[0.06]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-24 rounded bg-white/15" />
            <div className="h-10 w-full rounded-lg bg-white/[0.06]" />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-lg py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-95"
            style={{ backgroundColor: "#f47285" }}
          >
            Quiero información
          </button>
        </div>

        <ul className="mt-8 space-y-2 text-xs text-white/40">
          <li className="flex gap-2">
            <span className="text-[#f47285]">✓</span>
            Respuesta del equipo en horario laboral
          </li>
          <li className="flex gap-2">
            <span className="text-[#f47285]">✓</span>
            Comparativa de opciones según perfil
          </li>
        </ul>
      </main>

      <footer className="border-t border-white/[0.06] px-5 py-3 text-center text-[10px] leading-snug text-white/35">
        Vista previa estática en este portfolio · Producción:{" "}
        <span className="text-white/50">vida.rmsegurospty.com</span>
        {", en vivo el "}
        <span className="text-white/50">25 de marzo</span>
      </footer>
    </div>
  );
}
