import { userRoute } from "./src/app/routes/userRoutes";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
//import { MOngoConnect } from "./src/app/db/db";
import * as mongoose from "mongoose"; // to include mongoose ( to interact with MongoDB )
import * as cors from "cors"; // to include cors ( to create middleware functionalities )
import * as path from "path"; // to include path ( to set paths  for interaction)

dotenv.load;

// app.get("/", (req, res) => res.send("This is get express api"));
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// adding middleware - cors
app.use(cors()); // Cross Origin Resource Sharing

// body - parser  // json: API & MONGO data sharing
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/registration", userRoute);

//connect mongodb also creates new db ecomdb with default port ‘:27017’
var Mongoconnect = mongoose.connect("mongodb://localhost:27017/ecomdb");

mongoose.connection.on("connected", () => {
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
