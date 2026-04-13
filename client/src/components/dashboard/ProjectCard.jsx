function ProjectCard({ project }) {
  const progress = Math.min((project.raised / project.goal) * 100, 100);

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-title-group">
          <h4>{project.name}</h4>
          <p>{project.location}</p>
        </div>

        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>

      <div className="project-metrics">
        <div className="metric-block">
          <span>Goal</span>
          <strong>RWF {project.goal.toLocaleString()}</strong>
        </div>

        <div className="metric-block">
          <span>Raised</span>
          <strong>RWF {project.raised.toLocaleString()}</strong>
        </div>

        <div className="metric-block">
          <span>ROI</span>
          <strong>{project.roi}%</strong>
        </div>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="project-card-footer">
        <p className="progress-text">{progress.toFixed(0)}% funded</p>
      </div>
    </div>
  );
}

export default ProjectCard;