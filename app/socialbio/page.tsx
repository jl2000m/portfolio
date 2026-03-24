import type { Metadata } from "next";
import { translations } from "@/lib/i18n";
import { SocialBioContent } from "@/components/SocialBioContent";

const SITE_URL = "https://jmcrea.vercel.app";

export const metadata: Metadata = {
  title: translations.en.socialBio.metaTitle,
  description: translations.en.socialBio.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/socialbio`,
  },
  openGraph: {
    title: `${translations.en.socialBio.metaTitle} | José Martínez`,
    description: translations.en.socialBio.metaDescription,
    url: `${SITE_URL}/socialbio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${translations.en.socialBio.metaTitle} | José Martínez`,
    description: translations.en.socialBio.metaDescription,
  },
};

export default function SocialBioPage() {
  return <SocialBioContent />;
}
