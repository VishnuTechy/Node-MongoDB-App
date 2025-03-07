const express = require("express");
const router = express.Router();
const { addProduct, changeStatus, getFaultyProducts } = require("../controllers/product.controller");

router.post("/", addProduct);
router.put("/:id/status", changeStatus);
router.get("/faulty", getFaultyProducts);

module.exports = router;
