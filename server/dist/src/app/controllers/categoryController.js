"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
var Category_1 = require("../models/Category");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
    }
    CategoryController.getCategories = function (req, res, next) {
        Category_1.Category.find({}, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Categories found!",
                    data: result,
                });
            }
        });
    };
    CategoryController.saveCategories = function (req, res, next) {
        var categories = req.body;
        Category_1.Category.insertMany(categories, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Categories Added!",
                    data: result,
                });
            }
        });
    };
    return CategoryController;
}());
exports.CategoryController = CategoryController;
