const  express = require("express")
const cors = require("cors") 
const app = express()
const PORT = 3850 
const configureDB = require("./config/db")
const TasksCltr = require("./controllers/Tasks-controller")

app.use(express.json())
app.use(cors())
configureDB()


app.get("/api/tasks",TasksCltr.list)

app.get("/api/tasks/:id",TasksCltr.single)

app.post("/api/tasks",TasksCltr.create)

app.put("/api/tasks/:id",TasksCltr.update)

app.delete("/api/tasks/:id",TasksCltr.delete) 


app.listen(PORT,()=>{
        console.log( "server is running on port 3850")
})

