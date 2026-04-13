function FundingProgressCard({ projects }) {
  return (
    <div className="panel-card large-panel">
      <div className="panel-header">
        <h3>Funding Progress</h3>
        <button className="ghost-button">View All</button>
      </div>

      <div className="funding-bars">
        {projects.map((project) => {
          const progress = Math.min((project.raised / project.goal) * 100, 100);

          return (
            <div key={project.id} className="funding-bar-item">
              <div className="funding-bar-track">
                <div
                  className="funding-bar-fill"
                  style={{ height: `${progress}%` }}
                />
              </div>
              <span>{project.name.split(" ")[0]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FundingProgressCard;