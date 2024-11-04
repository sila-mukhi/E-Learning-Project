import testimonialModel from "../models/testimonialModel.js";
import fs from "fs/promises"

const addTestimonial = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const testimonials = new testimonialModel({
        image:image_filename,
        name:req.body.name,
        profession:req.body.profession,
        message:req.body.message
      
    })
    try{
        await testimonials.save();
        res.json({success:true,message:"Testimonial Added"})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}



//add all instructors list
const listTestimonial= async (req,res)=>{
    try{
        const testimonials = await testimonialModel.find({});
        res.json({success:true,data:testimonials})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}


//remove instructors

const removeTestimonial  = async(req,res)=>{
    try{
        const testimonials = await testimonialModel.findById(req.body.id);
        fs.unlink(`testimonialImages/${testimonials.image}`,()=>{})

        await testimonialModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Testimonial Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

const updateTestimonial = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Optional: only update image if provided

    const updateData = {
        name: req.body.name,
        profession: req.body.profession,
        message: req.body.message,
       
    };

    if (image_filename) {
        updateData.image = image_filename; // Update image only if new image is provided
    }

    try {
        const testimonial = await testimonialModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!testimonial) {
            return res.json({ success: false, message: "Testimonial not found" });
        }
        res.json({ success: true, message: "Testimonial updated", data: testimonial});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const fetchTestimonial=  async (req, res) => {
    try {
        const testimonial= await testimonialModel.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.json({ success: true, data: testimonial });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching Testimonial data" });
    }
}





export {addTestimonial, listTestimonial,removeTestimonial,updateTestimonial,fetchTestimonial}