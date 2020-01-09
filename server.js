const express = require("express");
const app = express();
const port = 3080;
const db = require("./db");

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, Postgres Api" });
});

app.get("/api/candidates", db.getCandidates);
app.get("/api/candidates/:id", db.getCandidatesById);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
