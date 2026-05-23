"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "mi", label: "Service Radius" },
  { value: 3, suffix: "", label: "Expert Crew" },
];

export function Stats() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.43 0.21 265) 0%, oklch(0.32 0.18 265) 50%, oklch(0.18 0.08 265) 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/8 blur-3xl animate-drift" />
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-glow/20 blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 md:rounded-3xl md:p-8"
            >
              <div className="font-display text-5xl text-white md:text-6xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/60 transition-colors group-hover:text-white/80">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
