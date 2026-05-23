import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kingdom Come Services",
  description: "3 locals in Jackson, MS who get things done. 4 years of junk removal and moving.",
  openGraph: {
    title: "About Kingdom Come Services",
    description: "Meet the Jackson, MS crew behind Kingdom Come Services.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
