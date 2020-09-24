import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const PaymentSchema = new Schema({
  intent: {
    type: String,
    required: true,
  },
  orderID: {
    type: String,
    required: true,
  },
  payerID: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  paymentToken: {
    type: String,
    required: true,
  },
  returnUrl: {
    type: String,
    required: true,
  },
});

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const AddressSchema = new Schema({
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

const CouriesSchema = new Schema({
  courierName: {
    type: String,
  },
  trackingNumber: {
    type: String,
  },
});

let OrderSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  shippingAddress: AddressSchema,
  products: [ProductSchema],
  paymentInfo: PaymentSchema,
  courierInfo: CouriesSchema,
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Placed",
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

export const Order = model("Order", OrderSchema);
