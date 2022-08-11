import fs from "fs";
import { model, models, Schema, Types } from "mongoose";
import path from "path";
import { AffiliateProvider, FoodClassification, Product, VariationBasis } from "types/product";
import type { Rating } from "types/review";

require("models/Directory.model");
require("models/Category.model");
require("models/Brand.model");
require("models/Edit.model");
require("models/Question.model");
require("models/Review.model");
require("models/Pet.model");

const ProductSchema = new Schema<Product>(
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
      type: Types.ObjectId,
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
      validate: [(arr: string[]) => arr.length <= 32, "Too many keywords"],
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
    variations: {
      _id: false,
      sku: {
        type: String,
        required: [true, "Please provide a product SKU"],
        default: "",
      },
      price: {
        type: Number,
        default: 0,
        min: [0, "Price can't be lower than 0"],
        required: [true, "Please provide a product price"],
      },
      onOffer: {
        type: Boolean,
        default: false,
      },
      offerPrice: {
        type: Number,
        default: 0,
        min: [0, "Offer price can't be lower than 0"],
      },
      countInStock: {
        type: Number,
        default: 0,
        min: [0, "There should be a positive amount of stock"],
        required: [true, "Please provide a product stock"],
      },
      basis: {
        type: String,
        enum: VariationBasis,
        required: false,
      },
      attributes: {
        color: {
          type: String,
          default: "",
          required: false,
        },
        weight: {
          type: Number,
          default: 0,
          min: [0, "Product should have a positive weight"],
          required: false,
        },
        size: {
          length: {
            type: Number,
            default: 0,
            min: [0, "Product length cannot be less than 0 meter"],
            required: false,
          },
          width: {
            type: Number,
            default: 0,
            min: [0, "Product width cannot be less than 0 meter"],
            required: false,
          },
          height: {
            type: Number,
            default: 0,
            min: [0, "Product height cannot be less than 0 meter"],
            required: false,
          },
          _id: false,
          required: false,
        },
      },
    },
    foodClassification: {
      type: String,
      enum: FoodClassification,
      default: FoodClassification.NOT_APPLICABLE,
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
    link: {
      type: String,
      default: "",
    },
    affiliateLinks: {
      type: [
        {
          _id: false,
          id: String,
          link: String,
          provider: {
            type: String,
            enum: AffiliateProvider,
          },
          price: Number,
        },
      ],
      default: [],
    },
    productImages: {
      type: [String],
      set: function (productImages: string[]) {
        const doc: Product = this as unknown as Product;
        doc._previousProductImages = doc.productImages;
        return productImages;
      },
      default: [],
    },
    edits: {
      type: [
        {
          type: Types.ObjectId,
          ref: "Edit",
        },
      ],
      default: [],
      select: false,
    },
    lastEdit: {
      type: Types.ObjectId,
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
    const previous: string[] = this._previousProductImages;
    if (previous && previous.length > this.productImages.length) {
      const deletedImages: string[] = previous.filter((x) => !this.productImages.includes(x));
      for (const image of deletedImages) {
        const previousPath = path.join("public", image);
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
    const imagePath = path.join("public", image);
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

ProductSchema.virtual("rating").get(function (): Rating {
  this.populate("reviews");
  let rating: Rating = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  if (!this.reviews) return rating;
  this.reviews.forEach((review) => rating[review.rating]++);
  return rating;
});

ProductSchema.virtual("averageRating").get(function (): number {
  this.populate("reviews");
  if (!this.reviews || this.reviews.length === 0) return 0;
  let total = 0;

  Object.entries(this.rating).forEach(([key, value]) => {
    total += parseInt(key) * value;
  });
  return total / this.reviews.length;
});

export default models.Product || model<Product>("Product", ProductSchema);
