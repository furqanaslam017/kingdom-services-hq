"use client";

import { useEffect, useRef, useState } from "react";

const TIMELINE = [
  { year: 2020, desc: "Founded Kingdom Come Services in Jackson with one truck and a dream." },
  { year: 2021, desc: "Expanded to moving & furniture handling — word got out fast." },
  { year: 2022, desc: "Reached 200+ completed jobs and added Devon to the crew." },
  { year: 2023, desc: "Added scrap metal & debris services. Became the go-to crew in the area." },
  { year: 2024, desc: "500+ jobs and growing. Tre joined. The crew is stronger than ever." },
];

const BLUE = "#3B8EFF";

function YearCounter({ year }: { year: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
    const duration = 1500;
    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(t * year));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, year]);

  return <span ref={ref}>{count}</span>;
}

function TimelineItem({
  item,
  index,
}: {
  item: { year: number; desc: string };
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-10 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Dot */}
      <div
        className="timeline-dot absolute top-1.5 left-0 grid h-3 w-3 place-items-center rounded-full"
        style={{ backgroundColor: BLUE }}
      >
        {visible && <span className="timeline-ripple" />}
      </div>

      <span
        className="font-display text-4xl font-bold"
        style={{ color: BLUE }}
      >
        <YearCounter year={item.year} />
      </span>
      <p className="mt-1 max-w-md text-sm leading-relaxed text-gray-600">
        {item.desc}
      </p>
    </div>
  );
}

export function AnimatedTimeline() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10" style={{ backgroundColor: "#f8f9ff" }}>
      <div className="relative mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: BLUE }}>
            <span className="h-px w-8" style={{ backgroundColor: BLUE }} />
            OUR STORY
            <span className="h-px w-8" style={{ backgroundColor: BLUE }} />
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#0d1b3e] md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            From day one to{" "}
            <em className="not-italic" style={{ color: BLUE, fontStyle: "italic" }}>
              500+ jobs.
            </em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* Vertical line */}
          <div
            className="absolute top-1.5 bottom-0 left-[5px] w-0.5"
            style={{ backgroundColor: `${BLUE}40` }}
          />

          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
