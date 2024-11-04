import mongoose from "mongoose";
export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/course').then(()=>console.log("db connected"));
}