"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
  particleCount?: number;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
}

const createParticle = (x: number, y: number, color: string) => {
  const el = document.createElement("div");
  el.className = "magic-card-particle";
  el.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(${color}, 0.9);
    box-shadow: 0 0 6px rgba(${color}, 0.4);
    pointer-events: none;
    z-index: 50;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

export function MagicCard({
  children,
  className = "",
  style,
  glowColor = "30, 111, 255",
  particleCount = 8,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetAnimRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticle(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetAnimRef.current?.kill();

    particlesRef.current.forEach((p) => {
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => p.remove(),
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const id = window.setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);
      timeoutsRef.current.push(id);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      if (enableTilt) {
        gsap.to(card, { rotateX: 4, rotateY: 4, duration: 0.3, ease: "power2.out", transformPerspective: 1000 });
      }
    };

    const onLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
      if (enableTilt) {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.3, ease: "power2.out" });
      }
      if (enableMagnetism) {
        gsap.to(card, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      }
      // Reset glow
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
      card.style.setProperty("--glow-intensity", "0");
    };

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // Border glow follows cursor
      const rx = (x / rect.width) * 100;
      const ry = (y / rect.height) * 100;
      card.style.setProperty("--glow-x", `${rx}%`);
      card.style.setProperty("--glow-y", `${ry}%`);
      card.style.setProperty("--glow-intensity", "1");

      if (enableTilt) {
        const rotateX = ((y - cy) / cy) * -6;
        const rotateY = ((x - cx) / cx) * 6;
        gsap.to(card, { rotateX, rotateY, duration: 0.15, ease: "power2.out", transformPerspective: 1000 });
      }

      if (enableMagnetism) {
        const magnetX = (x - cx) * 0.04;
        const magnetY = (y - cy) * 0.04;
        magnetAnimRef.current = gsap.to(card, { x: magnetX, y: magnetY, duration: 0.3, ease: "power2.out" });
      }
    };

    const onClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDist * 2}px;
        height: ${maxDist * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.2) 0%, rgba(${glowColor}, 0.08) 30%, transparent 70%);
        left: ${x - maxDist}px;
        top: ${y - maxDist}px;
        pointer-events: none;
        z-index: 30;
      `;
      card.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => ripple.remove() });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    card.addEventListener("mousemove", onMove);
    card.addEventListener("click", onClick);

    return () => {
      isHoveredRef.current = false;
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("click", onClick);
      clearParticles();
    };
  }, [animateParticles, clearParticles, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`magic-card relative overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
    >
      {/* Glow border layer */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{
          padding: "1.5px",
          background: `radial-gradient(300px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, calc(var(--glow-intensity, 0) * 0.5)) 0%, rgba(${glowColor}, calc(var(--glow-intensity, 0) * 0.2)) 40%, transparent 70%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          borderRadius: "inherit",
          opacity: 1,
        }}
      />
      {children}
    </div>
  );
}
