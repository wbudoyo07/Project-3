const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema ({
    firstName :{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;