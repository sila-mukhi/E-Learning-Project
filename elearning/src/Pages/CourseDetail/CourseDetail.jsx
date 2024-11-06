import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams(); // Get course ID from URL
  const [course, setCourse] = useState(null);
  const url = "https://e-learning-project-backend.onrender.com";

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(`${url}/api/courses/fetchCourse/${id}`);
        setCourse(res.data.data); // Assuming response contains the course data under 'data'
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center p-5" style={{ minHeight: "100vh" }}>
      {course ? (
        <div className="card p-4 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "10px" }}>
          <img 
            className="card-img-top mb-4 rounded" 
            src={`${url}/images/${course.image}`} 
            alt={course.title} 
            style={{ borderRadius: "10px", objectFit: "cover", maxHeight: "300px" }} 
          />
          <div className="card-body">
            <h2 className="card-title mb-3">{course.title}</h2>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Rating:</strong> {course.rating} / 5</p>
            <p><strong>Reviews:</strong> {course.reviews}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Students Enrolled:</strong> {course.students}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Languages:</strong></p>
            <ul className="list-unstyled mb-4">
              {Array.isArray(course.language) ? (
                course.language.map((lang, index) => (
                  <li key={index}>• {lang}</li>
                ))
              ) : (
                <li>No languages available</li>
              )}
            </ul>
            <a href="#" className="btn btn-primary btn-block">Join Now</a>
          </div>
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
};

export default CourseDetail;
