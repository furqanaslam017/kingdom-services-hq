"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ─── Data ─── */
const TABS = ["All", "Junk Removal", "Moving", "Furniture", "Before & After"] as const;

type Tab = (typeof TABS)[number];

interface GalleryItem {
  src: string;
  category: Exclude<Tab, "All">;
  alt: string;
}

const ITEMS: GalleryItem[] = [
  { src: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Junk Removal", alt: "Junk removal cleanup" },
  { src: "https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Moving", alt: "Moving team at work" },
  { src: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Furniture", alt: "Furniture removal" },
  { src: "https://images.pexels.com/photos/4246109/pexels-photo-4246109.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Before & After", alt: "Before and after cleanup" },
  { src: "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Junk Removal", alt: "Heavy debris removal" },
  { src: "https://images.pexels.com/photos/7464701/pexels-photo-7464701.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Moving", alt: "Loading moving truck" },
  { src: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Furniture", alt: "Old furniture haul-away" },
  { src: "https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Before & After", alt: "Property transformation" },
  { src: "https://images.pexels.com/photos/4246197/pexels-photo-4246197.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Junk Removal", alt: "Garage cleanout" },
  { src: "https://images.pexels.com/photos/7464707/pexels-photo-7464707.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Moving", alt: "Packing and organizing" },
  { src: "https://images.pexels.com/photos/4246121/pexels-photo-4246121.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Furniture", alt: "Dining set removal" },
  { src: "https://images.pexels.com/photos/4246203/pexels-photo-4246203.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Before & After", alt: "Yard debris removal" },
];

/* ─── Animated Counter for header ─── */
function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Filter Pills ─── */
function FilterPills({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="relative mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
      {TABS.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className="relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              backgroundColor: isActive ? "#1a3fa8" : "transparent",
              color: isActive ? "#fff" : "#64748b",
              border: isActive ? "1px solid #1a3fa8" : "1px solid #e2e8f0",
              transform: isActive ? "scale(1.05)" : "scale(1)",
            }}
          >
            {isActive && (
              <motion.span
                layoutId="gallery-tab-bg"
                className="absolute inset-0 -z-10 rounded-full"
                style={{ backgroundColor: "#1a3fa8" }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative">{t}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:left-8"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:right-8"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image */}
      <motion.div
        key={item.src}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative mx-16 max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm text-white backdrop-blur-md">
          {item.category} · {index + 1} / {items.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function GalleryPage() {
  const [active, setActive] = useState<Tab>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [displayed, setDisplayed] = useState<GalleryItem[]>(ITEMS);

  const changeFilter = useCallback(
    (tab: Tab) => {
      if (tab === active) return;
      setTransitioning(true);
      setTimeout(() => {
        const next = tab === "All" ? ITEMS : ITEMS.filter((i) => i.category === tab);
        setDisplayed(next);
        setActive(tab);
        setTransitioning(false);
      }, 200);
    },
    [active]
  );

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? displayed.length - 1 : i - 1));
  }, [displayed.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === displayed.length - 1 ? 0 : i + 1));
  }, [displayed.length]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-24 pb-8 md:px-10 md:pt-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "#E8C27A" }}>
            <span className="h-px w-8" style={{ backgroundColor: "#E8C27A" }} />
            GALLERY
            <span className="h-px w-8" style={{ backgroundColor: "#E8C27A" }} />
          </span>
          <h1
            className="mt-4 font-display text-4xl font-bold text-[#0d1b3e] md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Recent{" "}
            <em className="not-italic" style={{ color: "#1a3fa8", fontStyle: "italic" }}>
              work.
            </em>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            Real jobs. Real results. Jackson, MS.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium" style={{ borderColor: "#e2e8f0", color: "#64748b" }}>
            <AnimatedCounter to={500} suffix="+" /> jobs documented
          </div>
          <p className="mt-3 text-xs text-gray-400">Click any photo to view full size</p>
        </div>

        <FilterPills active={active} onChange={changeFilter} />
      </section>

      {/* Masonry Grid */}
      <section className="relative overflow-hidden px-6 pb-24 md:px-10">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="gallery-grid relative mx-auto max-w-7xl">
          {displayed.map((item, i) => (
            <div
              key={item.src}
              className={`gallery-item ${transitioning ? "gallery-item-exit" : "gallery-item-enter"}`}
              style={{
                transitionDelay: transitioning ? "0ms" : `${i * 60}ms`,
              }}
              onClick={() => openLightbox(i)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="h-auto w-full object-cover" />
              <div className="gallery-hover-overlay" />
              <div className="gallery-hover-content">
                <span className="gallery-category-badge">{item.category}</span>
                <div className="gallery-zoom-icon">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={displayed}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
