import React, { useEffect, useState } from 'react'; 
import './ListCourse.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ListCourse = ({ url }) => {
  const [course, setCourse] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${url}/api/courses/listCourse`);
      if (response.data.success) {
        setCourse(response.data.data);
      } else {
        toast.error("Error fetching courses");
      }
    } catch (error) {
      console.error('Error fetching courses', error);
      toast.error("An error occurred while fetching courses");
    }
  };

  const removeCourse = async (courseId) => {
    try {
      const response = await axios.post(`${url}/api/courses/removeCourse`, { id: courseId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchCourses(); // Delete ke baad courses ko dobara fetch karenge
      } else {
        toast.error('Error deleting the course');
      }
    } catch (error) {
      console.error('Error deleting the course', error);
      toast.error('An error occurred while deleting the course');
    }
  };

  useEffect(() => {
    fetchCourses(); // Initial fetch of courses
  }, []);

  return (
    <div className='list add1 flex-col'>
      <div className='add-course'>
        <span>All Courses List</span>
        <Link to="/addCourse"><button className='a'>Add Course</button></Link>
      </div>

      <div className="list-table">
        <div className="list-table-format1 title">
          <b>Image</b>
          <b>Price</b>
          <b>Rating</b>
          <b>Reviews</b>
          <b>Title</b>
          <b>Instructor</b>
          <b>Students</b>
          <b>Description</b>
          <b>Language</b>
          <b>Action</b>
          <b>Edit</b>
        </div>
        {course && course.length > 0 ? course.map((item, index) => (
          <div key={index} className='list-table-format1'>
            <img src={`${url}/images/${item.image}`} alt={item.title} />
            <p>{item.price}</p>
            <p>{item.rating}</p>
            <p>{item.reviews}</p>
            <p>{item.title}</p>
            <p>{item.instructor}</p>
            <p>{item.students}</p>
            <p>{item.description}</p>
            <ul>
  {(() => {
    console.log("Language Data:", item.language);
    let languages = [];

    if (Array.isArray(item.language) && item.language.length > 0) {
      try {
        languages = JSON.parse(item.language[0]); // First element ko parse karna hoga
      } catch (error) {
        console.error("JSON Parse Error:", error);
        languages = item.language; // Agar error aaye to original string dikhaye
      }
    }

    return Array.isArray(languages) 
      ? languages.map((lang, i) => <li key={i}>{lang}</li>) 
      : <li>{languages}</li>;
  })()}
</ul>



            <p onClick={() => removeCourse(item._id)} className='cursor'>x</p>
            <Link to={`/editCourse/${item._id}`} className='cursor'>Edit</Link>
          </div>
        )) : <p>No courses available</p>}
      </div>
    </div>
  );
};

export default ListCourse;
