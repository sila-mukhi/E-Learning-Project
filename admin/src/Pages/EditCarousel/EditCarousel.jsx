import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./EditCarousel.css"

const EditCarousel = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [carousel, setCarousel] = useState({
    description: '',
    content: '',
  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "http://localhost:4300";

  // Fetch course data by ID
  useEffect(() => {
    const fetchCarouselById = async () => {
      try {
        const response = await axios.get(`${url}/api/carousels/fetchCarousel/${id}`);
        if (response.data.success) {
          setCarousel(response.data.data);
          setCurrentImage(`${url}/carouselImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching carousel data');
        }
      } catch (error) {
        console.error("Error fetching carousel data:", error);
        toast.error('Error fetching carousel data');
      }
    };

    fetchCarouselById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarousel({ ...carousel, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a URL for the new image to display it in the preview
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setCurrentImage(newImageUrl); // Replace the current image with the new image preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image); // Add the new image file
    formData.append('description', carousel.description);
    formData.append('content', carousel.content);


    try {
      const response = await axios.put(`${url}/api/carousels/updateCarousel/${id}`, formData);
      if (response.data.success) {
        toast.success('carousel updated successfully');
        navigate('/listCarousel'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating carousel');
      }
    } catch (error) {
      console.error("Error updating carousel:", error);
      toast.error('Error updating carousel');
    }
  };

  return (
    <div className="edit2">
      <h2>Edit Carousel</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="Category" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit2-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit2-product-name flex-col">
          <p>Description</p>
          <input type="text" name="description" value={carousel.description} onChange={handleInputChange} required />
        </div>

        <div className="edit2-product-name flex-col">
          <p>Content</p>
          <input type="text" name="content" value={carousel.content} onChange={handleInputChange} required />
        </div>
        <button type="submit" className='update-btn2'>Update Carousel</button>
      </form>
    </div>
  );
};

export default EditCarousel;
