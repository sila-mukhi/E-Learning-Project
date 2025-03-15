import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';


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
    <>

      <div className="container-fluid bg-primary py-5 mb-5 page-header" style={{
        background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(${assets.carousel_1})`,
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover"
      }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Course Details</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link to="/" className="text-white" >Home</Link></li>

                  <li className="breadcrumb-item text-white active" aria-current="page">Couse-details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{ backgroundColor: "#f5f5f5" }}>
        {course ? (
          <div className="row">
            {/* Left side: Course Image */}
            <div className="col-md-5">
              <div className="card border-0 shadow-sm">
                <img
                  src={`${url}/images/${course.image}`}
                  alt={course.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right side: Course Information */}
            <div className="col-md-7">
              <div className="card p-4 shadow-sm" style={{ borderRadius: "10px" }}>
                <h2 className="card-title mb-3" style={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>
                  {course.title}
                </h2>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p style={{ fontWeight: "500", fontSize: "18px", color: "#ff7f00" }}>${course.price}</p>
                  </div>
                  <div>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                      <strong>{course.rating}</strong> / 5
                    </p>
                  </div>
                </div>

                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Students Enrolled:</strong> {course.students}</p>

                <p><strong>Description:</strong> {course.description}</p>

                {/* <div className="mb-3">
                  <strong>Languages:</strong>
                  {/* <ul className="list-unstyled">
                    {Array.isArray(course.language) ? (
                      course.language.map((lang, index) => (
                        <li key={index}>• {lang}</li>
                      ))
                    ) : (
                      <li>No languages available</li>
                    )} */}
                  {/* </ul> */}
                  {/* <ul>
  {(() => {
    console.log("Language Data:", course.language);
    let languages = [];

    if (Array.isArray(course.language) && course.language.length > 0) {
      try {
        languages = JSON.parse(course.language[0]); // First element ko parse karna hoga
      } catch (error) {
        console.error("JSON Parse Error:", error);
        languages = course.language; // Agar error aaye to original string dikhaye
      }
    }

    return Array.isArray(languages) 
      ? languages.map((lang, i) => <li key={i}>{lang}</li>) 
      : <li>{languages}</li>;
  })()}
</ul> */}
                {/* </div> */} 

               <Link to="/contact"> <button className="btn btn-primary btn-lg w-100" style={{ borderRadius: "25px", padding: "12px 20px" }}>
                  Join Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center" style={{ fontSize: "18px", color: "#888" }}>
            Loading course details...
          </div>
        )}
      </div>
    </>
  );
};

export default CourseDetail;
