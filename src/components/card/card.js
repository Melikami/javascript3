
// src/components/Card.js

import React from 'react';

function Card({friends}) {
  return(
    // <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    //   <img className="br-100 h3 w3 dib" alt={friends.firstName} src={process.env.PUBLIC_URL + friends.imgPath} />
      <div>
        <div>
        <h2>{friends.firstName}</h2>
        <p>{friends.lastName}</p>
      </div>
    </div>
  );
}

export default Card;