import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";
import ProjectCard from "../components/dashboard/ProjectCard.jsx";
import FundingProgressCard from "../components/dashboard/FundingProgressCard.jsx";
import ActivityList from "../components/dashboard/ActivityList.jsx";
import QuickInvestCard from "../components/dashboard/QuickInvestCard.jsx";
import {
  getSummary,
  getProjects,
  getActivity,
  createInvestment
} from "../api/investmentApi.js";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      const [summaryData, projectsData, activityData] = await Promise.all([
        getSummary(),
        getProjects(),
        getActivity()
      ]);

      setSummary(summaryData);
      setProjects(projectsData);
      setActivity(activityData);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleInvest = async (payload) => {
    try {
      await createInvestment(payload);
      await loadDashboardData();
    } catch (error) {
      console.error("Investment failed:", error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="loading-state">Loading dashboard...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Track investment performance, funding progress, and activity.</p>
        </div>

        <div className="dashboard-actions">
          <button className="primary-button">Add Project</button>
          <button className="secondary-button">Import Data</button>
        </div>
      </div>

      <section className="stats-grid">
        <StatCard
          title="Total Invested"
          value={`RWF ${summary.totalInvested.toLocaleString()}`}
          subtitle="Updated from recent activity"
          highlight={true}
        />
        <StatCard
          title="Active Projects"
          value={summary.activeProjects}
          subtitle="Currently open for investment"
        />
        <StatCard
          title="Average ROI"
          value={`${summary.avgRoi}%`}
          subtitle="Across active and pending listings"
        />
        <StatCard
          title="Investors"
          value={summary.investors}
          subtitle="Unique investors tracked"
        />
      </section>

      <section className="dashboard-grid">
        <FundingProgressCard projects={projects} />
        <QuickInvestCard projects={projects} onInvest={handleInvest} />

        <div className="projects-panel panel-card">
          <div className="panel-header">
            <h3>Featured Projects</h3>
            <button className="ghost-button">See More</button>
          </div>

          <div className="project-list">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <ActivityList activity={activity} />
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;