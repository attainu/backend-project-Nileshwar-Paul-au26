const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
dotenv.config()
const {connectDB} = require('./config/db.js');

//initiationg the express
const app = express();

//connection to database
connectDB()

//loging
app.use(morgan('dev'))

//seting the template enging
app.engine('.hbs',exphbs({defaultLayout:'main',extname:'.hbs'}));
app.set('view engine','.hbs');

app.listen(process.env.PORT,console.log(`Server Started at Port No ${process.env.PORT}`))