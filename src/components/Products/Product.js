import React from "react";
import classes from "./Product.module.css";
import Card from "../UI/Card";

const Product = (props) => {
  return (
    <div className={classes.container}>
      {props.products.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Product;
