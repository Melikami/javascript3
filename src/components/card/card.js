import React from 'react';

/**
 * Function that returns a card with the object from the json's database "friends", firstname and lastname
 * @returns Attributes of objects (firstName and lastName) from database are returned
 */

function Card({friends, onClick}) {
  return(
    <div onClick={onClick} style={{'cursor': onClick ? 'pointer' : 'unset'}}>
      <div>
        <h3>{friends.firstName} {friends.lastName}</h3>
      </div>
    </div>
  );
}

export default Card;