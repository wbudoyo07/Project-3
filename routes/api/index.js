const router = require("express").Router();
const adminRoutes = require("./admin");
const itemRoutes = require("./items");
const twilioRoutes = require("./twilio");


// Admin routes
router.use("/admin", adminRoutes);

// items routes
router.use("/items", itemRoutes);

// Twilio routes
router.use("/twilio", twilioRoutes);

module.exports = router;
