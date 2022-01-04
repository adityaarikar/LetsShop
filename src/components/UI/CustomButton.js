import React from "react";
import classes from "./CustomButton.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/CartAction";

const CustomButton = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <button
      className={classes.container}
      onClick={() => addToCartHandler(props.item)}
    >
      <div className={classes.btnTitle}>Add to Cart</div>
    </button>
  );
};

export default CustomButton;
