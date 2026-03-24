"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import { useT, useLang } from "@/context/LanguageContext";

// TikTok icon (not in lucide-react)
function TikTokIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.27 8.27 0 0 0 4.84 1.54V6.82a4.85 4.85 0 0 1-1.07-.13z" />
    </svg>
  );
}

export default function Footer() {
  const t = useT();
  const { lang } = useLang();

  const navLinks = [
    { href: "/", label: lang === "en" ? "Home" : "Inicio" },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/recursos", label: t.nav.resources },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-jakarta font-bold text-base text-fg hover:opacity-70 transition-opacity"
            >
              José Martínez
            </Link>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed whitespace-pre-line">
              {t.footer.tagline}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://linkedin.com/in/jlmv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/josem.crea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://tiktok.com/@josem.crea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fg transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <span className="text-xs text-muted/60 mb-3 uppercase tracking-widest font-semibold block">
              {t.footer.pages}
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs text-muted/60 mb-3 uppercase tracking-widest font-semibold block">
              {t.footer.contact}
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/jlmv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/josem.crea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
              >
                <Instagram size={13} />
                @josem.crea
              </a>
              <a
                href="mailto:joseluis2000300@gmail.com"
                className="text-sm text-muted hover:text-fg transition-colors"
              >
                joseluis2000300@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-xs text-muted/50">{t.footer.rights}</span>
          <span className="text-xs text-muted/50">{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
