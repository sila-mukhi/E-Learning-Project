import React, { useEffect, useState } from 'react'
import './ListInstructor.css'
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListInstructor = ({url}) => {

  // const url = "http://localhost:4300";

  const [instructor, setInstructor] = useState([]);

  const fetchInstructors = async () => {
    const response = await axios.get(`${url}/api/instructors/listInstructor`);
    //  console.log(response.data);
    if (response.data.success) {
      setInstructor(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeInstructor = async (instructorId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/instructors/removeInstructor`, { id: instructorId });
    await fetchInstructors();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchInstructors();
  }, [])

  return (
    // <div className="just-center">
    <div className='list add6 flex-col'>
      <div className='add-course6'>
        <span >All Instructor List</span>
        <Link to="/addInstructor"><button className='a'>Add Instructor</button></Link>

      </div>
      <div className="list-table">
        <div className="list-table-format6 title">
          <b>Image</b>
          <b>Name</b>
          <b>Designation</b>
          <b>Action</b>
          <b>Edit</b>
        </div>
        {instructor.map((item, index) => {
          return (
            <div key={index} className='list-table-format6'>
              <img src={`${url}/instructorImages/` + item.image} alt="" />
              {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
              <p>{item.name}</p>
              <p>{item.designation}</p>
              <p onClick={() => removeInstructor(item._id)} className='cursor'>x</p>
              <Link to={`/editInstructor/${item._id}`} fetchInstructors={fetchInstructors} className='cursor'>Edit</Link>


            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ListInstructor