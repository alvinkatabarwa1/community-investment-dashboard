const express = require("express");
const router = express.Router();
const investments = require("../data/investments");
const projects = require("../data/projects");

router.get("/", (req, res) => {
  const activity = investments
    .slice()
    .reverse()
    .map((investment) => {
      const project = projects.find((item) => item.id === investment.projectId);

      return {
        id: investment.id,
        type: "investment",
        project: project ? project.name : "Unknown Project",
        investorName: investment.investorName,
        amount: investment.amount,
        timestamp: investment.timestamp
      };
    });

  res.json(activity);
});

module.exports = router;