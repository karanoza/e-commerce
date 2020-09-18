import { Schema, model } from "mongoose";

const ErrorLogSchema = new Schema({
  error: {
    type: String,
    required: false,
    trim: true,
  },
  createOn: {
    type: Date,
    default: new Date(),
  },
});

export const Error = model("ErrorLog", ErrorLogSchema);
