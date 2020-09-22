import { ProductController } from "../controllers/productController";
import * as express from "express";
import { validateUser } from "../middleware/auth";
import { upload } from "../config/multer";
export const productRoute = express.Router();

productRoute.get("/", ProductController.getProducts);
productRoute.get("/:id", ProductController.getProductById);
productRoute.post("/", upload.single("file"), ProductController.addProducts);
productRoute.post(
  "/getProductByCategory",
  ProductController.getProductByCategory
);
productRoute.post("/searchProduct", ProductController.searchProduct);
productRoute.put("", ProductController.updateProduct);
