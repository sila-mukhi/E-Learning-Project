// import React, { useEffect, useState } from 'react'
// import { assets } from '../../assets/assets'
// import axios from "axios"
// import { toast } from 'react-toastify'
// const AddCourse = ({url}) => {
//     // const url = "http://localhost:4300";
//     const [image,setImage] =useState(false);
//     const [data,setData] =useState({
//         price:"",
//         rating:"",
//         reviews:"",
//         title:"",
//         instructor:"",
//         students:"",
//         description:"",
//         language:""
//     })

//     const onChangeHandler =(event)=>{
//         const name = event.target.name;
//         const value=event.target.value;
//         setData(data=>({...data,[name]:value}))
//     }

//     useEffect(()=>{
//         console.log(data);
//     },[data])



   

//     const onSubmitHandler = async (event)=>{
//         event.preventDefault();    //Uesd for don't reload this page
//         const formData=new FormData();

//         formData.append("image",image) 
//         formData.append("price",data.price)
//         formData.append("rating",data.rating)
//         formData.append("reviews",data.reviews)
//         formData.append("title",data.title)
//         formData.append("instructor",data.instructor)
//         formData.append("students",data.students)

//  // for api cALL
//         const response =await axios.post(`${url}/api/courses/addCourse`,formData)
//         if(response.data.success){
//             setData({
//                 price:"",
//                 rating:"",
//                 reviews:"",                                     //used for reset thepage mane data add hela pare puni field blank heijiba
//                 title:"",
//                 instructor:"",
//                 students:"",
//                 description:"",
//                 language:""
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         }
//         else{
//             toast.error(response.data.message)
//         }

//     }
   
//   return (
//     <div className='add'>
//         <form  className="flex-col" onSubmit={onSubmitHandler} >
//             <div className="add-img-upload flex-col">
//                 <p>Upload Image</p>
//                 <label htmlFor="image">
//                     <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>    
//                     {/* used for image show the image */}
//                 </label>
//                 <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Price</p>
//                 <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Rating</p>
//                 <input onChange={onChangeHandler} value={data.rating} type="number" name="rating" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Reviews</p>
//                 <input onChange={onChangeHandler} value={data.reviews} type="number" name="reviews" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Title</p>
//                 <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Instructor</p>
//                 <input onChange={onChangeHandler} value={data.instructor} type="text" name="instructor" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Students</p>
//                 <input onChange={onChangeHandler} value={data.students} type="text" name="students" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Description</p>
//                 <input onChange={onChangeHandler} value={data.description} type="text" name="description" placeholder='Type here'/>
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Course Language</p>
//                 <input onChange={onChangeHandler} value={data.language} type="text" name="language" placeholder='Type here'/>
//             </div>
//             <button type="submit" className='add-btn'>ADD</button>
//         </form>
//     </div>
//   )
// }

// export default AddCourse


import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCourse = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    price: '',
    rating: '',
    reviews: '',
    title: '',
    instructor: '',
    students: '',
    description: '',
    language: [],
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'language') {
      // Capture multiple selected options
      const selectedLanguages = Array.from(event.target.selectedOptions, (option) => option.value);
      setData((prevData) => ({ ...prevData, [name]: selectedLanguages }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    console.log(data); // Logs data to check language selections
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('image', image);
    formData.append('price', data.price);
    formData.append('rating', data.rating);
    formData.append('reviews', data.reviews);
    formData.append('title', data.title);
    formData.append('instructor', data.instructor);
    formData.append('students', data.students);
    formData.append('description', data.description);
    formData.append('language', JSON.stringify(data.language)); // Send as JSON string

    try {
      const response = await axios.post(`${url}/api/courses/addCourse`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          price: '',
          rating: '',
          reviews: '',
          title: '',
          instructor: '',
          students: '',
          description: '',
          language: [],
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the course');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
        
        {/* Add Course Details Fields */}
        <div className='add-product-name flex-col'>
          <p>Course Price</p>
          <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Rating</p>
          <input onChange={onChangeHandler} value={data.rating} type='number' name='rating' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Reviews</p>
          <input onChange={onChangeHandler} value={data.reviews} type='number' name='reviews' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Title</p>
          <input onChange={onChangeHandler} value={data.title} type='text' name='title' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Instructor</p>
          <input onChange={onChangeHandler} value={data.instructor} type='text' name='instructor' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Students</p>
          <input onChange={onChangeHandler} value={data.students} type='text' name='students' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Description</p>
          <input onChange={onChangeHandler} value={data.description} type='text' name='description' placeholder='Type here' />
        </div>
        
        <div className='add-product-name flex-col'>
          <p>Course Language</p>
          <select
            
            name='language'
            value={data.language}
            onChange={onChangeHandler}
        
          >
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='javascript'>Javascript</option>
            <option value='seo'>SEO</option>
            <option value='photoshop'>Photoshop</option>
            <option value='react'>React.js</option>
            <option value='node'>Node</option>
            <option value='mongo'>Mongo</option>
          </select>
        </div>
        
        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
