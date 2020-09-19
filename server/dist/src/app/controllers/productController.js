"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var Product_1 = require("./../models/Product");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    // get products
    ProductController.getProducts = function (req, res, next) {
        Product_1.Product.find({}, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Products found",
                    data: result,
                });
            }
        });
    };
    // getproduct by ID
    ProductController.getProductById = function (req, res, next) {
        var productId = req.params.id;
        Product_1.Product.findById(productId, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Product found",
                    data: result,
                });
            }
        });
    };
    // add product
    ProductController.addProducts = function (req, res, next) {
        req.body.imageUrl = "http://localhost:8000/" + req.file.originalname; //imageURL
        var product = new Product_1.Product(req.body);
        Product_1.Product.insertMany(product, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Product Added!",
                    data: result,
                });
            }
        });
    };
    // Get product by category
    ProductController.getProductByCategory = function (req, res, next) {
        var category = req.body.category;
        var productCount = 0;
        Product_1.Product.find()
            .estimatedDocumentCount()
            .exec(function (err, result) {
            productCount = result;
            Product_1.Product.find({ category: category }, function (err, result) {
                if (err) {
                    res.status(500).json({ status: "failed", message: err });
                }
                else {
                    res.json({
                        status: "success",
                        message: "Products Found!",
                        data: result,
                        count: productCount,
                    });
                }
            });
        });
    };
    // Update product
    ProductController.updateProduct = function (req, res, next) {
        Product_1.Product.findByIdAndUpdate(req.body._id, {
            $set: {
                description: req.body.description,
                price: req.body.price,
                outOfStock: req.body.outOfStock,
            },
        }, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Product Updated!",
                    data: result,
                });
            }
        });
    };
    // Searchproduct
    ProductController.searchProduct = function (req, res, next) {
        var productName = req.body.productName;
        var productCount = 0;
        Product_1.Product.find()
            .estimatedDocumentCount()
            .exec(function (err, result) {
            productCount = result;
            Product_1.Product.find({ productName: { $regex: productName, $options: "i" } }, //regex for avoid case sensetive
            function (err, result) {
                if (err) {
                    res.status(500).json({ status: "failed", message: err });
                }
                else {
                    res.json({
                        status: "success",
                        message: "Product List Found!",
                        data: result,
                        count: productCount,
                    });
                }
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
