import mongoose from "mongoose";
//import { remoteConnection } from "../config/remoteMongo.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: true },
  resetOtp: { type: String, default: "" },
  resetOtpExpireAt: { type: Number, default: 0 },
  cart: { type: Array, default: [] },
  wishlist: { type: Array, default: [] },
  upload: { type: Array, default: "" },
  events: { type: Array, default: "" },
});

// export default userSchema;
const User = mongoose.model("User", userSchema);
export default User;
