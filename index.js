const mongoose = require("mongoose"); 


mongoose.connect("mongodb://127.0.0.1:27017/Sample", {useUnifiedTopology:true, useUnifiedTopology:true}).then(()=>{
    console.log("Connected to Mongo DB Successfully");
}).catch(()=>{
    console.log(err);
})


const student = new mongoose.Schema({
    name:String,
    workout : Boolean,
    height: Number
})

const Student1 = new mongoose.model("Student", student);

const addStudent = async () => {
    console.log(await Student1.find({height:{$in:[5, 6]}}));
}

addStudent();