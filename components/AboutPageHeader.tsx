"use client";

import { useLang, useT } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Timeline from "@/components/Timeline";

const ABOUT_YOUNG_TUTORIAL_VIDEO_ID = "JYrqMj34E1E";

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
  const { lang } = useLang();
  const bio = t.aboutPage.bio;
  const moneyHighlight = lang === "en" ? "more than $2M" : "más de $2M";
  const afterGrowth = bio[1].split("+200% YoY")[1] ?? "";
  const beforeMoney = afterGrowth.split(moneyHighlight)[0] ?? "";
  const afterMoney = afterGrowth.split(moneyHighlight)[1] ?? "";
  return (
    <div className="space-y-4 max-w-2xl">
      <p className="text-muted leading-relaxed text-lg">{bio[0]}</p>
      <p className="text-muted leading-relaxed">
        {bio[1].split("+200% YoY")[0]}
        <span className="text-fg font-semibold">+200% YoY</span>
        {beforeMoney}
        <span className="text-fg font-semibold">{moneyHighlight}</span>
        {afterMoney}
      </p>
      <p className="text-muted leading-relaxed">{bio[2]}</p>
    </div>
  );
}

export function AboutHeroVideo() {
  const t = useT();
  const p = t.aboutPage;
  const watchUrl = `https://www.youtube.com/watch?v=${ABOUT_YOUNG_TUTORIAL_VIDEO_ID}`;

  return (
    <div className="w-full min-w-0">
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black/5 shadow-lg shadow-black/5">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${ABOUT_YOUNG_TUTORIAL_VIDEO_ID}?autoplay=1&mute=1&start=878`}
          title={p.youngTutorialVideoIframeTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-xs text-muted leading-relaxed">{p.youngTutorialVideoCaption}</p>
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-xs font-medium text-accent hover:text-accent-hover underline-offset-2 hover:underline"
      >
        {p.youngTutorialVideoOpenYouTube}
      </a>
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
