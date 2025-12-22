import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    totalAmount: Number,
    paymentStatus: String,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
