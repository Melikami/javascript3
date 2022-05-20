import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [friendship, setFriendship] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setFriendship(localStorage.getItem('Friendship'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8000/friends/${id}`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/read')
        })
    }

    const updateAPIData1 = () => {
        axios.put(`http://localhost:8003/friendships/${id}`, {
            friendship
        }).then(() => {
            navigate('/read')
        })
    }

    const wrapperFunction = () => {
        //do something
        updateAPIData();
        //do something
        updateAPIData1();
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Friendship</label>
                    <input placeholder='Friendship' value={friendship} onChange={(e) => setFriendship(e.target.value)}/>
                </Form.Field>
                <Button onClick={wrapperFunction} type='submit'>Update</Button>
            </Form>
        </div>
    )
}

export default Update;