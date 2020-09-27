"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var CartSchema = new mongoose_1.Schema({
    productId: {
        type: ObjectId,
        required: true,
    },
    userId: {
        type: ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    status: {
        type: String,
        default: "A",
    },
    createOn: {
        type: Date,
        default: new Date(),
    },
    modifiedOn: {
        type: Date,
    },
});
exports.Cart = mongoose_1.model("Cart", CartSchema);
