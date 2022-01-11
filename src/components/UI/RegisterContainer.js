import React, { useState } from "react";
import InputContainer from "./InputContainer";
import classes from "./LoginRegister.module.css";

const RegisterContainer = () => {
  const [formInput, setformInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    reenterPassword: "",
  });

  const inputChangeHandler = (e) => {
    setformInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    console.log(formInput);
    e.preventDefault();
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <InputContainer
        label={"Username"}
        inputType={"text"}
        name="username"
        onChange={inputChangeHandler}
      />
      <InputContainer
        label={"First Name"}
        inputType={"text"}
        name="firstName"
        onChange={inputChangeHandler}
      />
      <InputContainer
        label={"Last Name"}
        inputType={"text"}
        name="lastName"
        onChange={inputChangeHandler}
      />
      <InputContainer
        label={"Email ID"}
        inputType={"email"}
        name="emailId"
        onChange={inputChangeHandler}
      />
      <InputContainer
        label={"Password"}
        inputType={"password"}
        name="password"
        onChange={inputChangeHandler}
      />
      <InputContainer
        label={"Re-enter Password"}
        inputType={"password"}
        name="reenterPassword"
        onChange={inputChangeHandler}
      />
      <div className={classes.formSubmit}>
        <button className={classes.formBtn}>Register</button>
      </div>
    </form>
  );
};

export default RegisterContainer;
