"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe2,
  Info,
  type LucideIcon,
  Layers,
  Ban,
  MinusCircle,
  MapPin,
  Server,
  Shield,
  Users,
  Webhook,
  Zap,
} from "lucide-react";
import { useT } from "@/context/LanguageContext";
import { Pricing, type PricingTier } from "@/components/faro-proposal/Pricing";
import { FaroEmphasis } from "../FaroEmphasis";
import {
  FARO_EASE,
  FARO_VIEWPORT,
  faroTransition,
} from "../faro-motion";

// ─── Brand colours ─────────────────────────────────────────────────────────
const FARO_TEAL = "#003B4A";
const FARO_GOLD = "#F1D09F";
const FARO_GOLD_DIM = "rgba(241,208,159,0.18)";
const FARO_TEAL_DIM = "rgba(0,59,74,0.07)";

// ─── Helpers ────────────────────────────────────────────────────────────────
const phaseColors = {
  1: { bg: "bg-[#F1D09F]/20", border: "border-[#F1D09F]/60", text: "text-[#92670a]", dot: "bg-[#F1D09F]" },
  2: { bg: "bg-accent-light", border: "border-accent/30", text: "text-accent", dot: "bg-accent" },
  3: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
} as const;

const typeColors: Record<string, string> = {
  core: "bg-[#003B4A] text-white",
  conversion: "bg-[#F1D09F]/30 text-[#7a5500] border border-[#F1D09F]/60",
  depth: "bg-accent-light text-accent",
  service: "bg-surface text-muted border border-border",
  trust: "bg-emerald-50 text-emerald-700",
  seo: "bg-purple-50 text-purple-700",
};

const whyIcons: Record<string, LucideIcon> = {
  Anchor,
  Users,
  FileText,
  BookOpen,
  Webhook,
};

// ─── Gold emphasis for dark hero sections ────────────────────────────────────
function ProposalHeroEmphasis({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className="text-white">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <strong key={i} style={{ color: FARO_GOLD }} className="font-extrabold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

// ─── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
      {children}
    </span>
  );
}

