// @ts-nocheck
import mongoose from "mongoose";
import path from "path";
import fs from "fs";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provie a product name"],
      minlength: [5, "Product name is too short"],
      maxlength: [128, "Product name is too long"],
      trim: true,
    },
    alias: {
      type: [String],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Directory",
      default: null,
    },
    category: {
      type: String,
      ref: "Category",
      required: [true, "Please provide a product category"],
    },
    brand: {
      type: String,
      ref: "Brand",
      default: "",
    },
    keywords: {
      type: [
        {
          type: String,
          minlength: [3, "Keyword is too short"],
          maxlength: [16, "Keyword is too long"],
        },
      ],
      default: [],
      validate: [(arr) => arr.length <= 32, "Too many keywords"],
    },
    petType: {
      type: [{ type: String, ref: "Pet" }],
      min: [1, "Please provide atleast one pet type for this product"],
      required: [true, "Please provide a pet type for this product"],
    },
    breedType: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
      minlength: [8, "Description is too short"],
      maxlength: [1024, "Description is too long"],
    },
    weight: {
      type: Number,
      default: 0,
      min: [0, "Product should have a positive weight"],
    },
    size: {
      length: {
        type: Number,
        default: 0,
        min: [0, "Product length cannot be less than 0 meter"],
      },
      width: {
        type: Number,
        default: 0,
        min: [0, "Product width cannot be less than 0 meter"],
      },
      height: {
        type: Number,
        default: 0,
        min: [0, "Product height cannot be less than 0 meter"],
      },
      _id: false,
    },
    countInStock: {
      type: Number,
      default: 0,
      min: [0, "There should be a positive amount of stock"],
    },
    price: {
      type: Number,
      default: 0,
      min: [0, "Price can't be lower than 0"],
    },
    isVeg: {
      type: Boolean,
      default: false,
    },
    ageRange: {
      min: {
        type: Number,
        default: 0,
        min: [0, "Age must be a positive number"],
      },
      max: {
        type: Number,
        default: 0,
        min: [0, "Age must be a positive number"],
      },
      _id: false,
    },
    productImages: {
      type: [String],
      set: function (productImages) {
        this._previousProductImages = this.productImages;
        return productImages;
      },
    },
    link: {
      type: String,
      default: "",
    },
    affiliateLinks: {
      type: [
        {
          _id: false,
          productId: String,
          productLink: String,
          productProvider: String,
          productPrice: Number,
        },
      ],
      default: [],
    },
    edits: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Edit",
        },
      ],
      default: [],
      select: false,
    },
    lastEdit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Edit",
      default: null,
      select: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    approvedAt: {
      type: Date,
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

ProductSchema.pre("save", async function (next) {
  // Deleting previous images if they are updated or removed
  if (this.isModified("productImages")) {
    const previous = this._previousProductImages;
    // Checking for deleted images
    if (previous && previous.length > this.productImages.length) {
      const deletedImages = previous.filter((x) => !this.productImages.includes(x));
      for (const image of deletedImages) {
        const previousPath = path.join(__dirname, "..", "client", "public", image);
        if (fs.existsSync(previousPath)) {
          fs.unlink(previousPath, (err) => err && console.error(err));
        }
      }
    }
  }
  // Set approval to false every time the document is updated
  if (!this.isModified("isApproved")) this.isApproved = false;
  next();
});

ProductSchema.pre("remove", async function (next) {
  // Deleting all images if the product is deleted
  for (const image of this.productImages) {
    const imagePath = path.join(__dirname, "..", "client", "public", image);
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => err && console.error(err));
    }
  }
  next();
});

// Virtual field for questions
ProductSchema.virtual("questions", {
  ref: "Question",
  localField: "_id",
  foreignField: "product",
});

// Virtual field for reviews and ratings
ProductSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "revieweeId",
});

ProductSchema.virtual("rating").get(function () {
  this.populate("reviews");
  let rating = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  if (!this.reviews) return rating;
  this.reviews.forEach((review) => rating[review.rating]++);
  return rating;
});

ProductSchema.virtual("averageRating").get(function () {
  this.populate("reviews");
  if (!this.reviews || this.reviews.length === 0) return 0;
  let total = 0;
  for (const num in this.rating) total += num * this.rating[num];
  return (total / this.reviews.length).toFixed(1);
});

export default mongoose.model("Product", ProductSchema);
