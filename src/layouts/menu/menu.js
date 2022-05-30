import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Menu() {
    return (
      <div className="menu">
        <Link exact to="/mainmenu">
            <Button>
            Main Menu
            </Button>
          </Link>
          {/* <Link exact to="/create">
          <Button>
            Add Friend
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
          <Link exact to="/read">
          <Button>
            Friend List
            </Button>
          </Link> */}
          {/* <Link exact to="/update">
          <Button>
            Update
            </Button>
          </Link> */}
          {/* <Link exact to="/searchbar">
          <Button>
            Search Friends
            </Button>
          </Link> */}
          {/* <Link exact to="/main">
          <Button>
            Main
            </Button>
          </Link> */}
      </div>
    );
}

export default Menu;