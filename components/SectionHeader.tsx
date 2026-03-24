"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  number?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      {label && (
        <span className="text-sm text-accent font-semibold tracking-wide block mb-3">
          {label}
        </span>
      )}
      <h2 className="font-jakarta font-extrabold text-3xl md:text-4xl text-fg tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
