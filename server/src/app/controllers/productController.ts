import { productRoute } from "./../routes/productRoute";
import { Product } from "./../models/Product";

import { Request, Response, NextFunction, Errback } from "express";

export class ProductController {
  // get products
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

  // getproduct by ID
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

  // add product
  static addProducts(req: Request, res: Response, next: NextFunction) {
    req.body.imageUrl = "http://localhost:8000/" + req.file.originalname; //imageURL
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

  // Get product by category
  static getProductByCategory(req: Request, res: Response, next: NextFunction) {
    const category = req.body.category;
    let productCount = 0;
    Product.find()
      .estimatedDocumentCount()
      .exec((err: Errback, result: any) => {
        productCount = result;
        Product.find({ category: category }, (err: Errback, result: any) => {
          if (err) {
            res.status(500).json({ status: "failed", message: err });
          } else {
            res.json({
              status: "success",
              message: "Products Found!",
              data: result,
              count: productCount,
            });
          }
        });
      });
  }

  // Update product
  static updateProduct(req: Request, res: Response, next: NextFunction) {
    Product.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
          description: req.body.description,
          price: req.body.price,
          outOfStock: req.body.outOfStock,
        },
      },
      (err: Errback, result: any) => {
        if (err) {
          res.status(500).json({ status: "failed", message: err });
        } else {
          res.json({
            status: "success",
            message: "Product Updated!",
            data: result,
          });
        }
      }
    );
  }

  // Searchproduct

  static searchProduct(req: Request, res: Response, next: NextFunction) {
    const productName = req.body.productName;
    let productCount = 0;
    Product.find()
      .estimatedDocumentCount()
      .exec((err: Errback, result: any) => {
        productCount = result;
        Product.find(
          { productName: { $regex: productName, $options: "i" } }, //regex for avoid case sensetive
          (err: Errback, result: any) => {
            if (err) {
              res.status(500).json({ status: "failed", message: err });
            } else {
              res.json({
                status: "success",
                message: "Product List Found!",
                data: result,
                count: productCount,
              });
            }
          }
        );
      });
  }
}
