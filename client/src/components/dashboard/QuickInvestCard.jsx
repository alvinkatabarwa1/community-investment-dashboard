import { useEffect, useState } from "react";

function QuickInvestCard({ projects, onInvest }) {
  const [projectId, setProjectId] = useState("");
  const [investorName, setInvestorName] = useState("Alvin");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (projects.length > 0 && !projectId) {
      setProjectId(projects[0].id);
    }
  }, [projects, projectId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!projectId || !investorName || !amount) {
      return;
    }

    await onInvest({
      projectId: Number(projectId),
      investorName,
      amount: Number(amount)
    });

    setAmount("");
  };

  return (
    <div className="panel-card quick-invest-card">
      <div className="panel-header">
        <h3>Quick Invest</h3>
        <button className="ghost-button">New</button>
      </div>

      <form className="quick-invest-form" onSubmit={handleSubmit}>
        <select
          value={projectId}
          onChange={(event) => setProjectId(event.target.value)}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={investorName}
          onChange={(event) => setInvestorName(event.target.value)}
          placeholder="Investor name"
        />

        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Amount"
        />

        <button type="submit" className="primary-button">
          Invest Now
        </button>
      </form>
    </div>
  );
}

export default QuickInvestCard;