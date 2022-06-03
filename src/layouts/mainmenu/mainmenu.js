/**
 * A component with the main menu of the app with buttons to visit the different sites
 * @return - divs with a heading and a header image and three buttons to the different components to see the friend list, the API calendar and to search through the friend list.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Mainmenu() {
  const header = require("../../img/chatting.jpg");
  return (
    <div className="front">
      <div className="tracker">
        <h1>Friend Tracker</h1>
      </div>
      <div className="frontImg">
        <img src={header} className="headerPhoto" alt="Header" />
      </div>
      <div className="mainDiv">
        <Link to="/read">
          <Button>Friend List</Button>
        </Link>
        <Link to="/modal">
          <Button>Modal</Button>
        </Link>
        <Link to="/mycalendar">
          <Button>Calendar API</Button>
        </Link>
        <Link to="/searchbar">
          <Button>Search Friends</Button>
        </Link>
      </div>
    </div>
  );
}

export default Mainmenu;
