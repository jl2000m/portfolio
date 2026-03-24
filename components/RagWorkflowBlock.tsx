"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  GitBranch,
  Search,
  Database,
  Sparkles,
  Share2,
  ArrowRight,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

const nodeMeta = [
  { id: "1", icon: MessageSquare },
  { id: "2", icon: GitBranch },
  { id: "3", icon: Search },
  { id: "4", icon: Database },
  { id: "5", icon: Sparkles },
  { id: "6", icon: Share2 },
] as const;

export function RagWorkflowBlock() {
  const { lang } = useLang();
  const nodes = translations[lang].ragWorkflow.nodes;

  return (
    <div
      className="w-full"
      role="region"
      aria-label="RAG workflow diagram"
    >
      {/* Desktop: horizontal flow — no container, arrows connect */}
      <div className="hidden md:flex md:items-stretch md:gap-0">
        {nodeMeta.map((meta, i) => {
          const nodeContent = nodes[i];
          const Icon = meta.icon;
          const isLast = i === nodeMeta.length - 1;
          return (
            <div key={meta.id} className="flex flex-1 min-w-0 items-stretch">
              <motion.div
                className="flex min-w-0 flex-1 flex-col rounded-lg px-4 py-5 transition-colors hover:bg-surface/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-fg/5">
                  <Icon className="h-4 w-4 text-fg" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-fg">
                  {nodeContent.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {nodeContent.description}
                </p>
              </motion.div>
              {!isLast && (
                <div
                  className="flex shrink-0 items-center px-2 py-5"
                  aria-hidden
                >
                  <ArrowRight
                    className="h-4 w-4 text-muted/60"
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical timeline with continuous line */}
      <div className="relative flex flex-col pl-4 md:hidden">
        <div
          className="absolute left-[11px] top-4 bottom-4 w-px bg-border"
          aria-hidden
        />
        {nodeMeta.map((meta, i) => {
          const nodeContent = nodes[i];
          const Icon = meta.icon;
          return (
            <div key={meta.id} className="relative flex gap-3 pb-6 last:pb-0">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-white">
                <Icon className="h-3.5 w-3.5 text-fg" strokeWidth={1.5} />
              </div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <h3 className="mb-0.5 text-sm font-semibold text-fg">
                  {nodeContent.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {nodeContent.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
