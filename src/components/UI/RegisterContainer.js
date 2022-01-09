import React from "react";
import InputContainer from "./InputContainer";
import classes from "./LoginRegister.module.css";

const RegisterContainer = () => {
  return (
    <form className={classes.container}>
      <InputContainer label={"Username"} inputType={"text"} />
      <InputContainer label={"First Name"} inputType={"text"} />
      <InputContainer label={"Last Name"} inputType={"text"} />
      <InputContainer label={"Email ID"} inputType={"email"} />
      <InputContainer label={"Password"} inputType={"password"} />
      <InputContainer label={"Re-enter Password"} inputType={"password"} />
      <div className={classes.formSubmit}>
        <button className={classes.formBtn}>Register</button>
      </div>
    </form>
  );
};

export default RegisterContainer;
