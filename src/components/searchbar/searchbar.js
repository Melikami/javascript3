
import React from 'react';
import Search from '../search/search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Searchbar() {


  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/friends/`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);


  return (
    
    <div className="main">
      <h2 className="main-header">Add Friend</h2>
      <div>
      <Search details={APIData}/> 
    </div>
    </div>
  );
}

export default Searchbar;