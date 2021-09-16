const submitButton = document.querySelector(".submitButton")
const taskDiv = document.querySelector(".taskDiv")
const updateSubmitButton = document.querySelector(".updateSubmitButton")
const deleteButton = document.querySelector(".deleteButton")



const createTask = async () => {
    const URL = "http://localhost:3009/addToDo"
    const task = document.querySelector(".input").value

    const userTasks = {
        task
    }

    const createTask = await fetch(URL, {
        method: "Post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTasks),
    })
}







const UpdateTask = async () => {
const taskNumber = document.querySelector(".inputUpdateNumber").value
const URL = `http://localhost:3009/updateTasks/${taskNumber}`
const updatedTask = document.querySelector(".inputUpdateTask").value

const data = {
    task: updatedTask
}
const createTask = await fetch(URL, {
    method: "Post",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
}


const deleteTask = async () => {
    const taskNum = document.querySelector(".deleteNumber").value
    const URL = `http://localhost:3009/deleteTasks/${taskNum}`

    const destroyTask = await fetch(URL, {
        method: "Post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    }) 
}




submitButton.addEventListener("click", () => {createTask()})
updateSubmitButton.addEventListener("click", () => {UpdateTask()})
deleteButton.addEventListener("click", () => {deleteTask()})
