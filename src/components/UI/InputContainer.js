import React from "react";
import classes from "./LoginRegister.module.css";

const InputContainer = (props) => {
  return (
    <div className={classes.formControl}>
      <label className={classes.formLabel}>{props.label}</label>
      <input
        className={classes.formInput}
        name={props.name}
        type={props.inputType}
        onChange={props.onChange}
        required={true}
      />
    </div>
  );
};

export default InputContainer;
