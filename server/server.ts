import { userRoute } from "./src/app/routes/userRoutes";
import * as express from "express";

var app = express();

//app.get("/", (req, res) => res.send("This is get express api"));

app.use("/user", userRoute);

app.listen(3000, () => console.log("server running on port 3000"));
