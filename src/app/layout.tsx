import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Metadata for the entire site
export const metadata: Metadata = {
  title: "Prince Merja || P2Vortex",
  description:
    "Explore the personal portfolio of Prince Merja, a game developer, photo editor, video editor, VFX/CGI artist, and programmer.",
  keywords: [
    "P2 Vortex",
    "Prince Merja",
    "personal portfolio",
    "game developer",
    "CGI artist",
    "photo editor",
    "video editor",
    "programmer",
    "VFX/CGI portfolio",
    "Unreal Engine developer",
    "3D modeling portfolio",
  ],
  authors: [{ name: "Prince Merja" }],
  verification: {
    google: "nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4",
  },
  openGraph: {
    title: "Prince Merja | P2Vortex",
    description:
      "Explore the personal portfolio of Prince Merja, a game developer, photo editor, video editor, VFX/CGI artist, and programmer.",
    url: "https://princemerja.me",
    siteName: "Prince Merja Portfolio",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://princemerja.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* External font preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://princemerja.me" />
      </head>
      <body className="antialiased z-9">
        {/* Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
