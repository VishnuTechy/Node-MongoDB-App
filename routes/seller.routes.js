const express = require("express");
const { addSeller } = require("../controllers/seller.controller");

const router = express.Router();

router.post("/", addSeller); // Add a new seller

module.exports = router;
