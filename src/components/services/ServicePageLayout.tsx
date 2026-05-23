"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ChevronRight,
  Star,
  Shield,
  Truck,
  Recycle,
  Clock,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/service-detail-data";

export function ServicePageLayout({ service }: { service: ServiceDetail }) {
  return (
    <main className="overflow-hidden bg-white">
      <ServiceHero service={service} />
      <WhatWeRemove service={service} />
      <BeforeAfter service={service} />
      <HowItWorks service={service} />
      <WhyChooseUs service={service} />
      <TrustMarquee />
      <ServiceCTA service={service} />
    </main>
  );
}

function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative bg-slate-50 px-6 py-24 md:px-12 lg:px-16">
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/[0.03] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#1E6FFF] uppercase">
            Junk Removal Service
          </span>
          <h1 className="font-display mt-4 text-4xl leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-slate-500">{service.subtitle}</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E6FFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1557d1]"
            >
              <Calendar className="h-4 w-4" />
              Book a Pickup
            </Link>
            <a
              href="tel:+16015551234"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold text-slate-500"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                4.9/5 from 200+ Jackson reviews
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src={service.heroImage}
              alt={service.title}
              className="h-[350px] w-full object-cover md:h-[450px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:-bottom-6 md:-left-6 md:p-5">
            <p className="font-display text-2xl text-[#1E6FFF]">4+</p>
            <p className="text-xs text-slate-500">Years of Service</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeRemove({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
          What We Haul Away
        </span>
        <h2 className="font-display mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">
          {service.title} —
          <br />
          We Take It All.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          Not sure if we can remove it? Just call us. We haul just about
          anything — no hazardous materials.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-200 hover:shadow-sm"
            >
              <ChevronRight className="h-4 w-4 shrink-0 text-[#1E6FFF]" />
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
          Real Results
        </span>
        <h2 className="font-display mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">
          Before & After
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          See the transformation our crew delivers. Every job ends with a clean,
          clutter-free space.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {service.beforeAfter.map((ba, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  src={ba.before}
                  alt={`Before ${ba.label}`}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wide">
                  Before
                </div>
              </div>
              <div className="relative">
                <img
                  src={ba.after}
                  alt={`After ${ba.label}`}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute top-3 left-3 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wide">
                  After
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-slate-800">
                  {ba.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Kingdom Come Services — Jackson, MS
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
            How It Works
          </span>
          <h2 className="font-display mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">
            How {service.title} Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Kingdom Come Services is different from the competitors. We make it
            simple, fast, and stress-free.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-5">
          {service.howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#1E6FFF] text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.text}
              </p>
              {i < service.howItWorks.length - 1 && (
                <div className="absolute top-7 right-0 hidden h-px w-full -translate-x-1/2 bg-slate-200 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ service }: { service: ServiceDetail }) {
  const icons = [Shield, Truck, Recycle, Clock, Star];
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
            Why Choose Us
          </span>
          <h2 className="font-display mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">
            Why Choose Us for {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Like you, we&apos;re local too. Here&apos;s why Jackson trusts Kingdom
            Come Services.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.whyChoose.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-[#1E6FFF]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustMarquee() {
  const row1 = [
    "Jackson",
    "Ridgeland",
    "Madison",
    "Brandon",
    "Flowood",
    "Pearl",
    "Byram",
    "Clinton",
    "Richland",
    "Florence",
  ];

  return (
    <section className="bg-white py-16">
      <div className="text-center">
        <p className="text-xs font-medium tracking-widest text-slate-400 uppercase">
          Serving Communities Across Central Mississippi
        </p>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6">
          {[...row1, ...row1, ...row1].map((city, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-6 py-2.5 text-sm font-medium text-slate-600"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCTA({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative bg-white px-6 py-24 md:px-12 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(30,111,255,0.04),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#1E6FFF] uppercase">
          Book Today
        </span>
        <h2 className="font-display mt-4 text-4xl leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          {service.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
          {service.ctaText}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E6FFF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1557d1]"
          >
            <Calendar className="h-5 w-5" />
            Get a Free Estimate
          </Link>
          <a
            href="tel:+16015551234"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <Phone className="h-5 w-5" />
            Call +1 (601) 555-1234
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-emerald-500" /> Licensed & Insured
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-emerald-500" /> Same-Day Available
          </span>
          <span className="flex items-center gap-1.5">
            <Recycle className="h-4 w-4 text-emerald-500" /> Eco-Friendly
          </span>
        </div>
      </div>
    </section>
  );
}
