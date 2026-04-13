const express = require("express");
const router = express.Router();
const investments = require("../data/investments");
const projects = require("../data/projects");

router.get("/", (req, res) => {
  res.json(investments);
});

router.post("/", (req, res) => {
  const { projectId, investorName, amount } = req.body;

  if (!projectId || !investorName || !amount) {
    return res.status(400).json({
      message: "projectId, investorName, and amount are required"
    });
  }

  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const newInvestment = {
    id: investments.length + 1,
    projectId: Number(projectId),
    investorName,
    amount: Number(amount),
    timestamp: new Date().toISOString()
  };

  investments.push(newInvestment);
  project.raised += Number(amount);

  res.status(201).json({
    message: "Investment recorded successfully",
    investment: newInvestment
  });
});

module.exports = router;