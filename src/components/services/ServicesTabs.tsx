"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { SERVICE_DETAILS } from "@/lib/service-detail-data";
import {
  ICON_MAP,
} from "@/components/site/Navbar";

export function ServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICE_DETAILS[activeIndex];

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-16">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(30,111,255,0.04) 0%, transparent 70%), #ffffff",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-[#1E6FFF]">
            What We Haul Away
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Services Tailored to Your Needs
          </h2>
          <p className="mt-2 text-slate-500 max-w-xl mx-auto">
            Professional junk removal and hauling across Jackson, MS. Expert crews, same-day availability.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {SERVICE_DETAILS.map((s, i) => {
            const Icon = ICON_MAP[s.slug] || Sparkles;
            const isActive = i === activeIndex;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#1E6FFF] text-white shadow-lg shadow-blue-500/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[#1E6FFF]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Image */}
              <div className="relative h-64 lg:h-auto lg:min-h-[420px]">
                <Image
                  src={activeService.heroImage}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Right — Content */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                {/* Category Tag */}
                <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1E6FFF]">
                  <Sparkles className="h-3 w-3" />
                  {activeService.title}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                  {activeService.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                  {activeService.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    What We Remove
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeService.items.slice(0, 8).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#1E6FFF]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="mt-6 flex items-center gap-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#1E6FFF]" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Availability
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Same-Day
                      </div>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Guarantee
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        100% Clean
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1E6FFF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#3B8EFF] hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    {activeService.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:border-blue-300 hover:text-[#1E6FFF]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
