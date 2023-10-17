const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true
    }
},{timestamps:true})

const Task = mongoose.model("Task",TaskSchema)

module.exports = Task