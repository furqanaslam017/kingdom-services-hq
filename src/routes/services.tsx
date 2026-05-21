import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { CTASection } from "@/components/site/CTASection";
import { SERVICES } from "@/lib/services";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kingdom Come Services | Jackson, MS" },
      { name: "description", content: "Junk removal, moving, furniture, debris, packing, scrap metal — Jackson MS." },
      { property: "og:title", content: "Our Services — Kingdom Come Services" },
      { property: "og:description", content: "Full service junk removal and moving in Jackson, MS." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 md:px-10 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="What we do"
            title="Our"
            italic="services"
            subtitle="Six core offerings. One reliable crew. All within 50 miles of Jackson."
          />
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl space-y-16">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={s.slug}>
                <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="glass-card rounded-3xl p-10">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="font-display mt-6 text-3xl text-foreground md:text-4xl">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground">{s.description}</p>
                    <ul className="mt-6 space-y-2">
                      {s.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting at</div>
                        <div className="font-display text-2xl text-primary">{s.startingPrice}</div>
                      </div>
                      <Link to="/booking" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark">
                        Book {s.title} →
                      </Link>
                    </div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-primary-light">
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary-light" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
