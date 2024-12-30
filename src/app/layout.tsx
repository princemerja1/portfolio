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
        <meta
          name="google-site-verification"
          content="nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4"
        />
        <meta name="author" content="Prince Merja" />
        <meta
          name="description"
          content="Explore the personal portfolio of Prince Merja, a game developer, photo editor, video editor, VFX/CGI artist, and programmer. Showcasing innovative projects like Earch B638 and P2 Vortex."
        />
        <meta
          name="keywords"
          content="P2 Vortex, Prince Merja, personal portfolio, game developer, CGI artist, photo editor, video editor, programmer, P2 Vortex portfolio, Prince Merja portfolio, Personal portfolio, Game developer portfolio, CGI artist portfolio, VFX artist portfolio, Programmer portfolio, Photo editor portfolio, Video editor portfolio, Visual effects portfolio, VFX/CGI portfolio, Unreal Engine developer, Game development portfolio, 3D modeling portfolio, VFX design portfolio, 3D artist portfolio, Visual effects design, 3D rendering portfolio, Animation portfolio, CGI movie portfolio, VFX for games, Personal portfolio of a game developer and CGI artist, 3D modeling, VFX, and game development portfolio, Creative portfolio for VFX artists and programmers, Professional portfolio for a CGI artist and programmer, Showcasing innovative projects in VFX and game development,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
