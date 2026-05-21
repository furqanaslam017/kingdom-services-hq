import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

export function PricingTeaser() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
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
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative overflow-hidden rounded-[2.5rem] p-10 text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.20 0.08 265), oklch(0.16 0.06 265))",
              }}
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
              <span className="relative inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                Most popular
              </span>
              <h3 className="font-display relative mt-4 text-2xl">
                Local Jackson
              </h3>
              <div className="relative mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl">$250 – $300</span>
                <span className="text-sm text-white/60">/ job</span>
              </div>
              <ul className="relative mt-6 space-y-2 text-sm">
                {[
                  "Full service within Jackson, MS",
                  "3-man crew included",
                  "All hauling & disposal included",
                  "Same-day availability",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-glow" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/booking"
                className="relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                Book this service
              </Link>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="h-full rounded-[2.5rem] border border-border bg-surface p-10"
            >
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
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
              >
                Get exact quote
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
