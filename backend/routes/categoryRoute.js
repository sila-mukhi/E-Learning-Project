import express from "express";
import multer from "multer";
// import { addInstructor, listInstructor, removeInstructor } from "../controllers/instructorController.js";
import { addCategory, fetchCategory, listCategory, removeCategory, updateCategory } from "../controllers/categoryController.js";


const categoryRouter=express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"categoryImages",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const categoryImage = multer({storage:storage})

categoryRouter.post("/addCategory",categoryImage.single("image"),addCategory)   // here imageb is field name
categoryRouter.get("/listCategory",listCategory)
categoryRouter.post("/removeCategory",removeCategory)
categoryRouter.put("/updateCategory/:id", categoryImage.single("image"), updateCategory);
categoryRouter.get("/fetchCategory/:id",fetchCategory)


export default categoryRouter;
