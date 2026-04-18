"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Calendar,
  Mail,
  FolderOpen,
  Home,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { useLang, useT } from "@/context/LanguageContext";

/** LinkedIn profile photo (saved under /public for a stable URL; replace file if you update the photo). */
const SOCIAL_BIO_AVATAR_SRC = "/socialbio-avatar.jpg";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.27 8.27 0 0 0 4.84 1.54V6.82a4.85 4.85 0 0 1-1.07-.13z" />
    </svg>
  );
}

interface BioLinkItem {
  href: string;
  label: string;
  Icon?: LucideIcon | typeof TikTokIcon;
  /** Optional app-style logo in the leading slot. */
  iconSrc?: string;
  iconAlt?: string;
  external?: boolean;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/55 mb-3 px-1">
      {children}
    </p>
  );
}

function BioLinkButton({
  item,
  variant = "outline",
}: {
  item: BioLinkItem;
  variant?: "primary" | "outline";
}) {
  const { href, label, Icon, iconSrc, iconAlt, external } = item;
  const isMail = href.startsWith("mailto:");
  const className =
    variant === "primary"
      ? "flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      : "flex w-full items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 text-left text-sm font-semibold text-fg shadow-sm transition-all hover:border-border-hover hover:bg-surface hover:shadow-md";

  const iconWrapClass =
    variant === "primary"
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15"
      : "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface";

  const inner = (
    <>
      <span className={iconWrapClass}>
        {iconSrc ? (
          // eslint-disable-next-line @next/next/no-img-element -- local SVG asset; avoids Image SVG constraints
          <img src={iconSrc} alt={iconAlt ?? ""} className="h-8 w-8 object-contain" width={32} height={32} />
        ) : Icon ? (
          <Icon size={18} className={variant === "primary" ? "text-white" : "text-fg"} />
        ) : null}
      </span>
      <span className="min-w-0 flex-1">{label}</span>
      {external ? (
        <ExternalLink
          size={16}
          className={
            variant === "primary" ? "shrink-0 text-white/80" : "shrink-0 text-muted"
          }
          aria-hidden
        />
      ) : null}
    </>
  );

  if (!external && !isMail) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  const openInNewTab = external && !isMail;

  return (
    <a
      href={href}
      className={className}
      {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

export function SocialBioContent() {
  const t = useT().socialBio;
  const { lang, setLang } = useLang();

  const workLinks: BioLinkItem[] = [
    {
      href: "https://linkedin.com/in/jlmv/",
      label: t.links.linkedin,
      Icon: Linkedin,
      external: true,
    },
    {
      href: "https://calendly.com/josemcrea/let-s-talk",
      label: t.links.calendly,
      Icon: Calendar,
      external: true,
    },
    {
      href: "mailto:joseluis2000300@gmail.com",
      label: t.links.email,
      Icon: Mail,
    },
  ];

  const socialLinks: BioLinkItem[] = [
    {
      href: "https://instagram.com/josem.crea",
      label: t.links.instagram,
      Icon: Instagram,
      external: true,
    },
    {
      href: "https://tiktok.com/@josem.crea",
      label: t.links.tiktok,
      Icon: TikTokIcon,
      external: true,
    },
  ];

  const siteLinks: BioLinkItem[] = [
    {
      href: "/",
      label: t.links.portfolio,
      Icon: Home,
    },
  ];

  const primary: BioLinkItem = {
    href: "/recursos",
    label: t.links.resources,
    Icon: FolderOpen,
  };

  return (
    <div className="hero-gradient min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-8">
        <div className="mb-8 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="rounded-lg border border-border bg-white/80 px-2.5 py-1 text-xs font-semibold text-muted transition-colors hover:border-border-hover hover:text-fg"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border-2 border-border shadow-md ring-4 ring-white">
            <Image
              src={SOCIAL_BIO_AVATAR_SRC}
              alt={t.displayName}
              width={88}
              height={88}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mt-4 font-jakarta text-xl font-extrabold tracking-tight text-fg">
            {t.displayName}
          </h1>
          <p className="mt-1 text-sm font-medium text-muted">{t.handle}</p>
          <ul className="mt-4 max-w-[320px] list-none space-y-2 pl-0 text-left text-sm leading-relaxed text-muted">
            {t.bioLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <section aria-labelledby="socialbio-primary">
            <SectionLabel>{t.sectionPrimary}</SectionLabel>
            <div id="socialbio-primary" className="flex flex-col gap-2">
              <BioLinkButton item={primary} variant="primary" />
            </div>
          </section>

          <section aria-labelledby="socialbio-work">
            <SectionLabel>{t.sectionWork}</SectionLabel>
            <div id="socialbio-work" className="flex flex-col gap-2">
              {workLinks.map((item) => (
                <BioLinkButton key={item.href} item={item} />
              ))}
            </div>
          </section>

          <section aria-labelledby="socialbio-site">
            <SectionLabel>{t.sectionSite}</SectionLabel>
            <div id="socialbio-site" className="flex flex-col gap-2">
              {siteLinks.map((item) => (
                <BioLinkButton key={item.href} item={item} />
              ))}
            </div>
          </section>

          <section aria-labelledby="socialbio-social">
            <SectionLabel>{t.sectionSocial}</SectionLabel>
            <div id="socialbio-social" className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <BioLinkButton key={item.href} item={item} />
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-auto pt-12 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-muted/70 transition-colors hover:text-fg"
          >
            jmcrea.vercel.app
          </Link>
        </footer>
      </div>
    </div>
  );
}
