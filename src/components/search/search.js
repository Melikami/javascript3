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
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;