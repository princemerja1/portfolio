// app/thankyou/page.tsx
"use client";
import "./thankyou.css";
import "../components/button.css";
import React from "react";
import { useRouter } from "next/navigation"; // Importing the correct useRouter for app directory

export default function ThankYou() {
  const router = useRouter(); // Initialize router for navigation

  const handleHome = () => {
    router.push("/"); // Redirect to homepage after clicking the button
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
