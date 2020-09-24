import { OrderController } from "../controllers/orderController";
import * as express from "express";
import { validateUser } from "../middleware/auth";

export const orderRoute = express.Router();

orderRoute.get("/admin/dashboard", OrderController.getDashBoardInfo);
orderRoute.get("/admin", OrderController.getAllOrders);
orderRoute.get("/", validateUser, OrderController.getUserOrders);
orderRoute.get("/:orderId", validateUser, OrderController.getOrderDetails);
orderRoute.post("/", validateUser, OrderController.placeOrder);
orderRoute.put("/", OrderController.updateOrderStatus);
