import mongoose from "mongoose";

const artSchema = new mongoose.Schema({
  imageUrl: String,
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Art", artSchema);