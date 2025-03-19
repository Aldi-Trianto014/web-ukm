import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  name: String, // Nama gambar
  image: Buffer, // Data gambar dalam bentuk Buffer
  contentType: String, // Tipe gambar (jpeg/png/dll)
});

const Image = mongoose.model("Image", ImageSchema);
export default Image;
