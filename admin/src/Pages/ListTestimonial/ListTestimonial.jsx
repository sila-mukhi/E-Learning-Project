import React, { useEffect, useState } from 'react'
import './ListTestimonial.css'
// import "../style.css"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListTestimonial = ({url}) => {

  // const url = "http://localhost:4300";

  const [testimonial, setTestimonial] = useState([]);

  const fetchTestimonials = async () => {
    const response = await axios.get(`${url}/api/testimonials/listTestimonial`);
    //  console.log(response.data);
    if (response.data.success) {
      setTestimonial(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeTestimonial = async (testimonialId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/testimonials/removeTestimonial`, { id: testimonialId });
    await fetchTestimonials();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchTestimonials();
  }, [])

  return (
    // <div className="just-center">
    <div className='list add4 flex-col'>
      <div className='list-course'>
        <span >All Testmonial List</span>
        <Link to="/addTestimonial"><button className='a'>Add Testmonial</button></Link>

      </div>
      <div className="list-table">
        <div className="list-table-format4 title">
          <b>Image</b>
          <b>Name</b>
          <b>Profession</b>
          <b>Message</b>
          <b>Action</b>
          <b>Edit</b>
        </div>
        {testimonial.map((item, index) => {
          return (
            <div key={index} className='list-table-format4'>
              <img src={`${url}/testimonialImages/` + item.image} alt="" />
              {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
              <p>{item.name}</p>
              <p>{item.profession}</p>
              <p>{item.message}</p>
              <p onClick={() => removeTestimonial(item._id)} className='cursor'>x</p>
              <Link to={`/editTestimonial/${item._id}`} fetchTestimonials={fetchTestimonials} className='cursor'>Edit</Link>


            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ListTestimonial