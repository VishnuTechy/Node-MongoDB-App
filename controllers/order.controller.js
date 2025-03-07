const Order = require("../models/order.model");

// Get all orders with details
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("product seller manufacturer customer");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get most ordered products
exports.getMostOrderedProducts = async (req, res) => {
    try {
        const result = await Order.aggregate([
            { $group: { _id: "$product", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get total orders & revenue grouped by month
exports.getOrdersRevenueByMonth = async (req, res) => {
    try {
        const result = await Order.aggregate([
            {
                $group: {
                    _id: { $month: "$orderDate" },
                    totalOrders: { $sum: 1 },
                    totalRevenue: { $sum: "$totalPrice" }
                }
            }
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addOrder = async (req, res) => {
    try {
        const { customer, product, seller, manufacturer, quantity, totalPrice, orderDate } = req.body;

        if (!customer || !product || !seller || !manufacturer || !quantity || !totalPrice) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newOrder = new Order({
            customer,
            product,
            seller,
            manufacturer,
            quantity,
            totalPrice,
            orderDate: orderDate ? new Date(orderDate) : new Date()
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};