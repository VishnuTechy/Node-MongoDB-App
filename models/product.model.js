const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    manufacturer: { type: mongoose.Schema.Types.ObjectId, ref: "Manufacturer" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
    status: { type: String, enum: ["instock", "outofstock", "faulty"], default: "instock" },
    lastUpdatedBy: { type: String, enum: ["manufacturer", "seller"] }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
