const mongoose = require('mongoose')
const dotenv = require('dotenv');
const colors = require("colors")
mongoose.set('strictQuery', false);
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB