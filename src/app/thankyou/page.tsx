// app/thankyou/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Prince Merja",
  description: "Submission successful — Prince Merja will get back to you shortly.",
  alternates: {
    canonical: "https://www.princemerja.me/thankyou",
  },
};

"use client";
import "./thankyou.css";
import "../components/button.css";
import React from "react";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your submission was successful. We will get back to you shortly.</p>
      <button className="button" onClick={handleHome}>
        Go to Home
      </button>
    </div>
  );
}