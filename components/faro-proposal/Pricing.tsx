"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import { FaroEmphasis } from "@/app/faro-consultancy/FaroEmphasis";
import { cn } from "@/lib/utils";

const FARO_TEAL = "#003B4A";
const FARO_TEAL_DIM = "rgba(0,59,74,0.07)";

export interface PricingFeature {
  text: string;
  hasInfo?: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  badge?: string;
  price?: number;
  priceLabel?: string;
  billingPeriod?: string;
  buttonText: string;
  buttonHref?: string;
  buttonVariant?: "default" | "secondary" | "outline";
  isPrimary?: boolean;
  features: PricingFeature[];
  hasAnnualToggle?: boolean;
  creditOptions?: string[];
  defaultCredits?: string;
  featuresTitle?: string;
  footnote?: string;
}

export interface PricingProps {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  phaseWhyLabel?: string;
  footerTitle?: string;
  footerDescription?: string;
  footerButtonText?: string;
  footerButtonHref?: string;
  className?: string;
}

export function Pricing({
  icon,
  title,
  subtitle,
  tiers,
  phaseWhyLabel,
  footerTitle,
  footerDescription,
  footerButtonText,
  footerButtonHref,
  className,
}: PricingProps) {
  const [annualBilling, setAnnualBilling] = useState<Record<string, boolean>>({});
  const [selectedCredits, setSelectedCredits] = useState<Record<string, string>>({});

  const showHeader = Boolean((title && title.trim()) || (subtitle && subtitle.trim()));

  return (
    <div className={cn("w-full bg-bg text-fg py-16 px-4 font-jakarta", className)}>
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <div className="text-center mb-12">
            {icon && <div className="flex justify-center mb-4">{icon}</div>}
            {title && (
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance text-fg tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted text-lg text-balance max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <div
              key={`${tier.name}-${index}`}
              className={cn(
                "rounded-2xl border border-border bg-white p-6 flex flex-col shadow-sm",
                tier.isPrimary && "ring-2 ring-[#003B4A] ring-offset-2 ring-offset-bg",
              )}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold mb-1 text-fg">{tier.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{tier.description}</p>
                {tier.badge && (
                  <span
                    className={cn(
                      "inline-block mt-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border",
                      tier.isPrimary
                        ? "bg-[#F1D09F]/30 text-[#7a5500] border-[#F1D09F]/60"
                        : "bg-surface text-muted border-border",
                    )}
                  >
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="mb-6">
                {tier.price !== undefined ? (
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-4xl md:text-5xl font-extrabold text-fg">${tier.price}</span>
                    <span className="text-muted text-sm">{tier.billingPeriod || "per month"}</span>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl md:text-3xl font-extrabold text-fg">{tier.priceLabel}</div>
                    {tier.billingPeriod && (
                      <p className="text-muted text-sm mt-1">{tier.billingPeriod}</p>
                    )}
                  </div>
                )}
              </div>

              {tier.hasAnnualToggle && (
                <div className="mb-6 flex items-center gap-3">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={Boolean(annualBilling[tier.name])}
                    onClick={() =>
                      setAnnualBilling((prev) => ({
                        ...prev,
                        [tier.name]: !prev[tier.name],
                      }))
                    }
                    className={cn(
                      "w-11 h-6 rounded-full relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      annualBilling[tier.name] ? "bg-accent/30" : "bg-border",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                        annualBilling[tier.name] && "translate-x-5",
                      )}
                    />
                  </button>
                  <span className="text-sm text-fg">Annual</span>
                </div>
              )}

              {tier.buttonHref ? (
                <Link
                  href={tier.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full mb-6 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90",
                    tier.isPrimary ? "text-white" : "bg-surface text-fg border border-border hover:bg-surface/80",
                  )}
                  style={tier.isPrimary ? { backgroundColor: FARO_TEAL } : undefined}
                >
                  {tier.buttonText}
                </Link>
              ) : (
                <button
                  type="button"
                  className={cn(
                    "w-full mb-6 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    tier.isPrimary
                      ? "text-white hover:opacity-90"
                      : "bg-surface text-fg border border-border hover:bg-surface/80",
                  )}
                  style={tier.isPrimary ? { backgroundColor: FARO_TEAL } : undefined}
                >
                  {tier.buttonText}
                </button>
              )}

              {tier.creditOptions && tier.creditOptions.length > 0 && (
                <div className="mb-6">
                  <label className="sr-only">Credits</label>
                  <select
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg"
                    value={selectedCredits[tier.name] || tier.defaultCredits || tier.creditOptions[0]}
                    onChange={(e) =>
                      setSelectedCredits((prev) => ({
                        ...prev,
                        [tier.name]: e.target.value,
                      }))
                    }
                  >
                    {tier.creditOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {tier.featuresTitle && (
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-fg/50">{tier.featuresTitle}</div>
              )}

              <div className="space-y-3 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-muted leading-relaxed flex-1">
                      <FaroEmphasis text={feature.text} />
                    </span>
                    {feature.hasInfo && (
                      <Info className="w-4 h-4 text-muted/50 flex-shrink-0 mt-0.5" aria-hidden />
                    )}
                  </div>
                ))}
              </div>

              {tier.footnote && phaseWhyLabel && (
                <div className="mt-5 rounded-xl p-4" style={{ backgroundColor: FARO_TEAL_DIM }}>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-fg/50 mb-1">
                    {phaseWhyLabel}
                  </p>
                  <p className="text-sm text-muted leading-relaxed italic">
                    &ldquo;
                    <FaroEmphasis text={tier.footnote} />
                    &rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {footerTitle && (
          <div className="rounded-2xl border border-border bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-extrabold mb-2 text-fg">{footerTitle}</h3>
              {footerDescription && <p className="text-muted text-sm leading-relaxed max-w-xl">{footerDescription}</p>}
            </div>
            {footerButtonText && footerButtonHref && (
              <Link
                href={footerButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-border px-6 py-3 text-sm font-semibold text-fg hover:bg-surface transition-colors shrink-0"
              >
                {footerButtonText}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
