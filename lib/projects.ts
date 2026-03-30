export type ProjectStatus =
  | "active"
  | "shipped"
  | "legacy"
  | "paused"
  | "comingSoon";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  accent: string;
  tags: string[];
  stack: string[];
  description: string;
  problem: string;
  features: string[];
  architecture: string;
  learnings: string;
  liveUrl: string | null;
  githubUrl: string | null;
  /** Path under /public, e.g. `/projects/birriapp.webp` */
  coverImage: string | null;
  /** Same-site iframe (e.g. preview at `/embed/...` while prod is not ready) */
  previewEmbedUrl: string | null;
  /** Text below preview (dates, final domain, etc.) */
  liveUrlNote: string | null;
}

export const projects: Project[] = [
  {
    slug: "sura-ecommerce",
    name: "SURA Insurance E-commerce",
    tagline: "Panama's first multiproduct digital insurance platform.",
    status: "shipped",
    accent: "#0066FF",
    tags: ["E-commerce", "InsurTech", "Growth"],
    stack: [
      "Figma",
      "Google Analytics 4",
      "Google Tag Manager",
      "Meta Ads",
      "Google Ads",
      "Looker Studio",
      "Hotjar",
      "Agile / Scrum",
      "Jira",
    ],
    description:
      "Owned the launch and growth of Panama's first multiproduct digital insurance e-commerce platform as Product Owner and Commercial Lead. Not the dev. The person who defined what got built, why, and how it performed commercially. +200% YoY growth, more than $2M in digital sales.",
    problem:
      "SURA needed Panama's first multiproduct digital insurance channel built from scratch. No local playbook existed. My job was to define the product vision, align the dev team around it, and make it grow commercially in a market that had never bought insurance online.",
    features: [
      "Product roadmap ownership: defined priorities, specs, and acceptance criteria",
      "4-person team managing 5k+ monthly leads across all digital channels",
      "Multi-channel performance marketing (Meta Ads + Google Ads)",
      "CRO strategy: A/B tests, Hotjar analysis, continuous UX iteration with Figma",
      "Executive KPI dashboards built in Looker Studio",
      "GA4 + GTM tracking setup for full funnel attribution",
      "Bridged business requirements and the dev team end-to-end",
    ],
    architecture:
      "My role: Product Owner + Commercial Lead. I did not write the code. I owned the roadmap, defined what the platform needed to do commercially, coordinated with the dev team, and was accountable for the digital channel results.",
    learnings:
      "The hardest part of a product role is not deciding what to build. It is getting a dev team and a corporate structure to move at startup speed. User trust, pricing transparency, and internal change management were the real blockers. Data and a clear commercial argument were the only things that cut through.",
    liveUrl: "https://asegurate.segurossura.com.pa/",
    githubUrl: null,
    coverImage: "/projects/sura-ecommerce.webp",
    previewEmbedUrl: null,
    liveUrlNote: "Live platform. Panama's leading multiproduct digital insurance channel.",
  },
  {
    slug: "astro-asistencias",
    name: "Astro Asistencias",
    tagline: "Digital insurance brokerage in Panama.",
    status: "active",
    accent: "#63b3ff",
    tags: ["Web", "InsurTech", "Performance Media"],
    stack: [
      "Next.js 15",
      "Java 17",
      "Spring Boot 3.2",
      "JOOQ",
      "PostgreSQL",
      "Flyway",
      "Supabase",
      "SURA API",
      "JWT",
      "Swagger/OpenAPI",
      "TypeScript",
    ],
    description:
      "Digital brokerage platform for insurance in Panama: SOAT, auto, and travel. The company's first hire. Full-stack architecture with Java API + Next.js frontend, integrated with SURA Insurance and a multi-level commission system.",
    problem:
      "The insurance quote and purchase process in Panama is offline, slow, and full of friction. Astro digitizes the entire flow from quote to policy issuance.",
    features: [
      "Real-time quotes via SURA API",
      "Client and agent portal",
      "Multi-level commission system",
      "Policy and payment management",
      "Vehicle history with Bluebook",
      "40+ DB migrations with Flyway",
      "Swagger/OpenAPI documentation",
    ],
    architecture:
      "Frontend (Next.js) → Spring Boot API → PostgreSQL (JOOQ ORM) → SURA Insurance API + Bluebook scraper. JWT auth, stateless REST, ACID transactions with optimistic locking.",
    learnings:
      "Spring Boot with JOOQ is an underrated stack for financial APIs. Type-safety end-to-end from the DB to the client. TestContainers for integration tests running against a real DB completely changes QA quality.",
    liveUrl: "https://astroasistencias.com/",
    githubUrl: null,
    coverImage: "/projects/astro-asistencias.webp",
    previewEmbedUrl: null,
    liveUrlNote: null,
  },
  {
    slug: "cobertura-completa-advisor",
    name: "Full Coverage AI Advisor",
    tagline: "Guidance grounded in RAG, flagship LLMs, and ongoing model evaluation on real quotes.",
    status: "active",
    accent: "#4f8cff",
    tags: ["InsurTech", "AI", "Web"],
    stack: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "OpenAI (flagship + embeddings)",
      "Anthropic (flagship)",
      "Supabase / Postgres + vector search",
    ],
    description:
      "An AI assisted experience for full coverage auto at Astro Asistencias: recommendations and follow ups anchored to live quote data, with RAG over approved insurer documents when users ask about conditions, exclusions, or endorsements. Recommendations are reasoned with a MECE style frame (mutually exclusive decision dimensions that still cover what matters) so the assistant does not collapse into “always pick the cheapest.” Generation runs on flagship class models from major providers. The system is set up to evaluate those models in production, not only as a single benchmark. What the shopper sees is also stored in our CRM so the team can continue the conversation with full context.",
    problem:
      "Multi insurer quotes are noisy. Shoppers drown in deductibles and benefits. Generic chatbots either hedge forever or invent coverage. The product needed guidance that feels personal but respects what is on the policy page, plus a way to know which flagship model and prompt setup actually hold up under traffic.",
    features: [
      "MECE inspired prompting: the model scores each quoted plan on separate dimensions (for example price, benefits and limits, insurer strength, and fit to the driver and vehicle) before synthesizing, so arguments do not repeat the same idea under different names and nothing important is skipped by accident",
      "Personalized recommendation copy and suggested next questions, driven by the live quote, not generic insurance advice",
      "Follow up questions and answers with strict guardrails: compare only what appears in the quoted options, localized tone for Panama",
      "RAG (retrieval augmented generation): embedded chunks from insurer approved materials, semantic search, answers scoped to the right insurer and product",
      "Routing so simple pricing or “which plan?” stays lightweight. Full RAG path when the question needs policy language",
      "Flagship OpenAI and Anthropic models for high stakes generation. Smaller models where a cheap routing or classification step is enough",
      "Model evaluation in production. Consistent logging of cost, latency, and which path ran (generation vs cache vs RAG) so providers and prompts can be compared on real conversions instead of slides",
      "Caching and rate limits so flagship usage stays fast and affordable at volume",
      "Recommendations and follow up answers sync to our CRM on the contact or deal, so sales and ops see the same guidance the user received",
    ],
    architecture:
      "Next.js APIs, Vercel AI SDK, structured outputs for the UI, RAG pipeline (embeddings + vector store in Postgres/Supabase), brokerage stack for quotes and customer context, and CRM integration so AI outputs land on the record the team works from every day.",
    learnings:
      "RAG earns trust on fine print. The quote JSON still wins on benefits. A MECE style rubric stops the model from lazy “cheapest wins” answers and makes trade offs explicit. Flagship models are table stakes for quality, but without production side model evaluation you are flying blind on cost and regressions. Structured outputs plus telemetry turn live traffic into the real eval set.",
    liveUrl: "https://astroasistencias.com/",
    githubUrl: null,
    coverImage: "/projects/full-coverage-advisor.png",
    previewEmbedUrl: null,
    liveUrlNote:
      "Ships inside Astro’s full coverage auto journey. Same live site, dedicated product surface.",
  },
  {
    slug: "birriapp",
    name: "Birriapp",
    tagline: "Coordinate matches. Collect instantly.",
    status: "active",
    accent: "#ff0000",
    tags: ["Mobile", "App", "Supabase"],
    stack: [
      "Next.js 15",
      "React Native",
      "Supabase",
      "PostgreSQL",
      "Firebase",
      "Google Maps",
      "TypeScript",
    ],
    description:
      "Sports match coordination app with real-time payment management, push notifications, QR check-in, and integrated maps.",
    problem:
      "Organizing amateur matches means chasing payments, confirming attendance, and coordinating venues. All over WhatsApp. Birriapp centralizes everything in one platform.",
    features: [
      "Sports match coordination",
      "Payment management",
      "QR code check-in",
      "Push notifications (Firebase)",
      "Google Maps integration for venues",
      "Automatic payment status sync via PostgreSQL triggers",
    ],
    architecture:
      "Next.js web + React Native mobile → Supabase (PostgreSQL + RLS + Auth + Realtime) → Firebase (push notifications) + Google Maps",
    learnings:
      "Implementing Row Level Security in Supabase from the start saves weeks of work. PostgreSQL triggers for payment status sync eliminate race conditions that would be complex to handle on the frontend.",
    liveUrl:
      "https://birriapp.com/?utm_source=josemcrea&utm_medium=portfolio&utm_campaign=project_birriapp",
    githubUrl: null,
    coverImage: "/projects/birriapp.webp",
    previewEmbedUrl: null,
    liveUrlNote:
      "The marketing site is live at birriapp.com. The app is coming soon — join the waitlist for early access.",
  },
  {
    slug: "reggi",
    name: "Reggi",
    tagline: "Digital due diligence, without friction.",
    status: "shipped",
    accent: "#00d0ff",
    tags: ["Web", "Compliance", "KYC"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Radix UI",
      "Zod",
      "Monorepo (pnpm)",
    ],
    description:
      "Website for Reggi, a KYC/AML due diligence platform for regulated companies in Panama. The key insight was that one landing page wasn't enough. Reggi serves 6 different industries, each with its own pain points, so we built a dedicated page per industry. Built in Next.js inside the company's monorepo for component shareability and maintainability.",
    problem:
      "Regulated companies waste time on manual due diligence: scattered files, repeated forms, one-by-one PEP/sanctions screening, and poor audit traceability. The communication challenge was that each industry (lawyers, brokers, real estate) has a different compliance workflow and a different way of talking about the problem.",
    features: [
      "Main landing: hero, problem/solution, how it works, FAQ, contact",
      "6 industry-specific pages: distribution, lawyers, real estate, brokers, accountants, notaries",
      "Mi Reggi section (free digital record for individuals and companies)",
      "Animations and scroll-reveal with Framer Motion",
      "Demo form ready to integrate with CRM",
      "Shared components and design tokens via company monorepo",
    ],
    architecture:
      "Next.js App Router inside the company's monorepo. Shared UI components and design tokens across apps. Deployed independently from other monorepo products.",
    learnings:
      "A compliance website has to sound serious without being boring. The bigger realization was that a single generic landing was losing everyone. Each industry has its own compliance language and its own fear. Six targeted pages meant we could speak directly to each one instead of trying to cover all of them at once.",
    liveUrl: "https://landingreggi.vercel.app/",
    githubUrl: null,
    coverImage: "/projects/reggi.webp",
    previewEmbedUrl: null,
    liveUrlNote: null,
  },
  {
    slug: "excenet",
    name: "Excenet Asistencias",
    tagline: "First-generation digital asistencias platform.",
    status: "shipped",
    accent: "#f59e0b",
    tags: ["Web", "FinTech", "Venezuela"],
    stack: [
      "Next.js 15",
      "Supabase",
      "Shadcn UI",
      "Cashea",
      "Mailchimp",
      "Klaviyo",
      "Cloudflare Turnstile",
      "ExcelJS",
      "jsPDF",
      "Visx",
      "Framer Motion",
    ],
    description:
      "Admin dashboard and customer portal for selling assistance products in Venezuela and Panama. Multi-currency payments, BCV exchange rate scraping for real-time VES pricing, and Cashea BNPL integration. Monorepo architecture with Turbo.",
    problem:
      "Selling assistance products in LatAm required a system handling multi-currency payments, multi-level commissions, and real-time exchange rate updates. In Venezuela, the BCV rate changes constantly and any pricing delay means selling at a loss. No third-party SaaS fit the market.",
    features: [
      "Admin dashboard with real-time analytics",
      "Customer portal for assistance purchases",
      "BCV exchange rate scraping for automatic VES pricing updates",
      "Multi-level commission system",
      "ANCON SOAP API integration (quotes)",
      "BDV Banking API + Cashea BNPL payments",
      "Excel/PDF export",
      "Complete audit trail",
      "OCR and document validation",
      "Google Wallet integration",
      "Monorepo architecture (Turbo + pnpm)",
    ],
    architecture:
      "Turbo monorepo: apps/admin (Next.js, port 3001) + apps/store (Next.js) + packages/shared. Supabase with hierarchical RLS. ANCON SOAP + BDV API + Cashea + Klaviyo.",
    learnings:
      "Building a correct multi-level commission system from the start is much harder than it looks. Technical debt in RLS with hierarchical roles eventually required a complete refactor. In volatile markets, pricing automation is not a nice-to-have.",
    liveUrl: "https://www.excenet.com.ve/",
    githubUrl: null,
    coverImage: "/excenet.png",
    previewEmbedUrl: null,
    liveUrlNote:
      "Live production site — ExceNet customer experience for assistance products in Venezuela (represented by MIDC Inversiones y Asesoría C.A.).",
  },
  {
    slug: "rm-seguros",
    name: "RM Seguros",
    tagline: "Life insurance landing page that converts visitors into prospects.",
    status: "shipped",
    accent: "#f47285",
    tags: ["Web", "InsurTech", "Seguros de Vida"],
    stack: [
      "Next.js 15",
      "Supabase",
      "Cheerio",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "Life insurance landing page with integrated quoting and chatbot demo. Designed to convert visitors into qualified prospects for a life insurance broker.",
    problem:
      "Life insurance brokers need to demonstrate their digital proposition before a full build. This landing works as a sellable proof of concept that generates leads from day one.",
    features: [
      "Quick life insurance quoting",
      "Life insurance chatbot demo",
      "Competitive price scraping (Cheerio)",
      "Conversion-optimized design",
      "Integrated lead capture form",
    ],
    architecture:
      "Next.js → Supabase → Cheerio scraper for pricing data. Hardcoded demo for presentation speed.",
    learnings:
      "Sometimes a small but clear deliverable opens more conversations than a long technical demo. It doesn't replace the final product, but it sets expectations straight.",
    liveUrl: "https://vida.rmsegurospty.com/",
    githubUrl: null,
    coverImage: "/rm.png",
    previewEmbedUrl: null,
    liveUrlNote:
      "Live production site — life insurance quoting and lead capture for RM Seguros (WorldWide Medical, Panama).",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const featuredSlugs = [
  "sura-ecommerce",
  "astro-asistencias",
  "cobertura-completa-advisor",
  "birriapp",
  "reggi",
  "excenet",
  "rm-seguros",
];

export const allTags = [
  "ALL",
  "E-commerce",
  "Mobile",
  "Web",
  "InsurTech",
  "Growth",
  "Compliance",
  "KYC",
  "AI",
];
