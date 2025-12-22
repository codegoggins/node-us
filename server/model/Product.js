import mongoose from "mongoose";
import { PRODUCT_STATUS } from "../constants/enums.js";

const productSchema = new mongoose.Schema(
  {
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
      index: true,
    },

    name: { type: String, required: true },
    description: String,

    category: String,
    tags: [String],

    status: {
      type: String,
      enum: PRODUCT_STATUS,
      default: "draft",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
