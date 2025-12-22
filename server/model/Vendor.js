import { VENDOR_STATUS } from "../enum/enum";
import mongoose from "mongoose";

// Vendor means businesses selling products on the platform

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    business_email: {
      type: String,
      required: true,
      unique: true,
    },
    business_details: {
      taxId: {
        type: String,
        required: true,
      },
      gst_no: {
        type: String,
        required: true,
      },
    },
    phone: String,
    status: {
      type: String,
      enum: Object.values(VENDOR_STATUS),
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
