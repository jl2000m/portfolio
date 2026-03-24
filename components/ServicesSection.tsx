"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap, BarChart2 } from "lucide-react";
import { useT } from "@/context/LanguageContext";

const icons = [ShoppingBag, Zap, BarChart2];

export default function ServicesSection() {
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
          {t.services.label}
        </span>
        <h2 className="font-jakarta font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-fg mb-4 whitespace-pre-line leading-[1.1]">
          {t.services.title}
        </h2>
        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {t.services.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.services.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group p-7 rounded-2xl border border-border bg-white hover:bg-surface hover:border-border-hover transition-all duration-200 hover:shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <span className="text-xs font-bold text-muted/50 tracking-widest uppercase">
                  {item.number}
                </span>
              </div>
              <h3 className="font-jakarta font-bold text-lg text-fg mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
