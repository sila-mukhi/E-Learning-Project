import React from 'react';
import { assets } from '../../assets/assets'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 ">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <Link to="/">  <a className="btn btn-link" >Home</a></Link>
            <Link to="/about"><a className="btn btn-link" >About Us</a></Link>
            <Link to="/courses"><a className="btn btn-link" >Courses</a></Link>
            <Link to="/contact"><a className="btn btn-link" >Contact Us</a></Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2"><FaMapMarkerAlt className="me-3" />123 Street, New York, USA</p>
            <p className="mb-2"><FaPhoneAlt className="me-3" />+012 345 67890</p>
            <p className="mb-2"><FaEnvelope className="me-3" />info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaFacebookF /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaYoutube /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_1} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_2} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_3} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_2} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_3} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={assets.course_1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">eLearning</a>, All Right Reserved.
              <br />
              Designed By <Link to="/"><a className="border-bottom" >SILA</a></Link><br /><br />
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/"><a >Home</a></Link>
                <Link to="/contact"> <a >Cookies</a></Link>
                <Link to="/contact"><a >Help</a> </Link>
                <Link to="/contact"> <a >FQAs</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
