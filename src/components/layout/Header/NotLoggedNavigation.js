import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const NotLoggedNavigaion = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/login"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NotLoggedNavigaion;
