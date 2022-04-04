import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Role, User } from "types/user";

const UserSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      maxlength: [32, "Name is too long"],
      minlength: [3, "Name is too short"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      lowercase: true,
      trim: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Please provide a valid email",
      ],
    },
    number: {
      type: String,
      match: [
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
        "Please provide a valid phone number",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password must have atleast eight or more characters"],
      select: false,
    },
    profileImage: {
      type: String,
      set: function (profileImage: string) {
        // @ts-ignore
        this._previousProfileImage = this.profileImage;
        return profileImage;
      },
    },
    role: {
      type: String,
      default: Role.CUSTOMER,
      enum: Role,
    },
    directory: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Directory",
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
    verifiedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // Delete the previous image if it's modified
  if (this.isModified("profileImage")) {
    // @ts-ignore
    const previous: string = this._previousProfileImage;
    if (previous) {
      const previousPath = path.join(__dirname, "..", "client", "public", previous);
      if (fs.existsSync(previousPath)) {
        fs.unlink(previousPath, (err) => err && console.error(err));
      }
    }
  }
  // Encrypting the password everytime before saving
  // Don't encrypt password again if it's not modified
  if (!this.isModified("password")) {
    next();
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Generating an account verification token
UserSchema.methods.getVerificationToken = function () {
  const verificationToken = crypto.randomBytes(20).toString("hex");
  this.verificationToken = crypto.createHash("sha256").update(verificationToken).digest("hex");
  return verificationToken;
};

// Matching passwords entered by the user with the correct password
UserSchema.methods.matchPasswords = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// Generating a signed JWT token to give authorization
UserSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Generating a password reset token
UserSchema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
