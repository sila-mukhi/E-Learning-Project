import instructorModel from "../models/instructorModel.js";
import fs from "fs/promises"

const addInstructor = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const instructors = new instructorModel({
        image:image_filename,
        name:req.body.name,
        designation:req.body.designation,
      
    })
    try{
        await instructors.save();
        res.json({success:true,message:"Instructor Added"})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}



//add all instructors list
const listInstructor= async (req,res)=>{
    try{
        const instructors = await instructorModel.find({});
        res.json({success:true,data:instructors})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}


//remove instructors

const removeInstructor  = async(req,res)=>{
    try{
        const instructors = await instructorModel.findById(req.body.id);
        fs.unlink(`instructorImages/${instructors.image}`,()=>{})

        await instructorModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Instructor Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}


const updateInstructor = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Optional: only update image if provided

    const updateData = {
        name: req.body.name,
        designation: req.body.designation,
       
    };

    if (image_filename) {
        updateData.image = image_filename; // Update image only if new image is provided
    }

    try {
        const instructor = await instructorModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!instructor) {
            return res.json({ success: false, message: "Instructor not found" });
        }
        res.json({ success: true, message: "Instructor updated", data: instructor });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const fetchInstructor=  async (req, res) => {
    try {
        const instructor = await instructorModel.findById(req.params.id);
        if (!instructor) {
            return res.status(404).json({ success: false, message: "Instructor not found" });
        }
        res.json({ success: true, data: instructor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching instructor data" });
    }
}


export {addInstructor, listInstructor,removeInstructor,updateInstructor,fetchInstructor}