import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  verifyOtp: { type: String, default: "" },
  verifyOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },

  resetOtp: { type: String, default: "" },
  resetOtpExpireAt: { type: Number, default: 0 },

  // Persisted user data
  cart: { type: [mongoose.Schema.Types.Mixed], default: [] },
  wishlist: { type: [mongoose.Schema.Types.Mixed], default: [] },
  upload: { type: [mongoose.Schema.Types.Mixed], default: [] },

  // Event registrations (store Event _id)
  events: { type: [mongoose.Schema.Types.ObjectId], ref: "Event", default: [] },

  // Order history
  orders: { type: [mongoose.Schema.Types.Mixed], default: [] },
});

const User = mongoose.model("User", userSchema);
export default User;