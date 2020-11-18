require("dotenv").config();
const http = require("http");
const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId:
      "1013707352860-iurvq588f942rd0fsg9q4svl3aamsm61.apps.googleusercontent.com",
    clientSecret: "lulrl559GaiLoQQNv1UG_vo_",
    refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx",
    accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
    expires: 1484314697598,
  },
});

// let email_smtp = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   auth: {
//     type: "login", // default
//     user: "devnuruzzaman@gmail.com",
//     pass: "BDnuru25800000",
//   },
// });

let mailOptions = {
  from: "devnuruzzaman@gmail.com",
  to: "freelancernuru@gmail.com",
  subject: "Sending Email Using NodeJS and NodeMailer Package!",
  text: "That was easy to use. I really love node js!!!!",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email Sent succesfully!!!" + data.response);
  }
});
const PORT = 3030;
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("Hello From Server!");
    res.end();
  })
  .listen(PORT);
console.log(`Server is running on port ${PORT}`);
