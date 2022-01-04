import React, { useState } from "react";
import classes from "./IncrementDecrement.module.css";

const IncrementDecrement = () => {
  const [counter, setCounter] = useState(1);
  const [plusDisable, setPlusDisable] = useState(false);
  const [minusDisable, setMinusDisable] = useState(false);

  // let disabled = false;

  const incrementCounter = () => {
    if (counter === 5) {
      setPlusDisable(true);
    }
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) {
      setMinusDisable(true);
    }
    setCounter(counter - 1);
  };

  return (
    <div className={classes.container}>
      <button className={classes.plus} onClick={incrementCounter}>
        +
      </button>
      <p disabled={plusDisable} className={classes.quantity}>
        {counter}
      </p>
      <button
        disabled={minusDisable}
        className={classes.minus}
        onClick={decrementCounter}
      >
        -
      </button>
    </div>
  );
};

export default IncrementDecrement;
