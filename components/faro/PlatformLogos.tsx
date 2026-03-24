import Image from "next/image";

/**
 * Official-style brand marks from /public/brands (Meta symbol: Wikimedia-derived paths).
 */
export function PlatformLogos() {
  return (
    <div className="flex flex-wrap items-center gap-8 sm:gap-10">
      <div className="flex items-center gap-3">
        <Image
          src="/brands/meta-symbol.svg"
          alt=""
          width={56}
          height={33}
          className="h-8 w-auto opacity-95"
          aria-hidden
        />
        <span className="text-sm font-medium text-white/70 font-inter">
          Meta
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/brands/google-g.svg"
          alt=""
          width={36}
          height={36}
          className="size-9"
          aria-hidden
        />
        <div className="text-sm text-white/70 font-inter leading-tight">
          <span className="font-medium text-white/80">Google</span>
          <span className="block text-xs text-white/45">
            Analytics · Ads
          </span>
        </div>
      </div>
    </div>
  );
}
