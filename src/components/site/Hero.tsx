"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PhoneCall,
  Star,
  Truck,
  MapPin,
} from "lucide-react";
import { BUSINESS } from "@/lib/services";
import { BrandedTruck } from "./BrandedTruck";

// Pexels hero background image — moving truck on a road
const HERO_POSTER =
  "https://images.pexels.com/videos/4488751/free-video-4488751.jpg?auto=compress&cs=tinysrgb&w=1920";

const HEADLINE_WORDS_TOP = ["Kingdom", "Come"];
const HEADLINE_WORDS_BOTTOM = ["Services."];

/* Ambient floating orbs — positioned absolutely in the hero frame */
const ORBS = [
  { cx: 12, cy: 22, r: 120, opacity: 0.12, color: "#60A5FA", delay: 0 },
  { cx: 78, cy: 65, r: 90, opacity: 0.10, color: "#3B82F6", delay: 2 },
  { cx: 88, cy: 18, r: 70, opacity: 0.08, color: "#93C5FD", delay: 4 },
  { cx: 25, cy: 75, r: 100, opacity: 0.09, color: "#2563EB", delay: 1 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center bg-background p-3 md:p-5"
    >
      {/* Outer frame — subtle border glow on large screens */}
      <div className="relative flex h-full w-full max-w-[1536px] flex-col overflow-hidden rounded-[2rem] bg-foreground/5 shadow-elegant md:rounded-[3rem]">
        {/* ===== BACKGROUND LAYERS ===== */}

        {/* Video layer with parallax */}
        <motion.div className="absolute inset-0 h-[120%] w-full" style={{ y: videoY }}>
          <img
            src={HERO_POSTER}
            alt="Moving truck on the road"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Brand-tinted overlays — deeper, richer */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.06 265 / 0.65) 0%, oklch(0.28 0.16 265 / 0.50) 45%, oklch(0.18 0.08 265 / 0.82) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-foreground/50" />

        {/* Scroll-driven darkening overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[2] bg-background"
          style={{ opacity: overlayOpacity }}
        />

        {/* Film grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Ambient floating orbs */}
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute z-[2] rounded-full blur-3xl"
            style={{
              left: `${orb.cx}%`,
              top: `${orb.cy}%`,
              width: orb.r,
              height: orb.r,
              backgroundColor: orb.color,
              opacity: orb.opacity,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 12,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, oklch(0.12 0.06 265 / 0.45) 100%)",
          }}
        />

        {/* ===== CENTER CONTENT ===== */}
        <motion.div
          className="relative z-20 flex flex-1 flex-col items-center justify-center px-6"
          style={{ y: contentY }}
        >
          {/* Top center badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto mb-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md ring-1 ring-white/20"
          >
            <MapPin className="h-3.5 w-3.5" />
            Serving Jackson, MS & 50 miles around
          </motion.div>

          <div className="relative mx-auto max-w-6xl text-center">
            {/* Headline */}
            <h1 className="font-bold tracking-tight text-white">
              <span className="font-display block text-5xl italic sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                {HEADLINE_WORDS_TOP.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mr-3 inline-block"
                    style={{ perspective: 800 }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                {HEADLINE_WORDS_BOTTOM.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                    style={{ perspective: 800 }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="mx-auto mt-5 max-w-lg text-base text-white/70 sm:text-lg md:text-xl"
            >
              Junk Removal & Moving — done right by a real local crew.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Truck className="h-4 w-4" />
                Book Online
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <PhoneCall className="h-4 w-4" />
                Call {BUSINESS.phone}
              </a>
            </motion.div>
          </div>

          {/* Branded Truck — positioned on the right, overlapping the bottom edge on desktop */}
          <div className="pointer-events-none absolute right-0 bottom-0 z-10 hidden w-[45%] max-w-[520px] translate-y-[18%] translate-x-[5%] lg:block">
            <BrandedTruck className="h-auto w-full drop-shadow-2xl" />
          </div>
        </motion.div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="relative z-20 flex items-end justify-between gap-4 p-4 md:p-8">
          {/* Left bottom card — refined glass */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden max-w-xs rounded-[1.5rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:block md:rounded-[2rem] md:p-5"
            style={{
              background:
                "linear-gradient(135deg, oklch(1 0 0 / 0.12), oklch(1 0 0 / 0.05))",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                4.9 Rating
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <div className="font-display text-2xl text-white">4+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/55">
                  Years exp.
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-white">500+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/55">
                  Jobs done
                </div>
              </div>
            </div>
            <Link
              href="/booking"
              className="mt-3 inline-flex items-center gap-2 self-start rounded-full bg-white py-2 pl-2 pr-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary">
                <Truck className="h-3.5 w-3.5 text-white" />
              </span>
              Book Now
            </Link>
          </motion.div>

          {/* Spacer — visible on lg */}
          <div className="hidden flex-1 px-6 pb-2 text-center lg:block">
            <p className="text-sm text-white/60">
              Trusted junk removal & moving in Jackson, MS — 3 pros, fair prices,
              same-day service available.
            </p>
          </div>

          {/* Right bottom faux-cutout — refined */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[2rem] bg-background p-4 pl-10 pt-6 shadow-2xl md:gap-4 md:rounded-tl-[3.5rem] md:p-6 md:pl-14 md:pt-8"
          >
            {/* TOP corner mask */}
            <svg
              className="absolute -top-6 right-0 h-6 w-6 text-background md:-top-8 md:h-8 md:w-8"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z"
                fill="currentColor"
              />
            </svg>
            {/* LEFT corner mask */}
            <svg
              className="absolute bottom-0 -left-6 h-6 w-6 text-background md:-left-8 md:h-8 md:w-8"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M0 0H32C14.3269 0 0 14.3269 0 32V0Z"
                fill="currentColor"
              />
            </svg>

            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-light shadow-inner">
              <PhoneCall className="h-5 w-5 text-primary" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold text-foreground md:text-lg">
                Free Estimate
              </div>
              <a
                href={BUSINESS.phoneHref}
                className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
              >
                Call Now →
              </a>
              <div className="text-xs text-muted-foreground">
                {BUSINESS.phone}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
