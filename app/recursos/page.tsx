import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ResourcesPageContent from "@/components/ResourcesPageContent";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Cómo uso IA todos los días: herramientas y flujos reales. Página en Notion.",
};

export default function RecursosPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <ResourcesPageContent />
      </main>
      <Footer />
    </>
  );
}
