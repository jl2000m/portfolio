import { ExternalLink } from "lucide-react";

interface BrowserFrameProps {
  url: string;
  title: string;
  /** Shown in the fake address bar */
  displayUrl?: string;
  /** Destino del botón “Abrir” (p. ej. prod cuando el iframe es preview local) */
  openHref?: string;
}

/**
 * Embeds a live site in a premium “browser” chrome.
 * Many production sites block iframes; always provide the external link.
 */
export function BrowserFrame({ url, title, displayUrl, openHref }: BrowserFrameProps) {
  const bar = displayUrl ?? url.replace(/^https?:\/\//, "");
  const href = openHref ?? url;

  return (
    <div className="group relative rounded-2xl p-[1px] faro-gold-ring">
      <div className="rounded-2xl overflow-hidden bg-[#07070c] border border-white/[0.08] faro-browser-inner-shadow">
        <div className="flex items-center gap-3 px-3 sm:px-4 py-2.5 border-b border-white/[0.07] bg-black/50 backdrop-blur-md">
          <div className="flex gap-1.5 shrink-0" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]/90" />
            <span className="size-2.5 rounded-full bg-[#febc2e]/90" />
            <span className="size-2.5 rounded-full bg-[#28c840]/90" />
          </div>
          <div className="flex-1 min-w-0 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-center">
            <span className="text-[10px] sm:text-[11px] text-white/45 truncate block font-inter">
              {bar}
            </span>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 shrink-0 rounded-lg border border-white/[0.1] bg-white/[0.04] px-2.5 py-1.5 text-[10px] sm:text-xs font-medium text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
          >
            <ExternalLink className="size-3.5 opacity-80" aria-hidden />
            Abrir
          </a>
        </div>
        <div className="relative aspect-[16/10] w-full bg-[#0a0a0f]">
          <iframe
            src={url}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="clipboard-write; fullscreen"
          />
          {/* Subtle vignette for depth */}
          <div
            className="pointer-events-none absolute inset-0 rounded-b-2xl shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]"
            aria-hidden
          />
        </div>
        <p className="px-4 py-2 text-[10px] text-white/30 border-t border-white/[0.06] font-inter">
          Si no carga, el sitio puede bloquear iframes — use &quot;Abrir&quot;.
        </p>
      </div>
    </div>
  );
}
