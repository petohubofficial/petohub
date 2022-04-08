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
    // Check if there is already a newsletter with the email
    let newsletter = await Newsletter.findOne({ email: req.body.email });
    // Create a new listing
    if (!newsletter) newsletter = await Newsletter.create({ email: req.body.email });
    // Handling resubscription
    else if (!newsletter.isSubscribed) {
      newsletter.isSubscribed = true;
      newsletter.subscribedAt = Date.now();
      newsletter.unsubscribedAt = null;
      await newsletter.save();
    }
    // Handling email already subscribed
    else return res.status(400).json({ success: false, error: "Email is already subscribed" });
    return res.status(200).json({ success: true, newsletter });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
