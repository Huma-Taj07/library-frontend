import Link from "next/link";
import DestinationCard from "@/components/cards/DestinationCard";
import { FEATURED_DESTINATIONS } from "@/utils/constants";

export default function FeaturedDestinations() {
  return (
    <section className="featured-destinations">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div className="featured-destinations__header">
          <span
            style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50px",
              color: "#22d3ee",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Popular Places
          </span>
          <h2 className="featured-destinations__title">
            Must-Visit Destinations
          </h2>
          <p className="featured-destinations__subtitle">
            Explore the world's most stunning and inspiring destinations that
            have captured my heart.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="featured-destinations__grid">
          {FEATURED_DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="featured-destinations__cta">
          <Link
            href="/destinations"
            className="btn btn--primary"
            style={{ fontSize: "16px" }}
          >
            Explore All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
