import type { Metadata } from "next";
import { FaroPitchContent } from "./FaroPitchContent";

export const metadata: Metadata = {
  title: "José Martínez × F·A·R·O· Consultancy",
  description:
    "Producto, marketing y tecnología: Meta, Google (Analytics/Ads), medición, landings y proyectos de referencia.",
  robots: { index: false, follow: false },
};

export default function FaroConsultancyPage() {
  return <FaroPitchContent />;
}
