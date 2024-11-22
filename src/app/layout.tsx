import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en">
      <body
        className={`antialiased z-9`}
      >
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
  );
}
