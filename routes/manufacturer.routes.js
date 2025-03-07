const express = require("express");
const { addManufacturer } = require("../controllers/manufacturer.controller");

const router = express.Router();

router.post("/", addManufacturer); // Add a new manufacturer

module.exports = router;
