const router = require('express').Router();
const passport = require('passport');

// GET REQUESTS
router.get('/login/success', (req, res) => {
    // If User authenticated
    if (req.user) {
        res.status(200).json({  //200 Auth success
            success: true,
            message: "User authenticated successfully",
            user: req.user,
            // cookies: req.cookies,
        });
    }
});

router.get('/login/failed', (req, res) => {
    res.status(401)     //Auth failure
    res.json({
        success: false,
        message: "failed to authenticate user",
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);   //http://localhost:3000/
});

router.get('/google', (request, response, next) => {
    passport.authenticate('google', {scope: ['profile', 'email']})(request, response, next);
});

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

// GITHUB
router.get('/github', (request, response, next) => {
    passport.authenticate('github', {scope: ['profile', 'email']})(request, response, next);
});

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

// FACEBOOK
router.get('/facebook', (request, response, next) => {
    passport.authenticate('facebook', {scope: ['profile', 'email']})(request, response, next);
});

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));

module.exports = router