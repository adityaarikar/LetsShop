import React from "react";
import classes from "./LoginRegister.module.css";

const InputContainer = (props) => {
  return (
    <div className={classes.formControl}>
      <label className={classes.formLabel}>{props.label}</label>
      <input className={classes.formInput} type={props.inputType} />
    </div>
  );
};

export default InputContainer;
