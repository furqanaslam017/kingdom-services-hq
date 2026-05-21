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
          "linear-gradient(135deg, oklch(0.43 0.21 265) 0%, oklch(0.32 0.18 265) 50%, oklch(0.18 0.08 265) 100%)",
      }}
    >
      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Ambient orbs */}
      <div className="animate-drift absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-glow/25 blur-3xl" />
      <div
        className="animate-drift absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/35 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 uppercase backdrop-blur-md ring-1 ring-white/20"
        >
          Ready to get started?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-5 text-balance text-5xl font-bold text-white md:text-6xl"
        >
          Get your{" "}
          <span className="font-display italic font-normal">free estimate</span>{" "}
          today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-white/70 md:text-lg"
        >
          Call us or fill out our quick form. We respond within the hour.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-shadow hover:shadow-xl"
          >
            <PhoneCall className="h-4 w-4" /> Call {BUSINESS.phone}
          </motion.a>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
            >
              Book online →
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, n) => (
              <Star
                key={n}
                className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
              />
            ))}
          </div>
          500+ satisfied customers in Jackson, MS
        </motion.div>
      </div>
    </section>
  );
}
