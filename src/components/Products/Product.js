import React from "react";
import classes from "./Product.module.css";
import Card from "../UI/Card";

const Product = (props) => {
  return (
    <div className={classes.mainContainer}>
      <h1>{props.title}</h1>
      <div className={classes.container}>
        {props.products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
