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
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.43 0.21 265), oklch(0.30 0.18 265))",
      }}
    >
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-glow/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center md:text-left"
          >
            <AnimatedCounter
              to={s.value}
              suffix={s.suffix}
              className="font-display text-5xl text-white md:text-6xl"
            />
            <p className="mt-2 text-sm font-medium text-white/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
