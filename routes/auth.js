const express = require('express');
const passport = require('passport');
const authrouter = express.Router();

// @description:-   Auth with Google 
// @route:-         GET/auth/google
authrouter.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @description:-   Google Auth callback
// @route:-         GET/auth/google/callback
authrouter.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

// @description:- Logout User
// route:-        /auth/logout
authrouter.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


module.exports = { authrouter }