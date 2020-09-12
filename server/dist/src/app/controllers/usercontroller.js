"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercontroller = void 0;
var Usercontroller = /** @class */ (function () {
    function Usercontroller() {
    }
    Usercontroller.login = function (req, res, next) {
        res.json({ user: "Test", success: "true" });
    };
    return Usercontroller;
}());
exports.Usercontroller = Usercontroller;
