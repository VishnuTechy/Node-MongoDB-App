const Customer = require("../models/customer.model");

// Add a new customer
exports.addCustomer = async (req, res) => {
    try {
        const { name, address } = req.body;

        if (!name || !address) {
            return res.status(400).json({ message: "Name and Address are required." });
        }

        const newCustomer = new Customer({ name, address });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
