import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    attributes: {
      size: String, // S, M, L
      color: String, // Red, Blue
      material: String,
    },

    price: {
      type: Number,
      required: true,
    },

    compareAtPrice: Number, // MRP / crossed price

    stock: {
      type: Number,
      default: 0,
    },

    images: [String],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductVariant", productVariantSchema);
