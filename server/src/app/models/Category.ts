import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  isLive: {
    type: Boolean,
    default: true,
  },
});

export const Category = model("Category", CategorySchema);
