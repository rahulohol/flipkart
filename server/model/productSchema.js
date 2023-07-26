import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

// Create an instance of the Mongoose Schema
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const products = mongoose.model("product", productSchema);

export default products;
