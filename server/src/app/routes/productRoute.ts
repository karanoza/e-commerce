import { ProductController } from "../controllers/productController";
import * as express from "express";
import { validateUser } from "../middleware/auth";

export const productRoute = express.Router();

productRoute.get("/", validateUser, ProductController.getProducts);
productRoute.get("/:id", validateUser, ProductController.getProductById);
productRoute.post("/", ProductController.addProducts);
productRoute.put("/:id", validateUser, ProductController.updateProduct);
