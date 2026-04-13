const express = require("express");
const router = express.Router();
const projects = require("../data/projects");

router.get("/", (req, res) => {
  res.json(projects);
});

router.get("/:id", (req, res) => {
  const projectId = Number(req.params.id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json(project);
});

module.exports = router;