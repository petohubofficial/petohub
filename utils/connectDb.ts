import mongoose from "mongoose";
import fs from "fs/promises";
import path from "path";

const MONGODB_URI = process.env.MONGODB_URI as string;

declare global {
  var mongoose: any;
}

if (!MONGODB_URI)
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string, { bufferCommands: false })
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      });
  }
  fs.readdir(path.resolve("models")).then((models) =>
    models.forEach((model) => require(`models/${model}`))
  );
  cached.conn = await cached.promise;
  return cached.conn;
}
