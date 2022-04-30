const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const {StorySchema} =require('../models/Story');

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layouts: 'login'
    })
})

router.get('/dashboard', ensureAuth, (req, res) => {
    res.render("dashboard", {
        layouts: 'main',name:req.user.firstName
    })
})

module.exports = { router }