import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Menu,
  PhoneCall,
  Star,
  Truck,
  MapPin,
  X,
} from "lucide-react";
import { BUSINESS } from "@/lib/services";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

// Pexels public CDN — moving truck on a road. Long-form, royalty-free.
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/4488751/4488751-uhd_2560_1440_25fps.mp4";
const HERO_POSTER =
  "https://images.pexels.com/videos/4488751/free-video-4488751.jpg?auto=compress&cs=tinysrgb&w=1920";

const HEADLINE_WORDS_TOP = ["Kingdom", "Come"];
const HEADLINE_WORDS_BOTTOM = ["Services."];

export function Hero() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="flex h-screen min-h-[640px] w-full items-center justify-center bg-background p-3 md:p-5">
      <div className="group relative flex h-full w-full max-w-[1536px] flex-col overflow-hidden rounded-[2rem] bg-foreground/5 shadow-elegant md:rounded-[3rem]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Brand-tinted overlays */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.07 265 / 0.55), oklch(0.43 0.21 265 / 0.40) 60%, oklch(0.18 0.07 265 / 0.75))",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" />

        {/* Navbar */}
        <nav className="relative z-30 flex w-full items-center justify-between px-6 py-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-2 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                <Crown className="h-5 w-5" />
              </span>
              <span className="font-display text-lg leading-none tracking-tight">
                Kingdom Come
              </span>
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden items-center gap-8 md:flex"
          >
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group relative text-sm text-white/80 transition hover:text-white"
                  activeProps={{ className: "text-white" }}
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </motion.ul>

          <div className="flex items-center gap-2">
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden items-center gap-2 rounded-full bg-white py-2 pl-2 pr-5 text-sm font-semibold text-primary shadow-md md:inline-flex"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary">
                <PhoneCall className="h-3.5 w-3.5 text-white" />
              </span>
              Get Free Quote
            </motion.a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Top center badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-20 mx-auto mt-2 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-md ring-1 ring-white/20"
        >
          <MapPin className="h-3.5 w-3.5" />
          Serving Jackson, MS & 50 miles around
        </motion.div>

        {/* Main heading */}
        <div className="relative z-20 flex flex-1 items-center justify-center px-6 text-center">
          <div>
            <h1 className="font-bold tracking-tight text-white">
              <span className="font-display block text-5xl italic sm:text-6xl md:text-7xl lg:text-8xl">
                {HEADLINE_WORDS_TOP.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="mr-3 inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                {HEADLINE_WORDS_BOTTOM.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7 + i * 0.08,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="mx-auto mt-5 max-w-md text-base text-white/75 sm:text-lg"
            >
              Junk Removal & Moving — done right by a real local crew.
            </motion.p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative z-20 flex items-end justify-between gap-4 p-4 md:p-8">
          {/* Left bottom card — glass */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="hidden max-w-xs rounded-[1.5rem] border border-white/20 bg-white/15 p-4 backdrop-blur-xl sm:block md:rounded-[2rem] md:p-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300"
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
                <div className="text-[10px] uppercase tracking-wider text-white/60">
                  Years exp.
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-white">500+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/60">
                  Jobs done
                </div>
              </div>
            </div>
            <Link
              to="/booking"
              className="mt-3 inline-flex items-center gap-2 self-start rounded-full bg-white py-2 pl-2 pr-4 text-sm font-semibold text-primary"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary">
                <Truck className="h-3.5 w-3.5 text-white" />
              </span>
              Book Now
            </Link>
          </motion.div>

          {/* Spacer (description) — visible on lg */}
          <div className="hidden flex-1 px-6 text-center lg:block">
            <p className="text-sm text-white/70">
              Trusted junk removal & moving in Jackson, MS — 3 pros, fair prices,
              same-day service available.
            </p>
          </div>

          {/* Right bottom faux-cutout */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[2rem] bg-background p-4 pl-10 pt-6 md:gap-4 md:rounded-tl-[3.5rem] md:p-6 md:pl-14 md:pt-8"
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

            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-light">
              <PhoneCall className="h-5 w-5 text-primary" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold text-foreground md:text-lg">
                Free Estimate
              </div>
              <a
                href={BUSINESS.phoneHref}
                className="text-sm font-medium text-primary hover:underline"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-foreground/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="m-3 rounded-3xl bg-background p-6 shadow-elegant"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-muted"
                      activeProps={{ className: "bg-primary-light text-primary" }}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground"
              >
                <PhoneCall className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
