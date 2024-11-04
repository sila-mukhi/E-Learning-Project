import React from 'react'
import Carousel1 from '../../Components/Carousel1/Carousel1';
import Service from '../../Components/Service/Service';
import About from '../../Components/About/About';
import CourseCategories from '../../Components/Categories/Categories';
import PopularCourses from '../../Components/Courses/Courses';
import TeamSection from '../../Components/Team/Team';
import TestimonialSection from '../../Components/Testimonial/Testimonial';


const Home = () => {
  return (
    <div>
      <Carousel1 />
      <Service />
      <About />
      <CourseCategories />
      <PopularCourses />
      <TeamSection />
      <TestimonialSection />

    </div>
  )
}

export default Home