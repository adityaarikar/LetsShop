import React, { useState } from "react";
import InputContainer from "./InputContainer";
import classes from "./LoginRegister.module.css";

const LoginContainer = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    console.log(formInput);
    e.preventDefault();
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <InputContainer
        label="Username"
        name="username"
        inputType="text"
        value={formInput}
        onChange={inputChangeHandler}
      />
      <InputContainer
        label="Password"
        name="password"
        inputType="password"
        value={formInput}
        onChange={inputChangeHandler}
      />
      <div className={classes.formSubmit}>
        <button className={classes.formBtn}>Login</button>
      </div>
    </form>
  );
};

export default LoginContainer;
