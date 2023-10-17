 const mongoose = require('mongoose')


 const configureDB = async ()=>{
    try{

        const db = await mongoose.connect("mongodb+srv://veera_94:Ramya9494%40@cluster0.ght16nz.mongodb.net/Task-Manager")
        console.log("connected to the database")
    
    }catch(e){
        console.log( "eror in connecting to the database",e)
    }
 }

module.exports = configureDB