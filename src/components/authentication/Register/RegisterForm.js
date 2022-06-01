import { useRef, useState } from "react";

import Card from "../../UI/Card";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  // eslint-disable-next-line
  const [isEntering, setIsEntering] = useState(false);

  const emailInputRef = useRef();
  const fullNameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredLogin = emailInputRef.current.value;
    const enteredFullName = fullNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Could validate here
    props.onRegister({
      email: enteredLogin,
      fullname: enteredFullName,
      password: enteredPassword,
    });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" ref={fullNameInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Register
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default RegisterForm;
