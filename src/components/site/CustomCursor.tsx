"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const ringSpringConfig = { damping: 20, stiffness: 200, mass: 0.8 };

  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, .cursor-pointer"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  // Re-attach hover listeners when DOM changes
  useEffect(() => {
    if (isMobile) return;

    const observer = new MutationObserver(() => {
      const handleHoverStart = () => setIsHovering(true);
      const handleHoverEnd = () => setIsHovering(false);

      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label, .cursor-pointer"
      );

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-white/60"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-[#1E6FFF]"
          animate={{
            width: isHovering ? 8 : 6,
            height: isHovering ? 8 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>
    </>
  );
}
