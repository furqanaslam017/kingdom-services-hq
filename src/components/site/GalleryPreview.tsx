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
    <section className="bg-surface-2 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
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
                className="mb-4 overflow-hidden rounded-2xl sm:mb-6"
              >
                <img
                  src={src}
                  alt="Kingdom Come Services crew at work"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
