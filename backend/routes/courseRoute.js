import express from "express";
import multer from "multer";
import { addCourse, fetchCourse, listCourse, removeCourse, updateCourse } from "../controllers/courseController.js";

const courseRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Routes
courseRouter.post("/addCourse", upload.single("image"), addCourse);
courseRouter.get("/listCourse", listCourse);
courseRouter.post("/removeCourse", removeCourse);
courseRouter.put("/updateCourse/:id", upload.single("image"), updateCourse); // Added 'upload.single' for updating image
courseRouter.get("/fetchCourse/:id",fetchCourse)
// courseRouter.put("/updateCourse/:id", upload.single("image"), updateCourse);
export default courseRouter;
