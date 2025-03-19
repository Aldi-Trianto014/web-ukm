import express from "express";
import multer from "multer";
import Image from "../models/ImageModel.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Simpan di memory sebelum ke DB

// Upload gambar (max 3 gambar)
router.post("/upload", upload.array("images", 3), async (req, res) => {
  try {
    if (!req.files) return res.status(400).send("No files uploaded");

    const images = req.files.map((file) => ({
      name: file.originalname,
      image: file.buffer,
      contentType: file.mimetype,
    }));

    await Image.insertMany(images);
    res.status(201).json({ message: "Images uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ambil semua gambar
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
