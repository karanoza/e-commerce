import { Request, Response, NextFunction } from "express";

export class Usercontroller {
  static login(req: Request, res: Response, next: NextFunction) {
    res.json({ user: "Test", success: "true" });
  }
}
