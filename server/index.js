import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import imageRoutes from "./routes/imageRoutes.js"; // Tambah ini

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", imageRoutes); // Tambahin ini

app.get("/", (req, res) => {
  res.send("🔥 Backend jalan coy!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server nyala di http://localhost:${PORT}`);
});
