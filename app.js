const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
dotenv.config()
const {connectDB} = require('./config/db.js');
const {router}=require('./routes/index.js');

//initiationg the express
const app = express();

//connection to database
connectDB()

//loging*
//app.use(morgan('dev'))

//seting the template engine *
app.engine('.hbs',exphbs.engine({defaultLayout:'main',extname:'.hbs'})); 
app.set('view engine','.hbs');


app.use('*',express.static(path.join(__dirname,'public')))

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//starting the server
app.listen(process.env.PORT,console.log(`Server Started at Port No ${process.env.PORT}`))

//routing
app.use('/',router)