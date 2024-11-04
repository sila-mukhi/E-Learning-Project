import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => { 


  return (
    <div className='sidebar'>
      
        <div className="sidebar-options">
          <NavLink to="/addCarousel" className="sidebar-option">
            <img src={assets.add_icon} alt=""/>
            <p>Add Carousel</p>
          </NavLink>
          <NavLink to="/listCarousel" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Carousel</p>
          </NavLink>
          <NavLink to="/addCourse" className="sidebar-option">
            <img src={assets.add_icon} alt=""/>
            <p>Add Courses</p>
          </NavLink>
          <NavLink to="/listCourse" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Courses</p>
          </NavLink>
          <NavLink to="/addInstructor" className="sidebar-option">
            <img src={assets.add_icon} alt=""/>
            <p>Add Instructors</p>
          </NavLink>
          <NavLink to="/listInstructor" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Instructors</p>
          </NavLink>
          <NavLink to="/addCategory" className="sidebar-option">
            <img src={assets.add_icon} alt=""/>
            <p>Add Categories</p>
          </NavLink>
          <NavLink to="/listCategory" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Categories</p>
          </NavLink>
          <NavLink to="/addContact" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>Add Contact</p>
          </NavLink>
          <NavLink to="/listContact" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Contact</p>
          </NavLink>
          <NavLink to="/addTestimonial" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>Add Testimonial</p>
          </NavLink>
          <NavLink to="/listTestimonial" className="sidebar-option">
            <img src={assets.order_icon} alt=""/>
            <p>List Testimonial</p>
          </NavLink>
        </div>
   
    </div>
  );
}

export default Sidebar;