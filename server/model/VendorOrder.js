import mongoose from "mongoose";
import { ORDER_STATUS } from "../constants/enums.js";

const vendorOrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ORDER_STATUS,
      default: "pending",
    },

    subtotal: Number,
  },
  { timestamps: true }
);

export default mongoose.model("VendorOrder", vendorOrderSchema);
