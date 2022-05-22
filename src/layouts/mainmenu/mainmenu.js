import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Mainmenu() {

const header = require("../../img/friends8.jpg");
    return (
        <div className="front">
            <div className="tracker">
                <h1>Friend Tracker</h1>
            </div>
            <div className="frontImg">
            <img src={header} class="headerPhoto" alt="Header" />
            </div>
      <div className="mainDiv">
        <Link exact to="/read">
            <Button>
            Friends
            </Button>
          </Link>
          <Link exact to="/mycalendar">
          <Button>
            Calendar View
            </Button>
          </Link>
          <Link exact to="/searchbar">
          <Button>
            Search Friends
            </Button>
          </Link>
          <Link exact to="/logout">
          <Button>
            Log out
            </Button>
          </Link>
      </div>
      </div>
    );
}

export default Mainmenu;