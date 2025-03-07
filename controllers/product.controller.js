const Product = require("../models/product.model");

// Add a product
exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Change product status
exports.changeStatus = async (req, res) => {
    try {
        const { status, lastUpdatedBy } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, { status, lastUpdatedBy }, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get faulty products with last updated details
exports.getFaultyProducts = async (req, res) => {
    try {
        const products = await Product.find({ status: "faulty" });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
