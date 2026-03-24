"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/context/LanguageContext";
import FeaturedProject from "./FeaturedProject";
import type { Project } from "@/lib/projects";

export default function ProjectsClientSection({ projects }: { projects: Project[] }) {
  const t = useT();

  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {t.projects.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-fg mb-4 leading-[1.1]">
            {t.projects.title}
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group"
          >
            {t.projects.viewAll}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
