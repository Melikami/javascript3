import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link exact to="/">
            Home
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
    </ul>
  );
};

export default Nav;
