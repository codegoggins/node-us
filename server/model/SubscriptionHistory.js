import mongoose from "mongoose";
import { SUBSCRIPTION_PLAN } from "../enum/enum.js";

const subscriptionHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
      required: true,
    },

    action: {
      type: String,
      enum: ["created", "renewed", "upgraded", "downgraded", "cancelled", "paused", "resumed", "expired"],
      required: true,
    },

    previousPlan: {
      type: String,
      enum: Object.values(SUBSCRIPTION_PLAN),
    },

    newPlan: {
      type: String,
      enum: Object.values(SUBSCRIPTION_PLAN),
    },

    amount: Number,

    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },

    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("SubscriptionHistory", subscriptionHistorySchema);
