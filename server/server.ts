import { errorLogRoute } from "./src/app/routes/errorLogRoutes";
import {
  productRoute,
  userRoute,
  categoryRoute,
  cartRoute,
  orderRoute,
  wishlistRoute,
} from "./src/app/routes/index";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
//import { MOngoConnect } from "./src/app/db/db";
import * as mongoose from "mongoose"; // to include mongoose ( to interact with MongoDB )
import * as cors from "cors"; // to include cors ( to create middleware functionalities )
import * as path from "path"; // to include path ( to set paths  for interaction)
import * as multer from "multer";
import * as Helmet from "helmet";
import helmet = require("helmet");
import * as compression from "compression";
import { validateUser } from "./src/app/middleware/auth";

dotenv.load;

// app.get("/", (req, res) => res.send("This is get express api"));
var app = express();

// enable-cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
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

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/errorLog", errorLogRoute);
app.use("/wishlist", validateUser, wishlistRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

//connect mongodb
var Mongoconnect = mongoose.connect(
  "mongodb+srv://dbuser:karan12345@ecomdb.fwcnt.mongodb.net/ecomdb?retryWrites=true&w=majority"
);

mongoose.connection.once("connected", () => {
  console.log("Connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database Connection : " + err);
  }
});

app.listen(3000, () => {
  Mongoconnect.then((res) => console.log("DB connected"));
  console.log("server running on port 3000");
});
