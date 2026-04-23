const stats = [
  { label: "Countries Visited", value: "45+" },
  { label: "Travel Stories", value: "120+" },
  { label: "Photos Shared", value: "5K+" },
  { label: "Community Members", value: "25K+" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2 className="stats__title">Amazing Numbers</h2>
        <div className="stats-section__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__number">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
