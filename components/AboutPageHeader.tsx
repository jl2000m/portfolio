"use client";

import { useT } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Timeline from "@/components/Timeline";

export function AboutSectionLabel({
  section,
}: {
  section: "experience" | "principles" | "stack";
}) {
  const t = useT();
  const p = t.aboutPage;
  const map = {
    experience: { label: p.experienceLabel, title: p.experienceTitle },
    principles: { label: p.principlesLabel, title: p.principlesTitle },
    stack: { label: p.stackLabel, title: p.stackTitle },
  };
  return (
    <div className="mb-10">
      <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
        {map[section].label}
      </span>
      <h2 className="font-jakarta font-extrabold text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.02em] text-fg leading-[1.1]">
        {map[section].title}
      </h2>
    </div>
  );
}

export function AboutPageLabel() {
  const t = useT();
  return (
    <span className="text-sm text-accent font-semibold block mb-4">
      {t.aboutPage.label}
    </span>
  );
}

export function AboutTimeline() {
  const t = useT();
  return <Timeline items={t.aboutPage.timeline} />;
}

export function AboutBio() {
  const t = useT();
  const bio = t.aboutPage.bio;
  return (
    <div className="space-y-4 max-w-2xl">
      <p className="text-muted leading-relaxed text-lg">{bio[0]}</p>
      <p className="text-muted leading-relaxed">
        {bio[1].split("+200% YoY")[0]}
        <span className="text-fg font-semibold">+200% YoY</span>
        {bio[1].split("+200% YoY")[1]?.split("$1.7M+")[0]}
        <span className="text-fg font-semibold">$1.7M+</span>
        {bio[1].split("$1.7M+")[1]}
      </p>
      <p className="text-muted leading-relaxed">{bio[2]}</p>
    </div>
  );
}

export function AboutCTA() {
  const t = useT();
  const p = t.aboutPage;
  return (
    <div className="border border-border rounded-2xl p-8 text-center bg-surface">
      <h2 className="font-jakarta font-extrabold text-3xl text-fg mb-3">
        {p.ctaTitle}
      </h2>
      <p className="text-muted mb-6 max-w-md mx-auto">{p.ctaSubtitle}</p>
      <Link
        href="https://calendly.com/josemcrea/let-s-talk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold text-sm rounded-xl hover:bg-accent-hover transition-colors group"
      >
        {p.ctaButton}
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
