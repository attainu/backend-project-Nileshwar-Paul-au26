const { redirect } = require("express/lib/response")

module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        else {
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        }
        else {
            return next()
        }

    }
}


// MONGO_URI = mongodb+srv://paul:paul123@cluster0.gltre.mongodb.net/blogapp?retryWrites=true&w=majority