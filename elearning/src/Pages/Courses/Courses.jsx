import React from 'react'
import CourseCategories from '../../Components/Categories/Categories';
import PopularCourses from '../../Components/Courses/Courses';
import TestimonialSection from '../../Components/Testimonial/Testimonial';

const Courses = () => {
  return (
    // <!-- Header Start -->
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Courses</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <CourseCategories/>
      <PopularCourses/>
      <TestimonialSection/>
    </>
  )
}

export default Courses