/**
 * Function that returns a scroll list of objects with their properties
 * @param Scroll - function that shows props of objects in a scroll component
 * @param {string} - properties of children objects
 * @returns A div with a scroll field where objects show up when searched for
 */

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'40vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;