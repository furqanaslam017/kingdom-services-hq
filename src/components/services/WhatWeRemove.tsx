"use client";

import { TAB_DATA } from "./tabData";
import { MagicCard } from "@/components/site/MagicCard";

export function WhatWeRemove() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <span className="text-xs tracking-[0.4em] uppercase text-[#3B8EFF]">
          What We Haul Away
        </span>
        <h2 className="font-display mt-3 text-5xl leading-tight text-slate-900 md:text-6xl lg:text-7xl">
          We&apos;ll Get Rid of
          <br />
          Almost Anything.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          We haul just about anything from your home or property — no hazardous
          materials. Not sure? Just call us.
        </p>

        {/* All Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TAB_DATA.map((category) => {
            const Icon = category.icon;
            const allItems = category.extraItems
              ? [...category.items, ...category.extraItems]
              : category.items;
            return (
              <MagicCard
                key={category.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 text-[#1E6FFF]" />
                  <h3 className="font-display text-xl text-slate-900">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {category.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {allItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
