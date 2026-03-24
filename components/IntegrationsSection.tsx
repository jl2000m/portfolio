"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useT } from "@/context/LanguageContext";

interface Integration {
  name: string;
  category: string;
  why: string;
  logoSrc?: string;
  brandColor: string;
}

interface AdditionalTool {
  name: string;
  icon?: string;
  color: string;
}

const SI = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex.replace("#", "")}`;

const highlighted: Integration[] = [
  {
    name: "Meta Ads",
    category: "Performance",
    why: "Conversion campaigns, audiences, and pixel event tracking",
    logoSrc: SI("meta", "#0082FB"),
    brandColor: "#0082FB",
  },
  {
    name: "Google Ads",
    category: "Performance",
    why: "Report automation, audience targeting, and bid optimization",
    logoSrc: SI("googleads", "#4285F4"),
    brandColor: "#4285F4",
  },
  {
    name: "Google Analytics 4",
    category: "Analytics",
    why: "User behavior analysis and conversion attribution",
    logoSrc: SI("googleanalytics", "#E37400"),
    brandColor: "#E37400",
  },
  {
    name: "Salesforce",
    category: "CRM",
    why: "Enterprise CRM for pipeline management and sales operations",
    logoSrc: SI("salesforce", "#00A1E0"),
    brandColor: "#00A1E0",
  },
  {
    name: "GoHighLevel",
    category: "CRM & Automation",
    why: "CRM, AI chatbots, and sales automation all in one place",
    logoSrc: "/brands/ghl.svg",
    brandColor: "#FF6534",
  },
  {
    name: "Supabase",
    category: "Backend",
    why: "Database, authentication, and realtime for full-stack apps",
    logoSrc: SI("supabase", "#3ECF8E"),
    brandColor: "#3ECF8E",
  },
  {
    name: "OpenAI",
    category: "AI",
    why: "LLMs for chatbots, classification, and content generation",
    logoSrc: "/brands/openai.svg",
    brandColor: "#000000",
  },
  {
    name: "Anthropic",
    category: "AI",
    why: "Anthropic's LLMs for reasoning-heavy and long-context tasks",
    logoSrc: "/brands/anthropic.svg",
    brandColor: "#191919",
  },
  {
    name: "n8n",
    category: "Automation",
    why: "No-code workflows connecting tools without middleware",
    logoSrc: SI("n8n", "#EA4B71"),
    brandColor: "#EA4B71",
  },
  {
    name: "HubSpot",
    category: "CRM",
    why: "Sales pipeline, contacts, and marketing automation",
    logoSrc: SI("hubspot", "#FF7A59"),
    brandColor: "#FF7A59",
  },
  {
    name: "Klaviyo",
    category: "Email",
    why: "Email marketing automation with behavior-based flows",
    logoSrc: "/brands/klaviyo.png",
    brandColor: "#1B1B1B",
  },
  {
    name: "Hotjar",
    category: "UX Research",
    why: "Heatmaps and recordings to understand real user behavior",
    logoSrc: SI("hotjar", "#FF3C00"),
    brandColor: "#FF3C00",
  },
];

const categoryColors: Record<string, string> = {
  "CRM & Automation": "#7C3AED",
  "Performance": "#0066FF",
  "Analytics": "#D97706",
  "Product Analytics": "#EA580C",
  "CRM": "#DC2626",
  "Backend": "#059669",
  "Automation": "#DB2777",
  "AI": "#6D28D9",
  "Email": "#1B1B1B",
  "UX Research": "#EA580C",
};

const additionalTools: AdditionalTool[] = [
  { name: "Zapier", icon: SI("zapier", "#FF4A00"), color: "#FF4A00" },
  { name: "Make", icon: SI("make", "#6D00CC"), color: "#6D00CC" },
  { name: "LangChain", icon: SI("langchain", "#1C3C3C"), color: "#1C3C3C" },
  { name: "PostHog", icon: SI("posthog", "#F54E00"), color: "#F54E00" },
  { name: "Microsoft Clarity", icon: "/brands/clarity.png", color: "#0078D4" },
  { name: "Mailchimp", icon: SI("mailchimp", "#FFE01B"), color: "#FFE01B" },
  { name: "WhatsApp API", icon: SI("whatsapp", "#25D366"), color: "#25D366" },
  { name: "Firebase", icon: "/brands/firebase.png", color: "#DD2C00" },
  { name: "Google Maps", icon: SI("googlemaps", "#4285F4"), color: "#4285F4" },
  { name: "Cashea", icon: "/brands/cashea.png", color: "#00C37C" },
  { name: "SURA API", icon: undefined, color: "#003DA5" },
  { name: "Chubb API", icon: undefined, color: "#C8102E" },
  { name: "Fedpa API", icon: undefined, color: "#1A3A6B" },
  { name: "Regional API", icon: undefined, color: "#2563EB" },
  { name: "Jira", icon: SI("jira", "#0052CC"), color: "#0052CC" },
  { name: "Notion", icon: SI("notion", "#000000"), color: "#000000" },
  { name: "Cloudflare", icon: SI("cloudflare", "#F38020"), color: "#F38020" },
  { name: "Resend", icon: SI("resend", "#000000"), color: "#000000" },
];

const extraTools: AdditionalTool[] = [
  { name: "Figma", icon: SI("figma", "#F24E1E"), color: "#F24E1E" },
  { name: "Looker Studio", icon: SI("googleanalytics", "#4285F4"), color: "#4285F4" },
  { name: "Vercel", icon: SI("vercel", "#000000"), color: "#000000" },
  { name: "GitHub", icon: SI("github", "#181717"), color: "#181717" },
  { name: "Spring Boot", icon: SI("springboot", "#6DB33F"), color: "#6DB33F" },
  { name: "PostgreSQL", icon: SI("postgresql", "#4169E1"), color: "#4169E1" },
  { name: "Tailwind CSS", icon: SI("tailwindcss", "#06B6D4"), color: "#06B6D4" },
  { name: "Next.js", icon: SI("nextdotjs", "#000000"), color: "#000000" },
  { name: "Google Tag Manager", icon: SI("googletagmanager", "#246FDB"), color: "#246FDB" },
  { name: "Framer", icon: SI("framer", "#0055FF"), color: "#0055FF" },
];

function BrandLogo({ integration }: { integration: Integration }) {
  if (integration.logoSrc) {
    return (
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={integration.logoSrc}
          alt={integration.name}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    );
  }
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
      style={{ backgroundColor: integration.brandColor }}
    >
      {integration.name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function ToolChip({ tool }: { tool: AdditionalTool }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-full border border-border text-muted bg-white hover:text-fg hover:border-border-hover transition-colors font-medium">
      {tool.icon ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={tool.icon} alt={tool.name} width={12} height={12} className="object-contain flex-shrink-0" />
      ) : (
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: tool.color }} />
      )}
      {tool.name}
    </span>
  );
}

const MOBILE_GRID_INITIAL = 4;

export default function IntegrationsSection() {
  const t = useT();
  const [expanded, setExpanded] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <section id="integrations" className="border-t border-border scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-14">
            <span className="text-sm font-semibold text-accent tracking-wide block mb-3">
              {t.integrations.label}
            </span>
            <h2 className="font-jakarta font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-fg mb-4 leading-[1.1]">
              {t.integrations.title}
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              {t.integrations.subtitle}
            </p>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlighted.map((integration, i) => {
              const catColor = categoryColors[integration.category] || "#6B6B6B";
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`p-5 rounded-xl border border-border bg-white hover:bg-surface hover:border-border-hover transition-all duration-200 hover:shadow-sm${i >= MOBILE_GRID_INITIAL && !showAllCards ? " hidden sm:block" : ""}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <BrandLogo integration={integration} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="font-jakarta font-bold text-fg text-sm leading-tight">
                          {integration.name}
                        </span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                          style={{ color: catColor, backgroundColor: `${catColor}12` }}
                        >
                          {integration.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-11">
                    {integration.why}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile show more for highlighted grid */}
          {!showAllCards && highlighted.length > MOBILE_GRID_INITIAL && (
            <div className="mt-4 flex justify-center sm:hidden">
              <button
                onClick={() => setShowAllCards(true)}
                className="px-6 py-2.5 rounded-xl border border-border text-sm font-semibold text-fg hover:bg-surface hover:border-border-hover transition-colors"
              >
                See all {highlighted.length} integrations
              </button>
            </div>
          )}

          {/* And many more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-6 rounded-xl border border-border bg-surface"
          >
            <p className="text-sm text-muted mb-4 font-medium">
              {t.integrations.andMore}
            </p>
            <div className="flex flex-wrap gap-2">
              {additionalTools.map((tool) => (
                <ToolChip key={tool.name} tool={tool} />
              ))}
            </div>

            {/* Expand section */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                    {extraTools.map((tool) => (
                      <ToolChip key={tool.name} tool={tool} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              {expanded ? "Show less" : "See all tools"}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
