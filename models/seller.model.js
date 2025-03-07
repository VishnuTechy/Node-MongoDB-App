const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name: String,
    contact: String
});

module.exports = mongoose.model("Seller", sellerSchema);
