"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogController = void 0;
var Error_1 = require("../models/Error");
var ErrorLogController = /** @class */ (function () {
    function ErrorLogController() {
    }
    ErrorLogController.getErrorLog = function (req, res, next) {
        Error_1.Error.find({}, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "Error Log!", data: result });
            }
        });
    };
    ErrorLogController.saveError = function (req, res, next) {
        var error = new Error_1.Error(req.body);
        Error_1.Error.create(error, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "Error saved!", data: {} });
            }
        });
    };
    return ErrorLogController;
}());
exports.ErrorLogController = ErrorLogController;
