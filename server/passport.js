const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "http://localhost:8080/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
			// Log user details to the console
			console.log("User Details:", profile);

			// You can also log specific information, e.g., user email
			console.log("User Email:", profile.emails[0].value);
	  
			// Continue with your existing callback logic
			callback(null, profile);
		}
	)
);

passport.use(
	new FacebookStrategy(
	  {
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost:8080/auth/facebook/callback",
		scope: ["id", "displayName", "photos", "email"],
	  },
	  function (req, accessToken, refreshToken, profile, done) {
		process.nextTick(function () {
		  // Log user details to the console
		  console.log("User Details:", profile);
  
		  // You can also log specific information, e.g., user email
		  console.log("User Email:", profile.emails ? profile.emails[0].value : '');
  
		  // Continue with your existing callback logic
		  return done(null, profile);
		});
	  }
	)
  );

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const passport = require("passport");

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.CLIENT_ID,
// 			clientSecret: process.env.CLIENT_SECRET,
// 			callbackURL: "http://localhost:8080/auth/google/callback",
// 			scope: ["profile", "email"],
// 		},
// 		function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
// 			// Log user details to the console
// 			console.log("User Details:", profile);

// 			// You can also log specific information, e.g., user email
// 			console.log("User Email:", profile.emails[0].value);
	  
// 			// Continue with your existing callback logic
// 			callback(null, profile);
// 		}
// 	)
// );

// passport.serializeUser((user, done) => {
// 	done(null, user);
// });

// passport.deserializeUser((user, done) => {
// 	done(null, user);
// });


