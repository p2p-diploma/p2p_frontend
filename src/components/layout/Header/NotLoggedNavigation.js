import { NavLink } from "react-router-dom";

const NotLoggedNavigaion = () => {
  return (
    <div className="row">
    <NavLink to="/login" className="btn col-lg-5 btn-outline-primary text-light">Sign in</NavLink>
    <div className="col-lg-2"></div>
    <NavLink to="/register" className="btn col-lg-5 btn-outline-warning text-light">Sign up</NavLink>
    </div>
  );
};

export default NotLoggedNavigaion;
