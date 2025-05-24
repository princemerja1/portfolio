// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Prince Merja",
  description: "Reach out to Prince Merja with your project inquiries or messages.",
  alternates: {
    canonical: "https://princemerja.me/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}