import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import axios from "axios";

const CourseCategories = () => {
  const [categories, setCategories] = useState([]);
  const url = "http://localhost:4300";

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${url}/api/categories/listCategory`);
        console.log('API Response:', res.data);
        if (Array.isArray(res.data.data)) {
          setCategories(res.data.data);
        } else {
          console.error("Expected an array from API response.");
        }
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };

    fetchCategories();
  }, [url]);

  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
          <h1 className="mb-5">Courses Categories</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              {/* First Category (Full Width) */}
              <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                {categories[0] && (
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={`${url}/categoryImages/${categories[0].image}`} alt={categories[0].title} />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">{categories[0].title}</h5>
                      <small className="text-primary">{categories[0].coursesCount} Courses</small>
                    </div>
                  </a>
                )}
              </div>

              {/* Second Category (Half Width) */}
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                {categories[1] && (
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={`${url}/categoryImages/${categories[1].image}`} alt={categories[1].title} />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">{categories[1].title}</h5>
                      <small className="text-primary">{categories[1].coursesCount} Courses</small>
                    </div>
                  </a>
                )}
              </div>

              {/* Third Category (Half Width) */}
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                {categories[2] && (
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={`${url}/categoryImages/${categories[2].image}`} alt={categories[2].title} />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                      <h5 className="m-0">{categories[2].title}</h5>
                      <small className="text-primary">{categories[2].coursesCount} Courses</small>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Fourth Category (Large Column on the Right) */}
          <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
            {categories[3] && (
              <a className="position-relative d-block h-100 overflow-hidden" href="#">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={`${url}/categoryImages/${categories[3].image}`}
                  alt={categories[3].title}
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                  <h5 className="m-0">{categories[3].title}</h5>
                  <small className="text-primary">{categories[3].coursesCount} Courses</small>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
