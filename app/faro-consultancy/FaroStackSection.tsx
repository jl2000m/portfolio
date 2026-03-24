"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/context/LanguageContext";
import { FARO_EASE, FARO_VIEWPORT, faroTransition } from "./faro-motion";
import { FaroEmphasis } from "./FaroEmphasis";

const SI = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex.replace("#", "")}`;

interface ToolDef {
  id: string;
  name: string;
  src: string;
  wide?: boolean;
}

const CORE_TOOLS: ToolDef[] = [
  { id: "meta", name: "Meta", src: SI("meta", "#0082FB") },
  { id: "googleAds", name: "Google Ads", src: SI("googleads", "#4285F4") },
  {
    id: "ga4",
    name: "Google Analytics 4",
    src: SI("googleanalytics", "#E37400"),
  },
  {
    id: "gtm",
    name: "Google Tag Manager",
    src: SI("googletagmanager", "#246FDB"),
  },
  { id: "ghl", name: "GoHighLevel", src: "/brands/ghl.svg", wide: true },
  { id: "hotjar", name: "Hotjar", src: SI("hotjar", "#FF3C00") },
];

const MORE_TOOLS: ToolDef[] = [
  { id: "posthog", name: "PostHog", src: SI("posthog", "#F54E00") },
  {
    id: "clarity",
    name: "Microsoft Clarity",
    src: "/brands/clarity.png",
  },
  {
    id: "lookerStudio",
    name: "Looker Studio",
    src: SI("googleanalytics", "#4285F4"),
  },
  { id: "n8n", name: "n8n", src: SI("n8n", "#EA4B71") },
  { id: "zapier", name: "Zapier", src: SI("zapier", "#FF4A00") },
  { id: "hubspot", name: "HubSpot", src: SI("hubspot", "#FF7A59") },
  { id: "klaviyo", name: "Klaviyo", src: "/brands/klaviyo.png" },
  { id: "mailchimp", name: "Mailchimp", src: SI("mailchimp", "#FFE01B") },
  { id: "whatsapp", name: "WhatsApp", src: SI("whatsapp", "#25D366") },
  { id: "nextjs", name: "Next.js", src: SI("nextdotjs", "#000000") },
  { id: "vercel", name: "Vercel", src: SI("vercel", "#000000") },
  { id: "supabase", name: "Supabase", src: SI("supabase", "#3ECF8E") },
  {
    id: "postgresql",
    name: "PostgreSQL",
    src: SI("postgresql", "#4169E1"),
  },
  {
    id: "springboot",
    name: "Spring Boot",
    src: SI("springboot", "#6DB33F"),
  },
  { id: "openai", name: "OpenAI", src: "/brands/openai.svg" },
  { id: "anthropic", name: "Anthropic", src: "/brands/anthropic.svg" },
  { id: "figma", name: "Figma", src: SI("figma", "#F24E1E") },
];

function ToolCard({
  tool,
  hint,
}: {
  tool: ToolDef;
  hint: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-left hover:border-border-hover transition-colors">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
        {/* Same pattern as homepage IntegrationsSection: plain img for brand icons */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.src}
          alt=""
          width={tool.wide ? 96 : 24}
          height={24}
          className={
            tool.wide
              ? "h-6 w-auto max-w-[96px] object-contain"
              : "h-6 w-6 object-contain"
          }
        />
      </div>
      <div className="min-w-0 pt-0.5">
        <p className="font-jakarta font-semibold text-sm text-fg leading-tight">
          {tool.name}
        </p>
        <p className="mt-1 text-xs text-muted leading-snug">{hint}</p>
      </div>
    </div>
  );
}

export function FaroStackSection() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const fs = t.faroPage.faroStack;
  const hints = fs.hints;
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="border-b border-border bg-surface py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion)}
        >
          <span className="text-sm font-semibold text-accent tracking-wide block mb-2">
            {fs.label}
          </span>
          <h2 className="font-jakarta font-extrabold text-xl md:text-2xl text-fg tracking-tight mb-3">
            {fs.title}
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            <FaroEmphasis text={fs.subtitle} />
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CORE_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={FARO_VIEWPORT}
              transition={faroTransition(reduceMotion, i * 0.05)}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -2, transition: { duration: 0.2, ease: FARO_EASE } }
              }
            >
              <ToolCard
                tool={tool}
                hint={hints[tool.id as keyof typeof hints]}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex flex-col items-center gap-2"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={FARO_VIEWPORT}
          transition={faroTransition(reduceMotion, 0.12)}
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-fg hover:bg-surface hover:border-border-hover transition-colors"
            aria-expanded={open}
          >
            {open
              ? fs.showFewer
              : fs.showMore.replace("{count}", String(MORE_TOOLS.length))}
            <ChevronDown
              size={16}
              className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          <Link
            href="/#integrations"
            className="text-xs text-muted/80 hover:text-accent transition-colors text-center"
          >
            {fs.crossCheck}
          </Link>
        </motion.div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: FARO_EASE }}
              className="overflow-hidden"
            >
              <div className="pt-8 border-t border-border mt-8">
                <motion.p
                  className="text-xs font-semibold uppercase tracking-wider text-muted mb-4"
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={faroTransition(reduceMotion)}
                >
                  {fs.alsoInPlay}
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {MORE_TOOLS.map((tool, i) => (
                    <motion.div
                      key={tool.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={faroTransition(reduceMotion, i * 0.035)}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -2,
                              transition: { duration: 0.2, ease: FARO_EASE },
                            }
                      }
                    >
                      <ToolCard
                        tool={tool}
                        hint={hints[tool.id as keyof typeof hints]}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
