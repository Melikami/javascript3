
// src/components/SearchList.js

import React from 'react';
import Card from '../card/card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(friends =>  <Card key={friends.id} friends={friends} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;