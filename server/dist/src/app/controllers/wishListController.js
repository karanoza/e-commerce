"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
var WishList_1 = require("../models/WishList");
var mongoose_1 = require("mongoose");
var WishListController = /** @class */ (function () {
    function WishListController() {
    }
    WishListController.getWishList = function (req, res, next) {
        WishList_1.WishList.aggregate([
            {
                $match: { userId: new mongoose_1.Types.ObjectId(req.body.userId), status: "A" },
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "UserWishList",
                },
            },
        ], function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "User WishList!",
                    data: result,
                });
            }
        });
    };
    WishListController.saveWishList = function (req, res, next) {
        var wishlist = new WishList_1.WishList(req.body);
        WishList_1.WishList.create(wishlist, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Product added to wishlist!",
                    data: {},
                });
            }
        });
    };
    return WishListController;
}());
exports.WishListController = WishListController;
