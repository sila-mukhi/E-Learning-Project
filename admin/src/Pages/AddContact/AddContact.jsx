import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import './AddContact.css';

const AddContact = () => {
    const url = "http://localhost:4300";
    
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();  // Prevent page reload on form submit

        try {
            const response = await axios.post(`${url}/api/contacts/addContact`, data);
            if (response.data.success) {
                setData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error submitting form. Please try again.");
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className='add'>
            <form className="flex-col" onSubmit={onSubmitHandler} >

                <div className="add-product-name flex-col">
                    <p>Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Email</p>
                    <input onChange={onChangeHandler} value={data.email} type="email" name="email" placeholder='Type here' required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Subject</p>
                    <input onChange={onChangeHandler} value={data.subject} type="text" name="subject" placeholder='Type here' required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Message</p>
                    <input onChange={onChangeHandler} value={data.message} type="text" name="message" placeholder='Type here' required />
                </div>

                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    );
}

export default AddContact;
