const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layouts: 'login'
    })
})

router.get('/dashboard', ensureAuth, (req, res) => {
    res.render("dashboard", {
        layouts: 'main'
    })
})

module.exports = { router }