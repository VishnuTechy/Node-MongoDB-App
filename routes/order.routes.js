const express = require("express");
const router = express.Router();
const { getAllOrders, getMostOrderedProducts, getOrdersRevenueByMonth,addOrder } = require("../controllers/order.controller");

router.get("/", getAllOrders);
router.get("/most-ordered", getMostOrderedProducts);
router.get("/revenue", getOrdersRevenueByMonth);
router.post("/", addOrder); // Add a new order
module.exports = router;
