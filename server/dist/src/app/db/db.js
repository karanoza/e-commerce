"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOngoConnect = void 0;
var mongoose = require("mongoose");
var MOngoConnect = /** @class */ (function () {
    function MOngoConnect() {
    }
    MOngoConnect.connect = function () {
        var url = "mongodb://127.0.0.1:27017";
        var mongoDB = process.env.url || "";
        return mongoose.connect(url, { useNewUrlParser: true });
    };
    return MOngoConnect;
}());
exports.MOngoConnect = MOngoConnect;
