"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.login = function (req, res, next) {
        res.json({ user: "Test", success: "true" });
    };
    UserController.registration = function (req, res, next) {
        console.log(req.body);
        res.json({ user: "test", success: "true" });
    };
    UserController.updateProfile = function (req, res, next) {
        console.log(req.body);
        res.json({ user: "test3", success: "true" });
    };
    return UserController;
}());
exports.UserController = UserController;
