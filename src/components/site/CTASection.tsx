import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PhoneCall, Star } from "lucide-react";
import { BUSINESS } from "@/lib/services";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.43 0.21 265), oklch(0.30 0.18 265) 60%, oklch(0.18 0.07 265))",
      }}
    >
      <div className="animate-drift absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-glow/30 blur-3xl" />
      <div
        className="animate-drift absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur"
        >
          Ready to get started?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-balance text-5xl font-bold text-white md:text-6xl"
        >
          Get your{" "}
          <span className="font-display italic font-normal">free estimate</span>{" "}
          today
        </motion.h2>
        <p className="mt-4 text-white/70 md:text-lg">
          Call us or fill out our quick form. We respond within the hour.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg"
          >
            <PhoneCall className="h-4 w-4" /> Call {BUSINESS.phone}
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Book online →
            </Link>
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, n) => (
              <Star
                key={n}
                className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300"
              />
            ))}
          </div>
          500+ satisfied customers in Jackson, MS
        </div>
      </div>
    </section>
  );
}
