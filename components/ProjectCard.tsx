"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { useLang } from "@/context/LanguageContext";
import { localizeProject, translateProjectTag } from "@/lib/project-i18n";
import StatusBadge from "./StatusBadge";
import { ProjectThumbnail } from "./ProjectMedia";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { lang } = useLang();
  const p = localizeProject(project, lang);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <article className="rounded-xl border border-border bg-white overflow-hidden transition-all duration-300 hover:border-border-hover hover:bg-surface hover:shadow-sm">
          <ProjectThumbnail
            project={p}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-none border-0 border-b border-border aspect-[2/1] ring-0"
          />

          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <StatusBadge status={project.status} />
                <h3 className="font-jakarta font-bold text-base text-fg mt-2 group-hover:text-fg transition-colors">
                  {p.name}
                </h3>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted/50 group-hover:text-accent transition-colors flex-shrink-0 mt-1"
              />
            </div>

            <p className="text-xs text-muted mb-2">{p.tagline}</p>

            <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-md text-muted bg-surface border border-border"
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
