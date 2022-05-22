
// src/components/Scroll.js

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'40vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;