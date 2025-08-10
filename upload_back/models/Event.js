import mongoose from "mongoose";



const EventSchema = new mongoose.Schema({
  event_title: { type: String, required: true },
  artist_name: { type: String, required: true },
  organized_by: { type: String, required: true },
  description: { type: String, required: true },
  banner: { type: String, required: true },
  images: [String],
  videos: [String],
  event_date: {
  start: { type: Date, required: true },
  end: { type: Date, required: true }
  },
  event_time: String,
  location: { type: String, required: true },
  activity: String,
  status: {
    type: String,
    enum: ["Upcoming", "Ongoing", "Completed"],
    default: "Upcoming"
  },
  artist_bio: String,
  testimonials: [
    {
      name: String,
      comment: String,
      rating: { type: Number, min: 1, max: 5 }
    }
  ],
  price: String,
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);
export default Event;
// const Event = mongoose.model("Event", EventSchema);
// Prevent model overwrite error during dev
// const Event = localConnection.models.Event || localConnection.model("Event", EventSchema);
// export default Event;