import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    verificationToken: { type: String, required: false },
    tokenExpiry: { type: Date, required: false }, // Ensure this is defined
    isVerified: { type: Boolean, default: false } // Field to track verification status
}, { timestamps: true }); 

const contactModel = mongoose.models.contacts || mongoose.model('Contacts', contactSchema);

export default contactModel;
