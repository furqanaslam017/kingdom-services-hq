import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

// Placeholder photos — replace with client supplied images.
// Using Pexels stock related to moving/junk removal/work.
const PHOTOS = [
  "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246109/pexels-photo-4246109.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/7464701/pexels-photo-7464701.jpeg?auto=compress&cs=tinysrgb&w=900",
];

export function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-surface-2 px-6 py-24 md:px-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="The crew at work"
            title="A look at"
            italic="recent jobs"
            subtitle="From single-item pickups to full estate cleanouts and moves."
          />
        </ScrollReveal>

        <div className="mt-12 columns-2 gap-4 sm:gap-6 md:columns-3">
          {PHOTOS.map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative mb-4 overflow-hidden rounded-2xl sm:mb-6"
              >
                <img
                  src={src}
                  alt="Kingdom Come Services crew at work"
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
          >
            View full gallery <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
