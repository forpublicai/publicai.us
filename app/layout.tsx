import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/ds/SiteHeader";
import SiteFooter from "@/components/ds/SiteFooter";

export const metadata: Metadata = {
  title: "Public AI USA",
  description:
    "Public AI services for Maine communities and municipalities, powered by MOCSI, Maine Open Compute Services Initiative.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
