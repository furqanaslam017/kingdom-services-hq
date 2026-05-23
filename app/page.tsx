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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingdom Come Services | Junk Removal & Moving in Jackson, MS",
  description:
    "Professional junk removal and moving services in Jackson, MS. 3-man crew, 4 years experience, 50-mile service radius. Free estimates same day.",
  openGraph: {
    title: "Kingdom Come Services — Jackson, MS",
    description:
      "Junk removal & moving help in Jackson, MS. Free estimates, same-day service.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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
