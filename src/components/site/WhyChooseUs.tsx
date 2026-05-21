import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "./ScrollReveal";

const FEATURES = [
  ["Same-Day Service Available", "Need it gone today? We'll make it happen."],
  ["Licensed & Insured", "Fully covered so you have zero liability."],
  ["Flat Rate Pricing", "No hidden fees. You know the cost before we start."],
  ["Eco-Friendly Disposal", "We donate, recycle, and properly dispose."],
  ["4 Years Local Experience", "We know Jackson and the surrounding areas."],
  ["3-Man Expert Crew", "More hands = faster job. We work efficiently."],
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/4 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <ScrollReveal>
            <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              Why Kingdom Come
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Jackson's most{" "}
              <span className="font-display italic font-normal text-primary">
                trusted
              </span>{" "}
              hauling crew.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We're not a faceless corporation. We're 3 local guys who show up,
              work hard, and leave your space spotless.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
            >
              Get Free Quote →
            </Link>
          </ScrollReveal>
        </div>

        <div className="space-y-2">
          {FEATURES.map(([title, desc], i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/50 px-5 py-5 transition-all duration-300 hover:border-primary/20 hover:bg-surface hover:shadow-md hover:shadow-primary/5"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display text-lg text-foreground transition-colors group-hover:text-primary">
                    {title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
