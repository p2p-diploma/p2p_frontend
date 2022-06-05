import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header + ' row'}>
      <div className={classes.logo + ' col-md-10'}>
      <NavLink to='/'>
      <img className="img-fluid" src="https://ru.brokers.best/upload/images/2021/01/756589c78caf5bc7b8857d68839f21de.png" alt="" />
      </NavLink>
      <span className="p-5">Cryptocurrency transferring service</span>
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
