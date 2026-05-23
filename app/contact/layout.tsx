import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Kingdom Come Services",
  description: "Call (601) 555-0198 or book online. Free estimates within the hour.",
  openGraph: {
    title: "Contact Kingdom Come Services",
    description: "Get a free junk removal or moving estimate in Jackson, MS.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
