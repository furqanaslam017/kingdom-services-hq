import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Kingdom Come Services",
  description: "Photos of recent junk removal and moving jobs in Jackson, MS.",
  openGraph: {
    title: "Gallery — Kingdom Come Services",
    description: "Recent work from our Jackson, MS crew.",
    url: "/gallery",
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
