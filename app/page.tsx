import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import { projects, featuredSlugs } from "@/lib/projects";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ProjectsClientSection = dynamic(
  () => import("@/components/ProjectsClientSection")
);
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const IntegrationsSection = dynamic(
  () => import("@/components/IntegrationsSection")
);
const SocialSection = dynamic(() => import("@/components/SocialSection"));
const AwardsSection = dynamic(() => import("@/components/AwardsSection"));
const BookCallSection = dynamic(() => import("@/components/BookCallSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "José Martínez — Digital Systems that Grow Revenue",
};

export default function HomePage() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <div className="border-t border-border">
          <ServicesSection />
        </div>
        {/* Featured Projects */}
        <ProjectsClientSection projects={featuredProjects} />
        <div className="border-t border-border">
          <ProcessSection />
        </div>
        <IntegrationsSection />
        <SocialSection />
        <AwardsSection />
        <BookCallSection />
      </main>
      <Footer />
    </>
  );
}
