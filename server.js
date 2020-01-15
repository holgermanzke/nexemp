const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3080;
const db = require("./db");
const sendMail = require("./mailgun");

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, Postgres Api" });
});

app.get("/api/candidates", db.getCandidates);
app.get("/api/candidates/:id", db.getCandidatesById);

app.post("/api/emails", (request, response) => {
  const { mailAdress, subject, mailText } = request.body;
  console.log("Data: ", request.body);
  sendMail(mailAdress, subject, mailText, function(error, body) {
    if (error) {
      response.status(500).json({ message: "Internal Error" });
      console.log(error);
    } else {
      console.log("E-Mail sent!");
      response.end();
    }
  });
  console.log("received");
});

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
