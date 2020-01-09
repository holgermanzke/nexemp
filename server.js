const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3080;
const db = require("./queries");
const sendMail = require("./mailgun");

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

app.post("/api/emails", (request, response) => {
  const { mailAdress, subject, mailText } = request.body;
  console.log("Data: ", request.body);
  sendMail(mailAdress, subject, mailText, function(error, body) {
    if (error) {
      response.status(500).json({ message: "Internal Error" });
      console.log(error);
    } else {
      console.log("E-Mail sent!");
    }
  });
  console.log("received");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
