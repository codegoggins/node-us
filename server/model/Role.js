import mongoose from "mongoose";
import { SCOPES } from "../enum/enum.js";

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  scopeType: {
    type: String,
    enum: Object.values(SCOPES),
    required: true,
  },
  actions_allowed: {
    type: [String],
    default: [],
  },
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
