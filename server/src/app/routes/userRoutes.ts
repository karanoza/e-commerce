import { UserController } from "../controllers/usercontroller";
import * as express from "express";
import { validateUser } from "../middleware/auth";
export const userRoute = express.Router();

userRoute.get("/", validateUser, UserController.getProfile);
userRoute.post("/login", UserController.login);
userRoute.post("/registration", UserController.registration);
userRoute.put("/", validateUser, UserController.updateProfile);
