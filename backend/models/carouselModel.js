import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    description:{type:String,required:true},
    content:{type:String,required:true},  
})
const carouselModel = mongoose.models.carousels || mongoose.model("carousels",carouselSchema)

export default carouselModel 
// export default carrousel model