import type { ReactNode } from "react";

/** Previews para iframes: sin Nav/Footer; heredan fuentes del root layout. */
export default function EmbedLayout({ children }: { children: ReactNode }) {
  return <div className="embed-shell min-h-0">{children}</div>;
}
