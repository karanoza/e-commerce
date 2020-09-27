"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
var Order_1 = require("../models/Order");
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.placeOrder = function (req, res, next) {
        var order = new Order_1.Order(req.body);
        Order_1.Order.create(order, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Order Placed!",
                    data: result._id,
                });
            }
        });
    };
    OrderController.getOrderDetails = function (req, res, next) {
        Order_1.Order.findById(req.params.orderId, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "Order Found!", data: result });
            }
        });
    };
    OrderController.getUserOrders = function (req, res, next) {
        Order_1.Order.find({ userId: req.body.userId }, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "Orders Found!", data: result });
            }
        });
    };
    OrderController.getAllOrders = function (req, res, next) {
        Order_1.Order.find({}, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({ status: "success", message: "Orders Found!", data: result });
            }
        });
    };
    OrderController.updateOrderStatus = function (req, res, next) {
        Order_1.Order.findOneAndUpdate({ _id: req.body._id }, {
            $set: {
                status: req.body.status,
                courierInfo: req.body.courierInfo,
            },
        }, function (err, result) {
            if (result === null) {
                res.json({
                    status: "error",
                    message: "Order Not available",
                    data: null,
                });
            }
            else {
                res.json({ status: "success", message: "Order updated", data: null });
            }
        });
    };
    OrderController.getDashBoardInfo = function (req, res, next) {
        Order_1.Order.find({})
            .sort("-createdOn")
            .limit(10)
            .exec(function (err, orders) {
            if (err) {
                res.json({ status: "failed", message: err, data: {} });
            }
            else {
                Order_1.Order.aggregate([
                    {
                        $group: {
                            _id: "$status",
                            count: { $sum: 1 },
                        },
                    },
                ], function (err, result) {
                    if (err) {
                        res.json({ status: "failed", message: err, data: {} });
                    }
                    else {
                        res.json({
                            status: "success",
                            message: "Product added to cart!",
                            data: { result: result, orders: orders },
                        });
                    }
                });
            }
        });
    };
    return OrderController;
}());
exports.OrderController = OrderController;
