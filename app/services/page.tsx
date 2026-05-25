"use client";

import {
  ServicesTabs,
  HowItWorks,
  WhyChooseUs,
  ServicesCTA,
} from "@/components/services";

export default function ServicesPage() {
  return (
    <main className="relative">
      <ServicesTabs />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesCTA />
    </main>
  );
}
