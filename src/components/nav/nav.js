import { Link } from "react-router-dom";
import React  from 'react';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link exact to="/mainmenu">
            Main menu
          </Link>
      </li>
      <li>
        <Link exact to="/caladdevent">
            Add Event Calendar
          </Link>
      </li>
      <li>
        <Link exact to="/">
            Home
          </Link>
      </li>
      <li>
        <Link exact to="/mycalendar">
            Calendar
          </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/create",
          }}
        >
          Create
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/read",
          }}
        >
          Read
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/update",
          }}
        >
          Update
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/searchbar",
          }}
        >
          Searchbar
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/main",
          }}
        >
          Main
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
