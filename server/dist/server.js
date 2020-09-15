"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRoutes_1 = require("./src/app/routes/userRoutes");
var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
//import { MOngoConnect } from "./src/app/db/db";
var mongoose = require("mongoose"); // to include mongoose ( to interact with MongoDB )
var cors = require("cors"); // to include cors ( to create middleware functionalities )
dotenv.load;
// app.get("/", (req, res) => res.send("This is get express api"));
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// adding middleware - cors
app.use(cors()); // Cross Origin Resource Sharing
// body - parser  // json: API & MONGO data sharing
app.use(bodyParser.json());
app.use("/user", userRoutes_1.userRoute);
//connect mongodb also creates new db ecomdb with default port ‘:27017’
var Mongoconnect = mongoose.connect("mongodb://localhost:27017/ecomdb");
mongoose.connection.on("connected", function () {
    console.log("Connected to database mongodb @ 27017");
});
mongoose.connection.on("error", function (err) {
    if (err) {
        console.log("Error in Database Connection : " + err);
    }
});
app.listen(3000, function () {
    Mongoconnect.then(function (res) { return console.log("DB connected"); });
    console.log("server running on port 3000");
});
