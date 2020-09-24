import { CartController } from "../controllers/cartController";
import * as express from "express";
import { validateUser } from "../middleware/auth";

export const cartRoute = express.Router();

cartRoute.get("/", validateUser, CartController.getUserCart);
cartRoute.post("/", validateUser, CartController.saveToCart);
cartRoute.post("/updateCart", validateUser, CartController.updateCart);
