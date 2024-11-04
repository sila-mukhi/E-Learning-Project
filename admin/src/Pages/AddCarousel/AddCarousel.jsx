import React, { useEffect, useState } from 'react'
import './AddCarousel.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const AddCarousel = () => {
    const url = "http://localhost:4300";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        description: "",
        content: ""
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
        
        formData.append("description", data.description)
        formData.append("content", data.content)


        // for api cALL
        const response = await axios.post(`${url}/api/carousels/addCarousel`, formData)
        if (response.data.success) {
            setData({
    
                description: "",
                content: ""
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
                        {/* used for show the image */}
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
            
                <div className="add-product-name flex-col">
                    <p> Description</p>
                    <input onChange={onChangeHandler} value={data.description} type="text" name="description" placeholder='Type here' />
                </div>
                <div className="add-product-name flex-col">
                    <p>Content</p>
                    <input onChange={onChangeHandler} value={data.content} type="text" name="content" placeholder='Type here' />
                </div>
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default AddCarousel