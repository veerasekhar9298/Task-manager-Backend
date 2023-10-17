 const Task = require("../modals/Tasks-modal")

 const TasksCltr = {}


 TasksCltr.list = async (req,res)=>{
    try{

        const tasks = await Task.find({})
            res.json(tasks)

    }catch(e){
        res.json(e)
    }
 }


TasksCltr.create = async (req,res)=>{
    try{

        const body = req.body
        const task = new Task(body)
        const taskDoc = await task.save()
        res.json(taskDoc)
    }catch(e){
        res.json(e)
    }
}

TasksCltr.single = async (req,res)=>{
    try{
        const id  = req.params.id

        const task = await Task.findById({_id: id})
        res.json(task)

    }catch(e){
        res.json(e)
    }
}

TasksCltr.update = async (req,res)=>{
    try{    
        const id = req.params.id 
        const body = req.body 
        const task = await Task.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true})
        res.json(task)
    }catch(e){  
        res.json(e)
    }
} 


TasksCltr.delete = async (req,res) =>{
    try{
        const id = req.params.id 
        const task = await Task.findByIdAndDelete({_id:id})
        res.json(task)
    }catch(e){  
        res.json(e)
    }
}

module.exports = TasksCltr