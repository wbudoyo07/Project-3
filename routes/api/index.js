const router = require("express").Router();
const adminRoutes = require("./admin");
const itemRoutes = require("./items")

// Admin routes
router.use("/admin", adminRoutes);
router.use("/items", itemRoutes)
module.exports = router;
