import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectsPageHeader from "@/components/ProjectsPageHeader";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by José Martínez. Insurtech platforms, apps, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 max-w-6xl mx-auto px-6 pb-24">
        <ProjectsPageHeader />
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </>
  );
}
