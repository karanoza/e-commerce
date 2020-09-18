import { Request, Response, NextFunction, Errback } from "express";
import { Error } from "../models/Error";

export class ErrorLogController {
  static getErrorLog(req: Request, res: Response, next: NextFunction) {
    Error.find({}, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({ status: "success", message: "Error Log!", data: result });
      }
    });
  }

  static saveError(req: Request, res: Response, next: NextFunction) {
    const error = new Error(req.body);
    Error.create(error, (err: Errback, result: any) => {
      if (err) {
        res.status(500).json({ status: "failed", message: err });
      } else {
        res.json({ status: "success", message: "Error saved!", data: {} });
      }
    });
  }
}
