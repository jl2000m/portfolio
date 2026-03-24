"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { useLang } from "@/context/LanguageContext";
import { localizeProject, translateProjectTag } from "@/lib/project-i18n";
import StatusBadge from "./StatusBadge";
import { ProjectThumbnail } from "./ProjectMedia";

interface FeaturedProjectProps {
  project: Project;
  index?: number;
}

export default function FeaturedProject({
  project,
  index = 0,
}: FeaturedProjectProps) {
  const { lang } = useLang();
  const p = localizeProject(project, lang);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <article className="rounded-2xl border border-border bg-white overflow-hidden transition-all duration-200 hover:border-border-hover hover:shadow-md hover:-translate-y-0.5">
          <ProjectThumbnail project={p} />

          <div className="p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <StatusBadge status={project.status} />
              <ArrowUpRight
                size={17}
                className="text-muted/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
              />
            </div>

            <h3 className="font-jakarta font-bold text-[17px] text-fg mb-1.5 tracking-tight">
              {p.name}
            </h3>

            <p
              className="text-sm font-semibold mb-3"
              style={{ color: project.accent }}
            >
              {p.tagline}
            </p>

            <p className="text-muted leading-relaxed text-sm line-clamp-3 mb-5">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-md text-muted bg-surface border border-border font-medium"
                >
                  {translateProjectTag(tag, lang)}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
