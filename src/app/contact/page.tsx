"use client";
import "./Contact.css";
import React from "react";

export default function Contact() {
  // Use React.FormEvent<HTMLFormElement> for the event type
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // Get the current form element

    // Access the form values
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const test = form.test.value;

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
      <div className="contact-main-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="test">Test</label>
            <input type="text" name="test" required placeholder="test" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </>
  );
}
