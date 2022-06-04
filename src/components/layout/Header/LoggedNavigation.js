import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { logout } from "../../../lib/login_api";

import classes from "./MainNavigation.module.css";

const LoggedNavigaion = () => {
  const { sendRequest, status, error } = useHttp(logout);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && error === null) {
      navigate("/lots");
    }

    if (status === "completed" && error !== null) {
      console.log(error);
    }
  }, [status, navigate]);

  const logoutHandler = () => {
    sendRequest();
  };

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
        <a
          className={(navData) => (navData.isActive ? classes.active : "")}
          onClick={logoutHandler}
        >
          Logout
        </a>
      </li>
    </ul>
  );
};

export default LoggedNavigaion;
