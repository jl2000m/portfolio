"use client";

import { useT } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const NOTION_THUMB = "/resources/notion-resource-thumb.png";
const LINKEDIN_THUMB = "/resources/linkedin-merkapp-article.png";

interface ResourceThumbFields {
  title: string;
  description: string;
  openExternal: string;
  openUrl: string;
  imageAlt: string;
}

function ResourceThumbnailCard({
  href,
  imageSrc,
  resource,
}: {
  href: string;
  imageSrc: string;
  resource: ResourceThumbFields;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-border-hover hover:shadow-md sm:flex-row sm:items-stretch">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-[7.25rem] w-full shrink-0 bg-surface sm:h-auto sm:w-[9.5rem] md:w-[10.5rem] sm:min-h-[7.5rem] border-b border-border sm:border-b-0 sm:border-r sm:border-border outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
      >
        <Image
          src={imageSrc}
          alt={resource.imageAlt}
          fill
          className="object-cover object-center transition-opacity duration-200 group-hover:opacity-[0.92]"
          sizes="(max-width: 640px) 100vw, 168px"
        />
      </a>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-5 sm:py-4 md:py-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h2 className="font-jakarta font-semibold text-fg text-[0.9375rem] leading-snug md:text-base">
            {resource.title}
          </h2>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors shrink-0 sm:pt-0.5"
          >
            {resource.openExternal}
            <ExternalLink size={12} className="opacity-80" aria-hidden />
          </a>
        </div>
        <p className="text-muted text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
          {resource.description}
        </p>
      </div>
    </article>
  );
}

export default function ResourcesPageContent() {
  const t = useT();
  const p = t.resourcesPage;

  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">
      <section className="py-16">
        <span className="text-sm text-accent font-semibold block mb-4">
          {p.label}
        </span>
        <h1 className="font-jakarta font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] text-fg leading-[1.15] mb-5">
          {p.title}
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          {p.subtitle}
        </p>

        <ul className="flex list-none flex-col gap-5 p-0 m-0">
          <li>
            <ResourceThumbnailCard
              href={p.notion.openUrl}
              imageSrc={NOTION_THUMB}
              resource={p.notion}
            />
          </li>
          <li>
            <ResourceThumbnailCard
              href={p.merkappArticle.openUrl}
              imageSrc={LINKEDIN_THUMB}
              resource={p.merkappArticle}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
