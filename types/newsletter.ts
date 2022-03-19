import mongoose from "mongoose";

export interface Newsletter {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  subscriptions: string[];
  isSubscribed: boolean;
  subscribedAt: Date;
  unsubscribedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
