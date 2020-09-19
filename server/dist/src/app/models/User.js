"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var bcryptjs_1 = require("bcryptjs");
var addressInfo = new mongoose_1.Schema({
    addressLine1: String,
    addressLine2: String,
    city: String,
    pin: String,
});
var UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 12,
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: "User",
    },
    addressInfo: addressInfo,
});
//  Password encryption using bcryptjs
UserSchema.pre("save", function (next) {
    var user = this;
    if (user.isModified("password")) {
        var saltRound = 10;
        bcryptjs_1.genSalt(saltRound, function (err, salt) {
            bcryptjs_1.hash(user.password, salt, function (err, hash) {
                if (err) {
                    throw err;
                }
                else {
                    user.password = hash;
                    next();
                }
            });
        });
    }
    else {
        next();
    }
});
exports.User = mongoose_1.model("User", UserSchema);
