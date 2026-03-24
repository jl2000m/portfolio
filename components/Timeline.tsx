"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  accent?: string;
  type?: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, i) => {
          const isEducation = item.type === "education";
          return (
            <motion.div
              key={`${item.year}-${item.company}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              {isEducation ? (
                <div
                  className="absolute left-[9px] md:left-[17px] top-1.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ backgroundColor: item.accent || "#9d7cf0" }}
                >
                  <GraduationCap size={10} className="text-white" />
                </div>
              ) : (
                <div
                  className="absolute left-[13px] md:left-[21px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white"
                  style={{ backgroundColor: item.accent || "#0066FF" }}
                />
              )}

              <span
                className="text-sm font-semibold block mb-1.5"
                style={{ color: item.accent || "#0066FF" }}
              >
                {item.year}
              </span>

              <div
                className={`border rounded-xl p-5 transition-colors ${
                  isEducation
                    ? "border-border bg-surface hover:border-border-hover"
                    : "border-border bg-white hover:border-border-hover hover:bg-surface"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-jakarta font-bold text-fg">{item.role}</h3>
                    <span className="text-sm text-muted">
                      {item.company} · {item.location}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-muted bg-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
