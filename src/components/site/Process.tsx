import { PhoneCall, CalendarCheck, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Call or Book Online",
    desc: "Tell us what you need removed or moved. Free estimate in minutes.",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "We Show Up On Time",
    desc: "Our crew arrives at your scheduled slot with all the gear.",
  },
  {
    n: "03",
    icon: CheckCircle,
    title: "Space Cleared, You Relax",
    desc: "We do the lifting, clean up, and haul everything away.",
  },
];

export function Process() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="How it works"
            title="3 Simple Steps to a"
            italic="Cleaner Space"
          />
        </ScrollReveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute top-12 left-[15%] right-[15%] hidden border-t-2 border-dashed border-primary/30 lg:block" />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.n} delay={i * 0.12}>
                <div className="relative rounded-3xl border border-border bg-surface p-8">
                  <span className="font-display absolute -top-1 right-5 text-7xl leading-none text-primary/10">
                    {s.n}
                  </span>
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-6 text-2xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
