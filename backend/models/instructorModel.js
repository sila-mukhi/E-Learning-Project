import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    name:{type:String,required:true},
    designation:{type:String,required:true},  
})
const instructorModel = mongoose.models.instructors || mongoose.model("instructors",instructorSchema)

export default instructorModel