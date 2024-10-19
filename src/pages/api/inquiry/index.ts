import Inquiry from "models/Inquiry.model";
import { NextApiRequest, NextApiResponse } from "next";
import { AddInquiryResponse } from "types/inquiry";
import connect from "utils/connectDb";
import errorHandler from "utils/errorHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse<AddInquiryResponse>) => {
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  await connect();
  try {
    const inquiry = await Inquiry.create(req.body);
    return res.status(200).json({ success: true, data: inquiry });
  } catch (error) {
    errorHandler(error, res);
  }
};

export default handler;
