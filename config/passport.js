const GoogleStrategy = require('passport-google-auth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

module.exports = function(passport){
	passport.use(
		new GoogleStrategy({
			clientID: keys.GoogleClienID,
			clientSecret:keys.GoogleClienSecret,
			callbackURL:'/auth/google/callback',
			proxy:true
		}, (accessToken, refreshToken,prifile, done) =>{
			console.log(accessToken);
			console.log(profile);
		
		})
		)
}