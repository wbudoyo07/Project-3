const router = require("express").Router();
const adminRoutes = require("./admin");

// Admin routes
router.use("/admin", adminRoutes);

module.exports = router;
