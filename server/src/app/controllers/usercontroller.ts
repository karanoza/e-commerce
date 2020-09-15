import { Request, Response, NextFunction, Errback } from "express";
import { User } from "../models/User";
export class UserController {
  static login(req: Request, res: Response, next: NextFunction) {
    res.json({ user: "Test", success: "true" });
  }

  static registration(req: Request, res: Response, next: NextFunction) {
    const user = new User(req.body);
    User.create(user, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({
          status: "success",
          message: "Registration successful",
          data: result,
        });
      }
    });
  }

  static updateProfile(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    res.json({ user: "test3", success: "true" });
  }
}
