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
  to: "gunhodarro@gmail.com", // List of recipients
  subject: `This is a test email`, // Subject line
  text: "Here is a link to the listing" // Plain text body
};

transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info);
  }
});
