/**
 * Component to go into the main menu of the app
 * @return a div with a button linking into the main menu
 */

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
          
      </div>
    );
}

export default Menu;