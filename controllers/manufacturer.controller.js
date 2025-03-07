const Manufacturer = require("../models/manufacturer.model");

// Add a new manufacturer
exports.addManufacturer = async (req, res) => {
    try {
        const { name, contact } = req.body;

        if (!name || !contact) {
            return res.status(400).json({ message: "Name and Contact are required." });
        }

        const newManufacturer = new Manufacturer({ name, contact });
        await newManufacturer.save();
        res.status(201).json(newManufacturer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
