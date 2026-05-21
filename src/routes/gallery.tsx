import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kingdom Come Services" },
      { name: "description", content: "Photos of recent junk removal and moving jobs in Jackson, MS." },
      { property: "og:title", content: "Gallery — Kingdom Come Services" },
      { property: "og:description", content: "Recent work from our Jackson, MS crew." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const TABS = ["All", "Junk Removal", "Moving", "Furniture", "Before & After"] as const;

// TODO: Replace with client photos
const ALL = [
  "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4246109/pexels-photo-4246109.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4246202/pexels-photo-4246202.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7464701/pexels-photo-7464701.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4246197/pexels-photo-4246197.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

function GalleryPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="px-6 pt-20 pb-8 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader eyebrow="Gallery" title="Recent" italic="work" />
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === t ? "text-white" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl columns-2 gap-4 md:columns-3 lg:columns-4">
          {ALL.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setLightbox(src)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="mb-4 block w-full overflow-hidden rounded-2xl"
            >
              <img src={src} alt="Gallery" loading="lazy" className="w-full" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-foreground/90 p-6 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
