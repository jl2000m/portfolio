import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ from?: string | string[] }> | { from?: string | string[] };
}

function firstQueryValue(
  v: string | string[] | undefined,
): string | undefined {
  if (v == null) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  const sp = await Promise.resolve(searchParams ?? {});
  const backFromFaro = firstQueryValue(sp.from) === "faro";

  return (
    <>
      <Nav />
      <main className="pt-24">
        <ProjectDetailClient
          project={project}
          prev={prev}
          next={next}
          backFromFaro={backFromFaro}
        />
      </main>
      <Footer />
    </>
  );
}
