require("dotenv").config();

const api_key = process.env.MG_API_KEY;
const domain = process.env.MG_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const sendMail = (mailAdress, subject, mailText, callback) => {
  console.log(sendMail);
  const data = {
    from: `Julia Musterfrau <julia@musterfrau.de>`,
    to: `${mailAdress}`,
    subject: subject,
    text: mailText
  };
  mailgun.messages().send(data, function(error, body) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, body);
    }
  });
};
module.exports = sendMail;

// const mailgun = require("mailgun-js");
// const domain = process.env.MG_DOMAIN;
// var api_key = process.env.MG_API_KEY;

// const mg = mailgun({ apiKey: api_key, domain: domain });
// const data = {
//   from: "Excited User <holger@bewerbung.net>",
//   to: "manzkeholger@gmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function(error, body) {
//   console.log(body);
// });
