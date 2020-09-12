"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
var usercontroller_1 = require("../controllers/usercontroller");
var express = require("express");
exports.userRoute = express.Router();
exports.userRoute.get("/", usercontroller_1.Usercontroller.login);
