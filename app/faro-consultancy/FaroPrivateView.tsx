"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  Globe2,
  Handshake,
  Layers,
  LineChart,
  MapPin,
  Radio,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLang, useT } from "@/context/LanguageContext";
import { getProjectBySlug, type Project } from "@/lib/projects";
import { localizeProject } from "@/lib/project-i18n";
import { FaroEmphasis } from "./FaroEmphasis";
import { FaroStackSection } from "./FaroStackSection";
import {
  FARO_EASE,
  FARO_VIEWPORT,
  faroTransition,
  heroVariants,
} from "./faro-motion";

const projectSlugs = ["reggi", "astro-asistencias", "sura-ecommerce"] as const;

const PILLAR_ICONS = [Compass, Globe2, Handshake] as const;

/** LinkedIn profile photo — used only on this page (URL may expire; refresh from LinkedIn if it breaks). */
const FARO_PAGE_AVATAR_SRC =
  "https://media.licdn.com/dms/image/v2/D4E03AQHUra-QZbANgA/profile-displayphoto-scale_200_200/B4EZ0eEQrqHUAc-/0/1774325932527?e=1775692800&v=beta&t=Tm-XqNnSgjvfmJVu7CQwD7LkQqFk6HeW8z66BgXryPM";

/** Query flag so project detail “back” returns here instead of /projects. */
const FARO_PROJECT_FROM = "?from=faro";

