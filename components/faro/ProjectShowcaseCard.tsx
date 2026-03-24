import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import type { Project } from "@/lib/projects";
import { BrowserFrame } from "./BrowserFrame";

interface ProjectShowcaseCardProps {
  project: Pick<
    Project,
    | "name"
    | "slug"
    | "accent"
    | "tagline"
    | "liveUrl"
    | "previewEmbedUrl"
    | "liveUrlNote"
  >;
  relevance: string;
}

export function ProjectShowcaseCard({
  project,
  relevance,
}: ProjectShowcaseCardProps) {
  const {
    name,
    slug,
    accent,
    tagline,
    liveUrl,
    previewEmbedUrl,
    liveUrlNote,
  } = project;

  const embedSrc = previewEmbedUrl ?? null;
  const showLiveFrame = Boolean(embedSrc ?? liveUrl);

  return (
    <article className="relative group">
      <div
        className="absolute -inset-px rounded-2xl opacity-0 sm:opacity-100 pointer-events-none blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accent}33, transparent 65%)`,
        }}
        aria-hidden
      />
      <div className="glass-panel rounded-2xl overflow-hidden border border-white/[0.08]">
        <div className="p-5 sm:p-6 border-b border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="font-syne font-bold text-xl text-white tracking-tight">
                {name}
              </h3>
              <p className="mt-1 text-sm text-white/45 font-inter">{tagline}</p>
              <p className="mt-3 text-sm text-white/50 font-inter leading-relaxed">
                {relevance}
              </p>
            </div>
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-1.5 self-start text-sm text-white/50 hover:text-white/80 font-inter shrink-0"
            >
              Detalle
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-black/20">
          {showLiveFrame ? (
            <div className="space-y-2">
              <BrowserFrame
                url={embedSrc ?? liveUrl!}
                title={`Vista · ${name}`}
                displayUrl={
                  liveUrl
                    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                    : undefined
                }
                openHref={liveUrl ?? undefined}
              />
              {liveUrlNote ? (
                <p className="text-[11px] text-white/40 leading-relaxed font-inter px-1">
                  {liveUrlNote}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#07070c]">
              <div
                className="relative aspect-[16/10] w-full flex flex-col items-center justify-center gap-4 px-8 text-center"
                style={{
                  background: `linear-gradient(165deg, ${accent}22 0%, rgba(10,10,16,0.95) 42%, rgba(7,7,12,1) 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.15] faro-pitch-grid"
                  aria-hidden
                />
                <Layers
                  className="size-12 text-white/25"
                  strokeWidth={1}
                  aria-hidden
                />
                <p className="text-sm text-white/40 max-w-sm font-inter">
                  Sin URL pública para iframe; el detalle está en el enlace de
                  arriba.
                </p>
                <Link
                  href={`/projects/${slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-[#0b0b12] px-4 py-2 text-sm font-medium hover:bg-white/90"
                >
                  Abrir proyecto
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
