import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { SessionProvider } from "@/components/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Kingdom Come Services | Junk Removal & Moving in Jackson, MS",
  description:
    "Professional junk removal, moving, furniture hauling & debris removal in Jackson, Mississippi. 3-man crew, 4 years experience, 50-mile service radius. Free estimates.",
  openGraph: {
    type: "website",
    siteName: "Kingdom Come Services",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="cursor-none">
        <CustomCursor />
        <SessionProvider>
          <QueryProvider>
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster richColors position="top-right" />
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
