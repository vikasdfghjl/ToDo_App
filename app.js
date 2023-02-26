const express = require("express");
const { urlencoded } = require("express");
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 4000
const ToDoModel = require("./models/todo");


connectDB()


const app = express();


app.set("view engine", "ejs")

app.use('/', require('./routes/todoRoutes'))

app.get('/', async (req, res) => {
    //res.send("Hello Vikas")
    const allToDo = await ToDoModel.find()

    res.render("index", { todo: allToDo })
    
})


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`);
})