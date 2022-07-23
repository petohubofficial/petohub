import Newsletter from "models/Newsletter.model";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  if (!req.body.email)
    return res.status(400).json({ success: false, error: "Please provide an email" });

  await connect();
  try {
    // Check if the email is not already subscribed
    const newsletter = await Newsletter.findOne({ email: req.body.email });
    if (!newsletter) return res.status(404).json({ success: false, error: "Email not found" });

    // Check if email is already unsubscribed
    if (!newsletter.isSubscribed)
      return res.status(400).json({ success: false, error: "Email is already unsubscribed" });

    // Unsubscribe the email
    newsletter.isSubscribed = false;
    newsletter.unsubscribedAt = Date.now();
    await newsletter.save();
    return res.status(200).json({ success: true, newsletter });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
