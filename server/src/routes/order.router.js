const express = require("express");
const routerOrder = express.Router();
const OrderController = require("../controllers/order.controller");
const delay1s = require("../utils/delay");
const { authUserMiddleWare } = require("../middleware/authMiddleware");

routerOrder.post("/create", delay1s, OrderController.create);
routerOrder.get("/get-order-by-user/:id", delay1s, OrderController.getOrderByUser);

module.exports = routerOrder;
