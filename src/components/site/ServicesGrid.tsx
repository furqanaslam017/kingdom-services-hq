"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { SERVICES } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need to"
            italic="Clear, Move & Haul"
            subtitle="Professional crew, proper equipment, fair prices. Serving Jackson MS and 50 miles around."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.slug} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="glass-card group relative h-full overflow-hidden rounded-3xl p-8"
                >
                  {/* shimmer overlay on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer" />

                  <div className="relative">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary-light transition-colors duration-300 group-hover:bg-primary">
                      <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="font-display text-xl text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.short}
                    </p>
                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
