"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryroute = void 0;
var categoryController_1 = require("../controllers/categoryController");
var express = require("express");
exports.categoryroute = express.Router();
exports.categoryroute.get("/", categoryController_1.CategoryController.getCategories);
exports.categoryroute.post("/login", categoryController_1.CategoryController.saveCategories);
