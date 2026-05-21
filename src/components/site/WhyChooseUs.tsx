import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "./ScrollReveal";

const FEATURES = [
  ["Same-Day Service Available", "Need it gone today? We'll make it happen."],
  ["Licensed & Insured", "Fully covered so you have zero liability."],
  ["Flat Rate Pricing", "No hidden fees. You know the cost before we start."],
  ["Eco-Friendly Disposal", "We donate, recycle, and properly dispose."],
  ["4 Years Local Experience", "We know Jackson and the surrounding areas."],
  ["3-Man Expert Crew", "More hands = faster job. We work efficiently."],
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            Why Kingdom Come
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Jackson's most{" "}
            <span className="font-display italic font-normal text-primary">
              trusted
            </span>{" "}
            hauling crew.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We're not a faceless corporation. We're 3 local guys who show up,
            work hard, and leave your space spotless.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-dark"
          >
            Get Free Quote →
          </Link>
        </div>

        <div>
          {FEATURES.map(([title, desc], i) => (
            <ScrollReveal key={title} delay={i * 0.05}>
              <div className="flex items-start gap-4 border-b border-border py-6">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display text-xl text-foreground">
                    {title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
