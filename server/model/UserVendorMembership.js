import mongoose from "mongoose";

const userVendorMembershipSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
      index: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Enforce:
 * - One user can have only ONE role per business
 */
userVendorMembershipSchema.index(
  { userId: 1, businessId: 1 },
  { unique: true }
);

export default mongoose.model(
  "UserVendorMembership",
  userVendorMembershipSchema
);
