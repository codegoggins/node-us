import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
      index: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },

    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    // SNAPSHOTS (critical)
    priceSnapshot: {
      type: Number,
      required: true,
    },

    variantSnapshot: {
      sku: String,
      attributes: {
        size: String,
        color: String,
      },
    },

    productSnapshot: {
      name: String,
      image: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CartItem", cartItemSchema);
