"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        {/* Content */}
        <h2 className="newsletter__title">Stay Updated</h2>
        <p className="newsletter__subtitle" style={{ marginBottom: "32px" }}>
          Get new travel stories, photography tips, and destination guides
          delivered to your inbox weekly.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="newsletter-section__form"
          style={{ gap: "16px" }}
        >
          <div
            style={{ display: "flex", gap: "16px", flexDirection: "column" }}
          >
            <div style={{ flex: 1, position: "relative" }}>
              <FiMail
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "12px",
                  color: "#9ca3af",
                }}
                size={20}
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                style={{ paddingLeft: "40px" }}
                required
              />
            </div>
            <button
              type="submit"
              className="newsletter-btn"
              style={{ whiteSpace: "nowrap" }}
            >
              Subscribe
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="form__success">Thank you for subscribing! 🎉</div>
          )}
        </form>

        {/* Trust Message */}
        <p
          style={{
            textAlign: "center",
            color: "#d1d5db",
            fontSize: "14px",
            marginTop: "24px",
          }}
        >
          No spam. Only authentic travel stories and useful insights.
        </p>
      </div>
    </section>
  );
}
