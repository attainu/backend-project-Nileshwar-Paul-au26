const mongoose = require('mongoose');

MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected : ${connect.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = { connectDB }