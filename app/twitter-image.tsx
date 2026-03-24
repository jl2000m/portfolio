import { createSocialOgImage } from "@/lib/social-og-image";

export const runtime = "edge";

export const alt =
  "José Martínez. Digital systems that grow revenue: landing pages, ecommerce, automations, and AI pipelines.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  return createSocialOgImage();
}
