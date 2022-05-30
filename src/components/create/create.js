import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [friendship, setFriendship] = useState('');
    
    const key = {};
    key.id = v4()

    
    
    const postData = () => {
        axios.post(`http://localhost:8000/friends/`, {
            firstName,
            lastName,
            key
        }).then(() => {
            navigate('/read')
        })
    }

    const postData1 = () => {
        axios.post(`http://localhost:8003/friendships/`, {
            friendship,
            key
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


    const header = require("../../img/friendprofile.jpg");

    return (
        <div className="front">
      <div className="tracker">
                <h1>Add Friend</h1>
            </div>
            <img src={header} class="headerPhoto" alt="Header" />
        <div className="mainDiv">
            <Form className="create-form">
                <Form.Field>
                <span class="label">First Name</span>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <span class="label">Last Name</span>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <span class="label">Friendship</span>
                    <input placeholder='Friendship' onChange={(e) => setFriendship(e.target.value)}/>
                </Form.Field>
                <Button className="buttonUpdate" onClick={ wrapperFunction } type='submit'>Create</Button>
                <Link exact to="/read">
            <Button className="buttonUpdate">
            Back
            </Button>
          </Link>
            </Form>
        </div>
        </div>
    )
}


export default Create;