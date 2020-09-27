"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistRoute = void 0;
var wishListController_1 = require("../controllers/wishListController");
var express = require("express");
var auth_1 = require("../middleware/auth");
exports.wishlistRoute = express.Router();
exports.wishlistRoute.get("/", auth_1.validateUser, wishListController_1.WishListController.getWishList);
exports.wishlistRoute.post("/", auth_1.validateUser, wishListController_1.WishListController.saveWishList);
