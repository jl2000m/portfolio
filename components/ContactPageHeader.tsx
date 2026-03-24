"use client";

import { useT } from "@/context/LanguageContext";

export default function ContactPageHeader() {
  const t = useT();
  const p = t.contactPage;
  return (
    <div className="mb-12">
      <span className="text-sm text-accent font-semibold block mb-4">
        {p.label}
      </span>
      <h1 className="font-jakarta font-extrabold text-5xl md:text-6xl text-fg tracking-tight mb-4">
        {p.title}
      </h1>
      <p className="text-muted text-lg max-w-xl leading-relaxed">
        {p.subtitle}
      </p>
    </div>
  );
}

export function ContactWorkingWithLabel() {
  const t = useT();
  return (
    <h2 className="font-jakarta font-bold text-xl text-fg mb-6">
      {t.contactPage.workingWithLabel}
    </h2>
  );
}
