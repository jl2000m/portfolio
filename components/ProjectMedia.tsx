"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";
import { useT } from "@/context/LanguageContext";

function Placeholder({ slug, accent }: { slug: string; accent: string }) {
  const m = useT().projectMedia;
  return (
    <div
      className="absolute inset-0 flex items-end p-4 md:p-5"
      style={{
        background: `linear-gradient(145deg, ${accent}18 0%, rgba(247,247,245,0.6) 45%, rgba(247,247,245,0.95) 100%)`,
      }}
    >
      <span className="text-[11px] tracking-wide text-muted/60">
        {m.addScreenshot}{" "}
        <code className="text-muted font-mono text-[10px]">
          public/projects/{slug}.webp
        </code>
      </span>
    </div>
  );
}

interface ThumbnailProps {
  project: Project;
  sizes?: string;
  className?: string;
}

export function ProjectThumbnail({
  project,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
}: ThumbnailProps) {
  const m = useT().projectMedia;
  const alt = m.screenshotOf.replace("{name}", project.name);
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-surface aspect-[16/10] ${className}`}
    >
      {project.coverImage ? (
        <Image
          src={project.coverImage}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={sizes}
        />
      ) : (
        <Placeholder slug={project.slug} accent={project.accent} />
      )}
    </div>
  );
}

interface PreviewProps {
  project: Project;
}

function IframeBlock({
  src,
  title,
  footer,
}: {
  src: string;
  title: string;
  footer: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm">
      <div className="aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="px-4 py-2.5 text-xs text-muted/70 border-t border-border space-y-1">
        {footer}
      </div>
    </div>
  );
}

export function ProjectDetailPreview({ project }: PreviewProps) {
  const m = useT().projectMedia;
  const coverSrc =
    typeof project.coverImage === "string" ? project.coverImage.trim() : "";
  const hasCover = coverSrc.length > 0;

  if (project.previewEmbedUrl) {
    return (
      <IframeBlock
        src={project.previewEmbedUrl}
        title={m.previewOf.replace("{name}", project.name)}
        footer={
          <>
            {project.liveUrlNote ? (
              <p>{project.liveUrlNote}</p>
            ) : (
              <p>{m.embeddedPreview}</p>
            )}
            {project.liveUrl ? (
              <p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline underline-offset-2"
                >
                  {m.openProductionUrl}
                </a>
              </p>
            ) : null}
          </>
        }
      />
    );
  }

  if (hasCover) {
    const alt = m.screenshotOf.replace("{name}", project.name);
    return (
      <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="relative aspect-[16/10] w-full bg-surface">
          <Image
            src={coverSrc}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
        {project.liveUrlNote || project.liveUrl ? (
          <div className="px-4 py-2.5 text-xs text-muted/70 border-t border-border space-y-1">
            {project.liveUrlNote ? <p>{project.liveUrlNote}</p> : null}
            {project.liveUrl ? (
              <p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline underline-offset-2"
                >
                  {m.openProductionUrl}
                </a>
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  if (project.liveUrl) {
    return (
      <IframeBlock
        src={project.liveUrl}
        title={m.liveSiteOf.replace("{name}", project.name)}
        footer={
          <p>
            {m.iframeBlocked}{" "}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-2"
            >
              {m.openInNewTab}
            </a>
            .
          </p>
        }
      />
    );
  }

  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-surface">
        <Placeholder slug={project.slug} accent={project.accent} />
      </div>
    </div>
  );
}
