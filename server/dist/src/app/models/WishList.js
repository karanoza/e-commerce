"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishList = void 0;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var WishListSchema = new mongoose_1.Schema({
    productId: {
        type: ObjectId,
        required: true,
    },
    userId: {
        type: ObjectId,
        required: true,
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
exports.WishList = mongoose_1.model("WishList", WishListSchema);
