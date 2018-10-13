const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const adminSchema = new Schema ({
    firstname :{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    }
});

adminSchema.pre('save', function(next) {
    let user = this;

    // only has the password if it has been modified (or is new)
    if(!user.isModified('password')) return next();

    //generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);

        // has the password using new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            user.password= hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = function( candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        cb(null, isMatch);
    });
}

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;