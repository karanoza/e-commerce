"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
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
exports.Product = mongoose_1.model("Product", CategorySchema);
