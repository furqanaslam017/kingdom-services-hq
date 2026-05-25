"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 4, suffix: "", label: "Years Experience" },
  { value: 3, suffix: "", label: "Crew Members" },
  { value: 50, suffix: "mi", label: "Service Radius" },
];

const BLUE = "#3B8EFF";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(easeOut(t) * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to]);

  return (
    <div ref={ref} className="font-display text-5xl font-bold text-white md:text-6xl">
      {count}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10" style={{ backgroundColor: "#0d1b3e" }}>
      {/* Subtle gold ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: BLUE }} />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative rounded-2xl border p-6 text-center md:rounded-3xl md:p-8"
              style={{
                borderColor: `${BLUE}20`,
                backgroundColor: `${BLUE}08`,
              }}
            >
              <AnimatedCounter to={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm font-medium" style={{ color: `${BLUE}99` }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
