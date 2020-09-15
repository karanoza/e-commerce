import { Request, Response, NextFunction, Errback } from "express";
import { User } from "../models/User";
import {compareSync}  from 'bcryptjs';
import {sign} from "jsonwebtoken"


export class UserController {

  

  static login(req: Request, res: Response, next: NextFunction) {
    const private_key : string = "TESTKEY" || '';
    User.findOne( { email: req.body.email}, (err: Errback, result: any) {
      if(err){
        res.status(500).json({status: 'failed', message : err})
      }else {
        if(result != undefined){
          if(compareSync(req.body.password, result.password)) {
           const token =  sign({id: result._id}, private_key , {expiresIn : '1h'})

             res.json({status: 'success', message : "Login Successful", data:token})
          }else {
            res.json({ status: 'failed', message : 'Username or password is incorrect'})
          }
        }else {
          res.json({ status: 'failed', message : 'Username or password is incorrect'})
        }
      }
    })
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
