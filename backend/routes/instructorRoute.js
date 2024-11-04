import express from "express";
import multer from "multer";
import { addInstructor, fetchInstructor, listInstructor, removeInstructor, updateInstructor } from "../controllers/instructorController.js";


const instructorRouter=express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"instructorImages",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const instructorImage = multer({storage:storage})

instructorRouter.post("/addInstructor",instructorImage.single("image"),addInstructor)   // here imageb is field name
instructorRouter.get("/listInstructor",listInstructor)
// courseRouter.get("/listCourse",listCourse)
instructorRouter.post("/removeInstructor",removeInstructor)
instructorRouter.put("/updateInstructor/:id", instructorImage.single("image"), updateInstructor); // Added 'upload.single' for updating image
// instructorRouter.put("/updateInstructor/:id", instructorImage.single("image"), updateInstructor);
instructorRouter.get("/fetchInstructor/:id",fetchInstructor)

export default instructorRouter;
