const Admin = require("../models/admin");

module.exports = function(passport, LocalStrategy) {
    // Create a new instance of the LocalStrategy
    passport.use(new LocalStrategy(Admin.authenticate()));

    // Serialize user for session
    passport.serializeUser(Admin.serializeUser());

    // Deserialize user after session
    passport.deserializeUser(Admin.deserializeUser());
};
