"use client";

import { useState } from "react";
import { Crown, Dumbbell, Truck, Hammer } from "lucide-react";

const CREW = [
  {
    name: "Marcus",
    role: "Founder & Lead",
    bio: "Born and raised in Jackson. Built this crew from scratch to make honest work feel like family.",
    stat: "Lifts heavier than your couch",
    years: "4 years on crew",
    icon: Truck,
    since: "Part of the crew since 2020",
  },
  {
    name: "Devon",
    role: "Operations & Hauling",
    bio: "The guy who figures out how to fit a sofa through a door without touching the walls.",
    stat: "Zero scratched floors on his watch",
    years: "3 years on crew",
    icon: Hammer,
    since: "Part of the crew since 2021",
  },
  {
    name: "Tre",
    role: "Moving Specialist",
    bio: "Gym-strong and kind-hearted. Treats every piece of furniture like it's his own.",
    stat: "Can bench your refrigerator",
    years: "2 years on crew",
    icon: Dumbbell,
    since: "Part of the crew since 2022",
  },
];

const BLUE = "#3B8EFF";

export function CrewSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#3B8EFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {CREW.map((c, i) => {
            const isFlipped = flipped === i;
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="crew-card"
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlipped ? null : i)}
              >
                <div
                  className="crew-card-inner"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT */}
                  <div className="crew-card-front flex flex-col items-center text-center">
                    <div
                      className="mb-6 grid h-20 w-20 place-items-center rounded-full text-3xl font-bold text-white"
                      style={{
                        backgroundColor: BLUE,
                        boxShadow: `0 0 30px rgba(59,142,255,0.3)`,
                      }}
                    >
                      {c.name[0]}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {c.name}
                    </h3>
                    <span
                      className="mt-2 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${BLUE}20`,
                        color: BLUE,
                        border: `1px solid ${BLUE}40`,
                      }}
                    >
                      {c.role}
                    </span>
                    <p className="mt-5 text-sm leading-relaxed text-gray-400">
                      {c.bio}
                    </p>
                    <span
                      className="mt-auto text-xs"
                      style={{ color: `${BLUE}80` }}
                    >
                      Hover to meet the crew →
                    </span>
                  </div>

                  {/* BACK */}
                  <div
                    className="crew-card-back flex flex-col items-center justify-center text-center"
                    style={{ backgroundColor: "#111827" }}
                  >
                    <Crown className="mb-4 h-8 w-8" style={{ color: BLUE }} />
                    <p
                      className="font-display text-lg font-bold text-white"
                      style={{ color: BLUE }}
                    >
                      {c.stat}
                    </p>
                    <span
                      className="mt-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${BLUE}15`,
                        color: BLUE,
                        border: `1px solid ${BLUE}30`,
                      }}
                    >
                      {c.years}
                    </span>
                    <div className="mt-6 grid h-12 w-12 place-items-center rounded-full" style={{ backgroundColor: `${BLUE}15` }}>
                      <Icon className="h-5 w-5" style={{ color: BLUE }} />
                    </div>
                    <p className="mt-5 text-xs text-gray-400">{c.since}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
