"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function validateUser(req, res, next) {
    var token = req.headers["x-access-token"];
    var private_key = "TESTKEY" || "";
    jsonwebtoken_1.verify(token, private_key, function (err, decoded) {
        if (err) {
            res.status(401).json({
                status: "failed",
                message: "your session is expired",
                data: null,
            });
        }
        else {
            req.body.userId = decoded.id;
            next();
        }
    });
}
exports.validateUser = validateUser;
