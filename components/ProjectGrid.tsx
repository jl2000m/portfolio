"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { allTags } from "@/lib/projects";
import { useLang, useT } from "@/context/LanguageContext";
import { translateProjectTag } from "@/lib/project-i18n";

interface ProjectGridProps {
  projects: Project[];
}

const MOBILE_INITIAL = 3;

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { lang } = useLang();
  const t = useT();
  const g = t.projectGrid;
  const [activeTag, setActiveTag] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTag === "ALL"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  const visible = showAll ? filtered : filtered.slice(0, MOBILE_INITIAL);
  const hasMore = filtered.length > MOBILE_INITIAL;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => { setActiveTag(tag); setShowAll(false); }}
            className={`text-sm px-4 py-2 rounded-lg border transition-all duration-200 ${
              activeTag === tag
                ? "text-white border-accent bg-accent"
                : "text-muted border-border hover:text-fg hover:border-border-hover"
            }`}
          >
            {tag === "ALL" ? g.all : translateProjectTag(tag, lang)}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {/* On mobile show `visible`, on md+ always show all filtered */}
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className={i >= MOBILE_INITIAL && !showAll ? "hidden md:block" : ""}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted text-sm">
          {g.noResults}
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-xl border border-border text-sm font-semibold text-fg hover:bg-surface hover:border-border-hover transition-colors"
          >
            {showAll
              ? g.showLess
              : g.seeAll.replace("{count}", String(filtered.length))}
          </button>
        </div>
      )}
    </div>
  );
}
