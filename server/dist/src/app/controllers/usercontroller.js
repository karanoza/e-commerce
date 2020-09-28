"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var User_1 = require("../models/User");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.login = function (req, res, next) {
        var private_key = "TESTKEY" || ""; // cannnot accesible outside the method
        User_1.User.findOne({ email: req.body.email }, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                if (result != undefined) {
                    if (bcryptjs_1.compareSync(req.body.password, result.password)) {
                        var token = jsonwebtoken_1.sign({ id: result._id }, private_key, {
                            expiresIn: "1h",
                        }); //jwttoken
                        res.json({
                            status: "success",
                            message: "Login Successful",
                            data: token,
                            role: result.role,
                        });
                    }
                    else {
                        res.json({
                            status: "failed",
                            message: "Username or password is incorrect",
                        });
                    }
                }
                else {
                    res.json({
                        status: "failed",
                        message: "Username or password is incorrect",
                    });
                }
            }
        });
    };
    UserController.registration = function (req, res, next) {
        var user = new User_1.User(req.body);
        User_1.User.create(user, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Registration successful",
                    data: result,
                });
            }
        });
    };
    UserController.updateProfile = function (req, res, next) {
        var userId = req.body.userId;
        User_1.User.findByIdAndUpdate(userId, {
            $sey: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                addressInfo: req.body.addressInfo,
            },
        }, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Profile updated",
                    data: null,
                });
            }
        });
    };
    UserController.getProfile = function (req, res, next) {
        var userId = req.body.userId;
        User_1.User.findById(userId, function (err, result) {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Profile updated",
                    data: result,
                });
            }
        });
    };
    return UserController;
}());
exports.UserController = UserController;
