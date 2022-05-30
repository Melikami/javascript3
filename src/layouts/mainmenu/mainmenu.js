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
        <Link exact to="/read">
            <Button>
            Friend List
            </Button>
          </Link>
          <Link exact to="/mycalendar">
          <Button>
            Calendar API
            </Button>
          </Link>
          <Link exact to="/caladdevent">
        <Button>
            Add Event Calendar
          </Button>
          </Link>
          <Link exact to="/searchbar">
          <Button>
            Search Friends
            </Button>
          </Link>
          {/* <Link exact to="/logout">
          <Button>
            Log out
            </Button>
          </Link> */}
      </div>
      </div>
    );
}

export default Mainmenu;