import {
  Trash2,
  Truck,
  Armchair,
  HardHat,
  Package,
  Recycle,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  includes: string[];
  startingPrice: string;
};

export const SERVICES: Service[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    icon: Trash2,
    short:
      "Full household or office cleanouts. We haul it all — old furniture, appliances, trash, and more.",
    description:
      "From a single item to a full estate cleanout, our crew handles the lifting, loading, and disposal so you don't have to. We sort for donation and recycling whenever possible.",
    includes: [
      "3-man crew + truck",
      "All labor and hauling",
      "Donation & recycling sorting",
      "Site swept clean after",
    ],
    startingPrice: "$250",
  },
  {
    slug: "moving",
    title: "Moving Help",
    icon: Truck,
    short:
      "Apartment, storage unit, or house moves done by our 3-man expert crew with care.",
    description:
      "Local moves done right. We bring blankets, straps, and dollies. Apartments, storage units, and small-to-mid homes around Jackson MS.",
    includes: [
      "Loading & unloading",
      "Furniture pads & straps",
      "Dollies and equipment",
      "Careful handling, no rush",
    ],
    startingPrice: "$275",
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    icon: Armchair,
    short:
      "Single pieces or full rooms. We disassemble, haul, and responsibly dispose.",
    description:
      "Old couches, mattresses, dressers, dining sets — we take them all. Tight stairwells and narrow doors are no problem for our crew.",
    includes: [
      "Disassembly if needed",
      "Stairs / tight spaces handled",
      "Eco-friendly disposal",
      "Same-day available",
    ],
    startingPrice: "$250",
  },
  {
    slug: "debris-hauling",
    title: "Debris Hauling",
    icon: HardHat,
    short:
      "Construction debris, yard waste, concrete, and drywall. We handle the heavy stuff.",
    description:
      "Post-renovation cleanup, storm debris, fence demo, yard waste — we move the heavy material your trash service won't touch.",
    includes: [
      "Heavy material handling",
      "Yard & construction debris",
      "Tarped loads",
      "Licensed disposal sites",
    ],
    startingPrice: "$275",
  },
  {
    slug: "packing-loading",
    title: "Packing & Loading",
    icon: Package,
    short:
      "We pack, wrap, and load your belongings safely into the truck for you.",
    description:
      "Already have a rental truck or pod? We provide the muscle: careful packing, wrapping, and Tetris-tight loading.",
    includes: [
      "Wrapping & padding",
      "Box packing if needed",
      "Tight, secure loading",
      "Hourly or flat rate",
    ],
    startingPrice: "$250",
  },
  {
    slug: "scrap-metal",
    title: "Scrap Metal",
    icon: Recycle,
    short:
      "Old cars, appliances, metal scraps. We remove and recycle scrap metal responsibly.",
    description:
      "Appliances, water heaters, swing sets, fencing, vehicle parts — if it's metal, we recycle it the right way.",
    includes: [
      "Appliance removal",
      "Recycling to local yards",
      "No EPA-listed items",
      "Free quote",
    ],
    startingPrice: "Often free / low",
  },
];

export const TIME_SLOTS = [
  { value: "morning", label: "Morning (8am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
  { value: "evening", label: "Evening (5pm – 7pm)" },
];

export const CITIES = [
  "Jackson",
  "Ridgeland",
  "Madison",
  "Brandon",
  "Flowood",
  "Pearl",
  "Byram",
  "Clinton",
  "Richland",
  "Florence",
  "Terry",
  "Raymond",
];

export const BUSINESS = {
  name: "Kingdom Come Services",
  phone: "(601) 555-0198",
  phoneHref: "tel:+16015550198",
  email: "hello@kingdomcomeservices.com",
  city: "Jackson, MS",
  hours: "Mon – Sat · 7am – 7pm",
};
