"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Call or Book Online",
    desc: "Tell us what you need removed or moved. Free estimate in minutes.",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "We Show Up On Time",
    desc: "Our crew arrives at your scheduled slot with all the gear.",
  },
  {
    n: "03",
    icon: CheckCircle,
    title: "Space Cleared, You Relax",
    desc: "We do the lifting, clean up, and haul everything away.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-accent/4 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="How it works"
            title="3 Simple Steps to a"
            italic="Cleaner Space"
          />
        </ScrollReveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Animated connecting line */}
          <div className="absolute top-12 left-[15%] right-[15%] hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
          </div>

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.n} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Step number watermark */}
                  <span className="font-display absolute -top-1 right-5 text-7xl leading-none text-primary/8 transition-colors group-hover:text-primary/12">
                    {s.n}
                  </span>

                  {/* Icon */}
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="font-display mt-6 text-2xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
