import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

// Log the email user (but not the password for security)
console.log("EMAIL_USER:", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    logger: true,  // Log SMTP messages
    debug: true,   // Log SMTP debug information
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        console.log("Email sent successfully:", info);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

// Export the sendEmail function for use in other modules
export default sendEmail;
