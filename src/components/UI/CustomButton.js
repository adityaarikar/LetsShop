import React from "react";
import classes from "./CustomButton.module.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/CartAction";

const CustomButton = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (item, btnTitle) => {
    if (btnTitle === "Add to Cart") {
      dispatch(addToCart(item));
    } else if (btnTitle === "Remove from Cart") {
      dispatch(removeFromCart(item));
    }
  };
  return (
    <button
      className={
        props.title === "Add to Cart"
          ? classes.container
          : classes.container + " " + classes.red
      }
      onClick={() => addToCartHandler(props.item, props.title)}
    >
      <div className={classes.btnTitle}>{props.title}</div>
    </button>
  );
};

export default CustomButton;
