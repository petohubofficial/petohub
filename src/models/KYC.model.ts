import { Document, model, models, Schema, Types } from "mongoose";
import { KYC, Status } from "types/kyc";
import deleteRemovedFiles from "utils/deleteRemovedFiles";
import getDescendantProp from "utils/getDescendantProp";

require("models/User.model");

const KYCSchema = new Schema<KYC>(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      default: null,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
    identity: {
      status: {
        type: String,
        enum: Object.values(Status),
      },
      files: {
        type: [String],
        set: function (files: string[]): string[] {
          // @ts-ignore
          this.identity._previousFiles = this.identity.files;
          return files;
        },
      },
      number: {
        type: String,
      },
      _id: false,
      default: {
        status: Status.PENDING,
        number: null,
        files: [],
      },
    },
    selfie: {
      status: {
        type: String,
        enum: Object.values(Status),
      },
      files: {
        type: [String],
        set: function (files: string[]): string[] {
          // @ts-ignore
          this.selfie._previousFiles = this.selfie.files;
          return files;
        },
      },
      number: {
        type: String,
      },
      _id: false,
      default: {
        status: Status.PENDING,
        number: null,
        files: [],
      },
    },
    pan: {
      status: {
        type: String,
        enum: Object.values(Status),
      },
      files: {
        type: [String],
        set: function (files: string[]): string[] {
          // @ts-ignore
          this.pan._previousFiles = this.pan.files;
          return files;
        },
      },
      number: {
        type: String,
      },
      _id: false,
      default: {
        status: Status.PENDING,
        number: null,
        files: [],
      },
    },
    gst: {
      status: {
        type: String,
        enum: Object.values(Status),
      },
      files: {
        type: [String],
        set: function (files: string[]): string[] {
          // @ts-ignore
          this.gst._previousFiles = this.gst.files;
          return files;
        },
      },
      number: {
        type: String,
      },
      _id: false,
      default: {
        status: Status.PENDING,
        number: null,
        files: [],
      },
    },
    verifiedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

function checkModifiedAndDelete(
  ctx: Document<unknown, any, KYC> & KYC,
  path: string,
  _path: string
) {
  if (ctx.isModified("path")) {
    const current: string[] = getDescendantProp(ctx, path);
    const previous: string[] = getDescendantProp(ctx, _path);
    deleteRemovedFiles(current, previous);
  }
}

KYCSchema.pre("save", async function (next) {
  // Delete the previous files if they're modified
  checkModifiedAndDelete(this, "identity.files", "identity._previousFiles");
  checkModifiedAndDelete(this, "selfie.files", "selfie._previousFiles");
  checkModifiedAndDelete(this, "pan.files", "pan._previousFiles");
  checkModifiedAndDelete(this, "gst.files", "gst._previousFiles");
  next();
});

export default models.KYC || model<KYC>("KYC", KYCSchema);
