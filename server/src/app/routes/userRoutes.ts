import { Usercontroller } from "../controllers/usercontroller";
import * as express from "express";

export const userRoute = express.Router();

userRoute.get("/", Usercontroller.login);
