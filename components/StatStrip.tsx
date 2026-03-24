"use client";

import { useT } from "@/context/LanguageContext";

export default function StatStrip() {
  const t = useT();
  // Duplicate for seamless marquee
  const items = [...t.stats, ...t.stats];

  return (
    <div className="border-y border-border bg-surface overflow-hidden py-4">
      <div className="flex animate-marquee gap-0 whitespace-nowrap">
        {items.map((stat, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-8 px-8"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-jakarta font-extrabold text-[15px] text-fg tabular-nums">
                {stat.value}
              </span>
              <span className="text-[13px] text-muted">{stat.label}</span>
            </div>
            <span className="text-border select-none">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
