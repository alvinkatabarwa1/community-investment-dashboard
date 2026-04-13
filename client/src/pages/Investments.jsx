import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import { getInvestments, getProjects } from "../api/investmentApi.js";

function Investments() {
  const [investments, setInvestments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInvestments = async () => {
      try {
        const [investmentData, projectData] = await Promise.all([
          getInvestments(),
          getProjects()
        ]);

        setInvestments(investmentData);
        setProjects(projectData);
      } catch (error) {
        console.error("Failed to load investments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadInvestments();
  }, []);

  const getProjectName = (projectId) => {
    const project = projects.find((item) => item.id === projectId);
    return project ? project.name : "Unknown Project";
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1>Investments</h1>
          <p>Review recorded investments across community projects.</p>
        </div>
      </div>

      <div className="panel-card">
        {loading ? (
          <div className="loading-state">Loading investments...</div>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Investor</th>
                  <th>Project</th>
                  <th>Amount</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment) => (
                  <tr key={investment.id}>
                    <td>{investment.investorName}</td>
                    <td>{getProjectName(investment.projectId)}</td>
                    <td>RWF {investment.amount.toLocaleString()}</td>
                    <td>{new Date(investment.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Investments;