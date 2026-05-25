"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";

const BLUE = "#3B8EFF";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    setOffset({ x: dx, y: dy });
  }, []);

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return (
    <Link
      ref={btnRef}
      href="/booking"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-[#0d1b3e] transition-shadow duration-300 hover:shadow-xl"
      style={{
        backgroundColor: BLUE,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
      }}
    >
      {children}
    </Link>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    left: `${10 + Math.random() * 80}%`,
    size: 3 + Math.random() * 3,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle-gold absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: BLUE,
            opacity: 0.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CTAGold() {
  const words = ["Get", "your", "free", "estimate", "today"];
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger on mount for CTA visibility
  useState(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:px-10"
      style={{ backgroundColor: "#0d1b3e" }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, #0d1b3e 0%, #1a2a5c 25%, #0d1b3e 50%, #1a2a5c 75%, #0d1b3e 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
        }}
      />

      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {words.map((word, i) => (
            <span
              key={word + i}
              className="inline-block mr-2 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${300 + i * 120}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p
          className="mx-auto mt-5 max-w-lg text-sm text-gray-400 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: "1s",
          }}
        >
          Call, text, or book online. Same-day availability in Jackson and up to 50 miles out.
        </p>

        <div
          className="mt-8 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: "1.2s",
          }}
        >
          <MagneticButton>
            Book a Free Estimate
            <span
              className="ml-1 inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: BLUE }}
            />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
