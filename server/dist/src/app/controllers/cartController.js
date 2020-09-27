"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
var Cart_1 = require("../models/Cart");
var mongoose_1 = require("mongoose");
var CartController = /** @class */ (function () {
    function CartController() {
    }
    CartController.getUserCart = function (req, res, next) {
        Cart_1.Cart.aggregate([
            {
                $match: { userId: new mongoose_1.Types.ObjectId(req.body.userId), status: "A" },
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "UserCart",
                },
            },
        ], function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "User Cart!", data: result });
            }
        });
    };
    CartController.saveToCart = function (req, res, next) {
        var wishlist = new Cart_1.Cart(req.body);
        Cart_1.Cart.create(wishlist, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Product added to Cart!",
                    data: {},
                });
            }
        });
    };
    CartController.updateCart = function (req, res, next) {
        Cart_1.Cart.updateMany({ _id: { $in: [req.body.productId], userId: req.body.userId } }, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Cart Updated!",
                    data: result,
                });
            }
        });
    };
    return CartController;
}());
exports.CartController = CartController;
