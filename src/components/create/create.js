import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [friendship, setFriendship] = useState('');
    
    const postData = () => {
        axios.post(`http://localhost:8000/friends/`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/read')
        })
    }

    const postData1 = () => {
        axios.post(`http://localhost:8003/friendships/`, {
            friendship
        }).then(() => {
            navigate('/read')
        })
    }

    const wrapperFunction = () => {
        //do something
        postData();
        //do something
        postData1();
    }
    
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Friendship</label>
                    <input placeholder='Friendship' onChange={(e) => setFriendship(e.target.value)}/>
                </Form.Field>
                <Button onClick={wrapperFunction} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}


export default Create;