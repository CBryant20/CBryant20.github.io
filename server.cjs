// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/submit-form", (req, res) => {
//   const { fname, lname, email, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `${email}`,
//     to: "charleswilliambryant@gmail.com",
//     subject: subject,
//     text: `Name: ${fname} ${lname}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.status(200).send("Email sent successfully");
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
