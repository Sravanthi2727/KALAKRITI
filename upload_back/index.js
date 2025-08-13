

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import connectDB from "./config/db.js"; // ✅ Single DB connection
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import eventRoutes from "./routes/events.js";
import Listing from "./models/Listing.js";
import User from "./models/userModel.js";
import userAuth from "./middleware/userAuth.js";

dotenv.config(); // Load env before using

const app = express();
const PORT = process.env.PORT || 5000;

// ====== CORS CONFIG ======
// const allowedOrigins = [
//   "http://localhost:3000",
//   process.env.FRONTEND_URL,
// ].filter(Boolean);

// app.use(cors({ origin: allowedOrigins, credentials: true }));

// index.js (CORS setup) — replace your current app.use(cors(...))
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL, // keep if defined
].filter(Boolean);

// dynamic origin function ensures correct Access-Control-Allow-Origin for credentials
app.use(
  cors({
    origin: function (origin, callback) {
      // allow non-browser tools like mobile apps or same-origin requests (no origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(new Error("CORS policy: Origin not allowed"));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ====== MongoDB Schema for Art ======
const artSchema = new mongoose.Schema({
  imageUrl: String,
  uploadedAt: { type: Date, default: Date.now },
});
const Art = mongoose.model("Art", artSchema);

// ====== Cloudinary Config ======
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ====== Multer Setup ======
const upload = multer({ dest: "uploads/" });

// ====== START SERVER ======
const startServer = async () => {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    // 2. API routes
    app.use("/api/auth", authRouter(User));
    app.use("/api/user", userRouter(User));
    app.use("/api/events", eventRoutes);

    app.get("/api/artist", async (req, res) => {
      try {
        const artists = await Listing.find({});
        res.json(artists);
      } catch (err) {
        console.error("❌ Fetch Error:", err);
        res.status(500).json({ error: "Failed to fetch artists" });
      }
    });

    // ====== Upload Route ======
    app.post("/upload", upload.single("art"), async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "traditional_arts",
        });

        // Save to MongoDB
        const newArt = new Art({ imageUrl: result.secure_url });
        await newArt.save();

        // Remove local file
        fs.unlinkSync(req.file.path);

        res.json({ imageUrl: result.secure_url });
      } catch (err) {
        console.error("❌ Upload error:", err);
        res.status(500).json({ error: "Upload failed" });
      }
    });

    // ====== Gallery Route ======
    app.get("/gallery", async (req, res) => {
      try {
        const arts = await Art.find().sort({ uploadedAt: -1 });
        res.json(arts);
      } catch (err) {
        console.error("❌ Gallery error:", err);
        res.status(500).json({ error: "Failed to fetch gallery" });
      }
    });

    // ====== Health Check ======
    app.get("/", (req, res) => {
      res.send("🎨 Kalakriti API is working!");
    });

    // 3. Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to initialize server:", err);
  }
};

startServer();
