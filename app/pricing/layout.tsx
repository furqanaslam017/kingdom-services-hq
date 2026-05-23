import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Kingdom Come Services",
  description: "Flat pricing for junk removal and moving in Jackson, MS. $250–300 local, distance surcharge transparent.",
  openGraph: {
    title: "Pricing — Kingdom Come Services",
    description: "Clear, flat pricing. No surprises.",
    url: "/pricing",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
