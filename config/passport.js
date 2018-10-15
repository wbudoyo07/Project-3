var passport = require("passport");
var LocalStrategy = require ("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(

	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		db.Admin.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				console.log("Incorrect username");
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				console.log("Incorrect password");
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
));

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null,  user )
})
  

// user object attaches to the request 
passport.deserializeUser((user, done) => {
	console.log('DeserializeUser called')
	console.log(user);
	done(null,user);
})


// Exporting our configured passport
module.exports = passport;