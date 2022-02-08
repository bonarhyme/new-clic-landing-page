import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { email, text } = req.body;

  let password;

  if (email == "support@clikplatform.nl") {
    password = process.env.SUPPORT_PASSWORD;
  } else {
    password = process.env.CONTACT_PASSWORD;
  }

  const transporter = nodemailer.createTransport({
    service: "Hotmail",

    auth: {
      user: "info@clikplatform.nl",
      pass: password,
    },
    secure: true,
  });
  const mailData = {
    from: email,
    to: "bonarhyme@gmail.com",
    subject: email.split("@")[0],
    text,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send({ message: "An error occured! Please retry!" });
    } else {
      console.log(info);
      return res
        .status(200)
        .send({ message: "Message sent to us succesfully!" });
    }
  });
}
