import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const AddCategory = ({url}) => {
    // const url = "http://localhost:4300";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: "",
        courseCount: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        console.log(data);
    }, [data])





    const onSubmitHandler = async (event) => {
        event.preventDefault();    //Uesd for don't reload this page
        const formData = new FormData();

        formData.append("image", image)
        formData.append("title", data.title)
        formData.append("courseCount", data.courseCount)


        // for api cALL
        const response = await axios.post(`${url}/api/categories/addCategory`, formData)
        if (response.data.success) {
            setData({
                title: "",
                courseCount: ""
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }

    }

    return (
        <div className='add'>
            <form className="flex-col" onSubmit={onSubmitHandler} >
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                        {/* used for image ra photo athi show kariba */}
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p> Title</p>
                    <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder='Type here' />
                </div>
                <div className="add-product-name flex-col">
                    <p>CourseCount</p>
                    <input onChange={onChangeHandler} value={data.courseCount} type="text" name="courseCount" placeholder='Type here' />
                </div>
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default AddCategory