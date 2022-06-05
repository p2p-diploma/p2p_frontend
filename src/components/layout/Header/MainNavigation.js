import Cookies from "js-cookie";
import LoggedNavigation from "./LoggedNavigation";
import NotLoggedNavigaion from "./NotLoggedNavigation";

console.log(Cookies.get("jwt-refresh"));

const MainNavigation = () => {
  return (
    <nav className="col-md-2">
      {Cookies.get("jwt-access") && Cookies.get("jwt-refresh") ? (
        <LoggedNavigation />
      ) : (
        <NotLoggedNavigaion />
      )}
    </nav>
  );
};

export default MainNavigation;
