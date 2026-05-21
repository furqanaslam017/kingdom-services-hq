import { MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { CITIES } from "@/lib/services";

export function ServiceArea() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left: stylized coverage with concentric rings */}
        <ScrollReveal>
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 grid place-items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="animate-ring absolute h-48 w-48 rounded-full border border-primary/40"
                  style={{ animationDelay: `${i * 1}s` }}
                />
              ))}
              <div className="absolute h-48 w-48 rounded-full bg-primary/10" />
              <div className="absolute h-32 w-32 rounded-full bg-primary/20" />
              <div className="relative grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-glow">
                <MapPin className="h-7 w-7" />
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-md">
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
                  className="rounded-full bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary"
                >
                  {c}
                </li>
              ))}
              <li className="rounded-full border border-dashed border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary/80">
                + 30 more
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
