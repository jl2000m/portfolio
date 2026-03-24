"use client";

import { useT } from "@/context/LanguageContext";

export default function ProjectsPageHeader() {
  const t = useT();
  const p = t.projectsPage;

  return (
    <>
      <div className="mb-16">
        <span className="text-sm text-accent font-semibold block mb-4">
          {p.label}
        </span>
        <h1 className="font-jakarta font-extrabold text-5xl md:text-6xl text-fg tracking-tight mb-4">
          {p.title}{" "}
          <span className="text-accent">{p.titleAccent}</span>
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          {p.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {p.stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-border rounded-xl p-5 text-center bg-white"
          >
            <div className="font-jakarta font-extrabold text-2xl text-accent">
              {stat.value}
            </div>
            <div className="text-sm text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="font-jakarta font-extrabold text-2xl text-fg mb-2">
          {p.allTitle}
        </h2>
        <p className="text-muted leading-relaxed">{p.allSubtitle}</p>
      </div>
    </>
  );
}
