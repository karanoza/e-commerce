import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  outOfStock: {
    type: Boolean,
    default: false,
  },
});

export const Product = model("Product", ProductSchema);
