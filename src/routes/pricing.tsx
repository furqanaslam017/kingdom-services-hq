import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PricingTeaser } from "@/components/site/PricingTeaser";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Kingdom Come Services" },
      { name: "description", content: "Flat pricing for junk removal and moving in Jackson, MS. $250–300 local, distance surcharge transparent." },
      { property: "og:title", content: "Pricing — Kingdom Come Services" },
      { property: "og:description", content: "Clear, flat pricing. No surprises." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const FAQ = [
  ["Why a price range and not a flat number?", "Job size varies — a single couch and a full garage are different lifts. We confirm the exact price before any work starts."],
  ["What's included in the local rate?", "3-man crew, truck, hauling, and disposal. No extra fees for stairs, fuel, or basic labor."],
  ["Do you charge for estimates?", "Free, always. Call or fill out the booking form for a quick quote."],
  ["What payment methods do you accept?", "Cash, card, and most major mobile payment apps."],
];

function PricingPage() {
  const [service, setService] = useState("Junk Removal");
  const [dist, setDist] = useState(10);
  const [base] = useState({ min: 250, max: 300 });
  const surcharge = dist <= 15 ? 0 : Math.round((dist - 15) * 4);
  const est = `$${base.min + surcharge} – $${base.max + surcharge}`;

  return (
    <>
      <PricingTeaser />

      <section className="relative overflow-hidden bg-surface-2 px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <SectionHeader eyebrow="Estimate" title="Quick" italic="calculator" />
          <div className="mt-10 rounded-3xl border border-border bg-surface p-8 shadow-elegant">
            <label className="block text-sm font-semibold text-foreground">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {["Junk Removal", "Moving Help", "Furniture", "Debris", "Packing", "Scrap Metal"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <label className="mt-6 block text-sm font-semibold text-foreground">
              Distance from Jackson: <span className="text-primary">{dist} mi</span>
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={dist}
              onChange={(e) => setDist(parseInt(e.target.value))}
              className="mt-3 w-full accent-[oklch(0.43_0.21_265)]"
            />

            <div className="mt-8 rounded-2xl bg-primary-light p-6 text-center ring-1 ring-primary/10">
              <div className="text-xs uppercase tracking-wider text-primary">Estimated range</div>
              <div className="font-display mt-1 text-4xl text-primary">{est}</div>
              <p className="mt-2 text-xs text-muted-foreground">
                Final price confirmed before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Pricing" italic="questions" />
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-semibold transition-colors hover:text-primary">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTASection />
    </>
  );
}
