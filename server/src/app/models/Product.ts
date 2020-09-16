import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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
  outOfStock: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  isLive: {
    type: Boolean,
    default: true,
  },
});

export const Product = model("Product", CategorySchema);
