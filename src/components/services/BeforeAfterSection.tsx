"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  beforeCaption: string;
  afterCaption: string;
  location: string;
  service: string;
}

const CARDS: CardData[] = [
  {
    beforeCaption: "Garage packed with 15 years of debris",
    afterCaption: "Cleared in 90 minutes. Spotless.",
    location: "Jackson, MS",
    service: "Full Junk Removal",
  },
  {
    beforeCaption: "Apartment move-out with abandoned furniture",
    afterCaption: "Everything hauled. Ready for new tenant.",
    location: "Ridgeland, MS",
    service: "Move-Out Cleanout",
  },
  {
    beforeCaption: "Construction site leftover drywall and lumber",
    afterCaption: "Site swept clean. Zero debris remaining.",
    location: "Brandon, MS",
    service: "Debris Removal",
  },
];

const stripeStyle: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(15,23,42,0.05) 10px, rgba(15,23,42,0.05) 20px)",
};

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const inner = card.querySelector(".parallax-inner") as HTMLElement | null;
        if (!inner) return;
        gsap.to(inner, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
            Real Results
          </span>
          <h2 className="font-display mt-3 text-5xl text-slate-900 md:text-6xl lg:text-7xl">
            Before & After.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300"
            >
              {/* Before */}
              <div className="px-4 pt-4">
                <span className="mb-2 inline-block rounded-full bg-red-900/30 px-2 py-0.5 text-xs tracking-wider text-red-300 uppercase">
                  Before
                </span>
                <div
                  className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-200"
                  style={stripeStyle}
                />
                <p className="mt-2 px-4 text-sm text-slate-500">
                  {card.beforeCaption}
                </p>
              </div>

              {/* After */}
              <div className="px-4 pt-4">
                <span className="mb-2 inline-block rounded-full bg-green-900/30 px-2 py-0.5 text-xs tracking-wider text-green-300 uppercase">
                  After
                </span>
                <div
                  className="parallax-inner relative h-40 w-full overflow-hidden rounded-lg bg-slate-300"
                  style={stripeStyle}
                />
                <p className="mt-2 px-4 text-sm text-slate-500">
                  {card.afterCaption}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 px-4 py-3">
                <span className="text-xs text-slate-500">
                  {card.location}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-[#1E6FFF]">
                  {card.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
