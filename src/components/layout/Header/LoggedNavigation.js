import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { logout } from "../../../lib/login_api";

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
  }, [status, navigate, error]);

  const logoutHandler = () => {
    sendRequest().then(r => window.location.reload());
  };

  return (
    <div className="row">
        <NavLink to="/lots" className="btn col-lg-5 btn-outline-primary text-light">Lots</NavLink>
    <div className="col-lg-2"></div>
        <button className="btn col-lg-5 btn-danger text-light" onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default LoggedNavigaion;
