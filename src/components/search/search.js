// src/components/Search.js

import React, { useState } from 'react';
import Scroll from '../scroll/scroll';
import SearchList from '../searchlist/searchlist';

function Search({ details }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    friends => {
      return (
        friends
        .firstName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        friends
        .lastName
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }
  };

  function searchList() {
    if (searchShow) {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
    }
  }

  return (
    <div className='front'>
      
      <div className="mainDiv">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
      
    </div>
  );
}

export default Search;