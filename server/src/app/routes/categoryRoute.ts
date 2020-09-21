import { CategoryController } from "../controllers/categoryController";
import * as express from "express";

export const categoryRoute = express.Router();

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.post("/", CategoryController.saveCategories);
