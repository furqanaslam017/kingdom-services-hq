const ITEMS = [
  "🚛 Junk Removal",
  "📦 Moving Help",
  "🛋️ Furniture",
  "🏗️ Debris Removal",
  "♻️ Scrap Metal",
  "📦 Packing & Loading",
  "🏠 Estate Cleanouts",
  "🚚 Storage Moves",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:px-10">
        <p className="shrink-0 text-sm text-muted-foreground md:max-w-[12rem]">
          Trusted by{" "}
          <span className="font-semibold text-foreground">500+ Jackson</span>{" "}
          residents
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <span
                key={i}
                className="text-sm font-medium whitespace-nowrap text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </div>
    </section>
  );
}
