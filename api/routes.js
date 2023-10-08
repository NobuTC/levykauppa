const express = require("express");
const router = express.Router();

// Import route handlers for various endpoints
const productRoutes = require("./product");
const cartRoutes = require("./cart");
const checkoutRoutes = require("./checkout");
const searchRoutes = require("./search");

// Define routes for each endpoint
router.use("/api/product", productRoutes);
router.use("/api/cart", cartRoutes);
router.use("/api/checkout", checkoutRoutes);
router.use("/api/search", searchRoutes);

module.exports = router;
