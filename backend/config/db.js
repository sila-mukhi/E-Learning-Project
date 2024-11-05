import mongoose from "mongoose";
export const connectDB = async () =>{
    // await mongoose.connect('mongodb://localhost:27017/course').then(()=>console.log("db connected"));
    await mongoose.connect('mongodb+srv://silamukhi:sila123@cluster0.dcu8v.mongodb.net/course').then(()=>console.log("db connected"));
}