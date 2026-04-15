function calculateSummary(projects, investments) {
  const totalInvested = investments.reduce((sum, investment) => {
    return sum + Number(investment.amount || 0);
  }, 0);

  const activeProjects = projects.filter(
    (project) => project.status === "Active"
  ).length;

  const avgRoi =
    projects.length > 0
      ? Number(
          (
            projects.reduce((sum, project) => sum + Number(project.roi || 0), 0) /
            projects.length
          ).toFixed(1)
        )
      : 0;

  const investors = new Set(
    investments.map((investment) => investment.investorName)
  ).size;

  return {
    totalInvested,
    activeProjects,
    avgRoi,
    investors
  };
}

module.exports = calculateSummary;