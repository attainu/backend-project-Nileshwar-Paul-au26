const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = require('../models/User');

// Setting up the new Google Strategy !
// Where we will have our Goolge_Client_ID , And Google_Client_Secret
module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback' /* Our callback URL */

    },
        async (accessToken, refreshToken, profile, done) => {
            // done = callback()
            // Here we are constructing the new user !
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value
            }

            // Checking if the user exist in our database or not !
            try {
                let user = await User.findOne({ googleId: profile.id })
                if (user) {
                    done(null, user)
                }
                else {
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err) {
                console.error(err)

            }
        }))


    // Each subsequent request  will not contain credentials , but rather than unique cookie that identifies the session. In order  to support login sessions, Passport will serialize and deserialize 'user' instances to and from the session.
    passport.serializeUser((user, done) => {
        // The user.id will be saved to the session (req.session.passport.user = {id : '..'}) !
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        // user object attaches to the request as req.user !
        User.findById(id, (err, user) => done(err, user))
    })
}

