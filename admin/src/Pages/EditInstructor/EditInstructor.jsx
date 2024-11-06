import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./EditInstructor.css"

const EditInstructor = () => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [instructor, setInstructor] = useState({
    name: '',
    designation: '',

  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course data by ID
  useEffect(() => {
    const fetchInstructorById = async () => {
      try {
        const response = await axios.get(`${url}/api/instructors/fetchInstructor/${id}`);
        if (response.data.success) {
          setInstructor(response.data.data);
          setCurrentImage(`${url}/instructorImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching course data');
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        toast.error('Error fetching course data');
      }
    };

    fetchInstructorById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructor({ ...instructor, [name]: value });
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
    formData.append('name', instructor.name);
    formData.append('designation', instructor.designation);


    try {
      const response = await axios.put(`${url}/api/instructors/updateInstructor/${id}`, formData);
      if (response.data.success) {
        toast.success('Instructor updated successfully');
        navigate('/listInstructor'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating Instructor');
      }
    } catch (error) {
      console.error("Error updating Instructor:", error);
      toast.error('Error updating Instructor');
    }
  };

  return (
    <div className="edit6">
      <h2>Edit Instructor</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="Instructor" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit6-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit6-product-name flex-col">
          <p>Name</p>
          <input type="text" name="name" value={instructor.name} onChange={handleInputChange} required />
        </div>

        <div className="edit6-product-name flex-col">
          <p>Designation</p>
          <input type="text" name="designation" value={instructor.designation} onChange={handleInputChange} required />
        </div>
        <button type="submit" className='update-btn6'>Update Instructor</button>
      </form>
    </div>
  );
};

export default EditInstructor;
