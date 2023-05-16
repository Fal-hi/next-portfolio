import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "181100150@stmikindonesia.ac.id",
    pass: process.env.SMTP_PASSWORD
  }
})

const information = async (req: any, res: any) => {
  const { name, email, message } = req.body;
  await transporter.sendMail({
    from: `${name} <${email}>`,
    replyTo: `${name} <${email}>`,
    to: "181100150@stmikindonesia.ac.id",
    subject: "Message from Your Site",
    text: message,
    html: `<p>${message}</p>`,
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Email sent successfully" }));
}

export default information