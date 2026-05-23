import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — Kingdom Come Services",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
