"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
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
exports.Category = mongoose_1.model("Category", CategorySchema);
