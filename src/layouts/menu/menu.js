import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Menu() {
    return (
      <div className="menu">
        <Link exact to="/">
            <Button>
            Menu
            </Button>
          </Link>
          <Link exact to="/create">
          <Button>
            Create
            </Button>
          </Link>
          <Link exact to="/mycalendar">
          <Button>
            Calendar
            </Button>
          </Link>
          <Link exact to="/read">
          <Button>
            Read
            </Button>
          </Link>
          <Link exact to="/update">
          <Button>
            Update
            </Button>
          </Link>
          <Link exact to="/searchbar">
          <Button>
            Searchbar
            </Button>
          </Link>
          <Link exact to="/main">
          <Button>
            Main
            </Button>
          </Link>
      </div>
    );
}

export default Menu;