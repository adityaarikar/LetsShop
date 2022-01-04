import React from "react";
import classes from "./Card.module.css";
import CustomButton from "./CustomButton";

const Card = (props) => {
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
      <CustomButton item={props.item} />
    </div>
  );
};

export default Card;
