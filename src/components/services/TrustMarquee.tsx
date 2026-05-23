"use client";

const ROW_1_ITEMS = [
  "✓ Same-Day Service Available",
  "✓ Free Estimates",
  "✓ 3-Man Professional Crew",
  "✓ Jackson MS Based",
  "✓ No Hidden Fees",
  "✓ Fully Insured",
  "✓ Residential & Commercial",
  "✓ 4+ Years Experience",
];

const ROW_2_ITEMS = [
  "→ Junk Removal",
  "→ Moving Services",
  "→ Furniture Hauling",
  "→ Construction Debris",
  "→ Scrap Metal",
  "→ Appliance Removal",
  "→ Packing & Loading",
  "→ Yard Cleanup",
];

function MarqueeRow({
  items,
  direction,
  textClass,
}: {
  items: string[];
  direction: "left" | "right";
  textClass: string;
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center whitespace-nowrap">
      <span className={textClass}>{item}</span>
      <span className="mx-3 text-[rgba(30,111,255,0.5)]">·</span>
    </span>
  ));

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max ${animationClass}`}
        style={{
          animation:
            direction === "left"
              ? "marquee-left 25s linear infinite"
              : "marquee-right 20s linear infinite",
        }}
      >
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

export function TrustMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-4">
      <div className="space-y-2">
        <MarqueeRow
          items={ROW_1_ITEMS}
          direction="left"
          textClass="text-sm font-medium text-slate-900"
        />
        <MarqueeRow
          items={ROW_2_ITEMS}
          direction="right"
          textClass="text-sm text-[#3B8EFF]"
        />
      </div>
    </section>
  );
}
