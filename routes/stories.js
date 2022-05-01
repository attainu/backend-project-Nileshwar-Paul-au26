const express = require('express');
const blogrouter = express.Router();
const { ensureAuth } = require('../middleware/auth');

// Never use distructuring method to import any model !
const Story = require('../models/Story');


// @desc      Show add Page
// @route     GET /stories/add
blogrouter.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})


// @desc      Process add form
// @route     POST /stories
blogrouter.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')

    } catch (error) {

        console.log(error);
        res.render('error/500')

    }
})


// @desc      Show all blogs
// @route     GET /stories
blogrouter.get('/', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({ status: 'public' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean()

        res.render('stories/index', {
            stories,
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})


module.exports = { blogrouter }