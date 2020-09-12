"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("./src/app/routes/userRoutes");
var express = require("express");
var app = express();
//app.get("/", (req, res) => res.send("This is get express api"));
app.use("/user", userRoutes_1.userRoute);
app.listen(3000, function () { return console.log("server running on port 3000"); });
