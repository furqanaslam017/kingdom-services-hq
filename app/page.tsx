"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
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

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("kcs_visited_v2");
    if (!alreadySeen) {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    localStorage.setItem("kcs_visited_v2", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

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
