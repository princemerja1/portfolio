// app/thankyou/page.tsx
"use client";

import "./thankyou.css";
import "../components/button.css";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your submission was successful. We will get back to you shortly.</p>
      <button className="button" onClick={() => router.push("/")}>
        Go to Home
      </button>
    </div>
  );
}