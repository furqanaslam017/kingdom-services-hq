"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Flame,
  Layers,
  Sofa,
  Bed,
  Music,
  CircleDot,
  Hammer,
  Monitor,
  Dumbbell,
  TreePine,
  Snowflake,
  Circle,
  Tv,
  ArrowRight,
} from "lucide-react";
import { SERVICE_DETAILS } from "@/lib/service-detail-data";

export const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "appliance-removal": Wrench,
  "bbq-grill-removal": Flame,
  "carpet-rug-removal": Layers,
  "furniture-removal": Sofa,
  "mattress-removal": Bed,
  "piano-removal": Music,
  "pool-table-removal": CircleDot,
  "construction-debris-removal": Hammer,
  "electronics-removal": Monitor,
  "exercise-equipment-removal": Dumbbell,
  "playset-trampoline-removal": TreePine,
  "refrigerator-removal": Snowflake,
  "tire-removal": Circle,
  "tv-removal": Tv,
};

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6"
        initial={false}
      >
        <motion.nav
          className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 px-3 py-2 pr-2 md:px-5 md:pr-3"
          style={{
            backgroundColor: isHome
              ? `rgba(255, 255, 255, ${scrolled ? 0.92 : 0})`
              : "rgba(255, 255, 255, 0.92)",
            backdropFilter: scrolled || !isHome ? "blur(20px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled || !isHome ? "blur(20px)" : "blur(0px)",
            boxShadow:
              scrolled || !isHome
                ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)"
                : "0 4px 20px rgba(0, 0, 0, 0.15)",
            borderColor:
              scrolled || !isHome
                ? "rgba(0, 0, 0, 0.06)"
                : "rgba(255, 255, 255, 0.15)",
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#1E6FFF] to-[#3B8EFF] text-white shadow-md shadow-blue-500/20">
              <Crown className="h-4 w-4" />
            </span>
            <span
              className="text-base leading-none tracking-tight"
              style={{
                color:
                  isHome && !scrolled
                    ? "#ffffff"
                    : "var(--color-text-primary)",
              }}
            >
              <span className="font-bold">Kingdom</span>{" "}
              <span className="font-normal opacity-80">Come</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li
                key={n.to}
                className="relative"
                onMouseEnter={() => n.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => n.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  href={n.to}
                  className="group relative inline-flex items-center gap-0.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors"
                  style={{
                    color:
                      isHome && !scrolled
                        ? pathname === n.to ||
                          (n.hasDropdown && pathname.startsWith("/services/"))
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.75)"
                        : pathname === n.to ||
                          (n.hasDropdown && pathname.startsWith("/services/"))
                          ? "var(--color-text-primary)"
                          : "var(--color-text-secondary)",
                  }}
                >
                  {n.label}
                  {n.hasDropdown && (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200"
                      style={{
                        transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    />
                  )}
                  <span
                    className="absolute bottom-1 left-3.5 right-3.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                    style={{
                      background:
                        isHome && !scrolled
                          ? "#ffffff"
                          : "var(--color-primary)",
                    }}
                  />
                </Link>

                {/* Services Dropdown */}
                {n.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 z-50 w-[700px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white p-4 shadow-xl shadow-black/10 backdrop-blur-xl">
                          <div className="grid grid-cols-3 gap-x-3 gap-y-1">
                            {SERVICE_DETAILS.map((s) => {
                              const Icon = ICON_MAP[s.slug] || Wrench;
                              const isActive = pathname === `/services/${s.slug}`;
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesOpen(false)}
                                  className={`group relative rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-50 ${
                                    isActive ? "bg-blue-50" : ""
                                  }`}
                                >
                                  <div className="flex items-start gap-2.5">
                                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                      isActive
                                        ? "bg-[#1E6FFF]/10 text-[#1E6FFF]"
                                        : "bg-gray-100 text-gray-500 group-hover:bg-[#1E6FFF]/10 group-hover:text-[#1E6FFF]"
                                    } transition-colors`}>
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <span className={`block text-xs font-semibold leading-tight ${
                                        isActive
                                          ? "text-[#1E6FFF]"
                                          : "text-gray-900 group-hover:text-[#1E6FFF]"
                                      }`}>
                                        {s.title}
                                      </span>
                                      <span className="block mt-0.5 text-[11px] text-gray-500 leading-snug line-clamp-2">
                                        {s.subtitle}
                                      </span>
                                    </div>
                                  </div>
                                  {/* Hover dot indicator */}
                                  <span className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-[#1E6FFF] opacity-0 transition-opacity group-hover:opacity-100" />
                                </Link>
                              );
                            })}
                          </div>
                          {/* Footer */}
                          <div className="mt-2 border-t border-gray-100 pt-2">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#1E6FFF]"
                            >
                              View All Services
                              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/booking"
              className="hidden items-center gap-2 rounded-full bg-[#0A1628] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#0D1F3C] hover:shadow-xl hover:shadow-black/30 md:inline-flex"
            >
              Let&apos;s Build
              <span className="h-2 w-2 rounded-full bg-[#1E6FFF] animate-pulse" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full transition-colors md:hidden"
              style={{
                background:
                  isHome && !scrolled
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(0, 0, 0, 0.05)",
                color:
                  isHome && !scrolled ? "#ffffff" : "var(--color-text-primary)",
                border:
                  isHome && !scrolled
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Spacer for fixed navbar on non-home pages */}
      {!isHome && <div className="h-20" />}

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 24, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="m-4 mt-20 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-2 text-base">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#1E6FFF] to-[#3B8EFF] text-white">
                    <Crown className="h-4 w-4" />
                  </span>
                  <span className="font-bold">Kingdom</span>{" "}
                  <span className="opacity-60">Come</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/8 bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV.map((n) => (
                  <li key={n.to}>
                    {n.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-blue-50 ${
                            pathname.startsWith("/services")
                              ? "bg-blue-50 text-[#1E6FFF]"
                              : "text-gray-700"
                          }`}
                        >
                          <span>{n.label}</span>
                          <ChevronDown
                            className="h-4 w-4 opacity-50 transition-transform duration-200"
                            style={{
                              transform: mobileServicesOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-1 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-[#1E6FFF] transition-colors hover:bg-blue-50"
                                >
                                  View All Services
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                                {SERVICE_DETAILS.map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => {
                                      setOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className={`block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-blue-50 ${
                                      pathname === `/services/${s.slug}`
                                        ? "bg-blue-50 text-[#1E6FFF]"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {s.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={n.to}
                        onClick={() => setOpen(false)}
                        className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-blue-50 ${
                          pathname === n.to
                            ? "bg-blue-50 text-[#1E6FFF]"
                            : "text-gray-700"
                        }`}
                      >
                        {n.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#0A1628] py-3.5 text-sm font-semibold text-white"
              >
                Let&apos;s Build
                <span className="h-2 w-2 rounded-full bg-[#1E6FFF]" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
