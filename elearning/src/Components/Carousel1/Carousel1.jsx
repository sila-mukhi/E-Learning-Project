import React, { useState, useEffect, useLayoutEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import WOW from 'wowjs';
import axios from 'axios';
import "./Carousel1.css";

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://e-learning-project-backend.onrender.com";

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    dots: true,
    nav: true,
    navText: [
      `<div class="owl-prev"><i class="bi bi-chevron-left"></i></div>`,
      `<div class="owl-next"><i class="bi bi-chevron-right"></i></div>`
    ],
  };

  const fetchCarousels = async () => {
    try {
      const res = await axios.get(`${url}/api/carousels/listCarousel`);
      if (res.data.success && Array.isArray(res.data.data)) {
        setCarousel(res.data.data);
      } else {
        console.error("Expected an array from API response.");
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarousels();
  }, []);

  useLayoutEffect(() => {
    if (carousel.length > 0) {
      const wow = new WOW.WOW({ live: false });
      wow.init();
      wow.sync();
    }
  }, [carousel]);

  return (
    <div className="container-fluid p-0 mb-5">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <OwlCarousel className="owl-carousel header-carousel position-relative" {...options}>
          {carousel.length > 0 ? (
            carousel.map((item, index) => (
              <div key={index} className="owl-carousel-item position-relative">
                <img className="img-fluid circle1" src={`${url}/carouselImages/${item.image}`} alt={item.description} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-8">
                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                        <h1 className="display-3 text-white animated slideInDown">{item.description}</h1>
                        <p className="fs-5 text-white mb-4 pb-2">{item.content}</p>
                        <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                        <a href="#" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}
        </OwlCarousel>
      )}
    </div>
  );
};

export default Carousel;
