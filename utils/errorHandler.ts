import { NextApiResponse } from "next";

function errorHandler(err: any, res: NextApiResponse) {
  let error = { ...err };
  error.message = err.message;

  // Mongoose duplicate unique email/username error
  if (err.code == 11000) {
    return res.status(400).json({ success: false, message: "Duplicate field value" });
  }

  // Mongoose validation error for min, max, required fields
  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map((val: any) => val.message)[0];
    return res.status(400).json({ success: false, message });
  }

  // Fallback to generic error
  return res.status(error.statusCode || 500).json({
    success: false,
    error: error?.message || "Server Error",
  });
}

export default errorHandler;
