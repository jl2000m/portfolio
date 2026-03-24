"use client";

import {
  Linkedin,
  Instagram,
  Calendar,
  Mail,
  Code2,
  TrendingUp,
  Bot,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/context/LanguageContext";

const CONTACT_CHANNEL_UI: Record<
  string,
  { Icon: LucideIcon; accent: string; href: string }
> = {
  linkedin: {
    Icon: Linkedin,
    accent: "#0066FF",
    href: "https://linkedin.com/in/jlmv/",
  },
  instagram: {
    Icon: Instagram,
    accent: "#f47285",
    href: "https://instagram.com/josem.crea",
  },
  meeting: {
    Icon: Calendar,
    accent: "#34d399",
    href: "https://calendly.com/josemcrea/let-s-talk",
  },
  email: {
    Icon: Mail,
    accent: "#6366f1",
    href: "mailto:joseluis2000300@gmail.com",
  },
};

const typeIcons = [Code2, Bot, TrendingUp, MessageCircle];
const typeAccents = ["#0066FF", "#9d7cf0", "#3ecf8e", "#e8a838"];

export default function ContactPageContent() {
  const t = useT();
  const p = t.contactPage;

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <span className="text-sm text-accent font-semibold block mb-4">
          {p.label}
        </span>
        <h1 className="font-jakarta font-extrabold text-5xl md:text-7xl text-fg tracking-tight mb-6">
          {p.title}
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          {p.subtitle}
        </p>
      </section>

      {/* Contact options */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <span className="text-sm text-muted font-semibold block mb-6">
          {p.availableChannels}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {p.contactOptions.map((option) => {
            const ui = CONTACT_CHANNEL_UI[option.channelId];
            if (!ui) return null;
            const { Icon, accent, href } = ui;
            const isEmail = option.channelId === "email";
            return (
              <a
                key={option.channelId}
                href={href}
                {...(isEmail
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex flex-col p-6 border border-border rounded-xl hover:border-border-hover transition-all duration-200 bg-white hover:bg-surface hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${accent}12` }}
                  >
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors"
                    style={{
                      color: accent,
                      borderColor: `${accent}25`,
                      backgroundColor: `${accent}08`,
                    }}
                  >
                    {option.cta} →
                  </span>
                </div>
                <div className="font-jakarta font-bold text-fg mb-1">
                  {option.label}
                </div>
                <div className="text-sm mb-3" style={{ color: accent }}>
                  {option.handle}
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {option.description}
                </p>
              </a>
            );
          })}
        </div>

        <div className="border border-border rounded-xl p-5 bg-accent-light mb-12">
          <span className="text-sm text-accent font-semibold block mb-2">
            {p.noteLabel}
          </span>
          <p className="text-sm text-muted leading-relaxed">{p.noteText}</p>
        </div>
      </section>

      {/* What I work on */}
      <section className="max-w-4xl mx-auto px-6 py-8 pb-24">
        <span className="text-sm text-muted font-semibold block mb-6">
          {p.workingWithLabel}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {p.projectTypes.map((type, i) => {
            const Icon = typeIcons[i];
            const accent = typeAccents[i];
            return (
              <div
                key={type.title}
                className="border border-border rounded-xl p-6 bg-white hover:border-border-hover hover:bg-surface transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}12` }}
                >
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <h3 className="font-jakarta font-bold text-base text-fg mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
