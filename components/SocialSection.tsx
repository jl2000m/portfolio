"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Volume2, VolumeX } from "lucide-react";
import { useT } from "@/context/LanguageContext";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.27 8.27 0 0 0 4.84 1.54V6.82a4.85 4.85 0 0 1-1.07-.13z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    handle: "@josem.crea",
    href: "https://instagram.com/josem.crea",
    icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "@josem.crea",
    href: "https://tiktok.com/@josem.crea",
    icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    handle: "@jlmv",
    href: "https://linkedin.com/in/jlmv/",
    icon: Linkedin,
  },
];

const TIKTOK_ORIGIN = "https://www.tiktok.com";
const TIKTOK_PLAYER_SRC =
  "https://www.tiktok.com/player/v1/7619701465027792135?autoplay=1&loop=1&rel=0";

function postToTikTokPlayer(
  iframe: HTMLIFrameElement | null,
  type: "mute" | "unMute"
) {
  const win = iframe?.contentWindow;
  if (!win) return;
  // TikTok’s own examples use '*'; the player may live on a TikTok subdomain.
  win.postMessage({ type, "x-tiktok-player": true }, "*");
}

export default function SocialSection() {
  const t = useT();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== TIKTOK_ORIGIN) return;
      const d = event.data;
      if (!d || d["x-tiktok-player"] !== true) return;
      if (d.type === "onMute" && typeof d.value === "boolean") {
        setMuted(d.value);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleMuteToggle = useCallback(() => {
    postToTikTokPlayer(iframeRef.current, muted ? "unMute" : "mute");
    setMuted((m) => !m);
  }, [muted]);

  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text + social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-accent tracking-wide block mb-4">
              {t.social.label}
            </span>
            <h2 className="font-jakarta font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.02em] text-fg mb-5 whitespace-pre-line leading-[1.1]">
              {t.social.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-3 max-w-md">
              {t.social.description}
            </p>
            <p className="text-sm font-medium text-muted/60 mb-8">
              {t.social.topics}
            </p>

            {/* Social link cards */}
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, handle, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:bg-surface hover:border-border-hover transition-all duration-200 hover:shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0 group-hover:border-border-hover transition-colors">
                      <Icon size={16} className="text-fg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-fg">{label}</p>
                      <p className="text-xs text-muted">{handle}</p>
                    </div>
                  </div>
                  <span className="text-muted text-xs group-hover:text-accent transition-colors font-medium">
                    {t.social.followOn} →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — TikTok embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating tag */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl border border-border shadow-sm px-3 py-2 z-10">
                <p className="text-[11px] font-bold text-fg">@josem.crea</p>
                <p className="text-[10px] text-muted">TikTok</p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg" style={{ width: "325px", height: "575px" }}>
                {/*
                  Do not use muted=1 in the URL. TikTok locks volume and blocks unmute.
                  Use the official postMessage API (mute / unMute) from a user click instead.
                */}
                <iframe
                  ref={iframeRef}
                  src={TIKTOK_PLAYER_SRC}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  style={{ width: "325px", height: "575px", border: "none" }}
                  title="@josem.crea on TikTok"
                />
                {/* Mute toggle — uses TikTok embed postMessage (see developers.tiktok.com/doc/embed-player) */}
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="absolute bottom-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
