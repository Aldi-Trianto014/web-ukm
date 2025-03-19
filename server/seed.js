import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Image from "./models/ImageModel.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedImages = async () => {
  try {
    const images = [
      { name: "gambar1.jpg", path: ".server/images/Logo ukm.png" },
      { name: "gambar2.jpg", path: ".server/images/Logo Media UKM.png" },
      { name: "gambar3.jpg", path: ".server/images/DSC04338.JPG" },
    ];

    const imageDocs = images.map((img) => ({
      name: img.name,
      image: fs.readFileSync(img.path), // Baca file gambar
      contentType: "image/png", // Sesuaikan dengan tipe gambar lu
    }));

    await Image.insertMany(imageDocs);
    console.log("✅ Gambar berhasil di-seed ke database!");
    process.exit();
  } catch (error) {
    console.error("❌ Error saat seed gambar:", error);
    process.exit(1);
  }
};

seedImages();
