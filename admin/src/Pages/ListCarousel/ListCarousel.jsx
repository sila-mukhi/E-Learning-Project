import React, { useEffect, useState } from 'react';
import './ListCarousel.css';
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ListCarousel = () => {
  const url = "http://localhost:4300";
  const [carousel, setCarousel] = useState([]);

  const fetchCarousels = async () => {
    try {
      const response = await axios.get(`${url}/api/carousels/listCarousel`);
      if (response.data.success) {
        setCarousel(response.data.data);
      } else {
        toast.error("Error fetching carousel data");
      }
    } catch (error) {
      console.error("Error fetching carousel data", error);
      toast.error("An error occurred while fetching carousel data");
    }
  };

  const removeCarousel = async (carouselId) => {
    try {
      const response = await axios.post(`${url}/api/carousels/removeCarousel`, { id: carouselId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchCarousels(); // Successfully deleted, so fetch the updated list
      } else {
        toast.error("Error deleting the carousel");
      }
    } catch (error) {
      console.error("Error deleting the carousel", error);
      toast.error("An error occurred while deleting the carousel");
    }
  };

  useEffect(() => {
    fetchCarousels();
  }, []);

  return (
    <div className='list add flex-col'>
      <div className='add-course'>
        <span>All Carousel List</span>
        <Link to="/addCarousel"><button className='a'>Add Carousel</button></Link>
      </div>
      <div className="list-table">
        <div className="list-table-format2 title">
          <b>Image</b>
          <b>Description</b>
          <b>Content</b>
          <b>Action</b>
          <b>Edit</b>
        </div>
        {carousel.map((item, index) => (
          <div key={index} className='list-table-format2'>
            <img src={`${url}/carouselImages/${item.image}`} alt="" />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <p onClick={() => removeCarousel(item._id)} className='cursor'>x</p>
            <Link to={`/editCarousel/${item._id}`} className='cursor'>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCarousel;