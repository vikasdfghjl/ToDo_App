const express = require("express")
const router = express.Router()

const { postToDo, deleteToDo } = require('../controller/todoController')


router.post('/', postToDo)

//router.get('/to-do', getToDo)

router.get("/delete/to-do/:_id", deleteToDo)



module.exports = router;
