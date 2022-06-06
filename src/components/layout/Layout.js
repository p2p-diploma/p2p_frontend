import classes from "./Layout.module.css";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
