require("dotenv").config();

const api_key = process.env.MG_API_KEY;
const domain = process.env.MG_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const mailText = "Test für eine E-Mail Nachricht";

const data = {
  from: "NexEmp <holger@bewerbung.net>",
  to: "holger@bewerbung.net",
  subject: "Hello",
  text: { mailText }
};

mailgun.messages().send(data, function(error, body) {
  console.log(body);
});
