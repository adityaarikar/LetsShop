import React, { useState } from "react";
import InputContainer from "./InputContainer";
import classes from "./LoginRegister.module.css";

const LoginContainer = () => {
  return (
    <form className={classes.container}>
      <InputContainer label={"Username"} inputType={"text"} />
      <InputContainer label={"Password"} inputType={"password"} />
      <div className={classes.formSubmit}>
        <button className={classes.formBtn}>Login</button>
      </div>
    </form>
  );
};

export default LoginContainer;
