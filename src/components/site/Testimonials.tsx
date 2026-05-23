"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    city: "Jackson, MS",
    text: "Kingdom Come cleared out my entire garage in under 2 hours. Professional, fast, and left the space spotless. Highly recommend!",
  },
  {
    name: "Patricia W.",
    city: "Ridgeland, MS",
    text: "We used them for our apartment move. The guys were careful with every piece of furniture. No damage, no drama. Worth every dollar.",
  },
  {
    name: "James R.",
    city: "Brandon, MS",
    text: "Called on a Monday, they came Tuesday. Cleaned out all the old scrap metal from my shop. Great crew, great price, great service.",
  },
  {
    name: "Linda K.",
    city: "Madison, MS",
    text: "Storm cleanup. They handled debris my regular guys wouldn't touch. Same-day service. I'll be calling them again.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative overflow-hidden bg-surface-2 py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What{" "}
            <span className="font-display italic font-normal text-primary">
              Jackson
            </span>{" "}
            says
          </h2>
          <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, n) => (
                <Star
                  key={n}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              5.0 average rating
            </span>
          </div>
        </div>

        <div className="relative mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card relative overflow-hidden rounded-[2rem] p-8 md:p-12"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-8 h-16 w-16 text-primary/5 md:h-24 md:w-24" />

              <p className="relative font-display text-2xl leading-snug text-foreground md:text-3xl">
                "{t.text}"
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-base font-bold text-white shadow-lg shadow-primary/20">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, n) => (
                <button
                  key={n}
                  onClick={() => setI(n)}
                  aria-label={`Show testimonial ${n + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === n ? "w-10 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface shadow-sm transition hover:bg-primary hover:text-white hover:shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface shadow-sm transition hover:bg-primary hover:text-white hover:shadow-md"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