export function FaroPrivateView() {
  const t = useT();
  const { lang } = useLang();
  const p = t.faroPage;
  const reduceMotion = useReducedMotion() ?? false;

  const { container: heroContainer, item: heroItem } = heroVariants(reduceMotion);

  const projects: Project[] = projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((proj): proj is Project => proj != null);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pb-20 hero-gradient border-b border-border overflow-hidden">
        <motion.div
          className="pointer-events-none absolute top-20 right-0 w-[min(420px,55vw)] h-[min(420px,55vw)] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at center, #0066ff 0%, transparent 65%)",
          }}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: FARO_EASE }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={heroItem}
                className="font-jakarta font-extrabold text-[clamp(2rem,4.5vw,3.25rem)] tracking-[-0.02em] text-fg leading-[1.08] mb-6"
              >
                <FaroEmphasis text={p.hero.h1} />
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="text-lg text-muted leading-relaxed max-w-2xl mb-5"
              >
                <FaroEmphasis text={p.hero.p1} />
              </motion.p>
              <motion.p
                variants={heroItem}
                className="text-base text-muted leading-relaxed max-w-2xl mb-8"
              >
                <FaroEmphasis text={p.hero.p2} />
              </motion.p>

              <motion.div
                variants={heroItem}
                className="rounded-xl border border-accent/20 bg-accent-light/50 px-5 py-4 max-w-2xl"
              >
                <p className="text-sm text-fg leading-relaxed font-medium">
                  &ldquo;
                  <FaroEmphasis text={p.hero.quote} />
                  &rdquo;
                </p>
              </motion.div>
            </motion.div>

            <motion.aside
              className="lg:sticky lg:top-28 space-y-5"
              initial={
                reduceMotion ? false : { opacity: 0, y: 22, x: 10 }
              }
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                delay: reduceMotion ? 0 : 0.2,
                ease: FARO_EASE,
              }}
            >
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-border bg-surface">
                    <Image
                      src={FARO_PAGE_AVATAR_SRC}
                      alt="José Martínez"
                      fill
                      className="object-cover scale-[1.35] object-[center_20%]"
                      style={{ transformOrigin: "center 15%" }}
                      sizes="96px"
                      priority
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-jakarta font-bold text-fg">
                      José Martínez
                    </p>
                    <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                      <MapPin size={12} className="text-accent shrink-0" />
                      {p.hero.locationLine}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  {p.hero.snapshotLabel}
                </p>
                <ul className="space-y-2.5 text-sm text-muted leading-snug">
                  {p.credentials.map((line, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-2"
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={faroTransition(reduceMotion, 0.28 + i * 0.05)}
                    >
                      <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                      <span>
                        <FaroEmphasis text={line} />
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://linkedin.com/in/jlmv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:text-accent-hover"
                  >
                    {p.hero.linkedIn}
                  </a>
                  <span className="text-border">·</span>
                  <Link
                    href="/about"
                    className="font-semibold text-accent hover:text-accent-hover"
                  >
                    {p.hero.fullAbout}
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
            {p.stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-xl border border-border bg-white px-5 py-5 text-center sm:text-left hover:border-border-hover transition-colors"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={FARO_VIEWPORT}
                transition={faroTransition(reduceMotion, i * 0.07)}
              >
                <p className="font-jakarta font-extrabold text-3xl text-fg tracking-tight">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-fg mt-1">{s.label}</p>
                <p className="text-xs text-muted mt-1">{s.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FaroStackSection />

      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {p.contextSection.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-12 max-w-2xl">
            <FaroEmphasis text={p.contextSection.h2} />
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              label: p.contextSection.depthLabel,
              body: p.contextSection.depthBody,
            },
            {
              label: p.contextSection.reachLabel,
              body: p.contextSection.reachBody,
            },
            {
              label: p.contextSection.partnershipLabel,
              body: p.contextSection.partnershipBody,
            },
          ].map((col, i) => (
            <motion.div
              key={col.label}
              className="space-y-3"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduceMotion, 0.08 + i * 0.07)}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {col.label}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                <FaroEmphasis text={col.body} />
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {p.immersion.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-6">
            <FaroEmphasis text={p.immersion.h2} />
          </h2>
        </motion.div>
        <motion.div
          className="space-y-4 text-muted leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion, 0.1)}
        >
          <p>
            <FaroEmphasis text={p.immersion.p1} />
          </p>
          <p>
            <FaroEmphasis text={p.immersion.p2} />
          </p>
        </motion.div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduceMotion)}
            className="flex items-center gap-2 text-accent mb-3"
          >
            <Layers size={18} aria-hidden />
            <span className="text-sm font-semibold tracking-wide">
              {p.reggi.label}
            </span>
          </motion.div>
          <motion.h2
            className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-6"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduceMotion, 0.05)}
          >
            <FaroEmphasis text={p.reggi.h2} />
          </motion.h2>
          <motion.div
            className="space-y-4 text-muted leading-relaxed mb-8"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FARO_VIEWPORT}
            transition={faroTransition(reduceMotion, 0.1)}
          >
            <p>
              {p.reggi.p1Before}{" "}
              <Link
                href={`/projects/reggi${FARO_PROJECT_FROM}`}
                className="text-fg font-semibold underline underline-offset-2 decoration-accent/40 hover:decoration-accent"
              >
                Reggi
              </Link>
              <FaroEmphasis text={p.reggi.p1After} />
            </p>
            <p>
              <FaroEmphasis text={p.reggi.p2} />
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {p.pillars.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-10 max-w-xl">
            <FaroEmphasis text={p.pillars.h2} />
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {p.pillars.items.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i];
            const accents = ["#0066FF", "#c9a962", "#3ecf8e"] as const;
            const accent = accents[i] ?? "#0066FF";
            return (
              <motion.div
                key={pillar.title}
                className="border border-border rounded-xl p-6 bg-white hover:border-border-hover transition-colors"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={FARO_VIEWPORT}
                transition={faroTransition(reduceMotion, i * 0.08)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -3, transition: { duration: 0.22, ease: FARO_EASE } }
                }
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}14` }}
                >
                  <Icon size={20} style={{ color: accent }} aria-hidden />
                </div>
                <h3 className="font-jakarta font-bold text-base text-fg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <FaroEmphasis text={pillar.body} />
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-border">
        <motion.div
          className="flex items-center gap-2 text-accent mb-3"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <LineChart size={18} aria-hidden />
          <span className="text-sm font-semibold tracking-wide">
            {p.signal.label}
          </span>
        </motion.div>
        <motion.h2
          className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-6"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion, 0.05)}
        >
          <FaroEmphasis text={p.signal.h2} />
        </motion.h2>
        <motion.div
          className="space-y-4 text-muted leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion, 0.1)}
        >
          <p>
            <FaroEmphasis text={p.signal.p1} />
          </p>
          <p className="flex gap-3 items-start">
            <Radio
              className="shrink-0 text-accent mt-0.5"
              size={18}
              aria-hidden
            />
            <span>
              <strong className="text-fg font-semibold">
                {p.signal.ghlLead}
              </strong>{" "}
              <FaroEmphasis text={p.signal.ghlBody} />
            </span>
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {p.work.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg tracking-tight mb-4">
            {p.work.h2}
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-10">
            <FaroEmphasis text={p.work.subtitle} />
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((proj, i) => {
            if (!proj.coverImage) return null;
            const lp = localizeProject(proj, lang);
            const blurb =
              p.work.blurbs[proj.slug as keyof typeof p.work.blurbs];
            return (
              <motion.div
                key={proj.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={FARO_VIEWPORT}
                transition={faroTransition(reduceMotion, i * 0.09)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.25, ease: FARO_EASE } }
                }
              >
                <Link
                  href={`/projects/${proj.slug}${FARO_PROJECT_FROM}`}
                  className="group block rounded-xl border border-border bg-white overflow-hidden hover:border-border-hover hover:shadow-md transition-shadow h-full"
                >
                  <div className="relative aspect-[2/1] border-b border-border bg-surface overflow-hidden">
                    <Image
                      src={proj.coverImage}
                      alt={`${lp.name} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-jakarta font-bold text-base text-fg group-hover:text-accent transition-colors flex items-center gap-1">
                      {lp.name}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </h3>
                    <p className="text-xs text-muted mt-1 mb-3">{lp.tagline}</p>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">
                      <FaroEmphasis text={blurb} />
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          className="mt-10"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion, 0.15)}
        >
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:text-accent-hover inline-flex items-center gap-1"
          >
            {p.work.fullIndex}
            <ArrowRight size={14} />
          </Link>
        </motion.p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            className="border border-border rounded-2xl p-8 md:p-10 text-center bg-white relative overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={FARO_VIEWPORT}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: FARO_EASE,
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-[0.07] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, #0066ff, transparent 70%)",
              }}
              aria-hidden
            />
            <h2 className="font-jakarta font-extrabold text-2xl md:text-3xl text-fg mb-3 relative">
              {p.cta.h2}
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed relative">
              <FaroEmphasis text={p.cta.p} />
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-3 relative"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduceMotion, 0.12)}
            >
              <a
                href="https://calendly.com/josemcrea/let-s-talk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-fg text-white font-semibold text-sm rounded-xl hover:bg-fg/85 transition-colors"
              >
                {p.cta.schedule}
                <ArrowRight size={14} />
              </a>
              <a
                href="mailto:joseluis2000300@gmail.com?subject=FARO%20Consultancy%20portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-fg text-sm font-medium rounded-xl hover:bg-surface transition-colors"
              >
                {p.cta.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
