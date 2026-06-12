const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.json({ limit: "1mb" }));

// Load data from file
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    }
  } catch (e) {
    console.error("Error reading data file:", e.message);
  }
  return { players: [] };
}

// Save data to file
function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data), "utf8");
}

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// GET /api/state — read the current state
app.get("/api/state", (req, res) => {
  const data = loadData();
  res.json(data);
});

// POST /api/state — save the state (requires admin token in query)
app.post("/api/state", (req, res) => {
  const token = req.query.token;
  if (token !== "runni123") {
    return res.status(403).json({ error: "Forbidden" });
  }
  const newData = req.body;
  if (!newData || !newData.players) {
    return res.status(400).json({ error: "Invalid data" });
  }
  saveData(newData);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
