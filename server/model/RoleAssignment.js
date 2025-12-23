import mongoose from "mongoose";

const roleAssignmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    // null = global role (platform admin)
    // vendorId = vendor-scoped role
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      default: null,
      index: true,
    },
  },
  { timestamps: true }
);

/**
 * Enforce:
 * - One user can have only ONE role per vendor
 * - One user can have only ONE global role (when vendorId is null)
 */
roleAssignmentSchema.index({ userId: 1, vendorId: 1 }, { unique: true });

export default mongoose.model("RoleAssignment", roleAssignmentSchema);
