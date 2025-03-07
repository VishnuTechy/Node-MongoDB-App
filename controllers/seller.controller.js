const Seller = require("../models/seller.model");

// Add a new seller
exports.addSeller = async (req, res) => {
    try {
        const { name, contact } = req.body;

        if (!name || !contact) {
            return res.status(400).json({ message: "Name and Contact are required." });
        }

        const newSeller = new Seller({ name, contact });
        await newSeller.save();
        res.status(201).json(newSeller);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
