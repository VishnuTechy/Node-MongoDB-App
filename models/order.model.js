const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
    manufacturer: { type: mongoose.Schema.Types.ObjectId, ref: "Manufacturer" },
    quantity: Number,
    totalPrice: Number,
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
