"use client";

import { useRef } from "react";
import { MapPin, Zap, Package, Users, DollarSign } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: MapPin,
    title: "Local & Community-First",
    body: "Jackson, MS based. We live and work here. We take pride in keeping our community clean — this isn't just a job, it's our neighborhood too.",
  },
  {
    icon: Zap,
    title: "Same-Day. Fast. Reliable.",
    body: "We tackle your junk removal needs same-day or next-day. No weeks of waiting — when you call, we actually show up. And we won't charge exorbitant fees like the big companies do.",
  },
  {
    icon: Package,
    title: "Full-Service Convenience",
    body: "You point, we haul. We handle every part of the process — heavy lifting, loading, hauling, and disposal. You don't lift a finger. We'll even do curbside pickups.",
  },
  {
    icon: Users,
    title: "Professional 3-Man Team",
    body: "Our 3-man crew is trained, trustworthy, and experienced. We do business by the book and treat your property like our own.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    body: "$250–$300 base rate in Jackson. $50–$125 travel fee for 30–50 mile jobs. You always know exactly what you're paying before we start. No hidden fees. No surprises.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
          Why We&apos;re Different
        </span>
        <h2 className="font-display mt-3 text-5xl leading-tight text-slate-900 md:text-6xl lg:text-7xl">
          Why Kingdom Come
          <br />
          Is Different.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
              >
                <Icon className="h-8 w-8 text-[#1E6FFF]" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
