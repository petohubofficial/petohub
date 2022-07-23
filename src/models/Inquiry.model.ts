import { model, models, Schema, Types } from "mongoose";
import type { Inquiry } from "types/inquiry";

require("models/Directory.model");

const InquirySchema = new Schema<Inquiry>(
  {
    directory: {
      type: Types.ObjectId,
      ref: "Directory",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please provide a name"],
      minlength: [3, "Name is too short"],
      maxlength: [64, "Name is too long"],
    },
    number: {
      type: String,
      match: [
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
        "Please provide a valid phone number",
      ],
      required: [true, "Please provide a phone number"],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Please provide a valid email",
      ],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
      trim: true,
      minlength: [4, "Message is too short"],
      maxlength: [1024, "Message is too long"],
    },
  },
  { timestamps: true }
);

export default models.Inquiry || model<Inquiry>("Inquiry", InquirySchema);
