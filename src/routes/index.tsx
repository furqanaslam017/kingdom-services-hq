import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/Marquee";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceArea } from "@/components/site/ServiceArea";
import { GalleryPreview } from "@/components/site/GalleryPreview";
import { PricingTeaser } from "@/components/site/PricingTeaser";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kingdom Come Services | Junk Removal & Moving in Jackson, MS" },
      {
        name: "description",
        content:
          "Professional junk removal and moving services in Jackson, MS. 3-man crew, 4 years experience, 50-mile service radius. Free estimates same day.",
      },
      { property: "og:title", content: "Kingdom Come Services — Jackson, MS" },
      {
        property: "og:description",
        content:
          "Junk removal & moving help in Jackson, MS. Free estimates, same-day service.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kingdom Come Services",
          url: "https://kingdomcomeservices.com",
          telephone: "+1-601-555-0198",
          email: "hello@kingdomcomeservices.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jackson",
            addressRegion: "MS",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 32.2988,
              longitude: -90.1848,
            },
            geoRadius: "50 mi",
          },
          openingHours: ["Mo-Sa 07:00-19:00"],
          priceRange: "$$",
          image: "https://kingdomcomeservices.com/og-image.jpg",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <GalleryPreview />
      <PricingTeaser />
      <CTASection />
    </>
  );
}
