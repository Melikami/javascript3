/**
 * Function that imports Card and maps and filters the objects and returns them filtered
 * @param {string} filtered - json database "friends" is mapped with object id
 * @param {string} friends - json database objects
 * @returns Objects that has been mapped and filtered with id as a SearchList
 */

import React from "react";
import Card from "../card/card";

function SearchList({ filteredPersons, handleSelectFriend }) {
  const filtered = filteredPersons.map((friends) => (
    <Card key={friends.id} friends={friends} onClick={() => {
      handleSelectFriend(friends);
    }} />
  ));
  return (
    <div className="">
      <div className="searchDiv">{filtered}</div>
    </div>
  );
}

export default SearchList;
