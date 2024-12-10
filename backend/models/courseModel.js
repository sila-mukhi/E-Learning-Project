import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    students: { type: String, required: true },
    description: { type: String, required: true },   // Added description field
    language: { type: [String], required: true }      // Changed to array of strings
});

const courseModel = mongoose.models.courses || mongoose.model("courses", courseSchema);

export default courseModel;
