const router = require('express').Router();
const passport = require('passport');

// GET REQUESTS
router.get('/login/success', (req, res) => {
    // If User authenticated
    if (req.user) {
        res.status(200)     //Auth Success
        res.json({
            success: true,
            message: "User authenticated successfully",
            user: req.user,
            cookies: req.cookies,
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
    res.redirect(process.env.CLIENT_URL);
});

router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}));