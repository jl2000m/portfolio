import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Linkedin,
  Instagram,
  Target,
  Zap,
  Users,
  MessageSquare,
  TrendingUp,
  Code2,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  AboutSectionLabel,
  AboutPageLabel,
  AboutBio,
  AboutTimeline,
  AboutCTA,
} from "@/components/AboutPageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "José Martínez — bridging business and technology. E-commerce, applied AI, and growth from Panama.",
};

const values = [
  {
    icon: Target,
    title: "Judgment over hype",
    description:
      "I evaluate every tool and technology by its real impact, not by trends. AI is a means, not an end.",
    accent: "#0066FF",
  },
  {
    icon: Code2,
    title: "Build to understand",
    description:
      "I don't have opinions about what I haven't implemented. Building MVPs is my way of validating ideas with evidence.",
    accent: "#3ecf8e",
  },
  {
    icon: TrendingUp,
    title: "Business first",
    description:
      "Technology serves the business, not the other way around. Every technical decision needs a commercial argument.",
    accent: "#9d7cf0",
  },
  {
    icon: MessageSquare,
    title: "Learn in public",
    description:
      "Sharing what I learn, including mistakes, helps me organize ideas and connect with people facing similar problems.",
    accent: "#f47285",
  },
  {
    icon: Zap,
    title: "Speed with quality",
    description:
      "MVPs need to be fast but not careless. The balance is knowing what not to do yet.",
    accent: "#e8a838",
  },
  {
    icon: Users,
    title: "Real collaboration",
    description:
      "I work better with people who bring a different perspective than with those who just echo mine.",
    accent: "#0066FF",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <AboutPageLabel />

          <div className="flex items-center gap-5 mb-4">
            <Image
              src="/jose-martinez.jpeg"
              alt="José Martínez"
              width={80}
              height={80}
              className="rounded-full ring-2 ring-border object-cover"
            />
            <h1 className="font-jakarta font-extrabold text-5xl md:text-6xl text-fg tracking-tight">
              José Martínez
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} className="text-accent" />
              Panama City, Panama
            </span>
            <a
              href="https://linkedin.com/in/jlmv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              linkedin.com/in/jlmv
            </a>
            <a
              href="https://instagram.com/josem.crea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <Instagram size={14} />
              @josem.crea
            </a>
          </div>

          <AboutBio />
        </section>

        {/* Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <AboutSectionLabel section="experience" />
          <AboutTimeline />
        </section>

        {/* Values */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <AboutSectionLabel section="principles" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="border border-border rounded-xl p-6 bg-white hover:border-border-hover hover:bg-surface transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.accent}12` }}
                  >
                    <Icon size={18} style={{ color: value.accent }} />
                  </div>
                  <h3 className="font-jakarta font-bold text-base text-fg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tools */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <AboutSectionLabel section="stack" />
          <div className="space-y-6">
            {[
              {
                category: "Frontend",
                tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Shadcn"],
              },
              {
                category: "Backend",
                tools: ["Spring Boot", "Java 17", "JOOQ", "Flyway", "PostgreSQL", "Supabase", "Node.js"],
              },
              {
                category: "AI & Automation",
                tools: ["LangChain", "OpenAI API", "Anthropic API", "n8n", "GoHighLevel", "Python", "LLM evals"],
              },
              {
                category: "Growth & Marketing",
                tools: ["Meta Ads", "Google Ads", "GA4", "Klaviyo", "Mailchimp", "Looker Studio", "Hotjar", "PostHog"],
              },
              {
                category: "E-commerce",
                tools: ["Shopify", "Cashea", "PlaceToPay", "CRO", "Email marketing", "Checkout optimization"],
              },
            ].map(({ category, tools }) => (
              <div key={category}>
                <div className="text-sm text-accent font-semibold mb-3">
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted bg-white hover:text-fg hover:border-border-hover transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <AboutCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
