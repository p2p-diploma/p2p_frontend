import Cookies from "js-cookie";

import classes from "./MainNavigation.module.css";
import LoggedNavigation from "./LoggedNavigation";
import NotLoggedNavigaion from "./NotLoggedNavigation";

console.log(Cookies.get("jwt-refresh"));

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      {Cookies.get("jwt-access") && Cookies.get("jwt-refresh") ? (
        <LoggedNavigation />
      ) : (
        <NotLoggedNavigaion />
      )}
    </nav>
  );
};

export default MainNavigation;
