const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors')
const passport = require('passport');
const dotenv = require('dotenv').config()
const app = express()

// Use browser sessions
app.use(
    cookieSession({
        name: process.env.APP_SESSION,
        keys: process.env.APP_SESSION_KEYS,
        maxAge: 24 * 60 * 60 * 100      // Session valid for 1 day in msecs
    }));

    // Initialize PassportJS library
    app.use(passport.initialize());
    app.use(passport.session());

    // Allow sending Sessions through our client/server requests
    app.use(
        cors({
            origin: "http://localhost:3000",
            methods: "GET, POST, PUT, DELETE",
            credentials: true,
        })
    );

// Start Server
app.listen('5000', () => {
    console.log('Server is running at port 5000');
})