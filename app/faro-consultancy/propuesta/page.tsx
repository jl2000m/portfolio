import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FaroProposalView } from "./FaroProposalView";

export const metadata: Metadata = {
  title: "Propuesta FARO Consultancy · José Martínez",
  description:
    "Propuesta de arquitectura de sitio web para F·A·R·O· Consultancy: estructura de páginas, personas, fases por impacto, stack técnico (Sanity CMS, GHL webhooks), tracking avanzado y licencias.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Propuesta FARO Consultancy · José Martínez",
    description:
      "Blueprint completo: arquitectura, personas, fases, Meta Pixel + CAPI, GoHighLevel via API, Sanity Studio CMS y costos de licencias.",
    url: "/faro-consultancy/propuesta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta FARO Consultancy · José Martínez",
    description:
      "Blueprint completo: arquitectura, personas, fases, Meta Pixel + CAPI, GoHighLevel via API, Sanity Studio CMS y costos de licencias.",
  },
};

export default function FaroProposalPage() {
  return (
    <>
      <Nav />
      <main>
        <FaroProposalView />
      </main>
      <Footer />
    </>
  );
}
