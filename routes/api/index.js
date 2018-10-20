const router = require("express").Router();
const adminRoutes = require("./admin");
const twilioRoutes = require("./twilio");
// Admin routes
router.use("/admin", adminRoutes);

// Twilio routes
router.use("/twilio", twilioRoutes);

module.exports = router;
