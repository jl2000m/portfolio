"use client";

import { motion } from "framer-motion";
import { useT } from "@/context/LanguageContext";

export default function ProcessSection() {
  const t = useT();

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
          {t.process.label}
        </span>
        <h2 className="font-jakarta font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-fg mb-4 whitespace-pre-line leading-[1.1]">
          {t.process.title}
        </h2>
        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {t.process.subtitle}
        </p>
      </motion.div>

      {/* Desktop: horizontal row with connecting arrows */}
      <div className="hidden lg:flex items-stretch gap-0">
        {t.process.steps.map((step, i) => (
          <div key={step.number} className="flex items-stretch flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              className={`flex-1 p-6 rounded-2xl border transition-all duration-200 hover:shadow-sm ${
                i === 4
                  ? "bg-accent border-accent text-white"
                  : "bg-white border-border hover:bg-surface hover:border-border-hover"
              }`}
            >
              <span
                className={`text-xs font-bold tracking-widest uppercase block mb-4 ${
                  i === 4 ? "text-white/60" : "text-muted/50"
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`font-jakarta font-bold text-base mb-3 tracking-tight ${
                  i === 4 ? "text-white" : "text-fg"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  i === 4 ? "text-white/75" : "text-muted"
                }`}
              >
                {step.description}
              </p>
            </motion.div>

            {/* Arrow connector — not after last */}
            {i < t.process.steps.length - 1 && (
              <div className="flex items-center px-2 text-border flex-shrink-0 self-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="lg:hidden flex flex-col gap-4">
        {t.process.steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`flex gap-5 p-5 rounded-2xl border ${
              i === 4
                ? "bg-accent border-accent"
                : "bg-white border-border"
            }`}
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs ${
                i === 4 ? "bg-white/20 text-white" : "bg-surface text-muted border border-border"
              }`}
            >
              {i === 4 ? "↺" : step.number}
            </div>
            <div>
              <h3
                className={`font-jakarta font-bold text-base mb-1.5 ${
                  i === 4 ? "text-white" : "text-fg"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  i === 4 ? "text-white/75" : "text-muted"
                }`}
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
