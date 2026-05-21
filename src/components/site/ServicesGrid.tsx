import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { SERVICES } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
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
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="glass-card group h-full rounded-3xl p-8"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary-light transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7 text-primary transition group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
