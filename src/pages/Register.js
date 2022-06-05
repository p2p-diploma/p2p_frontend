import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/authentication/Register/RegisterForm";

import useHttp from "../hooks/use-http";
import { register } from "../lib/login_api";

const Register = () => {
  const { sendRequest, status, error } = useHttp(register);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && error === null) {
      navigate("/new_wallet");
    }

    if (status === "completed" && error !== null) {
      console.log(error);
    }
  }, [status, navigate, error]);

  const registerHandler = (registerData) => {
    sendRequest(registerData);
  };

  return (
    <RegisterForm
      isLoading={status === "pending"}
      onRegister={registerHandler}
    />
  );
};

export default Register;
