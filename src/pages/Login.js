import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import LoginForm from "../components/authentication/Login/LoginForm";

import useHttp from "../hooks/use-http";
import { login } from "../lib/login_api";

const Login = () => {
  const { sendRequest, status, error } = useHttp(login);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && error === null) {
      navigate("/lots");
    }

    if (status === "completed" && error !== null) {
      console.log(error);
    }
  }, [status, navigate, error]);

  const loginHandler = (loginData) => {
    sendRequest(loginData);
  };

  return <LoginForm isLoading={status === "pending"} onLogin={loginHandler} error={error} />;
};

export default Login;
