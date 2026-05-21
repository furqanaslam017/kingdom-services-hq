import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Menu, PhoneCall, X } from "lucide-react";
import { BUSINESS } from "@/lib/services";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page the navbar lives INSIDE the hero (transparent over video).
  // Skip rendering here for home — the Hero renders its own internal nav.
  if (isHome) return null;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-background"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Crown className="h-5 w-5" />
            </span>
            <span className="font-display text-lg leading-none">
              Kingdom Come
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group relative text-sm font-medium text-foreground/70 transition hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-primary py-2 pl-2 pr-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-dark md:inline-flex"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
                <PhoneCall className="h-3.5 w-3.5" />
              </span>
              Free Quote
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background m-3 rounded-3xl p-6 shadow-elegant"
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
    </>
  );
}
