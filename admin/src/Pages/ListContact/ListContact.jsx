import React, { useEffect, useState } from 'react';
import './ListContact.css';
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ListContact = () => {
    const url = "http://localhost:4300";
    const [contact, setContact] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${url}/api/contacts/listContact`);
            if (response.data.success) {
                // Filter contacts to only include verified ones
                const verifiedContacts = response.data.data.filter(contact => contact.isVerified);
                setContact(verifiedContacts);
            } else {
                toast.error("Error fetching contacts");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("An error occurred while fetching contacts.");
        }
    };


    const removeContact = async (contactId) => {
        const response = await axios.post(`${url}/api/contacts/removeContact`, { id: contactId });
        await fetchContacts();
        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error("Error removing contact");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className='list5 add5 flex-col'>
            <div className='add-course5'>
                <span>All Verified Contacts List</span>
                <Link to="/addContact"><button className='a'>Add Contact</button></Link>
            </div>
            <div className="list-table5">
                <div className="list-table-format5 title">
                    <b>Name</b>
                    <b>Email</b>
                    <b>Subject</b>
                    <b>Message</b>
                    <b>Action</b>
                </div>
                {contact.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format5'>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.subject}</p>
                            <p>{item.message}</p>
                            <p onClick={() => removeContact(item._id)} className='cursor'>x</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListContact;
