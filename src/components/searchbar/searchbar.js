/**
 * Component which shows a searchbar where you can search for objects by matching their firstName or lastName
 * @param Searchbar - Fetches "friends" database with axios and puts the props in APIData array
 * @param APIData - array to put json database "friends" objects in
 * @param setAPIData - sets the props data of APIData
 * @return A couple of divs with a heading, header image and a search field for the data in APIData and a button to choose to update chosen object
 * 
 */

import React from "react";
import Search from "../search/search";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Searchbar() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/friends/`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const header = require("../../img/texting.jpg");
  return (
    <div className="front">
      <div className="tracker">
        <h1>Search Friends</h1>
      </div>
      <div className="frontImg">
        <img src={header} className="headerPhoto" alt="Header" />
      </div>
      <div className="mainDiv">
        <Search details={APIData} />
        <div className="buttonDiv">
        <Link to="/mainmenu">
          <Button className="buttonUpdate">Back</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
