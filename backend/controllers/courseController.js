import courseModel from "../models/courseModel.js";
import fs from "fs/promises"

//add course item

const addCourse = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const courses = new courseModel({
        image: image_filename,
        price: req.body.price,
        rating: req.body.rating,
        reviews: req.body.reviews,
        title: req.body.title,
        instructor: req.body.instructor,
        students: req.body.students,
        description: req.body.description,   // Added description
        language: req.body.language          // Added language
    });

    try {
        await courses.save();
        res.json({ success: true, message: "Course Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

//add all course list

const listCourse= async (req,res)=>{
    try{
        const courses = await courseModel.find({});
        res.json({success:true,data:courses})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}


const updateCourse = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null;

    const updateData = {
        price: req.body.price,
        rating: req.body.rating,
        reviews: req.body.reviews,
        title: req.body.title,
        instructor: req.body.instructor,
        students: req.body.students,
        description: req.body.description,   
        language: req.body.language          
    };

    if (image_filename) {
        updateData.image = image_filename;  // Update image if new image is provided
    }

    try {
        const course = await courseModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!course) {
            return res.json({ success: false, message: "Course not found" });
        }
        res.json({ success: true, message: "Course updated", data: course });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


//remove course

const removeCourse  = async(req,res)=>{
    try{
        const courses = await courseModel.findById(req.body.id);
        fs.unlink(`uploads/${courses.image}`);
 

        await courseModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Course Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

const fetchCourse=  async (req, res) => {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.json({ success: true, data: course });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching course data" });
    }
} 
export {addCourse,listCourse,removeCourse,updateCourse,fetchCourse}