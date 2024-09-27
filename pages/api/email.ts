import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: "181100150@stmikindonesia.ac.id",
    pass: "p k s o i s z j h q a h m h z f",
  },
});

const information = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      await transporter.sendMail({
        from: `${name} <${email}>`,
        replyTo: `${name} <${email}>`,
        to: "181100150@stmikindonesia.ac.id",
        subject: "Message from Your Site",
        text: message,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: any) {
    console.error("Error sending email: ", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export default information;
