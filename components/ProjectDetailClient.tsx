"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Cpu,
  Lightbulb,
  Layers,
  Workflow,
} from "lucide-react";
import { RagWorkflowBlock } from "@/components/RagWorkflowBlock";
import StatusBadge from "@/components/StatusBadge";
import TechBadge from "@/components/TechBadge";
import { ProjectDetailPreview } from "@/components/ProjectMedia";
import type { Project } from "@/lib/projects";
import { useLang, useT } from "@/context/LanguageContext";
import { localizeProject, translateProjectTag } from "@/lib/project-i18n";

interface ProjectDetailClientProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
  /** When true, back link returns to the private F·A·R·O· proposal page. */
  backFromFaro?: boolean;
}

export function ProjectDetailClient({
  project,
  prev,
  next,
  backFromFaro = false,
}: ProjectDetailClientProps) {
  const { lang } = useLang();
  const t = useT();
  const d = t.projectDetail;
  const backHref = backFromFaro ? "/faro-consultancy" : "/projects";
  const backLabel = backFromFaro ? d.backFromFaro : d.back;
  const projectNavSuffix = backFromFaro ? "?from=faro" : "";
  const p = localizeProject(project, lang);
  const prevL = prev ? localizeProject(prev, lang) : null;
  const nextL = next ? localizeProject(next, lang) : null;

  return (
    <>
      <div className="relative border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-10 md:space-y-12">
          <div>
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {backLabel}
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <StatusBadge status={project.status} />
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-md text-muted bg-surface border border-border"
                >
                  {translateProjectTag(tag, lang)}
                </span>
              ))}
            </div>

            <h1 className="font-jakarta font-extrabold text-3xl md:text-5xl text-fg tracking-tight mb-3 max-w-3xl">
              {p.name}
            </h1>

            <p
              className="text-base md:text-lg font-semibold mb-5 max-w-2xl"
              style={{ color: project.accent }}
            >
              {p.tagline}
            </p>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              {p.description}
            </p>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && project.status !== "paused" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-colors ${
                      project.status === "comingSoon"
                        ? "bg-[#ff0000] hover:bg-[#e60000]"
                        : "bg-accent hover:bg-accent-hover"
                    }`}
                  >
                    <ExternalLink size={14} />
                    {project.status === "comingSoon"
                      ? d.joinWaitlist
                      : d.viewLive}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-border text-muted hover:text-fg hover:border-border-hover transition-colors"
                  >
                    <Github size={14} />
                    {d.code}
                  </a>
                )}
              </div>
            )}
          </div>

          <ProjectDetailPreview project={p} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.accent}12` }}
            >
              <Lightbulb size={16} style={{ color: project.accent }} />
            </span>
            <h2 className="font-jakarta font-bold text-xl text-fg">
              {d.problem}
            </h2>
          </div>
          <div
            className="border-l-2 pl-6 py-1"
            style={{ borderColor: `${project.accent}40` }}
          >
            <p className="text-muted leading-relaxed">{p.problem}</p>
          </div>
        </section>

        {project.slug === "cobertura-completa-advisor" && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${project.accent}12` }}
              >
                <Workflow size={16} style={{ color: project.accent }} />
              </span>
              <h2 className="font-jakarta font-bold text-xl text-fg">
                {d.howItWorks}
              </h2>
            </div>
            <RagWorkflowBlock />
          </section>
        )}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.accent}12` }}
            >
              <CheckCircle2 size={16} style={{ color: project.accent }} />
            </span>
            <h2 className="font-jakarta font-bold text-xl text-fg">
              {d.features}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {p.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white"
              >
                <CheckCircle2
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: project.accent }}
                />
                <span className="text-sm text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.accent}12` }}
            >
              <Layers size={16} style={{ color: project.accent }} />
            </span>
            <h2 className="font-jakarta font-bold text-xl text-fg">
              {d.techStack}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.accent}12` }}
            >
              <Cpu size={16} style={{ color: project.accent }} />
            </span>
            <h2 className="font-jakarta font-bold text-xl text-fg">
              {d.architecture}
            </h2>
          </div>
          <div className="p-5 rounded-xl border border-border bg-surface">
            <p className="text-sm text-muted leading-relaxed whitespace-pre-wrap">
              {p.architecture}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.accent}12` }}
            >
              <Lightbulb size={16} style={{ color: project.accent }} />
            </span>
            <h2 className="font-jakarta font-bold text-xl text-fg">
              {d.learnings}
            </h2>
          </div>
          <div
            className="border-l-2 pl-6 py-1"
            style={{ borderColor: `${project.accent}40` }}
          >
            <p className="text-muted leading-relaxed">{p.learnings}</p>
          </div>
        </section>
      </div>

      <div className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between gap-4">
          {prev && prevL ? (
            <Link
              href={`/projects/${prev.slug}${projectNavSuffix}`}
              className="flex items-center gap-3 group text-left"
            >
              <ArrowLeft
                size={16}
                className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
              />
              <div>
                <div className="text-xs text-muted mb-0.5">{d.previous}</div>
                <div className="font-jakarta font-bold text-sm text-fg group-hover:text-accent transition-colors">
                  {prevL.name}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next && nextL ? (
            <Link
              href={`/projects/${next.slug}${projectNavSuffix}`}
              className="flex items-center gap-3 group text-right ml-auto"
            >
              <div>
                <div className="text-xs text-muted mb-0.5">{d.next}</div>
                <div className="font-jakarta font-bold text-sm text-fg group-hover:text-accent transition-colors">
                  {nextL.name}
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
