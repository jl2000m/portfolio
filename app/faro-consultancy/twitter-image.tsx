import { createFaroOgImage } from "@/lib/faro-og-image";

export const runtime = "edge";

export const alt =
  "José Martínez for F·A·R·O· Consultancy: clarity before the first pixel. Measurement, GoHighLevel, and regulated context proof.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  return createFaroOgImage();
}
