import { ProductController } from "../controllers/productController";
import * as express from "express";
import { validateUser } from "../middleware/auth";
import { upload } from "../config/multer";
export const productRoute = express.Router();

productRoute.get("/", validateUser, ProductController.getProducts);
productRoute.get("/:id", validateUser, ProductController.getProductById);
productRoute.post("/", upload.single("file"), ProductController.addProducts);
productRoute.put("/:id", validateUser, ProductController.updateProduct);
