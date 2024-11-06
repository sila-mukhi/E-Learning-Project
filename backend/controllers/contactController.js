import dotenv from 'dotenv';
dotenv.config();
import crypto from 'crypto';
import contactModel from "../models/contactModel.js";
import sendEmail from "../middleware/sendEmail.js";

const addContact = async (req, res) => {
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = new Date(Date.now() + 4 * 60 * 1000); // 4 minutes expiry

    const contact = new contactModel({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        verificationToken,
        tokenExpiry,
        isVerified: false // Initially set to false
    });

    try {
        // Generate verification link
        // const verificationLink = `${req.protocol}://${req.get('host')}/api/contacts/verify-email?token=${verificationToken}`;
        const verificationLink = `http://e-learning-project-frontend.onrender.com/verify-email?token=${verificationToken}`;

        // Send verification email
        await sendEmail(
            req.body.email,
            "Email Verification",
            `Please verify your email by clicking on this link: ${verificationLink}`
        );

        // Save contact temporarily for verification
        await contact.save();

        // Set a mechanism to delete unverified contacts after expiry
        setTimeout(async () => {
            const now = new Date();
            // Remove any unverified contact whose token has expired
            await contactModel.deleteMany({
                isVerified: false,
                tokenExpiry: { $lt: now }
            });
        }, 4 * 60 * 1000); // Check after 4 minutes

        res.status(201).json({ success: true, message: "Contact added, please verify your email." });
    } catch (error) {
        console.error("Error adding contact:", error);
        res.status(500).json({ success: false, message: "Failed to add contact" });
    }
};

const verifyEmail = async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ success: false, message: "Token is required." });
    }

    try {
        // Fetch contact using the verification token
        const contact = await contactModel.findOne({ verificationToken: token });

        if (!contact) {
            return res.status(400).json({ success: false, message: "Invalid or expired token." });
        }

        if (contact.tokenExpiry < new Date()) {
            return res.status(400).json({ success: false, message: "Token has expired." });
        }

        // Update verification status and clear token fields
        contact.isVerified = true;
        contact.verificationToken = undefined;
        contact.tokenExpiry = undefined;

        await contact.save();

        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        return res.redirect(`${frontendUrl}/success-verification?verified=true`);
    } catch (error) {
        console.error("Verification error:", error);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
};

const listContact = async (req, res) => {
    try {
        const contacts = await contactModel.find({ isVerified: true });
        if (contacts.length === 0) {
            return res.status(404).json({ success: false, message: "No verified contacts found." });
        }
        return res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        console.error("Error listing contacts:", error);
        return res.status(500).json({ success: false, message: "Failed to list contacts." });
    }
};


const removeContact = async (req, res) => {
    try {
        const deletedContact = await contactModel.findOneAndDelete({ _id: req.body.id, isVerified: true });
        
        if (!deletedContact) {
            return res.status(404).json({ success: false, message: "Verified contact not found." });
        }

        res.json({ success: true, message: "Verified contact removed." });
    } catch (error) {
        console.error("Error removing contact:", error);
        res.status(500).json({ success: false, message: "Error removing contact." });
    }
};

export { addContact, listContact, removeContact, verifyEmail };
