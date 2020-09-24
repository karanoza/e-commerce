import { Request, Response, NextFunction, Errback } from "express";
import { Cart } from "../models/Cart";
import { Types } from "mongoose";

export class CartController {
  static getUserCart(req: Request, res: Response, next: NextFunction) {
    Cart.aggregate(
      [
        {
          $match: { userId: new Types.ObjectId(req.body.userId), status: "A" },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "UserCart",
          },
        },
      ],
      (err: Errback, result: any) => {
        if (err) {
          res.status(500).json({ status: "failed", message: err });
        } else {
          res.json({ status: "success", message: "User Cart!", data: result });
        }
      }
    );
  }

  static saveToCart(req: Request, res: Response, next: NextFunction) {
    const wishlist = new Cart(req.body);
    Cart.create(wishlist, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Product added to Cart!",
          data: {},
        });
      }
    });
  }

  static updateCart(req: Request, res: Response, next: NextFunction) {
    Cart.updateMany(
      { _id: { $in: [req.body.productId], userId: req.body.userId } },
      (err: Errback, result: any) => {
        if (err) {
          res.status(500).json({ status: "failed", message: err });
        } else {
          res.json({
            status: "success",
            message: "Cart Updated!",
            data: result,
          });
        }
      }
    );
  }
}
