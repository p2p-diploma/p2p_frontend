import Cookies from "js-cookie";
import LoggedNavigation from "./LoggedNavigation";
import NotLoggedNavigaion from "./NotLoggedNavigation";

const MainNavigation = () => {
  return (
      Cookies.get("jwt-access") && Cookies.get("jwt-refresh") ? (
        <nav className="col-md-4">
        <LoggedNavigation />
        </nav>
      ) : (
        <nav className="col-md-2">
        <NotLoggedNavigaion />
      </nav>
      )
  );
};

export default MainNavigation;
