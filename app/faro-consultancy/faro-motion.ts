import type { Transition, Variants } from "framer-motion";

/** Matches Hero / ServicesSection feel */
export const FARO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const FARO_VIEWPORT = { once: true, margin: "-56px 0px" as const };

export function faroTransition(reduce: boolean, delay = 0): Transition {
  return {
    duration: reduce ? 0 : 0.48,
    delay: reduce ? 0 : delay,
    ease: FARO_EASE,
  };
}

export function heroVariants(reduce: boolean): {
  container: Variants;
  item: Variants;
} {
  if (reduce) {
    return {
      container: { hidden: {}, show: {} },
      item: { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } },
    };
  }
  return {
    container: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.09,
          delayChildren: 0.06,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 18 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: FARO_EASE },
      },
    },
  };
}
