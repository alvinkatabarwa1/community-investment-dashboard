const express = require("express");
const router = express.Router();
const projects = require("../data/projects");
const investments = require("../data/investments");
const calculateSummary = require("../utils/calculateSummary");

router.get("/", (req, res) => {
  const summary = calculateSummary(projects, investments);
  res.json(summary);
});

module.exports = router;