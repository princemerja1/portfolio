import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Prince Merja || P2Vortex",
  description: "Explore the personal portfolio of Prince Merja, a game developer, photo editor, video editor, VFX/CGI artist, and programmer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-GDQFBEYV1C`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GDQFBEYV1C', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <section className="-z-50">
          {/* Star animation */}
          {Array.from({ length: 12 }).map((_, i) => (
            <span className="star" key={i}></span>
          ))}
        </section>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
