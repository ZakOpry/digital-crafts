const Sequelize = require("sequelize")
const {toDoList} = require("./models")
const express = require("express")
const cors = require("cors")
const es6Renderer = require('express-es6-template-engine')
const app = express()
const path = require("path")

app.engine("html", es6Renderer)
app.set("views", "templates")
app.set("view engine", "html")
const PORT = 3009
app.use(cors())
app.use("/folder", express.static(path.join(__dirname,"folder")))
app.use(express.json())



app.post("/addToDo", async(req, res) => {
    const {task} = req.body
    const newTask = await toDoList.create({
        task:task
    })
    res.send({
        task: newTask.task
    })
})

app.get("/", async (req, res) => {
    const task = await toDoList.findAll()
    
    // res.send(task)


    res.render("home", {locals:
    {task}})
      
        
    
})

app.post("/updateTasks/:id", async(req, res) =>{
    const update = await toDoList.update(req.body, {
        where: {
            id:req.params.id
        }
    })
    res.send(update)
})


app.post("/deleteTasks/:id", async(req, res) => {
    const deleted = await toDoList.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send("Task Deleted")
})








app.listen(PORT, console.log(`Listening on port ${PORT}`))