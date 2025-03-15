// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';


// const EditCourse = () => {
//   const { id } = useParams(); // Get course ID from URL parameters
//   const [course, setCourse] = useState({
//     price: '',
//     rating: '',
//     reviews: '',
//     title: '',
//     instructor: '',
//     students: '',
//     description:'',
//     language:[],
//   });
//   const [image, setImage] = useState(null); // For the new image
//   const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
//   const navigate = useNavigate();
//   const url = "https://e-learning-project-backend.onrender.com";

//   // Fetch course data by ID
//   useEffect(() => {
//     const fetchCourseById = async () => {
//       try {
//         const response = await axios.get(`${url}/api/courses/fetchCourse/${id}`);
//         if (response.data.success) {
//           setCourse(response.data.data);
//           setCurrentImage(`${url}/images/${response.data.data.image}`); // Set the current image URL
//         } else {
//           toast.error('Error fetching course data');
//         }
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//         toast.error('Error fetching course data');
//       }
//     };

//     fetchCourseById();
//   }, [id]);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCourse({ ...course, [name]: value });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     // Create a URL for the new image to display it in the preview
//     if (file) {
//       const newImageUrl = URL.createObjectURL(file);
//       setCurrentImage(newImageUrl); // Replace the current image with the new image preview
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('image', image); // add the new image file
//     formData.append('price', course.price);
//     formData.append('rating', course.rating);
//     formData.append('reviews', course.reviews);
//     formData.append('title', course.title);
//     formData.append('instructor', course.instructor);
//     formData.append('students', course.students);
//     formData.append('description',course.description);
//     formData.append('language',JSON.stringify(course.language));

//     try {
//       const response = await axios.put(`${url}/api/courses/updateCourse/${id}`, formData);
//       if (response.data.success) {
//         toast.success('Course updated successfully');
//         navigate('/listCourse'); // Redirect to the list after successful update
//       } else {
//         toast.error('Error updating course');
//       }
//     } catch (error) {
//       console.error("Error updating course:", error);
//       toast.error('Error updating course');
//     }
//   };

//   return (
//     <div className="edit1">
//       <h2>Edit Course</h2>
//       <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
//         {/* Display current or new image */}
//         {currentImage && (
//           <div className="image-preview">
//             {/* <p>Current/New Image Preview:</p> */}
//             <img src={currentImage} alt="Course" style={{ width: '200px', height: 'auto' }} />
//           </div>
//         )}

//         <div className="edit1-product-name flex-col">
//           <p>Change Image</p>
//           <input type="file" name="image" onChange={handleImageChange} />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Price</p>
//           <input type="text" name="price" value={course.price} onChange={handleInputChange} required />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Rating</p>
//           <input type="text" name="rating" value={course.rating} onChange={handleInputChange} required />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Reviews</p>
//           <input type="text" name="reviews" value={course.reviews} onChange={handleInputChange} required />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Title</p>
//           <input type="text" name="title" value={course.title} onChange={handleInputChange} required />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Instructor</p>
//           <input type="text" name="instructor" value={course.instructor} onChange={handleInputChange} required />
//         </div>

//         <div className="edit1-product-name flex-col">
//           <p>Students</p>
//           <input type="text" name="students" value={course.students} onChange={handleInputChange} required />
//         </div>

//            <div className='edit1-product-name flex-col'>
//           <p>Description</p>
//           <input onChange={handleInputChange} value={course.description} type='text' name='description'  required />
//         </div>
        
//         <div className='edit1-product-name flex-col'>
//           <p>Language</p>
//           <select
            
//             name='language'
//             value={course.language}
//             onChange={handleInputChange}
        
//           >
//             <option value='html'>HTML</option>
//             <option value='css'>CSS</option>
//             <option value='javascript'>Javascript</option>
//             <option value='seo'>SEO</option>
//             <option value='photoshop'>Photoshop</option>
//             <option value='react'>React.js</option>
//             <option value='node'>Node</option>
//             <option value='mongo'>Mongo</option>
//           </select>
//         </div>
        
//         <button type="submit" className='update-btn1'>Update Course</button>
//       </form>
//     </div>
//   );
// };

// export default EditCourse;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from "react-select"; 

const availableLanguages = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Javascript", label: "Javascript" },
  { value: "SEO", label: "SEO" },
  { value: "Photoshop", label: "Photoshop" },
  { value: "React.js", label: "React.js" },
  { value: "Node", label: "Node" },
  { value: "Mongo", label: "Mongo" },
];

const EditCourse = () => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [course, setCourse] = useState({
    price: '',
    rating: '',
    reviews: '',
    title: '',
    instructor: '',
    students: '',
    description: '',
    language: [],
  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course data by ID
  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await axios.get(`${url}/api/courses/fetchCourse/${id}`);
        if (response.data.success) {
          setCourse(response.data.data);
          setCurrentImage(`${url}/images/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching course data');
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        toast.error('Error fetching course data');
      }
    };

    fetchCourseById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // Handle language selection
  const handleLanguageChange = (selectedOptions) => {
    setCourse({ ...course, language: selectedOptions.map(option => option.value) });
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
    formData.append('image', image); // add the new image file
    formData.append('price', course.price);
    formData.append('rating', course.rating);
    formData.append('reviews', course.reviews);
    formData.append('title', course.title);
    formData.append('instructor', course.instructor);
    formData.append('students', course.students);
    formData.append('description', course.description);
    formData.append('language', JSON.stringify(course.language));

    try {
      const response = await axios.put(`${url}/api/courses/updateCourse/${id}`, formData);
      if (response.data.success) {
        toast.success('Course updated successfully');
        navigate('/listCourse'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating course');
      }
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error('Error updating course');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Course</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            <img src={currentImage} alt="Course" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit1-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Price</p>
          <input type="text" name="price" value={course.price} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Rating</p>
          <input type="text" name="rating" value={course.rating} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Reviews</p>
          <input type="text" name="reviews" value={course.reviews} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Title</p>
          <input type="text" name="title" value={course.title} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Instructor</p>
          <input type="text" name="instructor" value={course.instructor} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Students</p>
          <input type="text" name="students" value={course.students} onChange={handleInputChange} required />
        </div>

        <div className='edit1-product-name flex-col'>
          <p>Description</p>
          <input onChange={handleInputChange} value={course.description} type='text' name='description' required />
        </div>

        <div className='edit1-product-name flex-col'>
          <p>Language</p>
          <Select
            isMulti
            options={availableLanguages}
            value={availableLanguages.filter(lang => course.language.includes(lang.value))}
            onChange={handleLanguageChange}
          />
        </div>

        <button type="submit" className='update-btn1'>Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
