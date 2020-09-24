import { WishListController } from "../controllers/wishListController";
import * as express from "express";
import { validateUser } from "../middleware/auth";

export const wishlistRoute = express.Router();

wishlistRoute.get("/", validateUser, WishListController.getWishList);
wishlistRoute.post("/", validateUser, WishListController.saveWishList);
