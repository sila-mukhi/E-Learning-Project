import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // <!-- Navbar Start -->
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-item nav-link" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">
                        Courses
                    </NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to="/ourTeam" className="dropdown-item">Our Team</Link>
                            <Link to="/testimonial_page" className="dropdown-item">Testimonial</Link>
                            <Link to="/error" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">
                        Contact
                    </NavLink>
                </div>
                <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        // <!-- Navbar End -->
    );
};

export default Navbar;
