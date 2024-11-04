import dotenv from 'dotenv';
dotenv.config(); 
import express from "express";
import { addContact, listContact, removeContact, verifyEmail } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Route for adding a contact
contactRouter.post("/addContact", addContact);

// Route for listing all contacts
contactRouter.get("/listContact", listContact);

// Route for removing a contact
contactRouter.post("/removeContact", removeContact);

// Route for email verification
contactRouter.get("/verify-email", verifyEmail); // Here, token will be passed as a query parameter

export default contactRouter;
