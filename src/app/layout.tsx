import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reaper Defence | Advanced Unmanned Systems & Electronic Warfare Solutions",
  description: "Reaper Defence develops next-generation unmanned systems, tactical FPV platforms, recon fixed-wing UAVs, net-capture security interceptors, and electronic warfare resistant fiber-optic guided drones.",
  keywords: ["unmanned systems", "defense drones", "electronic warfare", "fiber-optic drones", "reconnaissance UAV", "counter-drone", "netgun", "military grade systems"],
  openGraph: {
    title: "Reaper Defence - Advanced Unmanned Systems",
    description: "Military-grade unmanned systems and electronic warfare solutions designed for modern tactical environments.",
    url: "https://reaper-defence.com",
    siteName: "Reaper Defence",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reaper Defence | Advanced Unmanned Systems",
    description: "Next-generation aerospace defense systems and electronic warfare countermeasures.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#090b0e] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
