const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3080;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, Postgres Api" });
});

app.get("/candidates", db.getCandidates);
app.get("/candidates/:id", db.getCandidatesById);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
