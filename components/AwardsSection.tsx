"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, ExternalLink, Award } from "lucide-react";
import { useT } from "@/context/LanguageContext";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  image?: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2025",
    image: "/certs/ga-certification.jpg",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    year: "2025",
    image: "/certs/google-digital-marketing.jpg",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Klaviyo Developer Certification",
    issuer: "Klaviyo",
    year: "2025",
    image: "/certs/klaviyo-developer.jpg",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Klaviyo Product Certification",
    issuer: "Klaviyo",
    year: "2025",
    image: "/certs/klaviyo-product.jpg",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Google Tag Manager Fundamentals",
    issuer: "Google",
    year: "2024",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Meta Blueprint: Media Buying",
    issuer: "Meta",
    year: "2024",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "HubSpot Email Marketing",
    issuer: "HubSpot",
    year: "2024",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
  {
    name: "Confluence Fundamentals",
    issuer: "Atlassian",
    year: "2023",
    credentialUrl: "https://linkedin.com/in/jlmv/",
  },
];

export default function AwardsSection() {
  const t = useT();

  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
            {t.awards.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-fg leading-[1.1]">
            {t.awards.title}
          </h2>
        </motion.div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {t.awards.items.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-white hover:bg-surface hover:border-border-hover transition-all duration-200 hover:shadow-sm"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <Trophy size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-jakarta font-bold text-sm text-fg leading-snug">
                    {award.title}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{award.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-fg/80 bg-surface border border-border px-2.5 py-1 rounded-full">
                  {award.year}
                </span>
                <span className="text-xs text-muted">{award.location}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-6">
            {t.awards.certs}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-border bg-white hover:bg-surface hover:border-border-hover transition-all duration-200 hover:shadow-sm cursor-pointer"
              >
                {cert.image ? (
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface border border-border">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-square rounded-xl bg-accent-light border border-accent/20 flex items-center justify-center">
                    <Award size={28} className="text-accent/60" />
                  </div>
                )}
                <div className="text-center w-full">
                  <p className="text-[12px] font-semibold text-fg leading-snug line-clamp-2 mb-1">
                    {cert.name}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-[11px] text-muted">{cert.issuer} · {cert.year}</p>
                    <ExternalLink
                      size={10}
                      className="text-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
