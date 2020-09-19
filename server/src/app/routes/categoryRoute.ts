import { CategoryController } from "../controllers/categoryController";
import * as express from "express";

export const categoryroute = express.Router();

categoryroute.get("/", CategoryController.getCategories);
categoryroute.post("/login", CategoryController.saveCategories);
