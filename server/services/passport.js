const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },(accessToken, refreshToken, profile, done) => {
     // We're not going to use a db to authenticate user
    done(null, profile);    // when everything is done, we return no error + user profile
  }
));

// GUTHUB
passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback",
},function (accessToken, refreshToken, profile, done) {
    done(null, profile);    // when everything is done, we return no error + user profile
  }
  )
);

// We Serialize and De-serialize our User in order to pass our session
passport.serializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});

passport.deserializeUser((user, done) => {
    done(null, user)    // error: null, id: user
});