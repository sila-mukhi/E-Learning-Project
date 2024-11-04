import about from './about.jpg'
import carousel_1 from './carousel_1.jpg'
import carousel_2 from './carousel_2.jpg'
import cat_1 from './cat_1.jpg'
import cat_2 from './cat_2.jpg'
import cat_3 from './cat_3.jpg'
import cat_4 from './cat_4.jpg'
import course_1 from './course_1.jpg'
import course_2 from './course_2.jpg'
import course_3 from './course_3.jpg'
import team_1 from "./team_1.jpg"
import team_2 from "./team_2.jpg"
import team_3 from "./team_3.jpg"
import team_4 from "./team_4.jpg"
import testimonial_1 from './testimonial_1.jpg'
import testimonial_2 from './testimonial_1.jpg'
import testimonial_3 from './testimonial_1.jpg'
import testimonial_4 from './testimonial_1.jpg'


export const assets ={
    carousel_1,
    carousel_2,
    about,
    course_1,
    course_2,
    course_3,
   
}

 export const categories = [
    {
      imgSrc: cat_1,
      title: 'Web Design',
      coursesCount: '49 Courses',
      delay: '0.1s',
      colClass: 'col-lg-12 col-md-12',
    },
    {
      imgSrc: cat_2,
      title: 'Graphic Design',
      coursesCount: '49 Courses',
      delay: '0.3s',
      colClass: 'col-lg-6 col-md-12',
    },
    {
      imgSrc: cat_3,
      title: 'Video Editing',
      coursesCount: '49 Courses',
      delay: '0.5s',
      colClass: 'col-lg-6 col-md-12',
    },
    {
      imgSrc: cat_4,
      title: 'Online Marketing',
      coursesCount: '49 Courses',
      delay: '0.7s',
      colClass: 'col-lg-5 col-md-6',
      large: true,
    },
  ];




  export const courses = [
    {
      id: 1,
      imgSrc: course_1,
      price: '$149.00',
      rating: 5,
      reviews: 123,
      title: 'Web Design & Development Course for Beginners',
      instructor: 'John Doe',
      duration: '1.49 Hrs',
      students: '30 Students',
      delay: '0.1s',
    },
    {
      id: 2,
      imgSrc: course_2,
      price: '$149.00',
      rating: 5,
      reviews: 123,
      title: 'Advanced Web Design Techniques',
      instructor: 'Jane Smith',
      duration: '2.30 Hrs',
      students: '50 Students',
      delay: '0.3s',
    },
    {
      id: 3,
      imgSrc: course_3,
      price: '$149.00',
      rating: 5,
      reviews: 123,
      title: 'Mastering Graphic Design',
      instructor: 'David Johnson',
      duration: '3.00 Hrs',
      students: '40 Students',
      delay: '0.5s',
    },
  ];


  export const instructors = [
    {
      name: 'Instructor Name 1',
      designation: 'Designation 1',
      image: team_1,
    },
    {
      name: 'Instructor Name 2',
      designation: 'Designation 2',
      image: team_2,
    },
    {
      name: 'Instructor Name 3',
      designation: 'Designation 3',
      image: team_3,
    },
    {
      name: 'Instructor Name 4',
      designation: 'Designation 4',
      image:team_4,
    },
  ];


   export const testimonials = [
    {
      name: 'Client Name 1',
      profession: 'Profession 1',
      image: testimonial_1,
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      name: 'Client Name 2',
      profession: 'Profession 2',
      image:testimonial_2,
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      name: 'Client Name 3',
      profession: 'Profession 3',
      image: testimonial_3,
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      name: 'Client Name 4',
      profession: 'Profession 4',
      image: testimonial_4,
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
  ];