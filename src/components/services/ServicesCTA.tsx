"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export function ServicesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const titleWords = "Book Your Free Estimate Today.".split(" ");

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-12 lg:px-16"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(30,111,255,0.04) 0%, transparent 70%), #ffffff",
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-6 inline-block rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs tracking-[0.2em] text-[#1E6FFF] uppercase">
          Ready to Clear the Clutter?
        </span>

        <h2 className="font-display text-6xl leading-none text-slate-900 md:text-8xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`mr-[0.25em] inline-block ${
                word === "Free" ? "text-[#00D4FF]" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
          No obligation. No hidden fees. Just a professional 3-man crew that
          shows up and gets it done — serving Jackson, MS and 30–50 miles out.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/booking"
            className="rounded-xl bg-[#1E6FFF] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#3B8EFF]"
          >
            Book Online Now
          </Link>
          <a
            href="tel:+16015551234"
            className="rounded-xl border border-blue-300 px-10 py-4 text-lg font-semibold text-[#1E6FFF] transition-colors hover:bg-blue-50"
          >
            Call Us Now
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          📍 Jackson, MS · Open 7 Days · Same-Day Available
        </p>
      </div>
    </section>
  );
}
