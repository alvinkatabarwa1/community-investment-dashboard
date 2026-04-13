function StatCard({ title, value, subtitle, highlight = false }) {
  return (
    <div className={`stat-card ${highlight ? "stat-card-highlight" : ""}`}>
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>
        </div>
        <span className="stat-arrow">↗</span>
      </div>

      <h3 className="stat-value">{value}</h3>
      <p className="stat-subtitle">{subtitle}</p>
    </div>
  );
}

export default StatCard;