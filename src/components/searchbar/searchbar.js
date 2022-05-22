
import React from 'react';
import Search from '../search/search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Searchbar() {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/friends/`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

const header = require("../../img/friends3.jpg");
    return (
        <div className="front">
            <div className="tracker">
                <h1>Search Friends</h1>
            </div>
            <div className="frontImg">
            <img src={header} class="headerPhoto" alt="Header" />
            </div>
      <div className="mainDiv">
      <Search details={APIData}/> 
      <Link exact to="/mainmenu">
            <Button className="buttonUpdate">
            Back
            </Button>
          </Link>
      </div>
      </div>
    );
    }

    export default Searchbar;