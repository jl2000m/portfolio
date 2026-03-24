import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { PlatformLogos } from "@/components/faro/PlatformLogos";
import { ProjectShowcaseCard } from "@/components/faro/ProjectShowcaseCard";
import { getProjectBySlug } from "@/lib/projects";

const trackingList = [
  "Meta: Pixel + Conversions API para mandar conversiones con fiabilidad.",
  "Google Analytics 4: de dónde viene el tráfico y qué páginas preceden al contacto.",
  "Google Ads: conversiones enlazadas cuando hay inversión en búsqueda/display.",
  "Eventos en la web (formulario, clics clave, scroll útil) para ver fricción.",
  "Mapas de calor / grabaciones (p. ej. Clarity, Hotjar) cuando hace falta.",
  "Tableros de embudo: tráfico → interés → lead → cita, no solo “visitas”.",
];

const landingsNote =
  "Suele funcionar mejor varias landings (3–6) por línea o dolor — residencia, patrimonio, corporate — que una sola página para todos. Los anuncios apuntan a URLs y mensajes distintos; la medición deja de mezclar todo en un solo saco.";

const audienceSnippets = [
  {
    title: "Remarketing Panamá / relocalización",
    audience: "Visitantes de inmigración o patrimonio que no dejaron datos.",
    copy: "Ángulo sobrio: conversación confidencial, siguiente paso claro.",
  },
  {
    title: "Lookalike de buenos clientes",
    audience: "Lista de clientes o leads de valor (con base legal y privacidad).",
    copy: "Creativos discretos + CTA a diagnóstico; exclusión de quien ya convirtió.",
  },
];

const showcase = [
  {
    slug: "reggi" as const,
    relevance:
      "Varias landings por industria (legal, bienes raíces, distribución, seguros): mismo producto, mensaje distinto por sector.",
  },
  {
    slug: "astro-asistencias" as const,
    relevance: "Panamá, datos sensibles, flujo de cotización/emisión con rigor.",
  },
  {
    slug: "cih-pipeline" as const,
    relevance: "Briefing automático antes de la reunión cuando el lead es caro.",
  },
];

export function FaroPitchContent() {
  return (
    <div className="min-h-screen text-[#ececf1] overflow-x-hidden">
      <div className="fixed inset-0 faro-pitch-hero-bg pointer-events-none -z-20" />
      <div
        className="fixed inset-0 faro-pitch-grid opacity-30 pointer-events-none -z-10"
        aria-hidden
      />

      <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#0b0b12]/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-white/90 hover:text-white transition-colors font-inter"
          >
            José Martínez
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20 pb-24">
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          F·A·R·O· Consultancy
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed font-inter max-w-xl">
          Producto, marketing y tecnología en el mismo hilo: landings serias,
          anuncios con medición y stack que no pelea con un CRM tipo
          GoHighLevel.
        </p>

        <section className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
          <PlatformLogos />
          <p className="mt-8 text-sm text-white/45 font-inter leading-relaxed">
            Cuando hay que captar y escalar, lo normal es cerrar el circuito
            entre web,{" "}
            <span className="text-white/65">Meta</span> y{" "}
            <span className="text-white/65">Google</span> — y que el equipo
            vea qué campaña acompaña cada conversación.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-white/55 font-inter">
            {trackingList.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="text-[#c9a962] shrink-0">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-syne font-semibold text-lg text-white">
            GoHighLevel
          </h2>
          <p className="mt-2 text-sm text-white/50 leading-relaxed font-inter">
            No es el objetivo reemplazar su cuenta. Tiene sentido que lo digital
            devuelva a GHL el contexto útil (campaña, página, evento) para
            atribuir sin rehacer su operación.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-syne font-semibold text-lg text-white">
            Landings por línea de negocio
          </h2>
          <p className="mt-2 text-sm text-white/50 leading-relaxed font-inter">
            {landingsNote}{" "}
            <Link
              href="/projects/reggi"
              className="text-[#c9a962]/90 underline underline-offset-2 hover:text-[#c9a962]"
            >
              Reggi
            </Link>{" "}
            es el ejemplo reciente.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-syne font-semibold text-lg text-white">
            Audiencias (ejemplos)
          </h2>
          <div className="mt-4 space-y-4">
            {audienceSnippets.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5"
              >
                <p className="text-sm font-medium text-white/85 font-inter">
                  {a.title}
                </p>
                <p className="mt-1 text-xs text-white/40 font-inter">
                  {a.audience}
                </p>
                <p className="mt-2 text-sm text-white/55 font-inter">{a.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-syne font-semibold text-lg text-white mb-6">
            Referencias
          </h2>
          <div className="flex flex-col gap-12">
            {showcase.map(({ slug, relevance }) => {
              const p = getProjectBySlug(slug);
              if (!p) return null;
              return (
                <ProjectShowcaseCard
                  key={slug}
                  project={p}
                  relevance={relevance}
                />
              );
            })}
          </div>
          <p className="mt-8">
            <Link
              href="/projects"
              className="text-sm text-white/40 hover:text-white/65 font-inter underline underline-offset-2"
            >
              Más proyectos
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-syne font-semibold text-lg text-white mb-4">
            Siguiente paso
          </h2>
          <ul className="text-sm text-white/50 space-y-2 font-inter">
            <li>1. Llamada corta: objetivos, países, qué es un lead bueno.</li>
            <li>2. Si encaja, alcance y prioridades claras.</li>
          </ul>
        </section>

        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          <a
            href="https://linkedin.com/in/jlmv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0b0b12] text-sm font-semibold hover:bg-white/90 font-inter"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:hola@josemartinez.dev?subject=F%C2%B7A%C2%B7R%C2%B7O%C2%B7"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/[0.12] text-sm font-medium text-white/90 hover:bg-white/[0.05] font-inter"
          >
            <Mail size={18} />
            hola@josemartinez.dev
          </a>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-8 text-center">
        <Link
          href="/"
          className="text-xs text-white/35 hover:text-white/50 font-inter"
        >
          ← Inicio
        </Link>
      </footer>
    </div>
  );
}
