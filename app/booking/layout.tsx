import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Online — Kingdom Come Services",
  description: "Book your junk removal or move online in Jackson, MS.",
  openGraph: {
    title: "Book Online — Kingdom Come Services",
    description: "Quick online booking for junk removal and moving.",
    url: "/booking",
  },
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
