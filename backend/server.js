import dotenv from 'dotenv';
dotenv.config(); 

import express from "express";
// import dotenv from 'dotenv';
import cors from "cors";
import courseRouter from "./routes/courseRoute.js";
import { connectDB } from "./config/db.js";
import instructorRouter from "./routes/instructorRoute.js";
import carouselRouter from "./routes/carouselRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import contactRouter from "./routes/contactRoute.js";
import testimonialRouter from "./routes/testmonialRoute.js";
import userRouter from "./routes/userRoute.js";

// App config
// dotenv.config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);  // Log to verify
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);  // Log to verify

const app = express();
// const port = 4300;
// for deploy
const port =process.env.PORT || 4300;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/courses/", courseRouter);
app.use("/images", express.static('uploads'));
app.use("/api/instructors/", instructorRouter);
app.use("/instructorImages", express.static('instructorImages'));
app.use("/api/carousels/", carouselRouter);
app.use("/carouselImages", express.static('carouselImages'));
app.use("/api/categories/", categoryRouter);
app.use("/categoryImages", express.static('categoryImages'));
app.use("/api/contacts/", contactRouter);
app.use("/api/testimonials/", testimonialRouter);
app.use("/testimonialImages", express.static('testimonialImages'));
app.use("/api/users/", userRouter); // Ensure this is active

// Health Check Route
app.get("/", (req, res) => {
    res.send("API working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ success: false, message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
