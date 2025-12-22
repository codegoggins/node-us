// immutable record
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    vendorOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VendorOrder",
      required: true,
      index: true,
    },

    productId: mongoose.Schema.Types.ObjectId,
    variantId: mongoose.Schema.Types.ObjectId,

    quantity: Number,

    priceSnapshot: Number,

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

export default mongoose.model("OrderItem", orderItemSchema);
