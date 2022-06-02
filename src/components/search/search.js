/** Component that initialise value of searchField state with useState(""). Then filtering the details list received from the parent. The filter check for firstName and lastName and convert them to lowercase. Includes function check if any letters are included in the details. If it's included, the details are sent into filteredPersons.
 * @param searchField - set with useState(""), for the object searching
 * @param setSearchField - sets the value of the SearchField
 * @param searchShow - Searched object shows up here if matched
 * @param setSearchShow - sets the boolean status true or false to show the object info or not in the searchField
 * @param filteredPersons - filters through the details of database "friends" to find matching spelled objects
 * @return - "friends" database object's fullName filtered through for matching spelling and put toLowerCase
 * @param handleChange - sets the SearchField to show objects if matching in spelling, and to not show object if not matching
 * @param searchList - if searchShow is set to true then the matching object by spelling is showed in the SearchList in the Scroll component.
 * @return - a div with handleChange deciding if objects from SearchList is being showed or not
 */

import React, { useState } from "react";
import Scroll from "../scroll/scroll";
import SearchList from "../searchlist/searchlist";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((friends) => {
    return (
      friends.fullName.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
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
    <div>
      <div className="searchDiv">
        <input
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </div>
  );
}

export default Search;
