
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()
const {connectDB} = require('./config/db.js');

//initiationg the express
const app = express();

//connection to database
connectDB()


app.listen(process.env.PORT,console.log(`Server Started at Port No ${process.env.PORT}`))