import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProject from "@/components/FeaturedProject";
import ProcessSection from "@/components/ProcessSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import SocialSection from "@/components/SocialSection";
import AwardsSection from "@/components/AwardsSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";
import { projects, featuredSlugs } from "@/lib/projects";
import ProjectsClientSection from "@/components/ProjectsClientSection";

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
