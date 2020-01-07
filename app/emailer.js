const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "craigfinderalert@gmail.com",
    pass: "b00g3yman"
  }
});

const message = {
  from: "craigfinderalert@gmail.com", // Sender address
  to: accountEmail, // List of recipients
  subject: subject, // Subject line
  text: emailBody // Plain text body
};

transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info);
  }
});
