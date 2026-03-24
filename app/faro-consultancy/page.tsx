import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FaroPrivateView } from "./FaroPrivateView";

export const metadata: Metadata = {
  title: "F·A·R·O· Consultancy · portfolio context",
  description:
    "José Martínez for F·A·R·O· Consultancy: credentials, Meta and Google measurement, GoHighLevel experience, Reggi style segmentation, and adjacent project proof.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "F·A·R·O· Consultancy · portfolio context",
    description:
      "José Martínez for F·A·R·O· Consultancy: credentials, Meta and Google measurement, GoHighLevel experience, Reggi style segmentation, and adjacent project proof.",
    url: "/faro-consultancy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "F·A·R·O· Consultancy · portfolio context",
    description:
      "José Martínez for F·A·R·O· Consultancy: credentials, Meta and Google measurement, GoHighLevel experience, Reggi style segmentation, and adjacent project proof.",
  },
};

export default function FaroConsultancyPage() {
  return (
    <>
      <Nav />
      <main>
        <FaroPrivateView />
      </main>
      <Footer />
    </>
  );
}
