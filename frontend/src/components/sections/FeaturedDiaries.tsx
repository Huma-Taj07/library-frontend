import DiaryCard from "@/components/cards/DiaryCard";
import { FEATURED_DIARIES } from "@/utils/constants";
import Link from "next/link";

export default function FeaturedDiaries() {
  return (
    <section className="featured-diaries">
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
            Latest Updates
          </span>
          <h2 className="featured-diaries__title">Featured Travel Diaries</h2>
          <p className="featured-diaries__subtitle">
            Discover the most engaging travel stories and insights from my
            journeys around the world.
          </p>
        </div>

        {/* Diary Cards Grid */}
        <div className="featured-diaries__grid">
          {FEATURED_DIARIES.map((diary) => (
            <DiaryCard key={diary.id} {...diary} />
          ))}
        </div>

        {/* View All Button */}
        <div className="featured-diaries__cta">
          <Link
            href="/diaries"
            className="btn btn--primary"
            style={{ fontSize: "16px" }}
          >
            View All Diaries →
          </Link>
        </div>
      </div>
    </section>
  );
}
