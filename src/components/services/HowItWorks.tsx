"use client";

import { useRef } from "react";
import {
  CalendarCheck,
  Phone,
  ClipboardList,
  Truck,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "1",
    title: "Schedule Service",
    icon: CalendarCheck,
    text: "Book online or call to schedule your free, no-obligation estimate. Same-day or next-day available.",
  },
  {
    number: "2",
    title: "We Call En Route",
    icon: Phone,
    text: "We'll call when we're on our way so you're never left waiting. No surprises, no no-shows.",
  },
  {
    number: "3",
    title: "Free On-Site Estimate",
    icon: ClipboardList,
    text: "Once we arrive, we review your project and give you a clear upfront estimate — no hidden fees ever.",
  },
  {
    number: "4",
    title: "Approve & We Work",
    icon: Truck,
    text: "You approve, we get to work immediately. We lift, load, and haul everything away ourselves.",
  },
  {
    number: "5",
    title: "Space Cleared",
    icon: Sparkles,
    text: "We leave your space clean. Junk is donated, recycled, or responsibly disposed. You'll wonder why you waited.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        gsap.fromTo(
          node,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            delay: 0.3 + i * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.4 + i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
          The Process
        </span>
        <h2 className="font-display mt-3 text-5xl leading-tight text-slate-900 md:text-6xl lg:text-7xl">
          How Junk Removal
          <br />
          Actually Works.
        </h2>

        {/* Desktop Timeline */}
        <div className="relative mt-16 hidden lg:block">
          {/* Horizontal Line */}
          <div
            ref={lineRef}
            className="absolute top-5 left-0 right-0 h-px bg-slate-200"
          />

          {/* Steps */}
          <div className="relative flex justify-between">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Node */}
                  <div
                    ref={(el) => { nodesRef.current[i] = el; }}
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1E6FFF] bg-white"
                  >
                    <span className="text-sm font-bold text-[#3B8EFF]">
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    ref={(el) => { cardsRef.current[i] = el; }}
                    className="mt-6 w-52 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-[#1E6FFF]" />
                    <h4 className="mt-3 text-sm font-semibold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Stack */}
        <div className="mt-12 space-y-6 lg:hidden">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-xl border-l-2 border-[#1E6FFF] bg-slate-50 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E6FFF] bg-white">
                    <span className="text-xs font-bold text-[#3B8EFF]">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
