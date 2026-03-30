"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { faroContractEn, faroContractEs } from "@/lib/i18n-faro-contract";
import { FARO_EASE, FARO_VIEWPORT, faroTransition } from "../../faro-motion";

const FARO_TEAL = "#003B4A";
const FARO_GOLD = "#F1D09F";

function Section({
  title,
  children,
  reduce,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  reduce: boolean;
  delay: number;
}) {
  return (
    <motion.section
      className="mb-10"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={FARO_VIEWPORT}
      transition={faroTransition(reduce, delay)}
    >
      <h2 className="font-jakarta font-bold text-fg text-lg mb-3 border-b border-border pb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-3">{children}</div>
    </motion.section>
  );
}

export function FaroContractView() {
  const { lang } = useLang();
  const c = lang === "es" ? faroContractEs : faroContractEn;
  const reduce = useReducedMotion() ?? false;

  return (
    <>
      <section className="relative pt-28 pb-12 overflow-hidden" style={{ backgroundColor: FARO_TEAL }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(241,208,159,0.2)", color: FARO_GOLD }}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, ease: FARO_EASE }}
          >
            <FileText size={14} />
            {c.badge}
          </motion.div>
          <motion.h1
            className="font-jakarta font-extrabold text-white text-3xl md:text-4xl tracking-tight mb-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: 0.06, ease: FARO_EASE }}
          >
            {c.title}
          </motion.h1>
          <motion.p
            className="text-base mb-2"
            style={{ color: "rgba(255,255,255,0.75)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.45, delay: 0.12 }}
          >
            {c.subtitle}
          </motion.p>
          <motion.p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.4, delay: 0.18 }}
          >
            {c.lastUpdated}
          </motion.p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-14 pb-24">
        <motion.p
          className="text-sm text-muted leading-relaxed mb-12 p-4 rounded-xl border border-border bg-surface"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce)}
        >
          {c.intro}
        </motion.p>

        <Section title={c.partiesTitle} reduce={reduce} delay={0.02}>
          <p>
            <span className="font-semibold text-fg">{c.partyClient}.</span> {c.partyClientName}
          </p>
          <p>
            <span className="font-semibold text-fg">{c.partyDev}.</span> {c.partyDevName}
          </p>
        </Section>

        <Section title={c.scopeTitle} reduce={reduce} delay={0.04}>
          <p>{c.scopeIntro}</p>
          <p>{c.scopeRef}</p>
        </Section>

        <Section title={c.phasesTitle} reduce={reduce} delay={0.06}>
          <p>{c.phasesBody}</p>
        </Section>

        <Section title={c.paymentTitle} reduce={reduce} delay={0.08}>
          <ul className="list-disc pl-5 space-y-2">
            {c.paymentItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title={c.clientTitle} reduce={reduce} delay={0.1}>
          <ul className="list-disc pl-5 space-y-2">
            {c.clientItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title={c.devTitle} reduce={reduce} delay={0.12}>
          <ul className="list-disc pl-5 space-y-2">
            {c.devItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title={c.ipTitle} reduce={reduce} delay={0.14}>
          <p>{c.ipBody}</p>
        </Section>

        <Section title={c.warrantyTitle} reduce={reduce} delay={0.16}>
          <p>{c.warrantyBody}</p>
        </Section>

        <Section title={c.confidentialTitle} reduce={reduce} delay={0.18}>
          <p>{c.confidentialBody}</p>
        </Section>

        <Section title={c.liabilityTitle} reduce={reduce} delay={0.2}>
          <p>{c.liabilityBody}</p>
        </Section>

        <Section title={c.termTitle} reduce={reduce} delay={0.22}>
          <p>{c.termBody}</p>
        </Section>

        <Section title={c.miscTitle} reduce={reduce} delay={0.24}>
          <ul className="list-disc pl-5 space-y-2">
            {c.miscItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <motion.div
          className="mt-14 p-6 rounded-2xl border-2 border-dashed border-border bg-surface/80"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduce, 0.26)}
        >
          <h2 className="font-jakarta font-bold text-fg text-lg mb-2">{c.signaturesTitle}</h2>
          <p className="text-xs text-muted mb-8">{c.signaturesNote}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-fg">{c.signClient}</p>
              <div className="space-y-4 text-xs text-muted">
                <div className="border-b border-border pb-1">{c.signName}: _______________________</div>
                <div className="border-b border-border pb-1">{c.signTitle}: _______________________</div>
                <div className="border-b border-border pb-1">{c.signDate}: _______________________</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold text-fg">{c.signDev}</p>
              <div className="space-y-4 text-xs text-muted">
                <div className="border-b border-border pb-1">{c.signName}: _______________________</div>
                <div className="border-b border-border pb-1">{c.signTitle}: _______________________</div>
                <div className="border-b border-border pb-1">{c.signDate}: _______________________</div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-12 text-center">
          <a
            href={c.proposalPath}
            className="text-sm text-muted hover:text-accent inline-flex items-center gap-1 transition-colors"
          >
            {c.backToProposal}
          </a>
        </p>
      </article>
    </>
  );
}
