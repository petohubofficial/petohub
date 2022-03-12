import { createTransport } from "nodemailer";

const EMAIL_SERVICE = process.env.EMAIL_SERVICE as string;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME as string;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;
const EMAIL_FROM = process.env.EMAIL_FROM as string;

const sendEmail = async (options: { to: string; subject: string; text: string }) => {
  const transporter = createTransport({
    service: EMAIL_SERVICE,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, (err) => err && console.error(err));
};

export default sendEmail;
