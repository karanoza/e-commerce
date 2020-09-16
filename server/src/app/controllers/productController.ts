import { Request, Response, NextFunction, Errback } from "express";
import { Product } from "../models/Product";

export class ProductController {
  static getProducts(req: Request, res: Response, next: NextFunction) {
    Product.find({}, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Products found",
          data: result,
        });
      }
    });
  }

  static getProductById(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.id;
    Product.findById(productId, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Product found",
          data: result,
        });
      }
    });
  }

  static addProducts(req: Request, res: Response, next: NextFunction) {
    req.body.imageUrl = "http://localhost:8000" + req.file.originalname; //imageURL
    const product = new Product(req.body);
    Product.insertMany(product, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Product Added!",
          data: result,
        });
      }
    });
  }

  static updateProduct(req: Request, res: Response, next: NextFunction) {
    const categories = req.body;
    Product.insertMany(categories, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "categories Added!",
          data: result,
        });
      }
    });
  }
}
