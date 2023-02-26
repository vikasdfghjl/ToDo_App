const express = require("express");
const { urlencoded } = require("express");
const dotenv = require('dotenv').config()
const path = require("path")
const connectDB = require('./config/db')
const PORT = process.env.PORT || 4000

connectDB()


const app = express();


app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send("To-Do App | Vikas")
    //res.sendFile(path.join(__dirname + "/Home.html"))
})


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api', require('./routes/todoRoutes'))

app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`);
})