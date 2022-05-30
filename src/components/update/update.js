import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { Link } from 'react-router-dom';

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

    const header = require("../../img/catyawn.jpg");

    return (
        <div className="front">
      <div className="tracker">
                <h1>{firstName} {lastName}</h1>
            </div>
            <div className="frontImg">
            <img src={header} className="headerPhoto" alt="Header" />
            </div>
            <div className="mainDiv">
            <Form className="create-form">
                <Form.Field>
                <span class="label">First Name</span>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <span class="label">Last Name</span>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <span class="label">Friendship</span>
                    <input placeholder='Friendship' value={friendship} onChange={(e) => setFriendship(e.target.value)}/>
                </Form.Field>
                <Button className="buttonUpdate" onClick={wrapperFunction} type='submit'>Update</Button>
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

export default Update;