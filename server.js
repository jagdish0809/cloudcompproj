const express = require("express");
const res = require("express/lib/response");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static("./public/"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
  // res.send("hello!!")
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jigarsirvi12@gmail.com",
      pass: "Jigarsirvi12@",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "jigarsirvi12@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.companyName}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
