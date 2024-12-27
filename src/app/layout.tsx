import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Prince Merja",
  description: "Prince Mejra's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <html lang="en">
      <meta name="google-site-verification" content="nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4" />
        <meta name="author" content="Prince Merja" />
        <body className={`antialiased z-9`}>
          <section className="-z-50">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>
          <div className="main-container">{children}</div>
        </body>
      </html>
    </>
  );
}
