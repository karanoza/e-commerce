"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorLogRoutes_1 = require("./src/app/routes/errorLogRoutes");
var index_1 = require("./src/app/routes/index");
var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
//import { MOngoConnect } from "./src/app/db/db";
var mongoose = require("mongoose"); // to include mongoose ( to interact with MongoDB )
var cors = require("cors"); // to include cors ( to create middleware functionalities )
dotenv.load;
// app.get("/", (req, res) => res.send("This is get express api"));
var app = express();
// enable-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// heroku deployment
// app.use(helmet());
// app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
// adding middleware - cors
app.use(cors()); // Cross Origin Resource Sharing
// body - parser  // json: API & MONGO data sharing
app.use(bodyParser.json());
app.use("/user", index_1.userRoute);
app.use("/category", index_1.categoryRoute);
app.use("/product", index_1.productRoute);
app.use("/errorLog", errorLogRoutes_1.errorLogRoute);
//connect mongodb
var Mongoconnect = mongoose.connect("mongodb+srv://dbuser:karan12345@ecomdb.fwcnt.mongodb.net/ecomdb?retryWrites=true&w=majority");
mongoose.connection.once("connected", function () {
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
