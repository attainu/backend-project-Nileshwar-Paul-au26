const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo');
dotenv.config()

//Connection to database
const { connectDB } = require('./config/db.js');
connectDB()

const { router } = require('./routes/index.js');
const { authrouter } = require('./routes/auth.js')
const { blogrouter } = require('./routes/stories.js')

//initiationg the express
const app = express();


// Passport config 
require('./config/passport')(passport)


//loging*
//app.use(morgan('dev'))


// Handlebars Helpers
const { formatDate, stripTags, truncate } = require('./helpers/hbs');

//Seting the template engine * (Handlebars)
app.engine('.hbs', exphbs.engine({
    helpers: {
        formatDate,
        stripTags,
        truncate
    },
    defaultLayout: 'main', extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Express-Sessions middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: MongoStore({mongooseConnection:mongoose.connection})
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Static middleware
app.use(express.static('public'))


// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//Routes
app.use('/', router)
app.use('/auth', authrouter)
app.use('/stories', blogrouter)



//Starting the server
app.listen(process.env.PORT, console.log(`Server Started at Port No ${process.env.PORT}`))





// MONGO_URI = mongodb+srv://paul:paul123@cluster0.gltre.mongodb.net/blogapp?retryWrites=true&w=majority
