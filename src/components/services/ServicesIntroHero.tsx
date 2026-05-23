"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesIntroHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;
      const lines = headingRef.current.querySelectorAll(".hero-line");
      gsap.fromTo(
        lines,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-16"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 10% 20%, rgba(30,111,255,0.04) 0%, transparent 70%), #ffffff",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-[60%]">
            <span className="inline-block rounded-full border border-blue-300 px-4 py-1 text-xs tracking-[0.3em] uppercase text-[#1E6FFF]">
              Jackson, MS · 30–50 Mile Radius
            </span>

            <h1
              ref={headingRef}
              className="font-display mt-6 text-6xl leading-none text-slate-900 md:text-7xl lg:text-8xl"
            >
              <span className="hero-line block overflow-hidden">
                <span className="inline-block">Full-Service</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="inline-block">Junk Removal</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="inline-block">& Moving.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              We&apos;re not your average crew. Kingdom Come Services delivers
              professional, no-nonsense junk removal and moving services across
              Jackson, Mississippi and surrounding areas. 4 years. 3 men. Zero
              shortcuts. We remove everything from household clutter, yard
              debris, and construction debris. Same-day service available.
            </p>

            {/* Stats Row */}
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold text-[#3B8EFF]">4+</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Years Active
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-[#3B8EFF]">3</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Man Crew
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-[#3B8EFF]">50mi</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Max Radius
                </div>
              </div>
            </div>

            {/* CTA Row */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-xl bg-[#1E6FFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B8EFF]"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+16015551234"
                className="rounded-xl border border-blue-300 px-6 py-3 text-sm font-semibold text-[#1E6FFF] transition-colors hover:bg-blue-50"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Side — Status Card */}
          <div className="hidden lg:block lg:w-[40%]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
            >
              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="mb-1 text-xs text-slate-500">
                    Truck En Route
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-[#1E6FFF]"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-slate-500">
                    Loading Complete
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-[#00D4FF]"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-slate-500">
                    Area Cleared
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-[#3B8EFF]"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Metric Pills */}
              <div className="mt-5 flex gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  Same-Day Service
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  Free Estimate
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
