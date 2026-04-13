import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import ProjectCard from "../components/dashboard/ProjectCard.jsx";
import { getProjects } from "../api/investmentApi.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1>Projects</h1>
          <p>Browse all investment opportunities and their funding status.</p>
        </div>
      </div>

      <div className="panel-card">
        {loading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Projects;