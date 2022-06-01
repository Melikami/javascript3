/**
 * Component t o update the specific object that has been chosen. It fetches object props with useEffect and then updates them with axios and performs the update with a wrapperFunction in the button, and also has a button to go back in the menu.
 * @param navigate - variable for navigation
 * @param id - object param
 * @param setID - sets object param id
 * @param firstName - object param
 * @param setFirstName - sets object param firstName
 * @param lastName - object param
 * @param setLastName - sets object param lastName
 * @param friendship - object param
 * @param setFriendship - sets object param friendship
 * @useEffect - sets the data of the object params ID, firstName, lastName and friendship from localStorage
 * @param updateAPIData - updates the object params firstName and lastName with axios and then navigates to Friend list layout
 * @param updateAPIData1 - updates the object params friendship with axios and then navigated to Friend list layout
 * @param wrapperFunction - calls updateAPIData and updateAPIData1
 * @return - returns a heading with the objects full name and a header image and then input fields to change firstName, lastName and friendship with setFirstName, setLastName and setFriendship params as an onChange event. Also a button to call on the wrapperFunction to update the API data for the different params and also a button to go back in the menu.
 */

import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Link } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  const [id, setID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [friendship, setFriendship] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setFriendship(localStorage.getItem("Friendship"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:8000/friends/${id}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  const updateAPIData1 = () => {
    axios
      .put(`http://localhost:8003/friendships/${id}`, {
        friendship,
      })
      .then(() => {
        navigate("/read");
      });
  };

  const wrapperFunction = () => {
    updateAPIData();

    updateAPIData1();
  };

  const header = require("../../img/catyawn.jpg");

  return (
    <div className="front">
      <div className="tracker">
        <h1>
          {firstName} {lastName}
        </h1>
      </div>
      <div className="frontImg">
        <img src={header} className="headerPhoto" alt="Header" />
      </div>
      <div className="mainDiv">
        <Form className="create-form">
          <Form.Field>
            <span className="label">First Name</span>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <span className="label">Last Name</span>
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <span className="label">Friendship</span>
            <input
              placeholder="Friendship"
              value={friendship}
              onChange={(e) => setFriendship(e.target.value)}
            />
          </Form.Field>
          <Button
            className="buttonUpdate"
            onClick={wrapperFunction}
            type="submit"
          >
            Update
          </Button>
          <Link to="/read">
            <Button className="buttonUpdate">Back</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Update;
