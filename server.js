const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const sellerRoutes = require("./routes/seller.routes");
const manufacturerRoutes = require("./routes/manufacturer.routes");
const customerRoutes = require("./routes/customer.routes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/sellers", sellerRoutes);
app.use("/manufacturers", manufacturerRoutes);
app.use("/customers", customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
