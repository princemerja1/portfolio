// app/thankyou/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Prince Merja",
  description: "Submission successful — Prince Merja will get back to you shortly.",
  alternates: {
    canonical: "https://www.princemerja.me/thankyou",
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}