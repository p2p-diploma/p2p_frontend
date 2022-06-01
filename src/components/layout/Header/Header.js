import classes from "./Header.module.css";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes!</div>
      <MainNavigation />
    </header>
  );
};

export default Header;
