const dotenv = require('dotenv').config();
// const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./services/passport');
const passport = require('passport');
const authRoute = require('./routes/auth');

const app = express()

// Use browser sessions
/* app.use(
    cookieSession({
        name: process.env.APP_SESSION,    //process.env.APP_SESSION
        keys: process.env.APP_SESSION_KEYS,   //process.env.APP_SESSION_KEYS
        maxAge: 24 * 60 * 60 * 100      // Session valid for 1 day in msecs
    })
); */
// Using express-session instead of cookieSession which didnt work for us initially
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRETS[0],
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 24 * 60 * 60 * 100 ,
        sameSite: false,
    }
 }));

 

// Initialize PassportJS library
app.use(passport.initialize());
app.use(passport.session());

// Allow sending Sessions through our client/server requests
app.use(
    cors({
        origin: "http://localhost:3000",    //Our requests will come from this client
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

// Call Our Auth Route to use its methods
app.use('/auth', authRoute);

// Start Server
app.listen('5000', () => {
    console.log('Server is running at port 5000');
});