import { model, models, Schema } from "mongoose";
import type { Newsletter } from "types/newsletter";

const NewsletterSchema = new Schema<Newsletter>(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Please provide a valid email",
      ],
      required: [true, "Please provide an email"],
    },
    subscriptions: {
      type: [String],
      default: [],
    },
    isSubscribed: {
      type: Boolean,
      default: true,
    },
    subscribedAt: {
      type: Date,
      default: new Date(),
    },
    unsubscribedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default models.Newsletter || model<Newsletter>("Newsletter", NewsletterSchema);
