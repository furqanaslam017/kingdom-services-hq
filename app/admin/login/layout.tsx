import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login — Kingdom Come Services",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
