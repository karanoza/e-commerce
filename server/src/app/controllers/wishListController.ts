import { Request, Response, NextFunction, Errback } from "express";
import { WishList } from "../models/WishList";
import { Types } from "mongoose";

export class WishListController {
  static getWishList(req: Request, res: Response, next: NextFunction) {
    WishList.aggregate(
      [
        {
          $match: { userId: new Types.ObjectId(req.body.userId), status: "A" },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "UserWishList",
          },
        },
      ],
      (err: Errback, result: any) => {
        if (err) {
          res.status(500).json({ status: "failed", message: err });
        } else {
          res.json({
            status: "success",
            message: "User WishList!",
            data: result,
          });
        }
      }
    );
  }

  static saveWishList(req: Request, res: Response, next: NextFunction) {
    const wishlist = new WishList(req.body);
    WishList.create(wishlist, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Product added to wishlist!",
          data: {},
        });
      }
    });
  }
}
