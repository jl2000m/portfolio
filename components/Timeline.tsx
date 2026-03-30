"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, HardHat } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  accent?: string;
  type?: "work" | "education";
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "center" | "bottom" | string;
  icon?: "graduation" | "builder";
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [items]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background track */}
      <div
        ref={trackRef}
        className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"
      />

      {/* Progress fill */}
      <div
        style={{ height: `${height}px` }}
        className="absolute left-4 md:left-6 top-0 w-px overflow-hidden"
      >
        <motion.div
          style={{
            height: progressHeight,
            opacity: progressOpacity,
          }}
          className="w-full bg-gradient-to-b from-[#0066ff] via-[#9d7cf0] to-transparent"
        />
      </div>

      <div className="space-y-6">
        {items.map((item, i) => {
          const isEducation = item.type === "education";
          const accent = item.accent || (isEducation ? "#9d7cf0" : "#0066FF");
          return (
            <motion.div
              key={`${item.year}-${item.company}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot with hover */}
              {isEducation ? (
                <motion.div
                  className="absolute left-[9px] md:left-[17px] top-1.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-10"
                  style={{ backgroundColor: accent }}
                  whileHover={{ scale: 1.15, boxShadow: `0 0 12px ${accent}80` }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon === "builder" ? (
                    <HardHat size={10} className="text-white" />
                  ) : (
                    <GraduationCap size={10} className="text-white" />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  className="absolute left-[13px] md:left-[21px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white z-10"
                  style={{ backgroundColor: accent }}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 10px ${accent}80` }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Date chip - stronger hierarchy */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2"
                style={{
                  color: accent,
                  backgroundColor: `${accent}15`,
                  borderWidth: 1,
                  borderColor: `${accent}30`,
                  borderStyle: "solid",
                }}
              >
                {item.year}
              </span>

              {/* Card with hover lift & shadow */}
              <motion.div
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isEducation
                    ? "border-border bg-surface hover:border-border-hover"
                    : "border-border bg-white hover:border-border-hover hover:bg-surface"
                }`}
                whileHover={{
                  y: -2,
                  boxShadow: "0 8px 24px -8px rgba(0,0,0,0.12)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-jakarta font-bold text-fg">
                        {item.role}
                      </h3>
                      <span className="text-sm text-muted">
                        {item.company} · {item.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                {item.image && (
                  <div className="relative w-full aspect-[3/2] max-h-56 bg-surface border-t border-border overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      fill
                      className={`object-cover ${
                        item.imagePosition === "top"
                          ? "object-top"
                          : item.imagePosition === "bottom"
                            ? "object-bottom"
                            : ["top", "center", "bottom"].includes(
                                  item.imagePosition ?? ""
                                )
                              ? "object-center"
                              : ""
                      }`}
                      style={
                        item.imagePosition &&
                        !["top", "center", "bottom"].includes(item.imagePosition)
                          ? { objectPosition: item.imagePosition }
                          : undefined
                      }
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                )}
                <div
                  className={
                    item.image ? "px-5 pb-5 pt-3" : "p-5 pt-0"
                  }
                >
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
