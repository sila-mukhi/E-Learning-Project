import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons
import { instructors } from '../../assets/assets';
import { useState } from 'react'; 
import axios from "axios"
import { useEffect } from 'react';



const TeamSection = () => {
  const [instructors,setInstructors] =useState([]);
  const url = "http://localhost:4300"; 


  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get(`${url}/api/instructors/listInstructor`);
        console.log('API Response:', res.data);
        if (Array.isArray(res.data.data)) {
          setInstructors(res.data.data); // Access the 'data' key which contains the courses
        } else {
          console.error("Expected an array from API response.");
        }
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
  
    fetchInstructors();
  }, [url]);
  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          {instructors.map((instructor, index) => (
            <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                <img className="img-fluid" src={`${url}/instructorImages/${instructor.image}`} alt={instructor.title} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="#">
                      <FaFacebookF />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="#">
                      <FaTwitter />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
