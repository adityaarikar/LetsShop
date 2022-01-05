import React from "react";
import classes from "./Card.module.css";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const Card = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const btnTitle = cartItems.hasOwnProperty(props.item.id);

  const textTitle = props.item.title.substring(0, 30);
  return (
    <div className={classes.container}>
      <img
        src={props.item.image}
        alt="productImage"
        className={classes.image}
      />
      <p className={classes.title}>{textTitle}</p>
      <div className={classes.speci}>
        <p className={classes.price}>{props.item.price}$</p>
      </div>
      <CustomButton
        item={props.item}
        title={btnTitle ? "Remove from Cart" : "Add to Cart"}
      />
    </div>
  );
};

export default Card;
