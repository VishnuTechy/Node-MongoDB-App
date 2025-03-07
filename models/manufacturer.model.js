const mongoose = require("mongoose");

const manufacturerSchema = new mongoose.Schema({
    name: String,
    contact: String
});

module.exports = mongoose.model("Manufacturer", manufacturerSchema);
