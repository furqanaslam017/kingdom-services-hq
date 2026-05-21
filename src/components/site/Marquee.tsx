import { Truck, Package, Sofa, HardHat, Recycle, Boxes, Home, Warehouse } from "lucide-react";

const ITEMS = [
  { label: "Junk Removal", icon: Truck },
  { label: "Moving Help", icon: Package },
  { label: "Furniture Removal", icon: Sofa },
  { label: "Debris Hauling", icon: HardHat },
  { label: "Scrap Metal", icon: Recycle },
  { label: "Packing & Loading", icon: Boxes },
  { label: "Estate Cleanouts", icon: Home },
  { label: "Storage Moves", icon: Warehouse },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:px-10">
        <div className="shrink-0 text-center md:text-left md:max-w-[13rem]">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Trusted locally
          </p>
          <p className="mt-1 text-sm text-foreground">
            <span className="font-semibold">500+</span> Jackson residents served
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 md:gap-14">
            {[...ITEMS, ...ITEMS].map((item, i) => {
              const Icon = item.icon;
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium whitespace-nowrap text-primary transition-opacity hover:opacity-70"
                >
                  <Icon className="h-4 w-4 opacity-60" />
                  {item.label}
                </span>
              );
            })}
          </div>
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </div>
    </section>
  );
}
