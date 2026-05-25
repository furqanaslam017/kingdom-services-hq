"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TruckSVG from "@/components/TruckSVG";

export function BrandedTruck({ className }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // Subtle hover tilt on the whole truck
    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      wrapper.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(2deg)`;
    };
    const handleMouseLeave = () => {
      wrapper.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    };
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className={className}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ transition: "transform 0.3s ease-out", transformOrigin: "center" }}
    >
      <TruckSVG animate={true} width="100%" />
    </motion.div>
  );
}
