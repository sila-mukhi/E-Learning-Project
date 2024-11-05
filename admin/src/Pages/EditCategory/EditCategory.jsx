import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./EditCategory.css"

const EditCategory = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [category, setCategory] = useState({
    title: '',
    courseCount: '',

  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "http://localhost:4300";

  // Fetch course data by ID
  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        const response = await axios.get(`${url}/api/categories/fetchCategory/${id}`);
        if (response.data.success) {
          setCategory(response.data.data);
          setCurrentImage(`${url}/categoryImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching category data');
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
        toast.error('Error fetching category data');
      }
    };

    fetchCategoryById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
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
    formData.append('title', category.title);
    formData.append('courseCount', category.courseCount);


    try {
      const response = await axios.put(`${url}/api/categories/updateCategory/${id}`, formData);
      if (response.data.success) {
        toast.success('Category updated successfully');
        navigate('/listCategory'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating Category');
      }
    } catch (error) {
      console.error("Error updating Category:", error);
      toast.error('Error updating Category');
    }
  };

  return (
    <div className="edit3">
      <h2>Edit Category</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="Category" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit3-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit3-product-name flex-col">
          <p>Title</p>
          <input type="text" name="title" value={category.title} onChange={handleInputChange} required />
        </div>

        <div className="edit3-product-name flex-col">
          <p>Course Count</p>
          <input type="text" name="courseCount" value={category.courseCount} onChange={handleInputChange} required />
        </div>
        <button type="submit" className='update-btn3'>Update Category</button>
      </form>
    </div>
  );
};

export default EditCategory;
