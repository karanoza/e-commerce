"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
var usercontroller_1 = require("../controllers/usercontroller");
var express = require("express");
exports.userRoute = express.Router();
exports.userRoute.get("/", usercontroller_1.UserController.login);
exports.userRoute.post("/registration", usercontroller_1.UserController.registration);
exports.userRoute.put("/", usercontroller_1.UserController.updateProfile);
