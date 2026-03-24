"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useT } from "@/context/LanguageContext";

interface BrandMark {
  src: string;
  name: string;
  /** Tailwind classes for the <img> (height, max-width, object-*). */
  imgClass: string;
}

/** Order: SURA → Astro Asistencias → RM Seguros → Reggi → Birriapp → Excenet → Estudio Botánico Castillo */
const BRANDS: BrandMark[] = [
  {
    src: "/brands/sura.png",
    name: "Seguros SURA",
    imgClass: "h-8 w-auto max-w-[120px] object-contain md:h-9",
  },
  {
    src: "/brands/astro-asistencias.svg",
    name: "Astro Asistencias",
    imgClass: "h-9 w-auto max-w-[200px] object-contain md:h-10",
  },
  {
    src: "/brands/rm-seguros.png",
    name: "RM Seguros",
    imgClass: "h-10 w-auto max-w-[88px] object-contain md:h-11",
  },
  {
    src: "/brands/reggi.svg",
    name: "Reggi",
    imgClass: "h-7 w-auto max-w-[104px] object-contain md:h-8",
  },
  {
    src: "/brands/birriapp.svg",
    name: "Birriapp",
    imgClass: "h-8 w-auto max-w-[140px] object-contain md:h-9",
  },
  {
    src: "/brands/excenet.svg",
    name: "Excenet Asistencias",
    imgClass: "h-8 w-auto max-w-[200px] object-contain md:h-9",
  },
  {
    src: "/brands/estudio-botanico-castillo.jpg",
    name: "Estudio Botánico Castillo",
    imgClass: "h-11 w-11 shrink-0 rounded-lg object-cover md:h-12 md:w-12",
  },
];

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function TrustedBrandsSection() {
  const t = useT();
  const reducedMotion = usePrefersReducedMotion();

  const carouselItems = React.useMemo(() => [...BRANDS, ...BRANDS], []);

  const plugins = React.useMemo(
    () =>
      reducedMotion
        ? []
        : [
            AutoScroll({
              playOnInit: true,
              speed: 0.85,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [reducedMotion]
  );

  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 flex flex-col items-center text-center md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.trustedBrands.label}
          </p>
          <h2 className="font-jakarta text-2xl font-extrabold tracking-tight text-fg text-pretty md:text-3xl lg:text-4xl">
            {t.trustedBrands.title}
          </h2>
        </motion.div>

        <div className="pt-2 md:pt-6">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
            <Carousel opts={{ loop: true }} plugins={plugins} className="w-full">
              <CarouselContent className="ml-0">
                {carouselItems.map((brand, index) => (
                  <CarouselItem
                    key={`${brand.name}-${index}`}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="mx-8 flex shrink-0 items-center justify-center md:mx-10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.src}
                        alt={brand.name}
                        className={`object-center opacity-80 transition-opacity hover:opacity-100 ${brand.imgClass}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
