"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative min-h-[min(90vh,860px)] flex items-center pt-16 hero-gradient">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-muted">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-jakarta font-extrabold text-[clamp(2.4rem,5.5vw,4.2rem)] tracking-[-0.02em] leading-[1.06] text-fg mb-6">
              {t.hero.line1}
              <br />
              <span className="text-accent">{t.hero.line2}</span>
            </h1>

            <p className="text-[17px] text-muted leading-relaxed mb-10 max-w-xl">
              {t.hero.subhead}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-fg text-white text-sm font-semibold hover:bg-fg/85 transition-colors"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={15} />
              </Link>
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-fg text-sm font-medium hover:bg-surface transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Right — unified photo + stats card */}
          <motion.aside
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl overflow-hidden border border-border">
              {/* Photo */}
              <div className="relative aspect-[4/3.6]"
                style={{ background: "linear-gradient(135deg, #0a0a14 0%, #0d1a2e 50%, #0a0f1a 100%)" }}>
                {/* Tech grid */}
                <div className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: "linear-gradient(#4488ff 1px, transparent 1px), linear-gradient(90deg, #4488ff 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                  }} />
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, #0066FF 0%, transparent 70%)" }} />
                <Image
                  src="/Gemini_Generated_Image_d5w4rld5w4rld5w4.png"
                  alt="José Martínez"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                    <p className="font-jakarta font-bold text-sm text-white">José Martínez</p>
                    <p className="text-xs text-white/60 mt-0.5">Panama City, Panama · @josem.crea</p>
                  </div>
                </div>
              </div>

              {/* Stats strip */}
              <div className="bg-surface border-t border-border p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted/50 font-semibold mb-4">
                  {t.hero.context}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {t.stats.slice(0, 4).map((stat) => (
                    <div key={stat.value}>
                      <div className="font-jakarta font-extrabold text-xl text-fg tabular-nums tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-muted mt-0.5 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
