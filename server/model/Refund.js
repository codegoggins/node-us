import mongoose from "mongoose";
import { REFUND_STATUS } from "../enum/enum.js";

const refundSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
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

    reason: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(REFUND_STATUS),
      default: REFUND_STATUS.PENDING,
    },

    refundTransactionId: {
      type: String,
      unique: true,
      sparse: true,
    },

    processedAt: Date,

    adminNotes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Refund", refundSchema);
