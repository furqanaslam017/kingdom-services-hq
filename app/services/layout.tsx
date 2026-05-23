import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Kingdom Come Services | Jackson, MS",
  description: "Junk removal, moving, furniture, debris, packing, scrap metal — Jackson MS.",
  openGraph: {
    title: "Our Services — Kingdom Come Services",
    description: "Full service junk removal and moving in Jackson, MS.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
