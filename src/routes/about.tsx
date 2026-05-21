import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kingdom Come Services" },
      { name: "description", content: "3 locals in Jackson, MS who get things done. 4 years of junk removal and moving." },
      { property: "og:title", content: "About Kingdom Come Services" },
      { property: "og:description", content: "Meet the Jackson, MS crew behind Kingdom Come Services." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  ["2020", "Founded Kingdom Come Services in Jackson"],
  ["2021", "Expanded to moving & furniture handling"],
  ["2022", "Reached 200+ completed jobs"],
  ["2023", "Added scrap metal & debris services"],
  ["2024", "500+ jobs and growing"],
];

const CREW = [
  { name: "Marcus", role: "Founder & Lead", fact: "Played college football. Lifts heavier than your couch." },
  { name: "Devon", role: "Operations", fact: "Knows every back road in Hinds County by heart." },
  { name: "Tre", role: "Crew", fact: "Started moving for friends in high school. Hasn't stopped." },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="About us"
            title="3 locals who"
            italic="get things done"
            subtitle="No call centers. No franchise overhead. Just a hard-working Jackson crew who treats your property like our own."
          />
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {CREW.map((c) => (
            <ScrollReveal key={c.name}>
              <div className="glass-card h-full rounded-3xl p-8">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-bold text-white">
                  {c.name[0]}
                </span>
                <h3 className="font-display mt-5 text-2xl">{c.name}</h3>
                <p className="text-sm font-semibold text-primary">{c.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.fact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Our story" title="From day one to" italic="500+ jobs" />
          <ol className="mt-12 space-y-6 border-l-2 border-primary/30 pl-6">
            {TIMELINE.map(([year, what]) => (
              <ScrollReveal key={year}>
                <li className="relative">
                  <span className="absolute -left-[34px] grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">•</span>
                  <div className="font-display text-2xl text-primary">{year}</div>
                  <p className="text-foreground">{what}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </>
  );
}
