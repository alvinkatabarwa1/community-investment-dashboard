const express = require("express");
const cors = require("cors");
const path = require("path");

const projectsRoutes = require("./routes/projects");
const investmentsRoutes = require("./routes/investments");
const summaryRoutes = require("./routes/summary");
const activityRoutes = require("./routes/activity");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/projects", projectsRoutes);
app.use("/api/investments", investmentsRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/activity", activityRoutes);

const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});