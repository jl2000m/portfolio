import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

/** Production site URL (Vercel) — used for OG tags, canonical, and absolute asset URLs */
const SITE_URL = "https://jmcrea.vercel.app";

/** Variable font: one network request, full weight range for Tailwind utilities */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: {
    default: "José Martínez | Digital Systems that Grow Revenue",
    template: "%s | José Martínez",
  },
  description:
    "I build digital systems that grow revenue: landing pages, e-commerce platforms, automations, and AI pipelines. Based in Panama City.",
  keywords: [
    "José Martínez",
    "digital sales",
    "e-commerce",
    "marketing automation",
    "AI pipelines",
    "landing pages",
    "growth",
    "Panama",
    "LatAm",
  ],
  authors: [{ name: "José Martínez" }],
  creator: "José Martínez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "José Martínez",
    title: "José Martínez | Digital Systems that Grow Revenue",
    description:
      "I build digital systems that grow revenue: landing pages, e-commerce platforms, automations, and AI pipelines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Martínez | Digital Systems that Grow Revenue",
    description:
      "I build digital systems that grow revenue: landing pages, e-commerce platforms, automations, and AI pipelines.",
    creator: "@josem.crea",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/avatar-circle.png",
    shortcut: "/avatar-circle.png",
    apple: "/avatar-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="bg-white text-fg font-jakarta antialiased">
        <LanguageProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
