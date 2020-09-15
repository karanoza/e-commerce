import * as mongoose from "mongoose";
import { MongoClient } from "mongodb";

export class MOngoConnect {
  static connect() {
    const url = "mongodb://127.0.0.1:27017";
    const mongoDB = process.env.url || "";

    return mongoose.connect(url, { useNewUrlParser: true });
  }
}
