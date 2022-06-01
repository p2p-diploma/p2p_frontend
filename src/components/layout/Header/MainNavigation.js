import Cookies from "js-cookie";

import classes from "./MainNavigation.module.css";
import LoggedNavigaion from "./LoggedNavigation";
import NotLoggedNavigaion from "./NotLoggedNavigation";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      {!Cookies.get("jwt-access") && !Cookies.get("jwt-refresh") ? (
        <LoggedNavigaion />
      ) : (
        <NotLoggedNavigaion />
      )}
    </nav>
  );
};

export default MainNavigation;
