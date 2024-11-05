import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check if there's a success message in the location state
        if (location.state && location.state.successMessage) {
            toast.success(location.state.successMessage);
            // navigate("/")
            // Reset form data when coming from success verification
            if (location.state.fromSuccessVerification) {
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://e-learning-project-backend.onrender.com/api/contacts/addContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setIsSent(true);
                toast.success("Your message has been sent successfully! Please check your email for verification.");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                toast.error(result.message || 'Error sending message');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while sending the message. Please try again later.');
        }
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h5>Get In Touch</h5>
                        <p className="mb-4">
                            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                        </p>
                        <div className="d-flex align-items-center mb-3">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px' }}>                 <i className="fa fa-map-marker-alt text-white"></i>               </div>               <div className="ms-3">                 <h5 className="text-primary">Office</h5>                 <p className="mb-0">123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px' }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h5 className="text-primary">Mobile</h5>
                                <p className="mb-0">+012 345 67890</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px' }}>
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h5 className="text-primary">Email</h5>
                                <p className="mb-0">info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <iframe
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                            frameBorder="0"
                            style={{ minHeight: '300px', border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                            title="location"
                        ></iframe>
                    </div>
                    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            id="email"
                                            placeholder="Your Email"
                                            required
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            id="subject"
                                            placeholder="Subject"
                                            required
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a message here"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            id="message"
                                            style={{ height: '150px' }}
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                        {isSent && (
                            <div className="mt-3">
                                <div className="alert alert-success">A verification email has been sent to your email address. Please check your inbox.</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;


