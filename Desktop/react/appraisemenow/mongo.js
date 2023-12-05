const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/appraisemenow")
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const TaskSchema = new mongoose.Schema({

task_assigned:{
    type: String,
    required: true
},
task_completed:{
    type: String,
    required: true
},
task_pending: {
    type: String,
    required: true
}
})

const collection = mongoose.model("collection", newSchema)

const tasks = mongoose.model("Tasks", TaskSchema)



module.exports={collection, tasks}