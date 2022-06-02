/**
 * Function to create objects and put the objects and their properties into arrays and json database "friends" and "friendships"
 * @param navigate - variable for navigation
 * @param firstName - object prop
 * @param setFirstName - sets the props of firstName
 * @param lastName - object prop
 * @param setLastName - sets the props of lastName
 * @param friendship - object prop
 * @param setFriendship - sets the props of friendship
 * @param key - sets a unique foreign key id to the objects in both the "friends" and the "friendship" databases to match them together
 * @param postData - posts object props into the json database "friends" and redirects to Friend list layout
 * @param postData1 - posts object props into the json database "friendship" and redirects to Friend list layout
 * @param wrapperFunction - calls the functuons of postData and postData1
 * @return - divs with headline, header image,  and a table with separate columns for firstName, lastName and friendship plus two buttons, one for activating the wrapperFunction and one to go back
 */

import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const header = require("../../img/catyawn.jpg");

function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + " " + lastName;
    const [friendship, setFriendship] = useState('');
    
    const foreignKey = {};
    foreignKey.id = v4()
    
    const postData = () => {
        axios.post(`http://localhost:8000/friends/`, {
            firstName,
            lastName,
            fullName,
            foreignKey, 
        }).then(() => {
            navigate('/read')
        })
    }

    const postData1 = () => {
        axios.post(`http://localhost:8003/friendships/`, {
            friendship,
            foreignKey
        }).then(() => {
            navigate('/read')
        })
    }
    
    const wrapperFunction = () => {

        postData();

        postData1();
        
    }


    return (
        <div className="front">
      <div className="tracker">
                <h1>Add Friend</h1>
            </div>
            <img src={header} className="headerPhoto" alt="Header" />
        <div className="mainDiv">
            <Form className="create-form">
                <Form.Field>
                    <input placeholder='Enter First Name' className="input" onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Last Name' className="input" onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Friendship' className="input" onChange={(e) => setFriendship(e.target.value)}/>
                </Form.Field>
                <Button className="buttonUpdate" onClick={ wrapperFunction } type='submit'>Create</Button>
                <Link to="/read">
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