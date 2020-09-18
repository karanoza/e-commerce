import { ErrorLogController } from "../controllers/errorLogController";
import * as express from "express";

export const errorLogRoute = express.Router();

errorLogRoute.get("/", ErrorLogController.getErrorLog);
errorLogRoute.post("/", ErrorLogController.saveError);
