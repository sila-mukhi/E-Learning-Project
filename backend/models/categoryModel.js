import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({    
    image:{type:String,required:true},
    title:{type:String,required:true},
    courseCount:{type:String,required:true},  
})
const categoryModel = mongoose.models.categories || mongoose.model("categories",categorySchema)

export default categoryModel