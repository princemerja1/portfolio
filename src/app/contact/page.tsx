"use client";
import { useEffect, useState } from "react";
import "./Contact.css";
import "../components/card.css";
import "../components/button.css";
import React from "react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is client-side only
  }, []);

  const handleBack = () => {
    if (isMounted) {
      window.history.back(); // Navigates back in browser history
    }
  };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // Get the current form element

    // Explicitly cast form elements to their respective HTML types
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const test = (form.elements.namedItem("Test") as HTMLInputElement).value;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8a12f2cf-fbda-4e60-a2b4-0e28039e885e",
        name,
        email,
        message,
        test,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <div className="contact">Contact</div>
      <div className="card contact-main-container">
        <form onSubmit={handleSubmit}>
          <div className="contact-container">
            <label htmlFor="fname">First Name :</label>
            <input
              className="border"
              type="text"
              name="firstname"
              required
              placeholder="First name"
            />
          </div>
          <div className="contact-container">
            <label htmlFor="sname">Second Name :</label>
            <input
              className="border"
              type="text"
              name="secondname"
              required
              placeholder="Second Name"
            />
          </div>
          <div className="contact-container">
            <label htmlFor="email">Email :</label>
            <input
              className="border"
              type="email"
              name="email"
              required
              placeholder="email@example.com"
            />
          </div>
          <div className="contact-container">
            <label htmlFor="num">
              Number :
            </label>
            <input
              className="border"
              type="tel"
              name="number"
              required
              placeholder="XXXXXXX485"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <div className="contact-container">
            <label htmlFor="message">Message :</label>
            <textarea
              className="border"
              name="message"
              required
              rows={3}
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button className="button border" type="submit">
            Submit
          </button>
          <button
            className="button border back"
            onClick={handleBack}
            disabled={!isMounted}
          >
            Go Back
          </button>
        </form>
      </div>
    </>
  );
}
