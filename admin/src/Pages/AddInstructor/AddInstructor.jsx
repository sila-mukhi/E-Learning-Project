import React, { useEffect, useState } from 'react'
import './AddInstructor.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const AddInstructor = () => {
    const url = "http://localhost:4300";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        designation: ""
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
        formData.append("name", data.name)
        formData.append("designation", data.designation)


        // for api cALL
        const response = await axios.post(`${url}/api/instructors/addInstructor`, formData)
        if (response.data.success) {
            setData({
                name: "",
                designation: ""
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
                    <p> Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' />
                </div>
                <div className="add-product-name flex-col">
                    <p>Designation</p>
                    <input onChange={onChangeHandler} value={data.designation} type="text" name="designation" placeholder='Type here' />
                </div>
              
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default AddInstructor