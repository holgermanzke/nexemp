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

app.get("/api/candidates", db.getCandidates);
app.get("/api/candidates/:id", db.getCandidatesById);
app.get("/api/searchresults", db.getSearchResults);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
