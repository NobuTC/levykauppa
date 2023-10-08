const express = require("express");
const router = express.Router();

// Define a route handler for the /api/checkout endpoint
router.get("/", (req, res) => {
  // Handle the /api/product GET request here
  res.json({ message: "This is the checkout endpoint" });
});

module.exports = router;
