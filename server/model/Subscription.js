import mongoose from "mongoose";
import { SUBSCRIPTION_STATUS, SUBSCRIPTION_PLAN } from "../enum/enum.js";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    plan: {
      type: String,
      enum: Object.values(SUBSCRIPTION_PLAN),
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(SUBSCRIPTION_STATUS),
      default: SUBSCRIPTION_STATUS.ACTIVE,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    autoRenew: {
      type: Boolean,
      default: true,
    },

    features: {
      freeDelivery: { type: Boolean, default: false },
      priorityDelivery: { type: Boolean, default: false },
      exclusiveDeals: { type: Boolean, default: false },
    },

    priceAtPurchase: {
      type: Number,
      required: true,
    },

    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);
