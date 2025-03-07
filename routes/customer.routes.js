const express = require("express");
const { addCustomer } = require("../controllers/customer.controller");

const router = express.Router();

router.post("/", addCustomer); // Add a new customer

module.exports = router;
