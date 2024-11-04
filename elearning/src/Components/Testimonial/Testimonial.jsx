import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './Testimonial.css';
import axios from 'axios';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:4300";

  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${url}/api/testimonials/listTestimonial`);
        if (Array.isArray(res.data.data)) {
          setTestimonials(res.data.data);
        } else {
          console.error("Expected an array from API response.");
        }
      } catch (error) {
        console.log("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [url]);

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        {loading ? (
          <p>Loading testimonials...</p>
        ) : (
          <OwlCarousel className="owl-carousel testimonial-carousel position-relative" {...options}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item text-center bg-white p-4 rounded shadow-sm" key={index}>
                <div className="vg">
                  <img className="testimonial-image" src={`${url}/testimonialImages/${testimonial.image}`} alt={testimonial.title} />
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <p className="text-muted mb-3">{testimonial.profession}</p>
                </div>
                <div className="testimonial-text bg-light text-center p-3 rounded">
                  <p className="mb-0">{testimonial.message}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
