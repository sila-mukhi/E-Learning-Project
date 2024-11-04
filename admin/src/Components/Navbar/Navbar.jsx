import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/LogIn');
  }
  return (
    <>
      <div>

        {auth ?
          <nav className="navbar">

            <Link to="/" className="navbar-brand">
              <FaBook className="icon" />
              <span className="brand-name">eLEARNING</span>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                {/* Dropdown for Courses */}
                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</Link>
                  <div className="dropdown-menu">
                    <Link to="/addCourse" className="dropdown-item">AddCourse</Link>
                    <Link to="/listCourse" className="dropdown-item">ListCourse</Link>
                  </div>
                </div>

                {/* Dropdown for Instructors */}
                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Carousels</Link>
                  <div className="dropdown-menu">
                    <Link to="/addCarousel" className="dropdown-item">Add Carousel</Link>
                    <Link to="/listCarousel" className="dropdown-item">List Carousel</Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</Link>
                  <div className="dropdown-menu">
                    <Link to="/addCategory" className="dropdown-item">Add Category</Link>
                    <Link to="/listCategory" className="dropdown-item">List Category</Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Testimonial</Link>
                  <div className="dropdown-menu">
                    <Link to="/addTestimonial" className="dropdown-item">Add Testimonial</Link>
                    <Link to="/listTestimonial" className="dropdown-item">List Testimonial</Link>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contacts</Link>
                  <div className="dropdown-menu">
                    <Link to="/addContact" className="dropdown-item">Add Contact</Link>
                    <Link to="/listContact" className="dropdown-item">List Contact</Link>
                  </div>
                </div>


                <div className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructors</Link>
                  <div className="dropdown-menu">
                    <Link to="/addInstructor" className="dropdown-item">Add Instructor</Link>
                    <Link to="/listInstructor" className="dropdown-item">List Instructor</Link>
                  </div>
                </div>

                <Link onClick={logout} to="/LogIn" className='logout'>Logout</Link>
                <Link to="/profile">  <img className='profile' src={assets.profile_image} alt="" /></Link>
              </div>
            </div>

          </nav>
          :
          <div className='register'>

            <Link to="/LogIn">Login</Link>
            {/* <Link to="/profile1">Profile</Link> */}
          </div>

        }

      </div>
    </>
  );
}

export default Navbar;
