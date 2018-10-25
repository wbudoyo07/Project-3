const router = require("express").Router();
const adminRoutes = require("./admin");
const itemRoutes = require("./items");
const twilioRoutes = require("./twilio");
const responseRoute = require("./response");

// Admin routes
router.use("/admin", adminRoutes);

// items routes
router.use("/items", itemRoutes);

// Twilio routes
router.use("/twilio", twilioRoutes);

// response routes
router.use("/response", responseRoute);

module.exports = router;
