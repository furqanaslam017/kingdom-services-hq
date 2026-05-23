"use client";

import {
  ServicesIntroHero,
  TrustMarquee,
  WhatWeRemove,
  BeforeAfterSection,
  HowItWorks,
  WhyChooseUs,
  ServicesCTA,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="relative">
      <ServicesIntroHero />
      <TrustMarquee />
      <WhatWeRemove />
      <BeforeAfterSection />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesCTA />
    </main>
  );
}
