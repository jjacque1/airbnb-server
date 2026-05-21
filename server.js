import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import placeRoutes from "./routes/placeRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
dotenv.config();

// 1. Validate Critical Env Variables Immediately

if (!process.env.JWT_SECRET) {
  console.error("FATAL ERROR: JWT_SECRET is not defined.");
  process.exit(1);
}

const app = express();

// Middleware

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());


// Routes

app.use("/auth", authRoutes);
app.use("/places", placeRoutes);
app.use("/bookings", bookingRoutes);

app.get("/health", (req, res) => {
  res.json({ message: "API is running" });
});

// 2. Start Logic

async function startServer() {
  try {
    await connectMongoDB();

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
}

startServer();
