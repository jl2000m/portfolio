import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FaroContractView } from "./FaroContractView";

export const metadata: Metadata = {
  title: "Borrador de contrato · Propuesta FARO",
  description:
    "Borrador de acuerdo de prestación de servicios para el proyecto web F·A·R·O· Consultancy — alineado con la propuesta por fases.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Borrador de contrato · FARO Consultancy",
    description: "Marco legal y comercial en borrador para revisión antes de firma.",
    url: "/faro-consultancy/propuesta/contrato",
    type: "website",
  },
};

export default function FaroContractPage() {
  return (
    <>
      <Nav />
      <main>
        <FaroContractView />
      </main>
      <Footer />
    </>
  );
}
