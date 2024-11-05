import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import { FaUserTie, FaClock, FaUser, FaStar } from 'react-icons/fa'; // FontAwesome icons
import axios from 'axios';

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const url = "https://e-learning-project-backend.onrender.com"; // Base URL for API

  // Initialize WOW.js for animations
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  // Fetch course data from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${url}/api/courses/listCourse`);
        console.log('API Response:', res.data);
        if (Array.isArray(res.data.data)) {
          setCourses(res.data.data); // Access the 'data' key which contains the courses
        } else {
          console.error("Expected an array from API response.");
        }
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
  
    fetchCourses();
  }, []);
   

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={course._id}>
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    {/* <img className="img-fluid" src={course.imgSrc} alt={course.title} /> */}
                    {/* <img className="img-fluid" src={`${url}/uploads/${course.image}`} alt={course.title} /> */}
                    <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />


                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>
                        Read More
                      </a>
                      <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>
                        Join Now
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">${course.price}</h3>
                    <div className="mb-3">
                      {Array.from({ length: course.rating }, (_, i) => (
                        <FaStar key={i} className="text-primary" />
                      ))}
                      <small>({course.reviews})</small>
                    </div>
                    <h5 className="mb-4">{course.title}</h5>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <FaUserTie className="text-primary me-2" />
                      {course.instructor}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <FaClock className="text-primary me-2" />
                      {course.duration}
                    </small>
                    <small className="flex-fill text-center py-2">
                      <FaUser className="text-primary me-2" />
                      {course.students}
                    </small>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
