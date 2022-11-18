const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },(accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });      // We're not going to use a db to authenticate user
    done(null, profile);    // when everything is done, we return no error + user profile

    // For MongoDb
    /* const user = {
        username: profile.displayName,
        avatar: profile.photos[0],
    } */
  }
));

// We Serialize and De-serialize our User in order to pass our session
passport.serializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});

passport.deserializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});