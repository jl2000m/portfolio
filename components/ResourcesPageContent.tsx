"use client";

import { useT } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

const NOTION_EMBED_SRC =
  "https://josemcrea.notion.site/ebd/cca1637591a84b38bea1297c959ef9cf";

export default function ResourcesPageContent() {
  const t = useT();
  const p = t.resourcesPage;

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <section className="py-16">
        <span className="text-sm text-accent font-semibold block mb-4">
          {p.label}
        </span>
        <h1 className="font-jakarta font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] text-fg leading-[1.15] mb-5">
          {p.title}
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-12">
          {p.subtitle}
        </p>

        <article className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-border bg-surface">
            <h2 className="font-jakarta font-semibold text-fg text-sm md:text-base">
              {p.title}
            </h2>
            <a
              href={p.openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              {p.openExternal}
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="bg-surface">
            <iframe
              src={NOTION_EMBED_SRC}
              title={p.title}
              className="w-full h-[min(70vh,720px)] md:h-[720px] min-h-[480px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </article>
      </section>
    </div>
  );
}
