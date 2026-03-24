"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useT } from "@/context/LanguageContext";

export default function BookCallSection() {
  const t = useT();

  return (
    <section id="book-call" className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-accent tracking-wide block mb-4">
              {t.bookCall.label}
            </span>
            <h2 className="font-jakarta font-extrabold text-[clamp(2.2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-fg leading-[1.08] mb-5">
              {t.bookCall.title}
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {t.bookCall.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/josemcrea/let-s-talk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-fg text-white font-semibold text-sm rounded-xl hover:bg-fg/85 transition-colors group"
              >
                {t.bookCall.cta}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href="mailto:joseluis2000300@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-4 border border-border bg-white text-fg text-sm font-medium rounded-xl hover:bg-surface hover:border-border-hover transition-all duration-200"
              >
                <Mail size={15} />
                {t.bookCall.orEmail}
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              {t.bookCall.aboutLink}{" "}
              <Link
                href="/about"
                className="font-medium text-fg hover:underline"
              >
                {t.bookCall.aboutLinkTarget} →
              </Link>
            </p>

            {/* Micro-copy */}
            <p className="mt-4 text-xs text-muted/60">
              joseluis2000300@gmail.com · Panama City, Panama
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
