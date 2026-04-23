"use client";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated Background Blobs */}
      <div className="hero-section__blobs">
        <div className="hero-blob"></div>
        <div className="hero-blob"></div>
        <div className="hero-blob"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-section__content">
        <div style={{ marginBottom: "32px" }}>
          <span className="hero-section__badge">Welcome to Travel Diary</span>
        </div>

        <h1 className="hero-section__title">
          Explore the World
          <br />
          One Story at a Time
        </h1>

        <p className="hero-section__subtitle">
          Join me on a journey through stunning destinations, authentic
          experiences, and unforgettable moments across the globe.
        </p>

        {/* CTA Buttons */}
        <div className="hero-section__buttons">
          <button className="hero-btn hero-btn--primary">
            Start Reading
            <span>→</span>
          </button>

          <button className="hero-btn hero-btn--secondary">
            <span>▶</span>
            Watch Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-section__scroll">
        <span className="hero-section__scroll-text">Scroll to explore</span>
        <svg
          className="hero-section__scroll-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
