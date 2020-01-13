const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3080;
const db = require("./db");

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, Postgres Api" });
});

app.get("/api/candidates", db.getCandidates);
app.get("/api/candidates/:id", db.getCandidatesById);

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
