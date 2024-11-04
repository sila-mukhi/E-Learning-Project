import express from "express";
import multer from "multer";
import {addTestimonial, fetchTestimonial, listTestimonial,removeTestimonial, updateTestimonial} from "../controllers/testimonialController.js";


const testimonialRouter=express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"testimonialImages",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const testimonialImage = multer({storage:storage})

testimonialRouter.post("/addTestimonial",testimonialImage.single("image"),addTestimonial)   // here imageb is field name
testimonialRouter.get("/listTestimonial",listTestimonial)
testimonialRouter.post("/removeTestimonial",removeTestimonial)
testimonialRouter.put("/updateTestimonial/:id", testimonialImage.single("image"), updateTestimonial);
testimonialRouter.get("/fetchTestimonial/:id",fetchTestimonial)

export default testimonialRouter;
