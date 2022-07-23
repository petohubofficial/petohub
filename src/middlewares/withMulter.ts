import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

export interface MulterNextApiRequest extends NextApiRequest {
  files: any[];
}

// Configuring disk storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => {
    // Renaming the file to avoid name collision
    const timestamp = new Date().getTime().toString();
    const filename = timestamp.concat(file.originalname);
    cb(null, filename);
  },
});

// Configuring the upload middleware function
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Allowing only image file types
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  // Maximum allowed file size is 5 MB
  limits: { fileSize: 5 * 1024 * 1024 },
});

const withMulter = (handler: Function) => (req: MulterNextApiRequest, res: NextApiResponse) => {
  upload.any()(req as any, res as any, (error) => {
    if (error) return res.status(400).json({ success: false, error: error.message });
    return handler(req, res);
  });
};

export default withMulter;
