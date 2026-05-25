"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard } from "./MagicCard";

export function PricingTeaser() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Clear pricing,"
            italic="no surprises"
            subtitle="Local jobs are a flat range. Travel surcharge is distance-based and disclosed upfront."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <MagicCard
              className="group relative overflow-hidden rounded-[2.5rem] p-10 text-white shadow-xl shadow-primary/10"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.09 265), oklch(0.15 0.06 265))",
              }}
              glowColor="100, 180, 255"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

              <span className="relative inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md ring-1 ring-white/20">
                Most popular
              </span>
              <h3 className="font-display relative mt-4 text-2xl">
                Local Jackson
              </h3>
              <div className="relative mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl">$250 – $300</span>
                <span className="text-sm text-white/60">/ job</span>
              </div>
              <ul className="relative mt-6 space-y-2.5 text-sm">
                {[
                  "Full service within Jackson, MS",
                  "3-man crew included",
                  "All hauling & disposal included",
                  "Same-day availability",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-glow shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Book this service
              </Link>
            </MagicCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <MagicCard className="h-full rounded-[2.5rem] border border-border bg-surface p-10 shadow-sm">
              <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                Outside Jackson
              </span>
              <h3 className="font-display mt-4 text-2xl text-foreground">
                Travel Surcharge
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl text-primary">
                  +$50 – $125
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Distance-based, per trip
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We serve 30–50 miles from Jackson. Surcharge added based on your
                exact distance — confirmed before any work begins.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
              >
                Get exact quote
              </Link>
            </MagicCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