// ─── Persona Card ────────────────────────────────────────────────────────────
function PersonaCard({
  item,
  index,
  reduce,
}: {
  item: {
    id: string;
    number: string;
    portraitSrc: string;
    name: string;
    region: string;
    lang: string;
    arrives: string;
    intent: string;
    fear: string;
    hook: string;
    pageTarget: string;
    channel: string;
    acqStrategy: string;
  };
  index: number;
  reduce: boolean;
}) {
  const [open, setOpen] = useState(false);
  const accentColors = [
    { border: "border-[#F1D09F]/60", num: "text-[#92670a] bg-[#F1D09F]/20" },
    { border: "border-accent/30", num: "text-accent bg-accent-light" },
    { border: "border-emerald-200", num: "text-emerald-700 bg-emerald-50" },
    { border: "border-purple-200", num: "text-purple-700 bg-purple-50" },
    { border: "border-rose-200", num: "text-rose-700 bg-rose-50" },
  ];
  const colors = accentColors[index % accentColors.length];

  return (
    <motion.div
      className={`border ${colors.border} rounded-xl bg-white overflow-hidden`}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={FARO_VIEWPORT}
      transition={faroTransition(reduce, index * 0.07)}
    >
      <button
        className="w-full text-left p-5 flex items-start gap-4 hover:bg-surface/50 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="relative shrink-0 w-[3.25rem] h-[3.25rem] rounded-xl overflow-hidden ring-2 ring-border bg-surface shadow-sm">
          <Image
            src={item.portraitSrc}
            alt={`Illustrative portrait for persona ${item.number}`}
            width={52}
            height={52}
            className="object-cover w-full h-full"
            sizes="52px"
          />
          <span
            className={`absolute bottom-0 right-0 text-[9px] font-bold px-1 py-0.5 rounded-tl-md ${colors.num}`}
            aria-hidden
          >
            {item.number}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-jakarta font-bold text-fg text-sm leading-snug">{item.name}</p>
          <p className="text-xs text-muted mt-0.5 flex items-center gap-1">
            <MapPin size={10} className="shrink-0" />
            {item.region}
          </p>
          <p className="text-xs text-muted mt-1 italic">&ldquo;{item.hook}&rdquo;</p>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              { label: "Arrives via", value: item.arrives },
              { label: "Intent", value: item.intent },
              { label: "Primary fear", value: item.fear },
              { label: "Language", value: item.lang },
              { label: "Entry point", value: item.pageTarget },
              { label: "Channel", value: item.channel },
            ].map((row) => (
              <div key={row.label} className="space-y-0.5">
                <p className="font-semibold text-fg/60 uppercase tracking-wider text-[10px]">{row.label}</p>
                <p className="text-muted leading-snug">{row.value}</p>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-fg/60 mb-1">
              Acquisition Strategy
            </p>
            <p className="text-xs text-muted leading-relaxed">{item.acqStrategy}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ─── Architecture Node ───────────────────────────────────────────────────────
function ArchNode({
  node,
  phaseLabels,
  typeLabels,
  index,
  reduce,
}: {
  node: { id: string; label: string; type: string; personas: readonly string[]; phase: number };
  phaseLabels: readonly string[];
  typeLabels: Record<string, string>;
  index: number;
  reduce: boolean;
}) {
  const ph = phaseColors[node.phase as 1 | 2 | 3];
  return (
    <motion.div
      className={`rounded-xl border ${ph.border} ${ph.bg} p-4 flex flex-col gap-2`}
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={FARO_VIEWPORT}
      transition={faroTransition(reduce, index * 0.04)}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-jakarta font-bold text-fg text-sm leading-snug">{node.label}</p>
        <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${ph.dot} text-white`}>
          {phaseLabels[node.phase - 1]}
        </span>
      </div>
      <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeColors[node.type] ?? "bg-surface text-muted"}`}>
        {typeLabels[node.type] ?? node.type}
      </span>
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {node.personas.map((p) => (
          <span key={p} className="text-[10px] bg-white/60 border border-border rounded px-1.5 py-0.5 text-muted font-medium">
            {p}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── License cost row (optional expandable details for Sanity / Hotjar) ─────
function LicenseCostRow({
  item,
  index,
  reduce,
  essentialLabel,
  optionalLabel,
}: {
  item: {
    service: string;
    cost: string;
    why: string;
    essential: boolean;
    logo: string | null;
    interactive?: boolean;
    moreLabel?: string;
    moreTitle?: string;
    moreBullets?: readonly string[];
  };
  index: number;
  reduce: boolean;
  essentialLabel: string;
  optionalLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const isInteractive = Boolean(item.interactive && item.moreBullets && item.moreBullets.length > 0);

  return (
    <motion.div
      className="border border-border rounded-xl bg-white p-5 flex flex-col sm:flex-row sm:items-start gap-4"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={FARO_VIEWPORT}
      transition={faroTransition(reduce, index * 0.06)}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center overflow-hidden">
        {item.logo ? (
          <img
            src={`https://cdn.simpleicons.org/${item.logo}`}
            alt={item.service}
            width={22}
            height={22}
            className="object-contain"
            loading="lazy"
          />
        ) : (
          <Globe2 size={16} className="text-muted" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <p className="font-jakarta font-bold text-fg text-sm">{item.service}</p>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              item.essential ? "bg-[#003B4A]/10 text-[#003B4A]" : "bg-surface text-muted border border-border"
            }`}
          >
            {item.essential ? essentialLabel : optionalLabel}
          </span>
        </div>
        <p className="text-xs text-muted leading-relaxed">{item.why}</p>
        {isInteractive && item.moreLabel && (
          <div className="mt-3">
            <button
              type="button"
              className="flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent/80 transition-colors text-left w-full sm:w-auto"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              <ChevronDown
                size={14}
                className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
              {item.moreLabel}
            </button>
            {open && item.moreTitle && item.moreBullets && (
              <div
                className="mt-3 rounded-lg border border-border bg-surface/80 px-4 py-3"
                style={{ borderLeftWidth: 3, borderLeftColor: FARO_TEAL }}
              >
                <p className="text-xs font-bold text-fg mb-2">{item.moreTitle}</p>
                <ul className="space-y-2 text-xs text-muted leading-relaxed list-disc pl-4">
                  {item.moreBullets.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="shrink-0 sm:text-right">
        <p className="font-jakarta font-extrabold text-base text-fg">{item.cost}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const CALENDLY_HREF = "https://calendly.com/josemcrea/let-s-talk";

export function FaroProposalView() {
  const t = useT();
  const p = t.faroProposal;
  const reduce = useReducedMotion() ?? false;

  const pricingTiers: PricingTier[] = p.phases.items.map((item) => ({
    name: item.phase,
    description: item.title,
    badge: item.tag,
    priceLabel: item.investment,
    billingPeriod: item.timeline,
    buttonText: p.phases.tierCta,
    buttonHref: CALENDLY_HREF,
    isPrimary: item.tagColor === "gold",
    featuresTitle: p.phases.featuresTitle,
    footnote: item.why,
    features: item.deliverables.map((text) => ({ text })),
  }));

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: FARO_TEAL }}
      >
        {/* subtle radial glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.08]"
          style={{ background: `radial-gradient(circle at 80% 20%, ${FARO_GOLD}, transparent 65%)` }}
          aria-hidden
        />
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.14em] mb-6"
            style={{ color: FARO_GOLD }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: FARO_EASE }}
          >
            {p.hero.eyebrow}
          </motion.p>

          <motion.h1
            className="font-jakarta font-extrabold text-[clamp(2rem,5vw,3.75rem)] leading-[1.06] tracking-[-0.025em] text-white mb-6 max-w-4xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.55, delay: 0.08, ease: FARO_EASE }}
          >
            <ProposalHeroEmphasis text={p.hero.h1} />
          </motion.h1>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            style={{ color: "rgba(255,255,255,0.72)" }}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: 0.16, ease: FARO_EASE }}
          >
            {p.hero.sub}
          </motion.p>

          {/* Trust bar */}
          <motion.div
            className="flex flex-wrap items-center gap-6 text-sm"
            style={{ color: "rgba(255,255,255,0.55)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: 0.26, ease: FARO_EASE }}
          >
            {["20+ años de historia", "Panamá · Dubái · Lugano", "Legal Multi-Family Office", "6 líneas de servicio"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: FARO_GOLD }} />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mt-12 text-xs flex items-center gap-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.4, delay: 0.38 }}
          >
            <ChevronDown size={13} />
            {p.hero.scrollCue}
          </motion.p>
        </div>
      </section>

      {/* ── OPENING / PAS ───────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          <SectionLabel>{p.opening.label}</SectionLabel>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-8 max-w-2xl">
            <FaroEmphasis text={p.opening.h2} />
          </h2>
        </motion.div>
        <div className="space-y-5 text-base text-muted leading-relaxed max-w-3xl">
          {[p.opening.p1, p.opening.p2, p.opening.p3].map((para, i) => (
            <motion.p
              key={i}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.06 + i * 0.07)}
            >
              <FaroEmphasis text={para} />
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── SCOPE ───────────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.scope.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-10 max-w-3xl">
              <FaroEmphasis text={p.scope.h2} />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              className="rounded-2xl border border-border bg-white p-6 md:col-span-2"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.04)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: FARO_GOLD_DIM }}
                >
                  <Info size={18} className="text-[#003B4A]" />
                </div>
                <h3 className="font-jakarta font-bold text-fg text-lg">{p.scope.whatItIsTitle}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-4xl">
                <FaroEmphasis text={p.scope.whatItIsBody} />
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.08)}
            >
              <h3 className="font-jakarta font-bold text-fg text-base mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                {p.scope.includesTitle}
              </h3>
              <ul className="space-y-2.5">
                {p.scope.includes.map((line, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <CheckCircle2 size={14} className="shrink-0 text-emerald-600 mt-0.5" />
                    <span>
                      <FaroEmphasis text={line} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.1)}
            >
              <h3 className="font-jakarta font-bold text-fg text-base mb-4 flex items-center gap-2">
                <Ban size={18} className="text-amber-800 shrink-0" />
                {p.scope.isntTitle}
              </h3>
              <ul className="space-y-2.5">
                {p.scope.isnt.map((line, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-600 mt-2" aria-hidden />
                    <span>
                      <FaroEmphasis text={line} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-border bg-white p-6 md:col-span-2"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.12)}
            >
              <h3 className="font-jakarta font-bold text-fg text-base mb-4 flex items-center gap-2">
                <MinusCircle size={18} className="text-fg/50 shrink-0" />
                {p.scope.excludedTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {p.scope.excluded.map((line, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <MinusCircle size={14} className="shrink-0 text-border mt-0.5" />
                    <span>
                      <FaroEmphasis text={line} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PERSONAS ────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.personas.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-xl">
              <FaroEmphasis text={p.personas.h2} />
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-3">{p.personas.sub}</p>
            <p className="text-xs text-muted/80 italic max-w-2xl mb-10">{p.personas.portraitNote}</p>
          </motion.div>

          <div className="space-y-3">
            {p.personas.items.map((item, i) => (
              <PersonaCard key={item.id} item={item} index={i} reduce={reduce} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          <SectionLabel>{p.architecture.label}</SectionLabel>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-2xl">
            <FaroEmphasis text={p.architecture.h2} />
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-8">{p.architecture.sub}</p>

          {/* Phase legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {([1, 2, 3] as const).map((ph) => {
              const c = phaseColors[ph];
              return (
                <span key={ph} className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${c.border} ${c.bg} ${c.text}`}>
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  {p.architecture.phaseLabels[ph - 1]}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {p.architecture.nodes.map((node, i) => (
            <ArchNode
              key={node.id}
              node={node}
              phaseLabels={p.architecture.phaseLabels}
              typeLabels={p.architecture.typeLabels}
              index={i}
              reduce={reduce}
            />
          ))}
        </div>
      </section>

      {/* ── WHY THIS STRUCTURE ───────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.whyStructure.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-10 max-w-2xl">
              <FaroEmphasis text={p.whyStructure.h2} />
            </h2>
          </motion.div>

          <div className="space-y-4">
            {p.whyStructure.items.map((item, i) => {
              const Icon = whyIcons[item.icon] ?? Layers;
              return (
                <motion.div
                  key={item.title}
                  className="border border-border rounded-xl bg-white p-6 flex gap-5"
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={FARO_VIEWPORT}
                  transition={faroTransition(reduce, i * 0.08)}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: FARO_GOLD_DIM }}
                  >
                    <Icon size={18} className="text-[#003B4A]" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-fg text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      <FaroEmphasis text={item.body} />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHASES ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          <SectionLabel>{p.phases.label}</SectionLabel>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-2xl">
            <FaroEmphasis text={p.phases.h2} />
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-2">{p.phases.sub}</p>
          <p className="text-sm font-semibold text-fg mt-4 mb-10">
            {p.phases.totalLabel}: <span className="text-accent">{p.phases.totalRange}</span>
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.06)}
        >
          <Pricing
            title=""
            subtitle=""
            className="!py-0 !px-0 bg-transparent"
            tiers={pricingTiers}
            phaseWhyLabel={p.phases.whyLabel}
            footerTitle={p.phases.pricingFooterTitle}
            footerDescription={p.phases.pricingFooterDescription}
            footerButtonText={p.phases.pricingFooterButtonText}
            footerButtonHref={CALENDLY_HREF}
          />
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ borderColor: FARO_TEAL, backgroundColor: FARO_TEAL_DIM }}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.12)}
        >
          <div className="flex gap-4 min-w-0">
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: FARO_GOLD_DIM }}
            >
              <FileText size={20} className="text-[#003B4A]" />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-1">
                {p.contract.label}
              </span>
              <h3 className="font-jakarta font-extrabold text-fg text-lg leading-snug mb-1">
                <FaroEmphasis text={p.contract.h2} />
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-xl">{p.contract.sub}</p>
            </div>
          </div>
          <Link
            href="/faro-consultancy/propuesta/contrato"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: FARO_TEAL }}
          >
            {p.contract.cta}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ── TECH DECISIONS ───────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.techDecisions.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-10 max-w-2xl">
              <FaroEmphasis text={p.techDecisions.h2} />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sanity */}
            <motion.div
              className="border border-border rounded-2xl bg-white overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce)}
            >
              <div className="p-6 border-b border-border" style={{ backgroundColor: FARO_GOLD_DIM }}>
                <div className="flex items-center gap-3 mb-3">
                  <img src="https://cdn.simpleicons.org/sanity" alt="Sanity" width={26} height={26} className="rounded" loading="lazy" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted">
                    {p.techDecisions.sanity.label}
                  </span>
                </div>
                <h3 className="font-jakarta font-extrabold text-fg text-xl">{p.techDecisions.sanity.title}</h3>
                <p className="text-sm text-muted mt-1 italic">{p.techDecisions.sanity.tagline}</p>
              </div>
              <div className="p-6 space-y-4">
                {/* Plain-language CMS explainer */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 flex gap-3">
                  <BookOpen size={15} className="shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-emerald-700 mb-0.5">{p.techDecisions.sanity.cmsBadge}</p>
                    <p className="text-xs text-emerald-700 leading-relaxed">{p.techDecisions.sanity.cmsExplain}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  <FaroEmphasis text={p.techDecisions.sanity.why} />
                </p>
                <ul className="space-y-2">
                  {p.techDecisions.sanity.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <CheckCircle2 size={14} className="shrink-0 text-emerald-500 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* GHL */}
            <motion.div
              className="border border-border rounded-2xl bg-white overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduce, 0.1)}
            >
              <div className="p-6 border-b border-border bg-accent-light/50">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/brands/ghl.svg" alt="GoHighLevel" width={26} height={26} className="object-contain" loading="lazy" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted">
                    {p.techDecisions.ghl.label}
                  </span>
                </div>
                <h3 className="font-jakarta font-extrabold text-fg text-xl">{p.techDecisions.ghl.title}</h3>
                <p className="text-sm text-muted mt-1 italic">{p.techDecisions.ghl.tagline}</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted leading-relaxed">
                  <FaroEmphasis text={p.techDecisions.ghl.why} />
                </p>
                <ul className="space-y-2">
                  {p.techDecisions.ghl.benefits.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <Zap size={14} className="shrink-0 text-accent mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRACKING ────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          <SectionLabel>{p.tracking.label}</SectionLabel>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-2xl">
            <FaroEmphasis text={p.tracking.h2} />
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-10">{p.tracking.sub}</p>
        </motion.div>

        {/* Meta Events table */}
        <motion.div
          className="border border-border rounded-xl overflow-hidden mb-8"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.05)}
        >
          <div className="px-5 py-3 border-b border-border bg-surface flex items-center gap-2.5">
            <img src="https://cdn.simpleicons.org/meta" alt="Meta" width={14} height={14} loading="lazy" />
            <p className="text-sm font-bold text-fg">{p.tracking.metaTitle}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-surface/60">
                  <th className="text-left px-4 py-2.5 font-semibold text-fg/60 uppercase tracking-wider">Evento</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-fg/60 uppercase tracking-wider">Cuándo se dispara</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-fg/60 uppercase tracking-wider">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {p.tracking.metaEvents.map((ev, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface/40 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-accent">{ev.event}</td>
                    <td className="px-4 py-2.5 text-muted">{ev.trigger}</td>
                    <td className="px-4 py-2.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        ev.type === "Standard" || ev.type === "Estándar"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-accent-light text-accent"
                      }`}>
                        {ev.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CAPI note */}
        <motion.div
          className="rounded-xl border border-border p-5 mb-6 flex gap-4"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.1)}
        >
          <Server size={18} className="shrink-0 text-accent mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-fg mb-1">{p.tracking.capiTitle}</p>
            <p className="text-sm text-muted leading-relaxed">{p.tracking.capiNote}</p>
          </div>
        </motion.div>

        {/* GA4 events */}
        <motion.div
          className="border border-border rounded-xl overflow-hidden mb-6"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.12)}
        >
          <div className="px-5 py-3 border-b border-border bg-surface flex items-center gap-2.5">
            <img src="https://cdn.simpleicons.org/googleanalytics" alt="Google Analytics" width={14} height={14} loading="lazy" />
            <p className="text-sm font-bold text-fg">{p.tracking.ga4Title}</p>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {p.tracking.ga4Events.map((ev) => (
              <code key={ev} className="text-xs bg-surface border border-border rounded px-2 py-1 text-muted font-mono">
                {ev}
              </code>
            ))}
          </div>
        </motion.div>

        {/* Funnel & Benchmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          <motion.div
            className="border border-border rounded-xl p-5 bg-white"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.17)}
          >
            <p className="text-sm font-bold text-fg mb-3">{p.tracking.funnelTitle}</p>
            <ol className="space-y-2">
              {p.tracking.funnelSteps.map((step, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-accent text-white shrink-0">
                    {i + 1}
                  </span>
                  {step}
                  {i < p.tracking.funnelSteps.length - 1 && (
                    <ChevronRight size={10} className="ml-auto shrink-0 text-border" />
                  )}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="border border-border rounded-xl p-5 bg-white"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.2)}
          >
            <p className="text-sm font-bold text-fg mb-3">Conversion Benchmarks</p>
            <ul className="space-y-3">
              {p.tracking.benchmarks.map((b, i) => (
                <li key={i} className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted leading-snug">{b.label}</span>
                  <span className="shrink-0 text-xs font-bold text-accent bg-accent-light px-2 py-0.5 rounded">
                    {b.target}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── LICENSES & HOSTING ───────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.licenses.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-xl">
              <FaroEmphasis text={p.licenses.h2} />
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-10 text-sm">{p.licenses.note}</p>
          </motion.div>

          <div className="space-y-3">
            {p.licenses.items.map((item, i) => (
              <LicenseCostRow
                key={item.service}
                item={item}
                index={i}
                reduce={reduce}
                essentialLabel={p.licenses.essentialLabel}
                optionalLabel={p.licenses.optionalLabel}
              />
            ))}
          </div>

          {/* Total summary */}
          <motion.div
            className="mt-6 rounded-2xl p-6 border"
            style={{ backgroundColor: FARO_TEAL, borderColor: FARO_TEAL }}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.1)}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: FARO_GOLD }}>
                  {p.licenses.totalLabel}
                </p>
                <p className="font-jakarta font-extrabold text-3xl text-white">{p.licenses.total}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{p.licenses.totalNote}</p>
              </div>
              <div className="rounded-xl px-5 py-4 text-sm max-w-xs" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <p style={{ color: FARO_GOLD }} className="font-semibold text-xs uppercase tracking-wider mb-1">Payment</p>
                <p style={{ color: "rgba(255,255,255,0.82)" }} className="text-sm leading-relaxed">{p.licenses.paymentNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NEXT STEPS ───────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          <SectionLabel>{p.nextSteps.label}</SectionLabel>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-xl">
            <FaroEmphasis text={p.nextSteps.h2} />
          </h2>
          <p className="text-muted leading-relaxed max-w-xl mb-10">{p.nextSteps.sub}</p>
        </motion.div>

        <div className="space-y-4">
          {p.nextSteps.steps.map((step, i) => {
            const ownerColors: Record<string, string> = {
              Both: "bg-accent-light text-accent",
              Ambos: "bg-accent-light text-accent",
              FARO: "bg-[#F1D09F]/30 text-[#7a5500]",
              José: "bg-[#003B4A]/10 text-[#003B4A]",
            };
            const ownerKey = step.owner as string;
            return (
              <motion.div
                key={step.step}
                className="border border-border rounded-xl bg-white p-5 flex gap-5"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={FARO_VIEWPORT}
                transition={faroTransition(reduce, i * 0.07)}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center font-jakarta font-extrabold text-sm text-white" style={{ backgroundColor: FARO_TEAL }}>
                    {step.step}
                  </span>
                  {i < p.nextSteps.steps.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ backgroundColor: "#e5e5e3" }} />
                  )}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-jakarta font-bold text-fg text-sm">{step.title}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${ownerColors[ownerKey] ?? "bg-surface text-muted"}`}>
                      {step.owner}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SUPPORT PLANS ────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce)}
          >
            <SectionLabel>{p.support.label}</SectionLabel>
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-3 max-w-xl">
              <FaroEmphasis text={p.support.h2} />
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-xl mb-8">{p.support.plansIntro}</p>
          </motion.div>

          {/* Free 2 months callout */}
          <motion.div
            className="rounded-2xl border-2 p-6 mb-8 flex flex-col sm:flex-row gap-5"
            style={{ borderColor: FARO_GOLD, backgroundColor: FARO_GOLD_DIM }}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.05)}
          >
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: FARO_GOLD, color: FARO_TEAL }}>
                <CheckCircle2 size={12} />
                {p.support.freeBox.badge}
              </span>
            </div>
            <div>
              <p className="font-jakarta font-extrabold text-fg text-lg mb-2">{p.support.freeBox.title}</p>
              <ul className="space-y-1.5 mb-3">
                {p.support.freeBox.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 size={13} className="shrink-0" style={{ color: FARO_TEAL }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted leading-relaxed italic">{p.support.freeBox.note}</p>
            </div>
          </motion.div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {p.support.plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl overflow-hidden border ${plan.highlight ? "border-[#003B4A]" : "border-border"} bg-white`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={FARO_VIEWPORT}
                transition={faroTransition(reduce, 0.08 + i * 0.08)}
              >
                {/* Card header */}
                <div
                  className="px-6 pt-6 pb-5 border-b border-border"
                  style={plan.highlight ? { backgroundColor: FARO_TEAL } : { backgroundColor: "#fafafa" }}
                >
                  {plan.highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-3" style={{ backgroundColor: FARO_GOLD, color: FARO_TEAL }}>
                      Recommended
                    </span>
                  )}
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                    {plan.name}
                  </p>
                  <p className={`font-jakarta font-extrabold text-3xl leading-none ${plan.highlight ? "text-white" : "text-fg"}`}>
                    {plan.price}
                  </p>
                  <p className={`text-xs mt-1.5 font-medium ${plan.highlight ? "text-white/70" : "text-muted"}`}>
                    {plan.sla}
                  </p>
                </div>

                {/* Features */}
                <ul className="px-6 py-5 space-y-2.5">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex gap-2.5 text-sm text-muted">
                      <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-[#003B4A]" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            className="text-xs text-muted leading-relaxed italic text-center max-w-lg mx-auto"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.15)}
          >
            {p.support.disclaimer}
          </motion.p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: FARO_TEAL }}
            initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={FARO_VIEWPORT}
            transition={{ duration: reduce ? 0 : 0.55, ease: FARO_EASE }}
          >
            {/* Gold top stripe */}
            <div className="h-1 w-full" style={{ backgroundColor: FARO_GOLD }} />

            <div className="p-10 md:p-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] mb-4" style={{ color: FARO_GOLD }}>
                {p.cta.eyebrow}
              </p>
              <h2 className="font-jakarta font-extrabold text-white text-3xl md:text-4xl mb-5 leading-tight">
                <ProposalHeroEmphasis text={p.cta.h2} />
              </h2>
              <p className="mb-10 max-w-lg mx-auto leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.68)" }}>
                {p.cta.p}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <a
                  href="https://calendly.com/josemcrea/let-s-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: FARO_GOLD, color: FARO_TEAL }}
                >
                  {p.cta.primary}
                  <ArrowRight size={14} />
                </a>
                <a
                  href="mailto:joseluis2000300@gmail.com?subject=FARO%20Propuesta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}
                >
                  {p.cta.secondary}
                </a>
              </div>

              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                {p.cta.subtext}
              </p>
            </div>
          </motion.div>

          {/* Back link */}
          <motion.p
            className="mt-8 text-center"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduce, 0.1)}
          >
            <a
              href="/faro-consultancy"
              className="text-sm text-muted hover:text-accent inline-flex items-center gap-1 transition-colors"
            >
              <Shield size={13} />
              Ver portafolio de contexto FARO →
            </a>
          </motion.p>
        </div>
      </section>
    </>
  );
}
