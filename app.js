
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()

const app = express();

app.listen(process.env.PORT,console.log(`Server Started at Port No ${process.env.PORT}`))