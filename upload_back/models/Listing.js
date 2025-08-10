

import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    filename: String,
    url: String,
  },
  price: [String],
  images_description: [String],
  images: [String],
});

const Listing = mongoose.models.Listing || mongoose.model("Listing", listingSchema);
export default Listing;
