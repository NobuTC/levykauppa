const express = require("express");
const router = express.Router();

// Define a route handler for the /api/product endpoint
router.get("/:id", (req, res) => {
  const id = req.params.id;
  // Handle the /api/product GET request here
  res.json({
    message: {
      id: 1,
      name: "Example Product",
      description: "This is an example product description.",
      price: 19.99,
    },
  });
});

module.exports = router;
