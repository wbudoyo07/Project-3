const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

//Define admin Schema
const adminSchema = new Schema ({
    firstname :{
        type: String,
        required: false
    },
    lastname: {
        type: String,
        require: false
    },
    username: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Define schema methods
adminSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

// Define hooks for pre-saving
adminSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;