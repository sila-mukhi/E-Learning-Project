import React, { useEffect, useState } from 'react'
import './ListCategory.css'
import axios from "axios"
import {toast} from "react-toastify"
import { Link } from 'react-router-dom'

const ListCategory = () => {

  const url = "https://e-learning-project-backend.onrender.com";

  const [category,setCategory] =useState([]);

  const fetchCategories = async ()=>{
    const response = await axios.get(`${url}/api/categories/listCategory`);
  //  console.log(response.data);
    if(response.data.success){
      setCategory(response.data.data);
     }
    else{
      toast.error("Error");      
    }
  }


  const removeCategory = async (categoryId)=>{
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/categories/removeCategory`,{id:categoryId});
    await fetchCategories();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }  
    useEffect(()=>{
        fetchCategories();
    },[])

  return (
    // <div className="just-center3">
    <div className='list add3 flex-col'>
      <div className='add-course'>
      <span >All Foods List</span>
      <Link to="/addCategory"><button className='a'>List Category</button></Link>

      </div>
   
      <div className="list-table">
         <div className="list-table-format3 title">
            <b>Image</b>
            <b>Title</b>
            <b>CourseCount</b>
            <b>Action</b>
            <b>Edit</b>
         </div>
         {category.map((item,index)=>{                       
            return(
              <div key={index} className='list-table-format3'>
                 <img src={`${url}/categoryImages/` +item.image} alt="" />  
                 {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
                 <p>{item.title}</p>
                 <p>{item.courseCount}</p>
                 <p onClick={()=>removeCategory(item._id)} className='cursor'>x</p>
                 <Link to={`/editCategory/${item._id}`}  fetchCategories={fetchCategories} className='cursor'>Edit</Link>

              </div>
            )
         })}
      </div>
    </div>
    // </div>
  )
}

export default ListCategory
