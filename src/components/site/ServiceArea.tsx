import { MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { CITIES } from "@/lib/services";

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left: stylized coverage with concentric rings */}
        <ScrollReveal>
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 grid place-items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="animate-ring absolute h-48 w-48 rounded-full border border-primary/30"
                  style={{ animationDelay: `${i * 1}s` }}
                />
              ))}
              <div className="absolute h-48 w-48 rounded-full bg-primary/8" />
              <div className="absolute h-32 w-32 rounded-full bg-primary/15" />
              <div className="relative grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-glow animate-float">
                <MapPin className="h-7 w-7" />
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface/80 px-4 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md ring-1 ring-border">
              Jackson, MS — HQ
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Service Area"
              title="We cover"
              italic="50 miles around Jackson"
              subtitle="Local to Jackson and growing. If you're within 50 miles of downtown, we can be there."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-primary-light px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/20 cursor-default"
                >
                  {c}
                </li>
              ))}
              <li className="rounded-full border border-dashed border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-primary/70">
                + 30 more
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
