import { motion } from "framer-motion";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((svc, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Service",
              name: svc.title,
              description: svc.short,
              provider: {
                "@type": "LocalBusiness",
                name: "Kingdom Come Services",
                telephone: "+1-601-555-0198",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jackson",
                  addressRegion: "MS",
                  addressCountry: "US",
                },
              },
              areaServed: "Jackson, MS and 50-mile radius",
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-20 pb-12 md:px-10 md:pt-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="What we do"
            title="Our"
            italic="services"
            subtitle="Six core offerings. One reliable crew. All within 50 miles of Jackson."
          />
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 md:px-10">
        <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl space-y-20">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={s.slug}>
                <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="glass-card group rounded-3xl p-10 transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="font-display mt-6 text-3xl text-foreground md:text-4xl">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground">{s.description}</p>
                    <ul className="mt-6 space-y-2">
                      {s.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">Starting at</div>
                        <div className="font-display text-2xl text-primary">{s.startingPrice}</div>
                      </div>
                      <Link to="/booking" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg">
                        Book {s.title} →
                      </Link>
                    </div>
                  </motion.div>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-primary-light">
                    <div className="h-full w-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 transition-transform duration-700 group-hover:scale-105" />
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
