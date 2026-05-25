"use client";

import { CrewSection } from "@/components/about/CrewSection";
import { AnimatedStats } from "@/components/about/AnimatedStats";
import { AnimatedTimeline } from "@/components/about/AnimatedTimeline";
import { CTAGold } from "@/components/about/CTAGold";

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white px-6 pt-24 pb-12 md:px-10 md:pt-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            About us
            <span className="h-px w-8 bg-primary" />
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-[#0d1b3e] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            3 locals who{" "}
            <em className="not-italic text-primary" style={{ fontStyle: "italic" }}>
              get things done.
            </em>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            No call centers. No franchise overhead. Just a hard-working Jackson crew who treats your property like our own.
          </p>
        </div>
      </section>

      {/* 3D Flip Crew Cards */}
      <CrewSection />

      {/* Animated Stats Row */}
      <AnimatedStats />

      {/* Animated Timeline */}
      <AnimatedTimeline />

      {/* Gold CTA */}
      <CTAGold />
    </>
  );
}
