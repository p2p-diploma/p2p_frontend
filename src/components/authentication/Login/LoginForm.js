import { useRef, useState } from "react";

import Card from "../../UI/Card";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  // eslint-disable-next-line
  const [isEntering, setIsEntering] = useState(false);

  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredLogin = loginInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Could validate here
    props.onLogin({ login: enteredLogin, password: enteredPassword });
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
            <label htmlFor="login">Login</label>
            <input type="text" id="login" ref={loginInputRef} required />
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
              Login
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default LoginForm;
