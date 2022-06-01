import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const LoggedNavigaion = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/lots"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Lots
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-lot"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          New Quote
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/logout"
          className={(navData) => (navData.isActive ? classes.active : "")}
        >
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedNavigaion;
