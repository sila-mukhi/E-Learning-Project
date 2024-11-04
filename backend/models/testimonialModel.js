import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    name:{type:String,required:true},
    profession:{type:String,required:true}, 
    message: {type:String,required:true}
})
const testimonialModel = mongoose.models.testimonials|| mongoose.model("testimonials",testimonialSchema)

export default testimonialModel