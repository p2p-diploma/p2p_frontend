import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { logout } from "../../../lib/login_api";
import Wallet from "../../profile/Wallet";
import './LoggedNavigation.css';
import { fetchNotifications } from '../../../lib/notification_api';
const LoggedNavigaion = () => {
  const [profile, setProfile] = useState(false);
  const { sendRequest, status, error } = useHttp(logout);
  const navigate = useNavigate();

  const onProfileClick = () => {
    setProfile(true);
  }
  async function setNotifications(){
    let permission = await Notification.requestPermission();
    if(permission === 'granted') {
      fetchNotifications().then(notifications => {
        const greeting = new Notification('Hi, How are you?');
        setTimeout(() => greeting.close(), 5*1000);
      });
    }
  }

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
    <div className="row nav">
        <NavLink to="/lots/create" className="btn col-lg-3 btn-outline-primary text-light">Create lot</NavLink>
        <NavLink to="/lots" className="btn col-lg-2 btn-outline-success text-light">Lots</NavLink>
        <img onMouseDown={onProfileClick} alt="" className="img-fluid profile d-block col-lg-2"
         src="https://i.ya-webdesign.com/images/profile-icon-png-4.png" data-bs-toggle="modal" data-bs-target="#walletModal" />
         <div className="col-lg-2"></div>
        <button className="btn col-lg-3 btn-danger text-light" onClick={logoutHandler}>Logout</button>
        {profile && <Wallet />}
    </div>
  );
};

export default LoggedNavigaion;
