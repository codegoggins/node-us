import mongoose from "mongoose";
import { PAYMENT_STATUS } from "../enum/enum.js";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.PENDING,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },

    gatewayResponse: {
      type: mongoose.Schema.Types.Mixed,
    },

    paidAt: Date,

    failureReason: String,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
